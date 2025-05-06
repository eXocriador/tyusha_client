import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useTheme } from "../../hooks/useTheme";
import { Button } from "../ui/button";

type Props = {
  onAuthOpen: (open: boolean) => void;
  onAuthTypeChange: (type: "login" | "register") => void;
};

const NavBar = ({ onAuthOpen, onAuthTypeChange }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { token, setToken } = useAuthStore();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { path: "/", label: "Головна" },
    { path: "/dashboard", label: "Кабінет" }
  ];

  const logout = () => {
    setToken(null);
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between px-4 py-3 border-b bg-background shadow-sm relative">
      <Link to="/" className="text-xl font-bold">
        Tyusha
      </Link>

      <div className="hidden md:flex space-x-4 items-center">
        {navItems.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`px-2 py-1 rounded-md ${
              location.pathname === path
                ? "font-semibold border-b-2 border-primary"
                : "text-muted-foreground"
            } hover:text-primary transition-colors`}
          >
            {label}
          </Link>
        ))}

        {!token ? (
          <Button
            variant="outline"
            onClick={() => {
              onAuthTypeChange("login");
              onAuthOpen(true);
            }}
          >
            Вхід / Реєстрація
          </Button>
        ) : (
          <Button
            onClick={logout}
            variant="destructive"
            size="sm"
            className="ml-2"
          >
            Вийти
          </Button>
        )}

        <Button
          onClick={toggleTheme}
          size="icon"
          variant="ghost"
          className="hover:scale-110 transition-transform"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </Button>
      </div>
      {/* Mobile burger button */}
      <div className="md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            onAuthTypeChange("login");
            onAuthOpen(true);
          }}
        >
          ☰
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
