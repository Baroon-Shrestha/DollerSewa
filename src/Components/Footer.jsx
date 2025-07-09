import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#10142c] text-white py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo and description */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Dolleer Sewa</h3>
          <p className="text-sm text-gray-400">
            Trusted, efficient, and tailored solutions for a better tomorrow.
          </p>
        </div>

        {/* Links */}
        <div className="text-sm space-y-2">
          <h4 className="font-semibold text-[#D1863C] mb-2">Quick Links</h4>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#about" className="hover:text-[#D1863C]">About Us</a></li>
            <li><a href="#services" className="hover:text-[#D1863C]">Services</a></li>
            <li><a href="#contact" className="hover:text-[#D1863C]">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-semibold text-[#D1863C] mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-[#D1863C]">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-300 hover:text-[#D1863C]">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-300 hover:text-[#D1863C]">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Dolleer Sewa. All rights reserved.
      </div>
    </footer>
  );
}
