/**
 * Database API
 *
 * Provides the same interface as lib/database.ts but queries Vercel Postgres (Neon)
 * All queries are optimized for Server Components.
 *
 * Usage:
 *   import { database } from "@/lib/db-api";
 *   const gods = await database.getAllGods();
 */

import { sql } from "./db";
import type { God, Hero, Location, Myth, Creature } from "./types";

// Helper to convert database snake_case to TypeScript camelCase
const toCamelCase = (str: string): string => {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
};

const convertFromDbFormat = <T>(obj: any): T => {
  const converted: any = {};
  for (const [key, value] of Object.entries(obj)) {
    converted[toCamelCase(key)] = value;
  }
  return converted as T;
};

// Database utility functions
export const database = {
  // ============================================
  // GODS
  // ============================================
  getAllGods: async (): Promise<God[]> => {
    const result = await sql`SELECT * FROM gods ORDER BY name`;
    return result.map(convertFromDbFormat<God>);
  },

  getGodById: async (id: string): Promise<God | null> => {
    const result = await sql`SELECT * FROM gods WHERE id = ${id}`;
    return result.length > 0 ? convertFromDbFormat<God>(result[0]) : null;
  },

  getGodsByDomain: async (domain: string): Promise<God[]> => {
    const result = await sql`
      SELECT * FROM gods
      WHERE ${domain} = ANY(domain)
      ORDER BY name
    `;
    return result.map(convertFromDbFormat<God>);
  },

  searchGods: async (query: string): Promise<God[]> => {
    const searchTerm = `%${query}%`;
    const result = await sql`
      SELECT * FROM gods
      WHERE name ILIKE ${searchTerm}
         OR title ILIKE ${searchTerm}
         OR description ILIKE ${searchTerm}
      ORDER BY name
    `;
    return result.map(convertFromDbFormat<God>);
  },

  // ============================================
  // HEROES
  // ============================================
  getAllHeroes: async (): Promise<Hero[]> => {
    const result = await sql`SELECT * FROM heroes ORDER BY name`;
    return result.map(convertFromDbFormat<Hero>);
  },

  getHeroById: async (id: string): Promise<Hero | null> => {
    const result = await sql`SELECT * FROM heroes WHERE id = ${id}`;
    return result.length > 0 ? convertFromDbFormat<Hero>(result[0]) : null;
  },

  getDemigods: async (): Promise<Hero[]> => {
    const result = await sql`
      SELECT * FROM heroes
      WHERE (parentage->>'divine')::boolean = true
      ORDER BY name
    `;
    return result.map(convertFromDbFormat<Hero>);
  },

  searchHeroes: async (query: string): Promise<Hero[]> => {
    const searchTerm = `%${query}%`;
    const result = await sql`
      SELECT * FROM heroes
      WHERE name ILIKE ${searchTerm}
         OR title ILIKE ${searchTerm}
         OR description ILIKE ${searchTerm}
      ORDER BY name
    `;
    return result.map(convertFromDbFormat<Hero>);
  },

  // ============================================
  // LOCATIONS
  // ============================================
  getAllLocations: async (): Promise<Location[]> => {
    const result = await sql`SELECT * FROM locations ORDER BY name`;
    return result.map(convertFromDbFormat<Location>);
  },

  getLocationById: async (id: string): Promise<Location | null> => {
    const result = await sql`SELECT * FROM locations WHERE id = ${id}`;
    return result.length > 0 ? convertFromDbFormat<Location>(result[0]) : null;
  },

  getLocationsByType: async (type: Location["type"]): Promise<Location[]> => {
    const result = await sql`
      SELECT * FROM locations
      WHERE type = ${type}
      ORDER BY name
    `;
    return result.map(convertFromDbFormat<Location>);
  },

  searchLocations: async (query: string): Promise<Location[]> => {
    const searchTerm = `%${query}%`;
    const result = await sql`
      SELECT * FROM locations
      WHERE name ILIKE ${searchTerm}
         OR description ILIKE ${searchTerm}
      ORDER BY name
    `;
    return result.map(convertFromDbFormat<Location>);
  },

  // ============================================
  // MYTHS
  // ============================================
  getAllMyths: async (): Promise<Myth[]> => {
    const result = await sql`SELECT * FROM myths ORDER BY title`;
    return result.map(convertFromDbFormat<Myth>);
  },

  getMythById: async (id: string): Promise<Myth | null> => {
    const result = await sql`SELECT * FROM myths WHERE id = ${id}`;
    return result.length > 0 ? convertFromDbFormat<Myth>(result[0]) : null;
  },

  getMythsByCategory: async (category: Myth["category"]): Promise<Myth[]> => {
    const result = await sql`
      SELECT * FROM myths
      WHERE category = ${category}
      ORDER BY title
    `;
    return result.map(convertFromDbFormat<Myth>);
  },

  getMythsByCharacter: async (characterName: string): Promise<Myth[]> => {
    const result = await sql`
      SELECT * FROM myths
      WHERE ${characterName} = ANY(characters)
      ORDER BY title
    `;
    return result.map(convertFromDbFormat<Myth>);
  },

  searchMyths: async (query: string): Promise<Myth[]> => {
    const searchTerm = `%${query}%`;
    const result = await sql`
      SELECT * FROM myths
      WHERE title ILIKE ${searchTerm}
         OR summary ILIKE ${searchTerm}
         OR description ILIKE ${searchTerm}
      ORDER BY title
    `;
    return result.map(convertFromDbFormat<Myth>);
  },

  // ============================================
  // CREATURES
  // ============================================
  getAllCreatures: async (): Promise<Creature[]> => {
    const result = await sql`SELECT * FROM creatures ORDER BY name`;
    return result.map(convertFromDbFormat<Creature>);
  },

  getCreatureById: async (id: string): Promise<Creature | null> => {
    const result = await sql`SELECT * FROM creatures WHERE id = ${id}`;
    return result.length > 0 ? convertFromDbFormat<Creature>(result[0]) : null;
  },

  getCreaturesByType: async (type: string): Promise<Creature[]> => {
    const searchTerm = `%${type}%`;
    const result = await sql`
      SELECT * FROM creatures
      WHERE type ILIKE ${searchTerm}
      ORDER BY name
    `;
    return result.map(convertFromDbFormat<Creature>);
  },

  searchCreatures: async (query: string): Promise<Creature[]> => {
    const searchTerm = `%${query}%`;
    const result = await sql`
      SELECT * FROM creatures
      WHERE name ILIKE ${searchTerm}
         OR type ILIKE ${searchTerm}
         OR description ILIKE ${searchTerm}
      ORDER BY name
    `;
    return result.map(convertFromDbFormat<Creature>);
  },

  // ============================================
  // CROSS-CATEGORY OPERATIONS
  // ============================================
  searchAll: async (query: string) => {
    const [gods, heroes, locations, myths, creatures] = await Promise.all([
      database.searchGods(query),
      database.searchHeroes(query),
      database.searchLocations(query),
      database.searchMyths(query),
      database.searchCreatures(query),
    ]);

    return { gods, heroes, locations, myths, creatures };
  },

  getRelatedContent: async (entityId: string) => {
    // Try to find the entity in each table
    const [god, hero, location, creature] = await Promise.all([
      database.getGodById(entityId),
      database.getHeroById(entityId),
      database.getLocationById(entityId),
      database.getCreatureById(entityId),
    ]);

    if (god) {
      const [myths, locations] = await Promise.all([
        database.getMythsByCharacter(god.name),
        (async () => {
          const allLocations = await database.getAllLocations();
          return allLocations.filter((loc) =>
            loc.associatedDeities.some((deity) => deity.toLowerCase() === god.name.toLowerCase())
          );
        })(),
      ]);

      return { myths, locations };
    }

    if (hero) {
      const myths = await database.getMythsByCharacter(hero.name);
      return { myths };
    }

    if (location) {
      const [gods, myths] = await Promise.all([
        (async () => {
          const allGods = await database.getAllGods();
          return location.associatedDeities
            .map((name) => allGods.find((g) => g.name.toLowerCase() === name.toLowerCase()))
            .filter((g): g is God => g !== undefined);
        })(),
        (async () => {
          const allMyths = await database.getAllMyths();
          return allMyths.filter((myth) =>
            myth.locations.some((loc) => loc.toLowerCase() === location.name.toLowerCase())
          );
        })(),
      ]);

      return { gods, myths };
    }

    if (creature) {
      const allMyths = await database.getAllMyths();
      const myths = allMyths.filter((myth) =>
        myth.characters.some((char) => char.toLowerCase() === creature.name.toLowerCase())
      );

      return { myths };
    }

    return null;
  },

  // Statistics
  getStats: async () => {
    const [godsCount, heroesCount, locationsCount, mythsCount, creaturesCount] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM gods`,
      sql`SELECT COUNT(*) as count FROM heroes`,
      sql`SELECT COUNT(*) as count FROM locations`,
      sql`SELECT COUNT(*) as count FROM myths`,
      sql`SELECT COUNT(*) as count FROM creatures`,
    ]);

    const totalGods = Number(godsCount[0].count);
    const totalHeroes = Number(heroesCount[0].count);
    const totalLocations = Number(locationsCount[0].count);
    const totalMyths = Number(mythsCount[0].count);
    const totalCreatures = Number(creaturesCount[0].count);

    return {
      totalGods,
      totalHeroes,
      totalLocations,
      totalMyths,
      totalCreatures,
      totalEntities: totalGods + totalHeroes + totalLocations + totalMyths + totalCreatures,
    };
  },
};

// Type guards (same as original)
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
