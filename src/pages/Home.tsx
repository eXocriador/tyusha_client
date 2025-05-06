import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { useAuthStore } from "../hooks/useAuthStore";

const Home = () => {
  const { token } = useAuthStore();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center bg-muted overflow-hidden">
      {/* Фон */}
      <div className="absolute inset-0 bg-hero-pattern z-[5] hero-animate"></div>

      {/* Контент */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-card p-8 rounded-lg shadow-lg max-w-md w-full space-y-4 relative z-[10]"
      >
        <h1 className="text-4xl font-bold">Вітаємо у Tyusha!</h1>
        <p className="text-muted-foreground">
          Будь ласка, увійдіть або зареєструйтесь.
        </p>
        <Button asChild>
          <Link to={token ? "/dashboard" : "/"}>До кабінету</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default Home;
