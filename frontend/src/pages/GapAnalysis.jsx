const GapAnalysis = () => {
  const gaps = [
    {
      system: "Cloud Infrastructure",
      missing: ["Vulnerability Management", "DLP"],
      risk: "High",
    },
    {
      system: "Endpoints",
      missing: [],
      risk: "Low",
    },
    {
      system: "APIs",
      missing: ["IAM", "DLP"],
      risk: "High",
    },
    {
      system: "Databases",
      missing: ["EDR", "DLP"],
      risk: "Medium",
    },
    {
      system: "Network Infrastructure",
      missing: ["IAM", "EDR", "DLP"],
      risk: "High",
    },
    {
      system: "Applications",
      missing: [],
      risk: "Low",
    },
  ];

  const getRiskColor = (risk) => {
    switch (risk) {
      case "High":
        return "bg-red-100 text-red-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-green-100 text-green-700";
    }
  };

  return (
    <div className="flex-1 bg-slate-100 p-8 overflow-auto">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Gap Analysis
        </h1>
        <p className="text-slate-500 mt-1">
          Identify missing security coverage across systems
        </p>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl shadow-sm overflow-hidden max-w-5xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-3 bg-slate-900 text-white p-4 text-sm font-semibold">
          <div>System</div>
          <div>Missing Coverage</div>
          <div>Risk Level</div>
        </div>

        {/* Rows */}
        {gaps.map((item) => (
          <div
            key={item.system}
            className="grid grid-cols-3 p-4 border-b hover:bg-slate-50 items-center"
          >

            {/* System */}
            <div className="font-semibold">
              {item.system}
            </div>

            {/* Missing Controls */}
            <div className="text-slate-600 text-sm">
              {item.missing.length > 0
                ? item.missing.join(", ")
                : "No gaps"}
            </div>

            {/* Risk */}
            <div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getRiskColor(
                  item.risk
                )}`}
              >
                {item.risk}
              </span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default GapAnalysis;