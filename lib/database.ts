import { gods, heroes, locations, myths, creatures } from "./data";
import type { God, Hero, Location, Myth, Creature } from "./types";

// Database utility functions
export const database = {
  // Gods
  getAllGods: (): God[] => gods,
  getGodById: (id: string): God | undefined => gods.find((god) => god.id === id),
  getGodsByDomain: (domain: string): God[] =>
    gods.filter((god) => god.domain.some((d) => d.toLowerCase().includes(domain.toLowerCase()))),
  searchGods: (query: string): God[] => {
    const lowerQuery = query.toLowerCase();
    return gods.filter(
      (god) =>
        god.name.toLowerCase().includes(lowerQuery) ||
        god.title.toLowerCase().includes(lowerQuery) ||
        god.description.toLowerCase().includes(lowerQuery)
    );
  },

  // Heroes
  getAllHeroes: (): Hero[] => heroes,
  getHeroById: (id: string): Hero | undefined => heroes.find((hero) => hero.id === id),
  getDemigods: (): Hero[] => heroes.filter((hero) => hero.parentage.divine),
  searchHeroes: (query: string): Hero[] => {
    const lowerQuery = query.toLowerCase();
    return heroes.filter(
      (hero) =>
        hero.name.toLowerCase().includes(lowerQuery) ||
        hero.title.toLowerCase().includes(lowerQuery) ||
        hero.description.toLowerCase().includes(lowerQuery)
    );
  },

  // Locations
  getAllLocations: (): Location[] => locations,
  getLocationById: (id: string): Location | undefined =>
    locations.find((location) => location.id === id),
  getLocationsByType: (type: Location["type"]): Location[] =>
    locations.filter((location) => location.type === type),
  searchLocations: (query: string): Location[] => {
    const lowerQuery = query.toLowerCase();
    return locations.filter(
      (location) =>
        location.name.toLowerCase().includes(lowerQuery) ||
        location.description.toLowerCase().includes(lowerQuery)
    );
  },

  // Myths
  getAllMyths: (): Myth[] => myths,
  getMythById: (id: string): Myth | undefined => myths.find((myth) => myth.id === id),
  getMythsByCategory: (category: Myth["category"]): Myth[] =>
    myths.filter((myth) => myth.category === category),
  getMythsByCharacter: (characterName: string): Myth[] =>
    myths.filter((myth) =>
      myth.characters.some((char) => char.toLowerCase().includes(characterName.toLowerCase()))
    ),
  searchMyths: (query: string): Myth[] => {
    const lowerQuery = query.toLowerCase();
    return myths.filter(
      (myth) =>
        myth.title.toLowerCase().includes(lowerQuery) ||
        myth.summary.toLowerCase().includes(lowerQuery) ||
        myth.description.toLowerCase().includes(lowerQuery)
    );
  },

  // Creatures
  getAllCreatures: (): Creature[] => creatures,
  getCreatureById: (id: string): Creature | undefined =>
    creatures.find((creature) => creature.id === id),
  getCreaturesByType: (type: string): Creature[] =>
    creatures.filter((creature) => creature.type.toLowerCase().includes(type.toLowerCase())),
  searchCreatures: (query: string): Creature[] => {
    const lowerQuery = query.toLowerCase();
    return creatures.filter(
      (creature) =>
        creature.name.toLowerCase().includes(lowerQuery) ||
        creature.type.toLowerCase().includes(lowerQuery) ||
        creature.description.toLowerCase().includes(lowerQuery)
    );
  },

  // Cross-category search
  searchAll: (query: string) => ({
    gods: database.searchGods(query),
    heroes: database.searchHeroes(query),
    locations: database.searchLocations(query),
    myths: database.searchMyths(query),
    creatures: database.searchCreatures(query),
  }),

  // Get related content
  getRelatedContent: (entityId: string) => {
    // Find the entity type
    const god = database.getGodById(entityId);
    const hero = database.getHeroById(entityId);
    const location = database.getLocationById(entityId);
    const creature = database.getCreatureById(entityId);

    if (god) {
      return {
        myths: database.getMythsByCharacter(god.name),
        locations: locations.filter((loc) =>
          loc.associatedDeities.some((deity) => deity.toLowerCase() === god.name.toLowerCase())
        ),
      };
    }

    if (hero) {
      return {
        myths: database.getMythsByCharacter(hero.name),
      };
    }

    if (location) {
      return {
        gods: location.associatedDeities
          .map((name) => gods.find((g) => g.name.toLowerCase() === name.toLowerCase()))
          .filter((g): g is God => g !== undefined),
        myths: myths.filter((myth) =>
          myth.locations.some((loc) => loc.toLowerCase() === location.name.toLowerCase())
        ),
      };
    }

    if (creature) {
      return {
        myths: myths.filter((myth) =>
          myth.characters.some((char) => char.toLowerCase() === creature.name.toLowerCase())
        ),
      };
    }

    return null;
  },

  // Statistics
  getStats: () => ({
    totalGods: gods.length,
    totalHeroes: heroes.length,
    totalLocations: locations.length,
    totalMyths: myths.length,
    totalCreatures: creatures.length,
    totalEntities: gods.length + heroes.length + locations.length + myths.length + creatures.length,
  }),
};

// Type guard functions
export const isGod = (entity: unknown): entity is God => {
  return (entity as God).domain !== undefined;
};

export const isHero = (entity: unknown): entity is Hero => {
  return (entity as Hero).famousFor !== undefined;
};

export const isLocation = (entity: unknown): entity is Location => {
  return (entity as Location).type !== undefined && (entity as Location).significance !== undefined;
};

export const isMythStory = (entity: unknown): entity is Myth => {
  return (entity as Myth).category !== undefined && (entity as Myth).summary !== undefined;
};

export const isCreature = (entity: unknown): entity is Creature => {
  return (entity as Creature).abilities !== undefined;
};
