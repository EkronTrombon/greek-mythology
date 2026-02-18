# Greek Mythology Mock Database

A comprehensive TypeScript-based mock database containing information about ancient Greek mythology.

## Quick Start

```typescript
import { database } from "@/lib/database";

// Get all gods
const gods = database.getAllGods();

// Search across all categories
const results = database.searchAll("Zeus");

// Get a specific entity
const zeus = database.getGodById("zeus");

// Find related content
const related = database.getRelatedContent("zeus");
```

## Database Contents

- **12 Gods**: Zeus, Poseidon, Hades, Athena, Apollo, Artemis, Aphrodite, Ares, Hephaestus, Hermes, Demeter, Dionysus
- **8 Heroes**: Heracles, Perseus, Theseus, Achilles, Odysseus, Jason, Bellerophon, Atalanta
- **12 Locations**: Mount Olympus, The Underworld, Delphi, Troy, Athens, Crete, Sparta, and more
- **12 Myths**: Creation story, Prometheus, Persephone, Trojan War, The Odyssey, Pandora's Box, and more
- **12 Creatures**: Medusa, Minotaur, Cerberus, Hydra, Chimera, Sphinx, Pegasus, and more

## TypeScript Types

All entities are fully typed:

```typescript
import type { God, Hero, Location, Myth, Creature } from "@/lib/types";
```

## Example Queries

```typescript
// Get gods by domain
const seaGods = database.getGodsByDomain("sea");

// Get all demigods
const demigods = database.getDemigods();

// Get myths by category
const heroicMyths = database.getMythsByCategory("heroic");

// Search for entities
const searchResults = database.searchGods("wisdom");

// Get related myths for a character
const zeusMyths = database.getMythsByCharacter("Zeus");
```

## Data Structure

### God
- Basic info: name, Greek/Roman names, title
- Attributes: domain, symbols, parentage, residence
- Description

### Hero
- Basic info: name, title, parentage (divine status)
- Achievements: famousFor array, weapons, companions
- Fate and description

### Location
- Basic info: name, type, region
- Significance and associated deities
- Description

### Myth
- Title, category (creation/heroic/divine/tragedy/war/love)
- Characters and locations involved
- Summary, moral lesson, detailed description

### Creature
- Name, type, description
- Abilities and weakness
- Famous encounters

## Usage in Components

### Server Component
```typescript
import { database } from "@/lib/database";

export default function GodsPage() {
  const gods = database.getAllGods();

  return (
    <div>
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

### Client Component
```typescript
"use client";

import { useState } from "react";
import { database } from "@/lib/database";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const results = database.searchAll(query);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* Display results */}
    </div>
  );
}
```
