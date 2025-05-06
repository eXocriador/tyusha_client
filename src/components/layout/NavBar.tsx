import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useTheme } from "../../hooks/useTheme";

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
    <nav className="flex items-center justify-between px-4 py-3 border-b shadow-sm relative bg-background">
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

        {token && (
          <button
            onClick={logout}
            className="ml-4 text-red-500 hover:underline"
          >
            Вийти
          </button>
        )}
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-background border-t shadow-md md:hidden flex flex-col">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-2 ${
                location.pathname === path
                  ? "font-semibold text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
          {token && (
            <button
              onClick={() => {
                setMenuOpen(false);
                logout();
              }}
              className="block px-4 py-2 text-red-500 text-left"
            >
              Вийти
            </button>
          )}
        </div>
      )}

      <button
        onClick={toggleTheme}
        className="ml-2 px-2 py-1 border rounded text-sm"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
};

export default NavBar;
