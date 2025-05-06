type Props = {
  onClick: () => void;
};

const ButtonApple = ({ onClick }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full h-12 flex items-center justify-center gap-3 rounded-lg bg-black text-white hover:bg-gray-900 transition-colors font-semibold text-base"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 384 512"
        fill="currentColor"
      >
        <path d="M318.7 268.7c-.3-49.9..." />
      </svg>
      <span>Увійти через Apple</span>
    </button>
  );
};

export default ButtonApple;
