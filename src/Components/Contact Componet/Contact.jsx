import React, { useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const phoneNumber = "+9779800000000";

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-gradient-to-r from-[#1a1f34] via-[#0a0c17] to-[#1a1f34] text-blue-400 py-20 px-4 md:px-20 min-h-screen">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* === Left: Contact Info === */}
        <div className="space-y-8">
          <div className="bg-[#1e293b] border border-[#38bdf8] p-10 rounded-2xl shadow-2xl space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Contact <span className="text-[#38bdf8]">Us</span>
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              We'd love to hear from you. Whether you're interested in our
              services or have any questions — we're just a message away.
            </p>

            <div className="space-y-5 text-sm text-gray-300">
              {/* Phone / WhatsApp */}
              <button
                onClick={handleCopy}
                className="w-full text-left bg-[#0f172c] p-4 rounded-lg border border-gray-600 shadow-sm hover:border-blue-500 transition"
              >
                <div className="flex items-start gap-3">
                  <div className="text-[#38bdf8] text-xl mt-1">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <p className="text-[#38bdf8] font-semibold">
                      Call or WhatsApp Us
                    </p>
                    <p className="mt-1">
                      {copied ? "📋 Number copied!" : phoneNumber}
                    </p>
                  </div>
                </div>
              </button>

              {/* Email */}
              <a
                href="mailto:info@dolleersewa.com"
                className="block bg-[#0f172c] p-4 rounded-lg border border-gray-600 shadow-sm hover:border-blue-500 transition"
              >
                <div className="flex items-start gap-3">
                  <FiMail className="text-[#38bdf8] text-xl mt-1" />
                  <div>
                    <p className="text-[#38bdf8] font-semibold">Email</p>
                    <p className="mt-1">info@dolleersewa.com</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* === Right: Contact Form === */}
        <div className="bg-[#1e293b] border border-[#38bdf8] p-10 rounded-2xl shadow-2xl">
          <div className="flex items-center space-x-3 mb-8">
            <FiMail className="text-[#38bdf8] text-3xl" />
            <h3 className="text-3xl font-bold text-white">
              Let’s <span className="text-[#38bdf8]">Connect</span>
            </h3>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="block">
                <span className="text-gray-200 font-medium text-sm">
                  Full Name
                </span>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  className="w-full mt-1 border border-gray-600 bg-[#0f172c] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#60a5fa]/60 transition"
                  required
                />
              </label>

              <label className="block">
                <span className="text-gray-200 font-medium text-sm">
                  Email Address
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full mt-1 border border-gray-600 bg-[#0f172c] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#60a5fa]/60 transition"
                  required
                />
              </label>
            </div>

            <label className="block">
              <span className="text-gray-200 font-medium text-sm">Subject</span>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full mt-1 border border-gray-600 bg-[#0f172c] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#60a5fa]/60 transition"
                required
              />
            </label>

            <label className="block">
              <span className="text-gray-200 font-medium text-sm">
                Your Message
              </span>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message here..."
                className="w-full mt-1 border border-gray-600 bg-[#0f172c] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#60a5fa]/60 transition resize-none"
                required
              ></textarea>
            </label>

            <button
              type="submit"
              className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white px-8 py-3 rounded-md hover:from-[#0ea5e9] hover:to-[#0284c7] font-semibold shadow-md transition transform hover:scale-105 w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
