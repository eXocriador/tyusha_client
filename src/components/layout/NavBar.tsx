import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useTheme } from "../../hooks/useTheme";
import { Button } from "../ui/button";
import { Sun, Moon } from "lucide-react";

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
    { path: "/dashboard", label: "Кабінет" }
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
            className={`px-2 py-1 rounded ${
              location.pathname === path
                ? "font-semibold border-b-2 border-primary"
                : "text-muted-foreground"
            } hover:text-primary transition-colors`}
          >
            {label}
          </Link>
        ))}

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="transition-colors"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </Button>

        {token && (
          <Button variant="outline" size="sm" onClick={logout}>
            Вийти
          </Button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
