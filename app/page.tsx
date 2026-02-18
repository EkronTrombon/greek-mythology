import { database } from "@/lib/database";

export default function Home() {

  const gods = database.getAllGods();
  const heroes = database.getAllHeroes();
  const creatures = database.getAllCreatures();
  const locations = database.getAllLocations();

  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-24">
      <h1 className="text-4xl font-bold">Welcome to the Greek Mythology</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-24">
        <div>
          <h2>Gods:</h2>
          <ul>
            {gods.map((god) => (
              <li key={god.id}>{god.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Heroes:</h2>
          <ul>
            {heroes.map((hero) => (
              <li key={hero.id}>{hero.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Creatures:</h2>
          <ul>
            {creatures.map((creature) => (
              <li key={creature.id}>{creature.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Locations:</h2>
          <ul>
            {locations.map((location) => (
              <li key={location.id}>{location.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
