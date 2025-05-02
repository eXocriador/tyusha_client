import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Головна" },
    { path: "/login", label: "Увійти" },
    { path: "/register", label: "Реєстрація" }
  ];

  return (
    <nav className="flex items-center justify-between px-4 py-3 border-b shadow-sm">
      <Link to="/" className="text-xl font-bold">
        Tyusha
      </Link>

      <div className="hidden md:flex space-x-4">
        {navItems.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`${
              location.pathname === path
                ? "font-semibold border-b-2 border-black"
                : "text-gray-600"
            } hover:text-black`}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Бургер для мобільних */}
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

      {/* Випадаюче меню для мобіли */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white border-t shadow-md md:hidden">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-2 ${
                location.pathname === path
                  ? "font-semibold text-black"
                  : "text-gray-600"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
