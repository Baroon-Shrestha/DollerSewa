import React from "react";
import { Phone, MailCheck, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <footer
      className=" text-white py-12 px-6 md:px-16"
      style={{
        backgroundImage:
          "linear-gradient(to right, black 0%, #1c1f3a 30%, #1c1f3a 70%, black 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Logo and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div>
              <h3 className="text-2xl font-bold text-blue-400">Dolleer Sewa</h3>
              <p className="text-sm text-blue-200">Premium Digital Solutions</p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <span className="text-blue-300 font-medium text-sm">
              Reach Us Out at:
            </span>
            <div className="flex space-x-3">
              <a className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors border border-gray-700">
                <Instagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors border border-gray-700"
              >
                <BsWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* About Section */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-blue-400 mb-4">
              About Doller Sewa
            </h4>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              We provide premium digital solutions and subscription services to
              help businesses and individuals access the tools they need to
              succeed. From productivity software to entertainment platforms,
              we've got you covered.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-blue-200">Instant activation</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span className="text-blue-200">Secure & reliable</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span className="text-blue-200">24/7 customer support</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-4">
              Quick Links
            </h4>
            <ul className=" flex items-left flex-col gap-3 text-sm">
              <Link to="/about">
                <div className="text-blue-200 hover:text-blue-400 transition-colors">
                  About Us
                </div>
              </Link>

              <Link to="/products">
                <div className="text-blue-200 hover:text-blue-400 transition-colors">
                  Our Services
                </div>
              </Link>
              <Link to="/faq">
                <div className="text-blue-200 hover:text-blue-400 transition-colors">
                  FAQ
                </div>
              </Link>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-500" />

                <span className="text-blue-200">+977 9801234567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MailCheck className="w-4 h-4 text-blue-500" />
                <span className="text-blue-200">support@dolleersewa.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-4 h-4 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span className="text-blue-200">Mon-Fri: 9 AM - 6 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Horizontal Line */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-around items-center text-sm text-blue-300">
            <div className="mb-4 md:mb-0">
              <p>
                © {new Date().getFullYear()} Dolleer Sewa. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <span>Made with ❤️ in Nepal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
