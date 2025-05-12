import { useState } from "react";
import ButtonGoogle from "./buttons/ButtonGoogle";
import ButtonApple from "./buttons/ButtonApple";

export default function AuthModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700"
      >
        Login / Register
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Welcome</h2>
            <ButtonGoogle onClick={() => alert("Google login flow...")} />
            <div className="my-2" />
            <ButtonApple onClick={() => alert("Apple login flow...")} />
            <div className="mt-4 text-right">
              <button
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
