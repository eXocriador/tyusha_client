type Props = {
  onClick: () => void;
};

const ButtonApple = ({ onClick }: Props) => {
  return (
    <button type="button" onClick={onClick} className="apple-signin-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 384 512"
        fill="currentColor"
      >
        <path d="M318.7 268.7c-.3-49.9 40.9-73.8 42.7-75-23.4-34.2-59.8-39-72.7-39.5-30.9-3.1-60.3 18.1-76 18.1-15.5 0-39.4-17.6-64.8-17.1-33.3.5-64.2 19.5-81.4 49.5-34.8 60.3-8.9 149.6 24.9 198.6 16.5 24.4 36.1 51.8 61.8 50.8 24.7-1 34.2-16.1 64.2-16.1s39 16.1 64.9 15.6c26.8-.5 43.7-25 60.1-49.6 18.9-27.6 26.7-54.4 27-55.8-.6-.2-51.4-19.8-51.7-78.5zm-62.1-147c13.8-16.7 23-39.9 20.5-63.2-19.8.8-43.7 13.1-57.9 29.8-12.7 14.8-23.9 38.5-20.8 61.1 22.1 1.7 44.4-11.3 58.2-27.7z" />
      </svg>
      <span>Продовжити через Apple</span>
    </button>
  );
};

export default ButtonApple;
