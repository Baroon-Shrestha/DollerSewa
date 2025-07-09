import React, { useRef, useEffect } from "react";

export default function AuthModal({
  isOpen,
  onClose,
  mode = "login",
  onSwitch,
}) {
  const modalRef = useRef();

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div
        ref={modalRef}
        className="bg-white w-full max-w-sm rounded-2xl shadow-xl p-8 relative"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          {mode === "login" ? "Login to Your Account" : "Create an Account"}
        </h2>

        <form className="space-y-4">
          {mode === "register" && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
          >
            {mode === "login" ? "Login" : "Register"}
          </button>
        </form>

        {/* Switch form links */}
        <p className="mt-6 text-center text-sm text-gray-600">
          {mode === "login" ? (
            <>
              Don't have an account?{" "}
              <button
                onClick={() => onSwitch("register")}
                className="text-blue-600 hover:underline font-medium"
              >
                Register
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => onSwitch("login")}
                className="text-blue-600 hover:underline font-medium"
              >
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
