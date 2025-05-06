import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useTheme } from "../../hooks/useTheme";
import { Button } from "../ui/button";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { token, setToken } = useAuthStore();
  const { theme, toggleTheme } = useTheme();

  const logout = () => {
    setToken(null);
    navigate("/");
  };

  const navItems = [
    { path: "/", label: "Головна" },
    { path: "/dashboard", label: "Кабінет" },
    ...(token
      ? []
      : [
          { path: "/login", label: "Увійти" },
          { path: "/register", label: "Реєстрація" }
        ])
  ];

  return (
    <nav className="flex items-center justify-between px-4 py-3 border-b shadow-sm bg-background">
      <Link to="/" className="text-xl font-bold">
        Tyusha
      </Link>

      <div className="hidden md:flex space-x-4 items-center">
        {navItems.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`${
              location.pathname === path
                ? "font-semibold border-b-2 border-primary"
                : "text-muted-foreground"
            } hover:text-primary`}
          >
            {label}
          </Link>
        ))}

        <button
          onClick={toggleTheme}
          className="ml-4 px-3 py-1 rounded-md border text-sm hover:bg-muted transition"
          title="Змінити тему"
        >
          {theme === "light" ? "🌙 Темна" : "☀️ Світла"}
        </button>

        {token && (
          <Button
            variant="destructive"
            size="sm"
            className="ml-4"
            onClick={logout}
          >
            Вийти
          </Button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
