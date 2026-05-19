import { useState } from "react";

const SecurityTools = () => {
  const [search, setSearch] = useState("");

  const tools = [
    {
      id: 1,
      name: "CrowdStrike",
      category: "EDR",
      vendor: "CrowdStrike",
      owner: "SOC Team",
    },
    {
      id: 2,
      name: "Splunk",
      category: "SIEM",
      vendor: "Splunk",
      owner: "Security Engineering",
    },
    {
      id: 3,
      name: "Microsoft Defender",
      category: "EDR",
      vendor: "Microsoft",
      owner: "IT Security",
    },
    {
      id: 4,
      name: "Okta",
      category: "IAM",
      vendor: "Okta",
      owner: "Identity Team",
    },
    {
      id: 5,
      name: "Qualys",
      category: "Vulnerability Management",
      vendor: "Qualys",
      owner: "Vuln Management Team",
    },
  ];

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex-1 bg-slate-100 p-8 overflow-auto">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Security Tools</h1>
        <p className="text-slate-500 mt-1">
          Inventory of security tools used across the organization
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tools..."
          className="w-full md:w-96 px-4 py-3 rounded-xl border bg-white"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">

        {/* Header */}
        <div className="grid grid-cols-4 bg-slate-900 text-white p-4 text-sm font-semibold">
          <div>Tool</div>
          <div>Vendor</div>
          <div>Category</div>
          <div>Owner</div>
        </div>

        {/* Rows */}
        {filteredTools.map((tool) => (
          <div
            key={tool.id}
            className="grid grid-cols-4 p-4 border-b hover:bg-slate-50"
          >
            <div className="font-semibold">{tool.name}</div>
            <div className="text-slate-600">{tool.vendor}</div>
            <div className="text-slate-600">{tool.category}</div>
            <div className="text-slate-600">{tool.owner}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityTools;