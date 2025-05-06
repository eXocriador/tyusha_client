import { useAuthStore } from "../hooks/useAuthStore";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { token, setToken } = useAuthStore();
  const navigate = useNavigate();

  // ТУТ ПОКИ МІСЦЕВІ МОКОВІ ДАНІ
  const user = {
    name: "Іван Петренко",
    email: "ivan.petrenko@example.com",
    hasPassword: true // якщо false — кнопка "Додати пароль"
  };

  const logout = () => {
    setToken(null);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-center px-4 bg-muted">
      <h1 className="text-3xl font-bold">Ваш кабінет</h1>
      <div className="bg-card p-6 rounded-lg shadow-md space-y-4 max-w-sm w-full">
        <p>
          <strong>Імʼя:</strong> Іван Петренко
        </p>
        <p>
          <strong>Email:</strong> ivan.petrenko@example.com
        </p>
        <Button variant="outline" className="w-full">
          Редагувати дані
        </Button>
        <Button variant="outline" className="w-full">
          Змінити пароль
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
