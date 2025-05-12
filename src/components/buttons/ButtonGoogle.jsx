export default function ButtonGoogle({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-50"
    >
      <svg className="w-5 h-5" viewBox="0 0 533.5 544.3">
        <path
          fill="#4285f4"
          d="M533.5 278.4c0-18.6-1.6-36.6-4.6-54.1H272v102.4h146.9c-6.3 34.1-25.3 63.1-53.7 82.5v68h86.7c50.8-46.9 81.6-116 81.6-198.8z"
        />
        <path
          fill="#34a853"
          d="M272 544.3c72.9 0 134.1-24.1 178.8-65.5l-86.7-68c-24.1 16.2-55 25.8-92.1 25.8-70.9 0-131-47.9-152.5-112.1h-89v70.3c44.7 88 136.6 149.5 241.5 149.5z"
        />
        <path
          fill="#fbbc04"
          d="M119.5 324.5c-10.2-30.1-10.2-62.5 0-92.6v-70.3h-89c-38.5 76.9-38.5 166 0 242.9l89-70z"
        />
        <path
          fill="#ea4335"
          d="M272 107.7c39.6-.6 77.5 14.6 106.4 42.7l79.6-79.6c-48.5-45.1-112.5-70.3-186-70.8-104.9 0-196.8 61.5-241.5 149.5l89 70c21.5-64.2 81.6-112.1 152.5-112.1z"
        />
      </svg>
      Continue with Google
    </button>
  );
}
