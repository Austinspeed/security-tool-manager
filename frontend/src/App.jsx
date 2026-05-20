import { Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import OpcoPage from "./pages/OperatingCompany";
import SecurityTools from "./pages/SecurityTools";
import SystemsPage from "./pages/Systems";
import OpcoDetails from "./pages/OpCoDetails";
import LoginPage from "./pages/Login";
import CoverageMatrix from "./pages/CoverageMatrix";
import GapAnalysis from "./pages/GapAnalysis";
import OverlapAnalysis from "./pages/OverlapAnalysis";
import ReportsPage from "./pages/Report";
// import SettingsPage from "./pages/Settings";

const App = () => {
  const location = useLocation();

  // Hide sidebar only on login page
  const isLoginPage = location.pathname === "/";

  return (
    <div className="min-h-screen bg-slate-100 flex">

      {!isLoginPage && (
        <Sidebar activeItem="Dashboard" />
      )}

      <Routes>
        {/* Login */}
        <Route path="/" element={<LoginPage />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* OpCo List Page */}
        <Route path="/opcos" element={<OpcoPage />} />

        {/* Security Tools Page */}
        <Route path="/tools" element={<SecurityTools />} />

        {/* Systems Page */}
        <Route path="/systems" element={<SystemsPage />} />

        {/* Coverage Matrix Page */}
        <Route path="/coverage" element={<CoverageMatrix />} />

        {/* Gap Analysis Page */}
        <Route path="/gaps" element={<GapAnalysis />} />

        {/* Overlap Analysis Page */}
        <Route path="/overlaps" element={<OverlapAnalysis />} />

        {/* Reports Page */}
        <Route path="/reports" element={<ReportsPage />} />

        {/* Settings */}
        {/* <Route path="/settings" element={<SettingsPage />} /> */}

        {/* OpCo Details */}
        <Route path="/opco/:id" element={<OpcoDetails />} />
      </Routes>

    </div>
  );
};

export default App;