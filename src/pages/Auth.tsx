import { useState } from "react";
import AuthForm from "../components/AuthForm/AuthForm";
import { motion } from "framer-motion";

const Auth = () => {
  const [type, setType] = useState<"login" | "register">("login");

  return (
    <motion.div
      className="flex justify-center items-center h-screen bg-muted"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-4 bg-card p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="flex justify-center gap-4 mb-4">
          <button
            className={`px-4 py-2 rounded-md ${
              type === "login"
                ? "bg-primary text-white"
                : "bg-secondary text-gray-700"
            }`}
            onClick={() => setType("login")}
          >
            Вхід
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              type === "register"
                ? "bg-primary text-white"
                : "bg-secondary text-gray-700"
            }`}
            onClick={() => setType("register")}
          >
            Реєстрація
          </button>
        </div>
        <AuthForm type={type} />
      </div>
    </motion.div>
  );
};

export default Auth;
