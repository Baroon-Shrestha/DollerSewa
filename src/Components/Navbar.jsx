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
    <nav
      className="text-white shadow-md"
      style={{
        backgroundImage:
          "linear-gradient(to right, black 0%, #1c1f3a 30%, #1c1f3a 70%, black 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          DollerSewa
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8 px-16 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium shadow-inner border border-white/10">
          <Link to="/">
            <div className="hover:text-blue-500 text-blue-100 transition-colors cursor-pointer">
              Home
            </div>
          </Link>
          <Link to="/about">
            <div className="hover:text-blue-500 text-blue-100 transition-colors cursor-pointer">
              About Us
            </div>
          </Link>
          <Link to="/products">
            <div className="hover:text-blue-500 text-blue-100 transition-colors cursor-pointer">
              Services
            </div>
          </Link>
          <Link to="/contact">
            <div className="hover:text-blue-500 text-blue-100 transition-colors cursor-pointer">
              Contact
            </div>
          </Link>
          <Link to="/faq" onClick={() => setIsOpen(false)}>
            <div className="hover:text-blue-500 text-blue-100 transition-colors">
              FAQ's
            </div>
          </Link>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => openModal("login")}
            className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 px-7 py-2 text-white rounded-full shadow-lg hover:brightness-110 hover:shadow-xl transition-all duration-300 font-bold"
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-200"
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

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md text-white px-4 py-6 space-y-4 rounded-b-xl border-t border-white/10 shadow-lg">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <div className="hover:text-emerald-400 transition-colors py-2 px-2 rounded-lg hover:bg-white/5">
              Home
            </div>
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            <div className="hover:text-emerald-400 transition-colors py-2 px-2 rounded-lg hover:bg-white/5">
              About Us
            </div>
          </Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>
            <div className="hover:text-emerald-400 transition-colors py-2 px-2 rounded-lg hover:bg-white/5">
              Services
            </div>
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <div className="hover:text-emerald-400 transition-colors py-2 px-2 rounded-lg hover:bg-white/5">
              Contact
            </div>
          </Link>
          <Link to="/faq" onClick={() => setIsOpen(false)}>
            <div className="hover:text-emerald-400 transition-colors py-2 px-2 rounded-lg hover:bg-white/5">
              FAQ's
            </div>
          </Link>
          <button
            onClick={() => {
              openModal("login");
              setIsOpen(false);
            }}
            className="w-full mt-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white py-3 rounded-full shadow-lg hover:brightness-110 hover:shadow-xl transition-all duration-300 border border-emerald-300"
          >
            Login
          </button>
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
