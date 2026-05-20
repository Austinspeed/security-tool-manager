const OpcoPage = () => {
  const opcos = [
    {
      id: "fcmb-ng",
      name: "FCMB Nigeria",
      tools: 14,
      categories: 6,
      status: "Active",
    },
    {
      id: "fcmb-uk",
      name: "FCMB UK",
      tools: 11,
      categories: 5,
      status: "Active",
    },
    {
      id: "fcmb-gh",
      name: "FCMB Ghana",
      tools: 9,
      categories: 4,
      status: "Active",
    },
    {
      id: "fcmb-ke",
      name: "FCMB Kenya",
      tools: 12,
      categories: 7,
      status: "Active",
    },
    {
      id: "fcmb-us",
      name: "FCMB USA",
      tools: 11,
      categories: 5,
      status: "Active",
    },
    {
      id: "fcmb-in",
      name: "FCMB India",
      tools: 9,
      categories: 4,
      status: "Active",
    },
    {
      id: "fcmb-ch",
      name: "FCMB China",
      tools: 9,
      categories: 4,
      status: "Active",
    },
    {
      id: "fcmb-aus",
      name: "FCMB Australia",
      tools: 9,
      categories: 4,
      status: "Active",
    },
  ];

  return (
    <div className="flex-1 bg-slate-100 p-8 overflow-auto">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">Operating Companies</h1>
        <p className="text-slate-500 mt-1">
          Overview of all operating companies in the group
        </p>
      </div>

      {/* Centered Table Container */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden pb-8">
          {/* Header */}
          <div className="grid grid-cols-4 w-full bg-slate-900 text-white p-4 text-sm font-semibold">
            <div>OpCo</div>
            <div>Tools</div>
            <div>Categories</div>
            <div>Status</div>
          </div>

          {/* Rows */}
          {opcos.map((opco) => (
            <div
              key={opco.id}
              className="grid grid-cols-4 w-full p-4 border-b hover:bg-slate-50 items-center"
            >
              <div className="font-semibold">{opco.name}</div>
              <div className="text-slate-600">{opco.tools}</div>
              <div className="text-slate-600">{opco.categories}</div>
              <div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  {opco.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpcoPage;
