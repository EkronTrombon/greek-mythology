# Vercel Postgres (Neon) Database Setup

Complete guide to set up and use your Greek Mythology database with Vercel Postgres.

## ✅ What's Been Created

- ✅ Neon database client ([lib/db.ts](lib/db.ts))
- ✅ SQL schema ([db/schema.sql](db/schema.sql))
- ✅ Database setup script ([scripts/setup-db.ts](scripts/setup-db.ts))
- ✅ Seed script ([scripts/seed.ts](scripts/seed.ts))
- ✅ Database API ([lib/db-api.ts](lib/db-api.ts))
- ✅ Environment variables (`.env`)
- ✅ npm scripts for database management

## 🚀 Quick Start (2 Steps!)

### Step 1: Create Tables

Run this command to create all database tables:

```bash
npm run db:setup
```

You should see:
```
✨ Database setup complete!
```

### Step 2: Seed Data

Run this command to populate your database with mythology data:

```bash
npm run db:seed
```

You should see:
```
✨ Database seeded successfully!
✅ All 5 tables populated with data
```

**That's it!** Your database is ready to use. 🎉

---

## 📋 Detailed Information

### Database Structure

Your Neon database includes 5 tables:

1. **gods** - 12 Olympian deities
2. **heroes** - 8 legendary heroes
3. **locations** - 12 significant places
4. **myths** - 12 famous stories
5. **creatures** - 12 mythological beings

Each table has:
- Primary key (id)
- Indexed fields for fast queries
- JSONB fields for complex data (parentage, etc.)
- Array fields for multi-value attributes
- Timestamps (created_at, updated_at)

### Environment Variables

Your `.env` file should already have these variables from Vercel/Neon:

```env
DATABASE_URL=postgresql://...          # ← Used by the app
POSTGRES_URL=postgresql://...          # ← Vercel format
```

The app uses `DATABASE_URL` for all database operations.

### Using the Database in Your App

Import the database API in any Server Component:

```typescript
import { database } from "@/lib/db-api";

export default async function GodsPage() {
  const gods = await database.getAllGods(); // ← Note: async!

  return (
    <div>
      <h1>Greek Gods</h1>
      {gods.map(god => (
        <div key={god.id}>
          <h2>{god.name}</h2>
          <p>{god.title}</p>
        </div>
      ))}
    </div>
  );
}
```

**Important**: All database queries are `async` - always use `await`!

---

## 🎯 API Reference

The database API has the **exact same interface** as the mock database:

```typescript
import { database } from "@/lib/db-api";

// Gods
await database.getAllGods()
await database.getGodById("zeus")
await database.getGodsByDomain("sea")
await database.searchGods("wisdom")

// Heroes
await database.getAllHeroes()
await database.getHeroById("heracles")
await database.getDemigods()
await database.searchHeroes("trojan")

// Locations
await database.getAllLocations()
await database.getLocationById("olympus")
await database.getLocationsByType("mountain")
await database.searchLocations("temple")

// Myths
await database.getAllMyths()
await database.getMythById("trojan-war")
await database.getMythsByCategory("heroic")
await database.getMythsByCharacter("Zeus")
await database.searchMyths("love")

// Creatures
await database.getAllCreatures()
await database.getCreatureById("medusa")
await database.getCreaturesByType("Gorgon")
await database.searchCreatures("serpent")

// Cross-category
await database.searchAll("Zeus")         // Search everything
await database.getRelatedContent("zeus")  // Find related entities
await database.getStats()                 // Get counts
```

---

## 📝 npm Scripts

```bash
# Create database tables (run once)
npm run db:setup

# Populate database with data (run anytime to reset data)
npm run db:seed

# Start development server
npm run dev
```

---

## 🔍 Verifying Your Setup

### Option 1: Check in Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to **Storage** → **Postgres**
3. Click on your database
4. Go to **Data** tab
5. You should see your tables with data!

### Option 2: Query in Your App

Create a test page:

```typescript
// app/test/page.tsx
import { database } from "@/lib/db-api";

export default async function TestPage() {
  const stats = await database.getStats();

  return (
    <div>
      <h1>Database Test</h1>
      <pre>{JSON.stringify(stats, null, 2)}</pre>
    </div>
  );
}
```

Visit `http://localhost:3000/test` to see your database stats!

---

## 🔒 Security Notes

- ✅ Your `.env` file is **gitignored** (credentials are safe)
- ✅ Database URL includes SSL by default
- ✅ Using connection pooling for performance
- ✅ Neon auto-suspends when inactive (saves resources)

**Never commit** `.env` or expose `DATABASE_URL` publicly!

---

## 🛠️ Troubleshooting

### "DATABASE_URL not found"
- Make sure `.env` exists in project root
- Restart your dev server: `npm run dev`
- Check that `.env` has `DATABASE_URL=postgresql://...`

### "Connection failed"
- Verify your Neon database is active
- Check the DATABASE_URL is correct (copy from Vercel/Neon dashboard)
- Ensure SSL is enabled (`?sslmode=require`)

### "Table does not exist"
- Run `npm run db:setup` to create tables
- Check for error messages during setup

### "No data returned"
- Run `npm run db:seed` to populate data
- Check the Vercel/Neon dashboard Data tab

---

## 📚 Next Steps

### Switching from Mock to Real Database

To use the database instead of mock data:

**Before (Mock Data):**
```typescript
import { database } from "@/lib/database";
const gods = database.getAllGods(); // Sync
```

**After (Real Database):**
```typescript
import { database } from "@/lib/db-api";
const gods = await database.getAllGods(); // Async!
```

Just:
1. Change the import from `@/lib/database` to `@/lib/db-api`
2. Add `await` to all database calls
3. Make sure your component function is `async`

### Adding More Data

1. **Option A**: Update data files in `lib/data/` and run `npm run db:seed`
2. **Option B**: Use SQL directly:
   ```sql
   INSERT INTO gods (id, name, ...) VALUES (...);
   ```
3. **Option C**: Add through Vercel Dashboard → Data tab

### Performance Optimization

- Database already has indexes on key fields
- Queries use connection pooling
- Consider adding caching for frequently accessed data
- Neon auto-scales based on usage

---

## 🌟 Database Features

✅ **Fast queries** with GIN indexes
✅ **Full-text search** with ILIKE
✅ **JSONB support** for complex data
✅ **Array fields** for multi-value attributes
✅ **Auto-timestamps** with triggers
✅ **Type-safe** API matching your TypeScript types

---

## 📖 Resources

- [Neon Documentation](https://neon.tech/docs)
- [Vercel Postgres Guide](https://vercel.com/docs/storage/vercel-postgres)
- [PostgreSQL Array Functions](https://www.postgresql.org/docs/current/functions-array.html)
- [JSONB in PostgreSQL](https://www.postgresql.org/docs/current/datatype-json.html)

---

## 🎉 You're All Set!

Your Greek Mythology database is fully configured and ready to power your Next.js app!

Need help? Check the troubleshooting section or review the API reference above.
