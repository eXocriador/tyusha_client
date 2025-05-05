import { motion } from "framer-motion";

import { useAuthStore } from "../hooks/useAuthStore";

const Dashboard = () => {
  const { token } = useAuthStore();

  const userName = "Користувач"; // Поки що мок, пізніше підгрузимо реальне ім'я

  return (
    <motion.div
      className="p-4 md:p-8 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold">Привіт, {userName}!</h2>
      <p>Тут будуть ваші нагадування і календар.</p>
    </motion.div>
  );
};
export default Dashboard;
