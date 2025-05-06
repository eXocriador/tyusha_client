import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-center px-4">
      <h1 className="text-4xl font-bold">Вітаємо у Tyusha!</h1>
      <p className="text-gray-600 dark:text-gray-400">
        <a className="home-auth-link" href="/login">
          Увійдіть
        </a>
        або
        <a className="home-auth-link" href="/register">
          зареєструйтесь
        </a>
        ,
        <br /> щоб почати користуватись.
      </p>
      <Button asChild>
        <Link to="/dashboard">До кабінету</Link>
      </Button>
    </div>
  );
};

export default Home;
