import React, { useState } from "react";
import FAQHelper from "../HomeComponents/FAQHelper";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What services does Dolleer Sewa provide?",
    answer:
      "We offer secure and fast digital financial services, including online payments, remittance services, bill payments, and local bank transfers.",
  },
  {
    question: "Is Dolleer Sewa safe to use?",
    answer:
      "Absolutely. We use end-to-end encryption and multi-factor authentication to keep your transactions and data secure at all times.",
  },
  {
    question: "How fast are the transactions?",
    answer:
      "Most transactions are completed within seconds. In rare cases, processing time may vary depending on the partner network.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can contact our team through live chat, our Contact Us page, email support, or our toll-free number. We're here to help 24/7.",
  },
  {
    question: "Do you have a mobile application?",
    answer:
      "Yes! Dolleer Sewa is available on both Android and iOS platforms. Download our app for faster and more convenient service.",
  },
];

// FAQ Section with enhanced UI
export default function FAQQues() {
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
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="text-center">
              <p className="text-gray-300 mb-4">Still have questions?</p>
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
