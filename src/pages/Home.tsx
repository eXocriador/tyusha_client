import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-center px-4 bg-muted">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl p-6 rounded-lg bg-card shadow-lg"
      >
        <h1 className="text-4xl font-bold mb-4">Вітаємо у Tyusha!</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          <Link to="/login" className="text-primary hover:underline">
            Увійдіть
          </Link>{" "}
          або{" "}
          <Link to="/register" className="text-primary hover:underline">
            зареєструйтесь
          </Link>
          , щоб почати користуватись.
        </p>
        <Button asChild>
          <Link to="/dashboard">До кабінету</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default Home;
