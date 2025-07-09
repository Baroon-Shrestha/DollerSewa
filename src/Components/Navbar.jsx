import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthComponents/AuthModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const openModal = (mode) => {
    setAuthMode(mode);
    setModalOpen(true);
  };

  return (
    <nav className="bg-gray-900 text-blue-400">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <li>
            <div className="text-xl font-bold text-white">DollerSewa</div>
          </li>
        </Link>
        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to="/">
            <li className="hover:text-white transition-colors cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hover:text-white transition-colors cursor-pointer">
              About Us
            </li>
          </Link>
          <Link to="/products">
            <li className="hover:text-white transition-colors cursor-pointer">
              Shop
            </li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-white transition-colors cursor-pointer">
              Contact
            </li>
          </Link>
        </ul>

        {/* Login Button */}
        <div className="hidden md:block">
          <button
            onClick={() => {
              openModal("login");
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all"
          >
            Login
          </button>
        </div>
        {/* <div className="space-x-3 hidden md:block">
          <button
            onClick={() => openModal("login")}
            className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
          <button
            onClick={() => openModal("register")}
            className="text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"
          >
            Register
          </button>
        </div> */}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-400 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4">
          <ul className="space-y-4 text-sm font-medium">
            <li className="hover:text-white transition-colors cursor-pointer">
              Home
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              Services
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              About
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              Contact
            </li>
            <li>
              <button className="bg-blue-600 text-white w-full px-4 py-2 rounded hover:bg-blue-700 transition-all">
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
      <AuthModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        mode={authMode}
      />
    </nav>
  );
}
