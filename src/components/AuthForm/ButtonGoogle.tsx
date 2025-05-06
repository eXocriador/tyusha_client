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
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google"
        className="w-6 h-6"
      />
      <span>Увійти через Google</span>
    </button>
  );
};

export default ButtonGoogle;
