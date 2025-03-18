import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ProtectedRoute from "./routes/ProtectedRoute";
import Navbar from "./components/layouts/Navbar";
import Sidebar from "./components/layouts/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Departments from "./pages/Departments/Departments";
import Members from "./pages/Members/Members";
import Settings from "./pages/Settings/Settings";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <div>
                <Navbar />
                <Sidebar />
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="departments" element={<Departments />} />
                  <Route path="members" element={<Members />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="*" element={<Navigate to="/dashboard" replace />} />
                </Routes>
              </div>
            </ProtectedRoute>
          }
        />

        {/* Redirect from root to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
