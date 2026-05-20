const OverlapAnalysis = () => {
  const overlaps = [
    {
      category: "EDR",
      tools: ["CrowdStrike", "Microsoft Defender"],
      opcos: ["FCMB Nigeria", "FCMB UK", "FCMB Kenya"],
      severity: "High",
    },
    {
      category: "SIEM",
      tools: ["Splunk", "Elastic SIEM"],
      opcos: ["FCMB Nigeria", "FCMB Ghana"],
      severity: "Medium",
    },
    {
      category: "IAM",
      tools: ["Okta"],
      opcos: ["FCMB Nigeria"],
      severity: "Low",
    },
    {
      category: "Vulnerability Management",
      tools: ["Qualys", "Rapid7"],
      opcos: ["FCMB UK", "FCMB Kenya"],
      severity: "High",
    },
    {
      category: "DLP",
      tools: ["Microsoft Purview"],
      opcos: ["FCMB UK"],
      severity: "Low",
    },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
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
        <h1 className="text-3xl font-bold">Overlap Analysis</h1>
        <p className="text-slate-500 mt-1">
          Identify duplicate and redundant security tools across the
          organization
        </p>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl shadow-sm overflow-hidden max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-4 bg-slate-900 text-white p-4 text-sm font-semibold">
          <div>Category</div>
          <div>Tools</div>
          <div>OpCos</div>
          <div>Overlap Severity</div>
        </div>

        {/* Rows */}
        {overlaps.map((item) => (
          <div
            key={item.category}
            className="grid grid-cols-4 p-4 border-b hover:bg-slate-50 items-center"
          >
            {/* Category */}
            <div className="font-semibold">{item.category}</div>

            {/* Tools */}
            <div className="text-slate-600 text-sm">
              {item.tools.join(", ")}
            </div>

            {/* OpCos */}
            <div className="text-slate-600 text-sm">
              {item.opcos.join(", ")}
            </div>

            {/* Severity */}
            <div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(
                  item.severity,
                )}`}
              >
                {item.severity}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverlapAnalysis;
