import React, { useState } from "react";
import FAQHelper from "../HomeComponents/FAQHelper";
import { Link } from "react-router-dom";

// Static FAQ data
const faqs = [
  {
    question: "What is Doller Sewa?",
    answer:
      "Doller Sewa is a digital service platform that helps people in Nepal purchase international services like ChatGPT, Canva Pro, and Netflix easily and affordably.",
  },
  {
    question: "How does the checkout process work?",
    answer:
      "We use WhatsApp checkout. Once you add services to your cart, you can confirm your order via WhatsApp and complete your purchase through guided steps.",
  },
  {
    question: "Is this platform mobile friendly?",
    answer:
      "Yes, Doller Sewa is fully mobile responsive and optimized for a seamless experience across all devices, including smartphones and tablets.",
  },
  {
    question: "What services can I buy through Doller Sewa?",
    answer:
      "You can purchase subscriptions like ChatGPT Plus, Canva Pro, Netflix, YouTube Premium, and other digital tools with local support and affordable pricing.",
  },
  {
    question: "Do I need a credit card or international payment method?",
    answer:
      "No, you don’t need any international card. We simplify the process and allow you to pay using local payment methods with WhatsApp coordination.",
  },
];

// FAQ Section with enhanced UI
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 px-6 md:px-12 -mt-1 relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5"></div>
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Enhanced header */}
        <div className="text-center mb-16">
          {/* <div className="inline-block mb-4">
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-6"></div>
          </div> */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our services and platform
          </p>
        </div>

        {/* Enhanced container */}
        <div className="bg-white/5 rounded-3xl shadow-2xl backdrop-blur-sm border border-white/10 p-8 md:p-12">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FAQHelper
                key={index}
                id={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => toggle(index)}
              />
            ))}
          </div>

          {/* Bottom accent */}
          <div className="mt-12 flex items-center justify-center flex-col gap-6 pt-8 border-t border-white/10">
            <div>
              <Link to="/faq">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 text-wite font-semibold rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Have more Queries? Check More...
                </div>
              </Link>
            </div>
            <div className="text-center">
              <Link to="/contact">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Contact Support
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
