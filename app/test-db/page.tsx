import { database } from "@/lib/db-api";

export default async function TestDatabasePage() {
  const stats = await database.getStats();
  const gods = await database.getAllGods();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Database Test
        </h1>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            📊 Database Statistics
          </h2>
          <pre className="bg-gray-100 p-4 rounded overflow-auto">
            {JSON.stringify(stats, null, 2)}
          </pre>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            ⚡ Sample Data - Greek Gods
          </h2>
          <div className="grid gap-4">
            {gods.slice(0, 3).map((god) => (
              <div
                key={god.id}
                className="border border-gray-200 rounded p-4"
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {god.name}
                </h3>
                <p className="text-gray-600 italic">{god.title}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Domains: {god.domain.join(", ")}
                </p>
                <p className="text-gray-700 mt-2">{god.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-green-600 font-semibold">
            ✅ Database is working correctly!
          </p>
        </div>
      </div>
    </div>
  );
}
