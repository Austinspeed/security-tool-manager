const SystemsPage = () => {
  const systems = [
    {
      id: 1,
      name: "Cloud Infrastructure",
      type: "Cloud",
      tools: 6,
    },
    {
      id: 2,
      name: "Endpoints",
      type: "Endpoint",
      tools: 4,
    },
    {
      id: 3,
      name: "APIs",
      type: "Application",
      tools: 3,
    },
    {
      id: 4,
      name: "Databases",
      type: "Data",
      tools: 5,
    },
    {
      id: 5,
      name: "Network Infrastructure",
      type: "Network",
      tools: 7,
    },
    {
      id: 6,
      name: "Applications",
      type: "Software",
      tools: 5,
    },
  ];

  return (
    <div className="flex-1 bg-slate-100 p-8 overflow-auto">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Systems</h1>
        <p className="text-slate-500 mt-1">
          Overview of environments protected by security tools
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {systems.map((system) => (
          <div
            key={system.id}
            className="bg-white rounded-3xl shadow-sm p-6 hover:-translate-y-1 transition"
          >

            {/* System Type Badge */}
            <div className="mb-4">
              <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                {system.type}
              </span>
            </div>

            {/* Name */}
            <h2 className="text-lg font-bold">
              {system.name}
            </h2>

            {/* Tools Count */}
            <div className="mt-6">
              <p className="text-3xl font-bold">
                {system.tools}
              </p>
              <p className="text-xs text-slate-500">
                Security Tools Covering This System
              </p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default SystemsPage;