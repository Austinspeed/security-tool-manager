import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Operating Companies", value: 8 },
    { label: "Security Tools", value: 37 },
    { label: "Tool Categories", value: 12 },
    { label: "Coverage Score", value: "84%" },
  ];

  const opcos = [
    {
      id: "fcmb-ng",
      name: "FCMB Nigeria",
      tools: 14,
      categories: 6,
    },
    {
      id: "fcmb-uk",
      name: "FCMB UK",
      tools: 11,
      categories: 5,
    },
    {
      id: "fcmb-gh",
      name: "FCMB Ghana",
      tools: 9,
      categories: 4,
    },
    {
      id: "fcmb-ke",
      name: "FCMB Kenya",
      tools: 12,
      categories: 7,
    },
    {
      id: "fcmb-us",
      name: "FCMB USA",
      tools: 14,
      categories: 6,
    },
    {
      id: "fcmb-in",
      name: "FCMB India",
      tools: 11,
      categories: 5,
    },
    {
      id: "fcmb-ch",
      name: "FCMB China",
      tools: 9,
      categories: 4,
    },
    {
      id: "fcmb-aus",
      name: "FCMB Australia",
      tools: 12,
      categories: 7,
    },
  ];

  return (
    <div className="flex-1 bg-slate-100 p-8 overflow-auto">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">
          Security Tool Visibility Dashboard
        </h1>
        <p className="text-slate-500 mt-1">
          View security tooling across all operating companies
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-5 mb-10">
        {stats.map((item) => (
          <div
            key={item.label}
            className="bg-white rounded-3xl p-6 shadow-sm"
          >
            <p className="text-slate-500 text-sm">{item.label}</p>
            <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* OpCos */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          Operating Companies
        </h2>

        <p className="text-slate-500 text-sm">
          Click an OpCo to view its security tools
        </p>
      </div>

      {/* Cards */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
        {opcos.map((opco) => (
          <div
            key={opco.id}
            onClick={() => navigate(`/opco/${opco.id}`)}
            className="bg-white rounded-3xl p-6 shadow-sm cursor-pointer hover:-translate-y-1 transition"
          >
            <div className="flex justify-between">
              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                Active
              </span>
            </div>

            <h3 className="font-bold text-lg mt-5">
              {opco.name}
            </h3>

            <div className="mt-6 flex justify-between">
              <div>
                <p className="text-2xl font-bold">
                  {opco.tools}
                </p>
                <p className="text-xs text-slate-500">
                  Tools
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">
                  {opco.categories}
                </p>
                <p className="text-xs text-slate-500">
                  Categories
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;