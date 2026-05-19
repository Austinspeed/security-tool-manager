const ReportsPage = () => {
  const reports = [
    {
      id: 1,
      title: "Coverage Summary",
      description:
        "Overview of system coverage across all security categories.",
      generated: "May 19, 2026",
    },
    {
      id: 2,
      title: "Gap Analysis Report",
      description:
        "Identified missing protections and uncovered systems.",
      generated: "May 19, 2026",
    },
    {
      id: 3,
      title: "Overlap Analysis Report",
      description:
        "Shows duplicate tools and redundant coverage areas.",
      generated: "May 19, 2026",
    },
    {
      id: 4,
      title: "OpCo Visibility Report",
      description:
        "Security tool posture across all operating companies.",
      generated: "May 19, 2026",
    },
  ];

  return (
    <div className="flex-1 bg-slate-100 p-8 overflow-auto">
      {/* Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Reports</h1>
          <p className="text-slate-500 mt-1">
            Export and review security visibility insights
          </p>
        </div>

        <button className="bg-slate-900 text-white px-5 py-3 rounded-xl">
          Export All
        </button>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-white rounded-3xl shadow-sm p-6 hover:-translate-y-1 transition"
          >
            <h2 className="text-lg font-bold">
              {report.title}
            </h2>

            <p className="text-slate-500 mt-2 text-sm">
              {report.description}
            </p>

            <div className="mt-6 flex justify-between items-center">
              <span className="text-xs text-slate-400">
                Generated: {report.generated}
              </span>

              <button className="text-blue-600 hover:underline">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsPage;