import AuthForm from "../components/AuthForm/AuthForm";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96">
        <h2 className="text-3xl font-semibold mb-4 text-center">Увійти</h2>
        <AuthForm type="login" />
      </div>
    </div>
  );
};

export default Login;
