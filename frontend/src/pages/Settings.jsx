const SettingsPage = () => {
  return (
    <div className="flex-1 bg-slate-100 p-8 overflow-auto">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="text-slate-500 mt-1">
          Manage platform preferences and configuration
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 max-w-6xl">

        {/* Profile */}
        <div className="bg-white rounded-3xl shadow-sm p-6">

          <h2 className="text-lg font-bold mb-5">
            User Information
          </h2>

          <div className="space-y-4">

            <div>
              <label className="block text-sm text-slate-500 mb-2">
                Name
              </label>

              <input
                value="Austin"
                readOnly
                className="w-full px-4 py-3 rounded-xl border bg-slate-50"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-500 mb-2">
                Role
              </label>

              <input
                value="Contributor"
                readOnly
                className="w-full px-4 py-3 rounded-xl border bg-slate-50"
              />
            </div>

          </div>
        </div>


        {/* Notifications */}
        <div className="bg-white rounded-3xl shadow-sm p-6">

          <h2 className="text-lg font-bold mb-5">
            Notifications
          </h2>

          <div className="space-y-5">

            <div className="flex justify-between items-center">
              <span>Email alerts</span>

              <input type="checkbox" defaultChecked />
            </div>

            <div className="flex justify-between items-center">
              <span>Gap detection alerts</span>

              <input type="checkbox" defaultChecked />
            </div>

            <div className="flex justify-between items-center">
              <span>Overlap alerts</span>

              <input type="checkbox" />
            </div>

          </div>

        </div>


        {/* Data Sync */}
        <div className="bg-white rounded-3xl shadow-sm p-6">

          <h2 className="text-lg font-bold mb-5">
            Data Synchronization
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>Last Sync</span>

              <span className="text-slate-500">
                Today, 09:32 AM
              </span>

            </div>

            <button className="mt-4 bg-slate-900 text-white px-4 py-3 rounded-xl">
              Sync Data
            </button>

          </div>

        </div>


        {/* Platform */}
        <div className="bg-white rounded-3xl shadow-sm p-6">

          <h2 className="text-lg font-bold mb-5">
            Platform
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Version</span>

              <span className="text-slate-500">
                v1.0.0
              </span>
            </div>

            <div className="flex justify-between">
              <span>Environment</span>

              <span className="text-slate-500">
                Production
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default SettingsPage;