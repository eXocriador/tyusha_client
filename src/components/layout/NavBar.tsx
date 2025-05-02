import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const linkClass = (path: string) =>
    location.pathname === path
      ? "text-black font-semibold border-b-2 border-black pb-1"
      : "text-gray-600 hover:text-black";

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b">
      <div className="text-xl font-bold">
        <Link to="/">Tyusha</Link>
      </div>
      <div className="flex space-x-6">
        <Link to="/" className={linkClass("/")}>
          Головна
        </Link>
        <Link to="/login" className={linkClass("/login")}>
          Увійти
        </Link>
        <Link to="/register" className={linkClass("/register")}>
          Реєстрація
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
