type Props = {
  onClick: () => void;
};

const ButtonGoogle = ({ onClick }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full h-12 flex items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors shadow-sm text-gray-800 font-medium text-base"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="24"
        height="24"
      >
        {/* Google icon paths */}
      </svg>
      <span>Увійти через Google</span>
    </button>
  );
};

export default ButtonGoogle;
