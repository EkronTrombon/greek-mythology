/**
 * Database Seed Script
 *
 * Populates the Vercel Postgres (Neon) database with mock mythology data
 *
 * Usage:
 *   npm run db:seed
 *
 * Make sure to:
 * 1. Run db/schema.sql first to create tables
 * 2. Have DATABASE_URL in your .env file
 */

import { config } from "dotenv";
import postgres from "postgres";

// Load environment variables from .env file
config();

// Initialize database connection
const sql = postgres(process.env.DATABASE_URL!, {
  ssl: 'require',
});
import { gods } from "../lib/data/gods";
import { heroes } from "../lib/data/heroes";
import { locations } from "../lib/data/locations";
import { myths } from "../lib/data/myths";
import { creatures } from "../lib/data/creatures";

// Convert TypeScript naming to database naming (camelCase to snake_case)
const toSnakeCase = (str: string): string => {
  return str.replace(/([A-Z])/g, "_$1").toLowerCase();
};

const convertToDbFormat = (obj: any): any => {
  const converted: any = {};
  for (const [key, value] of Object.entries(obj)) {
    converted[toSnakeCase(key)] = value;
  }
  return converted;
};

async function clearTable(tableName: string) {
  console.log(`🗑️  Clearing ${tableName}...`);
  await sql.unsafe(`DELETE FROM ${tableName}`);
  console.log(`✅ Cleared ${tableName}`);
}

async function seedGods() {
  console.log("\n📝 Seeding gods...");

  for (const god of gods) {
    const data = convertToDbFormat(god);
    await sql`
      INSERT INTO gods (
        id, name, greek_name, roman_name, title, domain, symbols,
        parentage, residence, description, image_url
      ) VALUES (
        ${data.id}, ${data.name}, ${data.greek_name}, ${data.roman_name},
        ${data.title}, ${data.domain}, ${data.symbols}, ${JSON.stringify(data.parentage)},
        ${data.residence}, ${data.description}, ${data.image_url || null}
      )
    `;
  }

  console.log(`✅ Seeded ${gods.length} gods`);
}

async function seedHeroes() {
  console.log("\n📝 Seeding heroes...");

  for (const hero of heroes) {
    const data = convertToDbFormat(hero);
    await sql`
      INSERT INTO heroes (
        id, name, title, parentage, famous_for, weapons, companions,
        fate, description, image_url
      ) VALUES (
        ${data.id}, ${data.name}, ${data.title}, ${JSON.stringify(data.parentage)},
        ${data.famous_for}, ${data.weapons}, ${data.companions}, ${data.fate},
        ${data.description}, ${data.image_url || null}
      )
    `;
  }

  console.log(`✅ Seeded ${heroes.length} heroes`);
}

async function seedLocations() {
  console.log("\n📝 Seeding locations...");

  for (const location of locations) {
    const data = convertToDbFormat(location);
    await sql`
      INSERT INTO locations (
        id, name, type, region, significance, associated_deities,
        description, image_url
      ) VALUES (
        ${data.id}, ${data.name}, ${data.type}, ${data.region || null},
        ${data.significance}, ${data.associated_deities}, ${data.description},
        ${data.image_url || null}
      )
    `;
  }

  console.log(`✅ Seeded ${locations.length} locations`);
}

async function seedMyths() {
  console.log("\n📝 Seeding myths...");

  for (const myth of myths) {
    const data = convertToDbFormat(myth);
    await sql`
      INSERT INTO myths (
        id, title, category, characters, locations, summary,
        moral_lesson, description
      ) VALUES (
        ${data.id}, ${data.title}, ${data.category}, ${data.characters},
        ${data.locations}, ${data.summary}, ${data.moral_lesson || null},
        ${data.description}
      )
    `;
  }

  console.log(`✅ Seeded ${myths.length} myths`);
}

async function seedCreatures() {
  console.log("\n📝 Seeding creatures...");

  for (const creature of creatures) {
    const data = convertToDbFormat(creature);
    await sql`
      INSERT INTO creatures (
        id, name, type, description, abilities, weakness, famous_encounters,
        image_url
      ) VALUES (
        ${data.id}, ${data.name}, ${data.type}, ${data.description},
        ${data.abilities}, ${data.weakness || null}, ${data.famous_encounters},
        ${data.image_url || null}
      )
    `;
  }

  console.log(`✅ Seeded ${creatures.length} creatures`);
}

async function main() {
  console.log("🚀 Starting database seed...\n");

  if (!process.env.DATABASE_URL) {
    console.error("❌ Error: DATABASE_URL not found in environment variables");
    console.error("Make sure your .env file is set up correctly");
    process.exit(1);
  }

  console.log("📊 Data summary:");
  console.log(`   - ${gods.length} gods`);
  console.log(`   - ${heroes.length} heroes`);
  console.log(`   - ${locations.length} locations`);
  console.log(`   - ${myths.length} myths`);
  console.log(`   - ${creatures.length} creatures`);

  // Test connection
  console.log("\n🔌 Testing database connection...");
  try {
    await sql`SELECT 1`;
    console.log("✅ Connection successful!");
  } catch (error) {
    console.error("❌ Connection failed:", error);
    console.error("\nMake sure:");
    console.error("1. You ran db/schema.sql to create the tables");
    console.error("2. DATABASE_URL is correct in .env");
    process.exit(1);
  }

  console.log("\n⚠️  This will clear all existing data and reseed the database.");
  console.log("Press Ctrl+C to cancel, or wait 3 seconds to continue...");
  await new Promise(resolve => setTimeout(resolve, 3000));

  try {
    // Clear existing data
    console.log("\n🗑️  Clearing existing data...");
    await clearTable("creatures");
    await clearTable("myths");
    await clearTable("locations");
    await clearTable("heroes");
    await clearTable("gods");

    // Seed tables
    console.log("\n📝 Seeding tables...");
    await seedGods();
    await seedHeroes();
    await seedLocations();
    await seedMyths();
    await seedCreatures();

    console.log("\n" + "=".repeat(50));
    console.log("✨ Database seeded successfully!");
    console.log("✅ All 5 tables populated with data");
    console.log("=".repeat(50) + "\n");
  } catch (error) {
    console.error("\n💥 Error during seeding:", error);
    process.exit(1);
  } finally {
    await sql.end();
  }
}

main().catch((err) => {
  console.error("💥 Fatal error:", err);
  process.exit(1);
});
