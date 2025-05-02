import AuthForm from "../components/AuthForm/AuthForm";

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96">
        <h2 className="text-3xl font-semibold mb-4 text-center">Реєстрація</h2>
        <AuthForm type="register" />
      </div>
    </div>
  );
};

export default Register;
