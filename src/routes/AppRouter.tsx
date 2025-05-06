import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import { useAuthStore } from "../hooks/useAuthStore";
import { useEffect, useState } from "react";

const AppRouter = () => {
  const token = useAuthStore((state) => state.token);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    console.log("TOKEN in AppRouter:", token);
  }, [token]);

  if (!hydrated) {
    return null;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/dashboard"
        element={token ? <Dashboard /> : <Navigate to="/" />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
