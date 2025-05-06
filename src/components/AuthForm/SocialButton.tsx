interface SocialButtonProps {
  provider: "google" | "apple";
  onClick: () => void;
}

const SocialButton = ({ provider, onClick }: SocialButtonProps) => {
  const baseClass =
    "flex items-center justify-center w-full border rounded-md py-2 text-sm font-medium transition hover:scale-[1.02] bg-white text-black border-gray-300 hover:bg-gray-100";

  if (provider === "google") {
    return (
      <button onClick={onClick} className={baseClass}>
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5 mr-3"
        />
        Продовжити через Google
      </button>
    );
  }

  if (provider === "apple") {
    return (
      <button onClick={onClick} className={baseClass}>
        🍎 Продовжити через Apple
      </button>
    );
  }

  return null;
};

export default SocialButton;
