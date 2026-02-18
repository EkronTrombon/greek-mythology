import { neon } from "@neondatabase/serverless";

// Neon database client
const sql = neon(process.env.DATABASE_URL!);

export { sql };

// Table names constant
export const TABLES = {
  GODS: "gods",
  HEROES: "heroes",
  LOCATIONS: "locations",
  MYTHS: "myths",
  CREATURES: "creatures",
} as const;
