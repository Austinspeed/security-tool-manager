const CoverageMatrix = () => {
  const systems = [
    "Cloud Infrastructure",
    "Endpoints",
    "APIs",
    "Databases",
    "Network Infrastructure",
    "Applications",
  ];

  const categories = ["IAM", "EDR", "SIEM", "Vulnerability", "DLP"];

  const coverage = {
    "Cloud Infrastructure": {
      IAM: true,
      EDR: true,
      SIEM: true,
      Vulnerability: false,
      DLP: false,
    },
    Endpoints: {
      IAM: true,
      EDR: true,
      SIEM: true,
      Vulnerability: true,
      DLP: true,
    },
    APIs: {
      IAM: false,
      EDR: true,
      SIEM: true,
      Vulnerability: false,
      DLP: false,
    },
    Databases: {
      IAM: true,
      EDR: false,
      SIEM: true,
      Vulnerability: true,
      DLP: false,
    },
    "Network Infrastructure": {
      IAM: false,
      EDR: false,
      SIEM: true,
      Vulnerability: true,
      DLP: false,
    },
    Applications: {
      IAM: true,
      EDR: true,
      SIEM: true,
      Vulnerability: true,
      DLP: true,
    },
  };

  return (
    <div className="flex-1 bg-slate-100 p-8 overflow-auto">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Coverage Matrix
        </h1>
        <p className="text-slate-500 mt-1">
          Visibility of security tool coverage across systems
        </p>
      </div>

      {/* Table Wrapper */}
      <div className="bg-white rounded-3xl shadow-sm overflow-auto max-w-6xl mx-auto">

        {/* Table Header */}
        <div className="grid grid-cols-[220px_repeat(5,1fr)] bg-slate-900 text-white p-4 text-sm font-semibold">
          <div>System</div>
          {categories.map((cat) => (
            <div key={cat}>{cat}</div>
          ))}
        </div>

        {/* Rows */}
        {systems.map((system) => (
          <div
            key={system}
            className="grid grid-cols-[220px_repeat(5,1fr)] p-4 border-b hover:bg-slate-50"
          >
            {/* System name */}
            <div className="font-semibold text-slate-800">
              {system}
            </div>

            {/* Coverage cells */}
            {categories.map((cat) => {
              const isCovered = coverage[system]?.[cat];

              return (
                <div key={cat} className="flex justify-center">
                  {isCovered ? (
                    <span className="text-green-600 font-bold">✔</span>
                  ) : (
                    <span className="text-red-400">✖</span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoverageMatrix;