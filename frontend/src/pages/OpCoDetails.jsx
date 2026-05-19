import { useParams } from "react-router-dom";

const OpcoDetails = () => {
  const { id } = useParams();

  const opcos = {
    "fcmb-ng": {
      name: "FCMB Nigeria",
      coverage: "84%",
      tools: [
        {
          name: "Github",
          vendor: "Github",
          category: "Version Control",
          owner: "DevOps Team",
        },
        {
          name: "Kafka",
          vendor: "Confluent",
          category: "Message Broker",
          owner: "Technology Team",
        },
        {
          name: "Okta",
          vendor: "Okta",
          category: "IAM",
          owner: "Security Team",
        },
      ],
      systems: [
        "Cloud Infrastructure",
        "Endpoints",
        "Applications",
        "APIs",
      ],
      gaps: [
        "DLP coverage missing",
        "API IAM controls unavailable",
      ],
    },

    "fcmb-ke": {
      name: "FCMB Kenya",
      coverage: "79%",
      tools: [
        {
          name: "Pulsar",
          vendor: "Apache",
          category: "Message Broker",
          owner: "Technology Team",
        },
        {
          name: "Redis",
          vendor: "Redis Labs",
          category: "In-Memory Data Store",
          owner: "Technology Team",
        },
      ],
      systems: [
        "Endpoints",
        "Databases",
        "Network Infrastructure",
      ],
      gaps: [
        "No DLP tooling",
      ],
    },
     "fcmb-gh": {
      name: "FCMB Ghana",
      coverage: "79%",
      tools: [
        {
          name: "Salt",
          vendor: "SaltStack",
          category: "Configuration Management",
          owner: "Infrastructure Team",
        },
        {
          name: "Splunk",
          vendor: "Splunk",
          category: "SIEM",
          owner: "Security Engineering",
        },
        {
          name: "Okta",
          vendor: "Okta",
          category: "IAM",
          owner: "Security Team",
        },
      ],
      systems: [
        "Cloud Infrastructure",
        "Endpoints",
        "Applications",
        "APIs",
      ],
      gaps: [
        "DLP coverage missing",
        "API IAM controls unavailable",
      ],
    },
    "fcmb-uk": {
      name: "FCMB United Kingdom",
      coverage: "79%",
      tools: [
        {
          name: "CrowdStrike",
          vendor: "CrowdStrike",
          category: "EDR",
          owner: "SOC Team",
        },
        {
          name: "Splunk",
          vendor: "Splunk",
          category: "SIEM",
          owner: "Security Engineering",
        },
        {
          name: "Okta",
          vendor: "Okta",
          category: "IAM",
          owner: "Security Team",
        },
      ],
      systems: [
        "Cloud Infrastructure",
        "Endpoints",
        "Applications",
        "APIs",
      ],
      gaps: [
        "DLP coverage missing",
        "API IAM controls unavailable",
      ],
    },
    "fcmb-us": {
      name: "FCMB United States",
      coverage: "79%",
      tools: [
        {
          name: "CrowdStrike",
          vendor: "CrowdStrike",
          category: "EDR",
          owner: "SOC Team",
        },
        {
          name: "Splunk",
          vendor: "Splunk",
          category: "SIEM",
          owner: "Security Engineering",
        },
        {
          name: "Okta",
          vendor: "Okta",
          category: "IAM",
          owner: "Security Team",
        },
      ],
      systems: [
        "Cloud Infrastructure",
        "Endpoints",
        "Applications",
        "APIs",
      ],
      gaps: [
        "DLP coverage missing",
        "API IAM controls unavailable",
      ],
    },
    "fcmb-in": {
      name: "FCMB India",
      coverage: "79%",
      tools: [
        {
          name: "CrowdStrike",
          vendor: "CrowdStrike",
          category: "EDR",
          owner: "SOC Team",
        },
        {
          name: "Splunk",
          vendor: "Splunk",
          category: "SIEM",
          owner: "Security Engineering",
        },
        {
          name: "Okta",
          vendor: "Okta",
          category: "IAM",
          owner: "Security Team",
        },
      ],
      systems: [
        "Cloud Infrastructure",
        "Endpoints",
        "Applications",
        "APIs",
      ],
      gaps: [
        "DLP coverage missing",
        "API IAM controls unavailable",
      ],
    },
  };

  const opco = opcos[id];

  if (!opco) {
    return (
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold">
          Operating Company not found
        </h1>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-slate-100 p-8 overflow-auto">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          {opco.name}
        </h1>

        <p className="text-slate-500 mt-1">
          Security visibility overview
        </p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-3 gap-5 mb-8">

        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <p className="text-slate-500 text-sm">
            Coverage Score
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {opco.coverage}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <p className="text-slate-500 text-sm">
            Security Tools
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {opco.tools.length}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <p className="text-slate-500 text-sm">
            Protected Systems
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {opco.systems.length}
          </h2>
        </div>

      </div>

      {/* Tools */}
      <div className="bg-white rounded-3xl shadow-sm overflow-hidden mb-8">

        <div className="grid grid-cols-4 bg-slate-900 text-white p-4 font-semibold">
          <div>Tool</div>
          <div>Vendor</div>
          <div>Category</div>
          <div>Owner</div>
        </div>

        {opco.tools.map((tool) => (
          <div
            key={tool.name}
            className="grid grid-cols-4 p-4 border-b hover:bg-slate-50"
          >
            <div className="font-medium">
              {tool.name}
            </div>

            <div>{tool.vendor}</div>

            <div>{tool.category}</div>

            <div>{tool.owner}</div>
          </div>
        ))}

      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-2 gap-6">

        {/* Systems */}
        <div className="bg-white rounded-3xl shadow-sm p-6">
          <h2 className="font-bold text-lg mb-5">
            Protected Systems
          </h2>

          <div className="flex flex-wrap gap-3">
            {opco.systems.map((system) => (
              <span
                key={system}
                className="bg-slate-100 px-4 py-2 rounded-full text-sm"
              >
                {system}
              </span>
            ))}
          </div>
        </div>

        {/* Gaps */}
        <div className="bg-white rounded-3xl shadow-sm p-6">
          <h2 className="font-bold text-lg mb-5">
            Gap Summary
          </h2>

          <div className="space-y-3">
            {opco.gaps.map((gap) => (
              <div
                key={gap}
                className="bg-red-50 text-red-700 rounded-xl px-4 py-3"
              >
                {gap}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default OpcoDetails;