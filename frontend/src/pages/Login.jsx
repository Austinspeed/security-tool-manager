const LoginPage = () => {
  return (
    <div className="h-screen w-full bg-slate-100 flex items-center justify-center">

      <div className="w-105 bg-white rounded-3xl shadow-sm p-10">

        {/* Logo */}
        <div className="flex flex-col items-center">

          <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-white text-2xl">
            🔒
          </div>

          <h1 className="text-2xl font-bold mt-5">
            SecurityTool
          </h1>

          <p className="text-sm text-slate-500 mt-2 text-center">
            Security Visibility Platform
          </p>

        </div>

        {/* Form */}
        <div className="mt-10">

          <label className="block text-sm text-slate-600 mb-2">
            Company Email
          </label>

          <input
            type="email"
            placeholder="Enter your company email"
            className="
              w-full
              px-4
              py-3
              border
              border-slate-300
              rounded-xl
              focus:outline-none
              focus:ring-2
              focus:ring-slate-900
            "
          />

          <button
            className="
              w-full
              mt-6
              py-3
              rounded-xl
              bg-slate-900
              text-white
              font-medium
              hover:opacity-90
              transition
            "
          >
            Continue
          </button>

        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400">
            Access restricted to authorized company users
          </p>
        </div>

      </div>

    </div>
  );
};

export default LoginPage;