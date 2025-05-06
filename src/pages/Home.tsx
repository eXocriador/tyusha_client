import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center bg-transparent overflow-hidden">
      {/* Контент */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-card p-8 rounded-lg shadow-lg max-w-md w-full space-y-4 z-[101] relative"
      >
        <h1 className="text-4xl font-bold">Вітаємо у Tyusha!</h1>
        <p className="text-muted-foreground">
          Будь ласка, увійдіть або зареєструйтесь.
        </p>
        <Button asChild>
          <Link to="/dashboard">До кабінету</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default Home;
