import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Auth from "../pages/Auth";
import { useAuthStore } from "../hooks/useAuthStore";

const AppRouter = () => {
  const { token } = useAuthStore();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/auth"
        element={!token ? <Auth /> : <Navigate to="/dashboard" />}
      />
      <Route
        path="/dashboard"
        element={token ? <Dashboard /> : <Navigate to="/" />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
