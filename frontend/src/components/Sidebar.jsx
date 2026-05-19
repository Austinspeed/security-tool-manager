import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Operating Companies", path: "/opcos" },
    { label: "Security Tools", path: "/tools" },
    { label: "Systems", path: "/systems" },
    // { label: "Coverage Matrix", path: "/coverage" },
    // { label: "Gap Analysis", path: "/gaps" },
    // { label: "Overlap Analysis", path: "/overlaps" },
    // { label: "Reports", path: "/reports" },
    // { label: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-72 bg-slate-950 text-white p-6 flex flex-col h-screen">

      {/* Clickable Logo */}
      <Link
        to="/"
        className="mb-10 block rounded-2xl p-3 -m-3 transition"
      >
        <h1 className="text-2xl font-bold tracking-wide">
          SecurityTool
        </h1>

        <p className="text-xs text-slate-400 mt-1">
          Visibility Platform
        </p>
      </Link>

      {/* Menu */}
      <div className="space-y-4 flex-1">
        {menu.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.label}
              to={item.path}
              className={`block w-full text-left px-4 py-3 rounded-2xl transition
                ${
                  isActive
                    ? "bg-slate-800 text-white"
                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
                }
              `}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-auto bg-slate-900 p-4 rounded-2xl">
        <p className="text-xs text-slate-400">Logged in as</p>
        <p className="font-semibold mt-1">Austin</p>
        <p className="text-xs text-slate-400">Contributor</p>
      </div>
    </aside>
  );
};

export default Sidebar;