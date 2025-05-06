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
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-4 text-center">
      <h1 className="text-3xl font-bold">Ваш кабінет</h1>

      <div className="bg-card rounded-xl shadow p-6 w-full max-w-md space-y-4 text-left">
        <div>
          <span className="font-semibold">Імʼя:</span> {user.name}
        </div>
        <div>
          <span className="font-semibold">Email:</span> {user.email}
        </div>
        <Button variant="outline" className="w-full">
          Редагувати дані
        </Button>
        <Button variant="outline" className="w-full">
          {user.hasPassword ? "Змінити пароль" : "Додати пароль"}
        </Button>
      </div>

      <Button variant="destructive" onClick={logout}>
        Вийти з облікового запису
      </Button>
    </div>
  );
};

export default Dashboard;
