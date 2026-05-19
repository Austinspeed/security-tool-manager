import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import OpcoPage from "./pages/OperatingCompany";
import SecurityTools from "./pages/SecurityTools";
import SystemsPage from "./pages/Systems";
import OpcoDetails from "./pages/OpCoDetails";
// import CoverageMatrix from "./pages/CoverageMatrix";
// import GapAnalysis from "./pages/GapAnalysis";
// import OverlapAnalysis from "./pages/OverlapAnalysis";
// import ReportsPage from "./pages/Report";
// import SettingsPage from "./pages/Settings";

const App = () => {
  // const menu = [
  //   'Dashboard',
  //   'Operating Companies',
  //   'Security Tools',
  //   'Systems',
  //   'Coverage Matrix',
  //   'Gap Analysis',
  //   'Overlap Analysis',
  //   'Reports',
  //   'Settings'
  // ];

  // const stats = [
  //   { label: 'Operating Companies', value: '8' },
  //   { label: 'Security Tools', value: '37' },
  //   { label: 'Tool Categories', value: '12' },
  //   { label: 'Coverage Score', value: '84%' },
  // ];

  // const opcos = [
  //   { name: 'FCMB Nigeria', region: 'West Africa', tools: 14 },
  //   { name: 'FCMB UK', region: 'Europe', tools: 11 },
  //   { name: 'FCMB Ghana', region: 'West Africa', tools: 9 },
  //   { name: 'FCMB Kenya', region: 'East Africa', tools: 12 },
  // ];

  return (
    <div className="min-h-screen bg-slate-100 flex">
      <Sidebar activeItem="Dashboard" />
      <Routes>
        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* OpCo List Page */}
        <Route path="/opcos" element={<OpcoPage />} />

        {/* Security Tools Page */}
        <Route path="/tools" element={<SecurityTools />} />

        {/* Systems Page */}
        <Route path="/systems" element={<SystemsPage />} />

        {/* Coverage Matrix Page */}
        {/* <Route path="/coverage" element={<CoverageMatrix />} /> */}

        {/* Gap Analysis Page */}
        {/* <Route path="/gaps" element={<GapAnalysis />} /> */}

        {/* Overlap Analysis Page */}
        {/* <Route path="/overlaps" element={<OverlapAnalysis />} /> */}

        {/* Reports Page */}
        {/* <Route path="/reports" element={<ReportsPage />} /> */}

        {/* Settings Page */}
        {/* <Route path="/settings" element={<SettingsPage />} /> */}

        {/* OpCo Details Page */}
        <Route path="/opco/:id" element={<OpcoDetails />} />

        {/* Default route */}
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
