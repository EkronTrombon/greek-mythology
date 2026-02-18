/**
 * Database Setup Script
 *
 * Creates all database tables by running the schema.sql file
 *
 * Usage:
 *   npm run db:setup
 */

import { config } from "dotenv";
import postgres from "postgres";
import { join } from "path";

// Load environment variables from .env file
config();

const sql = postgres(process.env.DATABASE_URL!, {
  ssl: 'require',
  max: 1,
});

async function main() {
  console.log("🚀 Setting up database...\n");

  if (!process.env.DATABASE_URL) {
    console.error("❌ Error: DATABASE_URL not found in environment variables");
    console.error("Make sure your .env file is set up correctly");
    process.exit(1);
  }

  // Test connection
  console.log("🔌 Testing database connection...");
  try {
    await sql`SELECT 1`;
    console.log("✅ Connection successful!\n");
  } catch (error) {
    console.error("❌ Connection failed:", error);
    process.exit(1);
  }

  // Prepare schema file path
  console.log("📖 Locating schema file...");
  const schemaPath = join(process.cwd(), "db", "schema.sql");
  console.log("✅ Schema file found\n");

  // Execute schema
  console.log("🔨 Creating tables...");
  try {
    // Execute the schema file (postgres library supports multi-statement execution)
    await sql.file(schemaPath);

    console.log("✅ Tables created successfully!\n");
    console.log("=".repeat(50));
    console.log("✨ Database setup complete!");
    console.log("\nNext step: Run 'npm run db:seed' to populate with data");
    console.log("=".repeat(50) + "\n");
  } catch (error) {
    console.error("❌ Error creating tables:", error);
    process.exit(1);
  } finally {
    await sql.end();
  }
}

main().catch((err) => {
  console.error("💥 Fatal error:", err);
  process.exit(1);
});
