import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-center">
      <h1 className="text-4xl font-bold">Вітаємо у Tyusha!</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Увійдіть або зареєструйтесь, щоб почати користуватись.
      </p>
      <Button asChild>
        <Link to="/dashboard">До кабінету</Link>
      </Button>
    </div>
  );
};

export default Home;
