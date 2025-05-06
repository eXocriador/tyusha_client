interface SocialButtonProps {
  provider: "google" | "apple";
  onClick: () => void;
}

const SocialButton = ({ provider, onClick }: SocialButtonProps) => {
  const baseClass =
    "flex items-center justify-center w-full border rounded-md py-2 text-sm font-medium transition hover:scale-[1.02] bg-white text-black border-gray-300 hover:bg-gray-100";

  if (provider === "google") {
    return (
      <button
        onClick={onClick}
        className={`${baseClass} gap-3`}
        style={{ fontFamily: "Roboto, Arial, sans-serif" }}
      >
        <img
          src="/icons/google.svg"
          alt="Google"
          className="w-5 h-5"
          aria-hidden="true"
        />
        <span>Увійти через Google</span>
      </button>
    );
  }

  if (provider === "apple") {
    return (
      <button
        onClick={onClick}
        className={`${baseClass} gap-3`}
        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}
      >
        <img
          src="/icons/apple.svg"
          alt="Apple"
          className="w-5 h-5"
          aria-hidden="true"
        />
        <span>Увійти через Apple</span>
      </button>
    );
  }

  return null;
};

export default SocialButton;
