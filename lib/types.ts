export interface God {
  id: string;
  name: string;
  greekName: string;
  romanName: string;
  title: string;
  domain: string[];
  symbols: string[];
  parentage: {
    father?: string;
    mother?: string;
  };
  residence: string;
  description: string;
  imageUrl?: string;
}

export interface Hero {
  id: string;
  name: string;
  title: string;
  parentage: {
    father?: string;
    mother?: string;
    divine: boolean;
  };
  famousFor: string[];
  weapons: string[];
  companions: string[];
  fate: string;
  description: string;
  imageUrl?: string;
}

export interface Location {
  id: string;
  name: string;
  type: "mountain" | "underworld" | "city" | "island" | "temple" | "realm";
  region?: string;
  significance: string;
  associatedDeities: string[];
  description: string;
  imageUrl?: string;
}

export interface Myth {
  id: string;
  title: string;
  category: "creation" | "heroic" | "divine" | "tragedy" | "war" | "love";
  characters: string[];
  locations: string[];
  summary: string;
  moralLesson?: string;
  description: string;
}

export interface Creature {
  id: string;
  name: string;
  type: string;
  description: string;
  abilities: string[];
  weakness?: string;
  famousEncounters: string[];
  imageUrl?: string;
}
