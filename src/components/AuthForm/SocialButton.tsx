interface SocialButtonProps {
  provider: "google" | "apple";
  onClick: () => void;
}

const SocialButton = ({ provider, onClick }: SocialButtonProps) => {
  const baseClass =
    "flex items-center justify-center w-full border rounded-md py-2 text-sm font-medium transition hover:scale-[1.02] bg-white text-black border-gray-300 hover:bg-gray-100 gap-3";

  if (provider === "google") {
    return (
      <button
        onClick={onClick}
        className={baseClass}
        style={{ fontFamily: "Roboto, Arial, sans-serif" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 533.5 544.3"
        >
          <path
            fill="#4285f4"
            d="M533.5 278.4c0-18.5-1.5-37-4.6-54.9H272v103.9h146.9c-6.4 34.3-25.5 63.5-54.5 83.3v68h87.8c51.5-47.5 81.3-117.6 81.3-200.3z"
          />
          <path
            fill="#34a853"
            d="M272 544.3c73.5 0 135.3-24.4 180.4-66.1l-87.8-68c-24.4 16.4-55.7 26-92.6 26-71 0-131.2-47.9-152.8-112.4H31.2v70.6c45.5 89.9 138.8 149.9 240.8 149.9z"
          />
          <path
            fill="#fbbc04"
            d="M119.2 323.7c-10.4-30.6-10.4-63.4 0-94l-70.6-70.6C16.7 199.7 0 241.3 0 278.4c0 37.1 16.7 78.7 48.6 119.3l70.6-74z"
          />
          <path
            fill="#ea4335"
            d="M272 107.3c39.9 0 75.7 13.8 103.7 40.7l77.6-77.6C407.3 24.4 345.5 0 272 0 170 0 76.7 60 31.2 149.9l70.6 70.6c21.6-64.5 81.8-112.4 152.8-112.4z"
          />
        </svg>
        <span>Продовжити через Google</span>
      </button>
    );
  }

  if (provider === "apple") {
    return (
      <button
        onClick={onClick}
        className={baseClass}
        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 384 512"
          fill="currentColor"
        >
          <path d="M318.7 268.7c-.3-49.9 40.9-73.8 42.7-75-23.4-34.2-59.8-39-72.7-39.5-30.9-3.1-60.3 18.1-76 18.1-15.5 0-39.4-17.6-64.8-17.1-33.3.5-64.2 19.5-81.4 49.5-34.8 60.3-8.9 149.6 24.9 198.6 16.5 24.4 36.1 51.8 61.8 50.8 24.7-1 34.2-16.1 64.2-16.1s39 16.1 64.9 15.6c26.8-.5 43.7-25 60.1-49.6 18.9-27.6 26.7-54.4 27-55.8-.6-.2-51.4-19.8-51.7-78.5zm-62.1-147c13.8-16.7 23-39.9 20.5-63.2-19.8.8-43.7 13.1-57.9 29.8-12.7 14.8-23.9 38.5-20.8 61.1 22.1 1.7 44.4-11.3 58.2-27.7z" />
        </svg>
        <span>Продовжити через Apple</span>
      </button>
    );
  }

  return null;
};

export default SocialButton;
