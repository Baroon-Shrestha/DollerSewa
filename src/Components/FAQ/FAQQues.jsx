import React, { useState } from "react";
import FAQHelper from "../HomeComponents/FAQHelper";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is Doller Sewa?",
    answer:
      "Doller Sewa is Nepal's trusted platform for purchasing international digital services like ChatGPT Plus, Netflix, Canva Pro, and more—locally and affordably.",
  },
  {
    question: "How do I buy a service?",
    answer:
      "Simply add the service to your cart and proceed to checkout. Your order is confirmed via WhatsApp, where our support team guides you through the final steps.",
  },
  {
    question: "Do I need a dollar card or international payment method?",
    answer:
      "No, Doller Sewa eliminates the need for dollar cards. We handle the international payment on your behalf and collect local payment directly from you.",
  },
  {
    question: "Is WhatsApp checkout secure?",
    answer:
      "Yes. All communication is encrypted via WhatsApp, and our team ensures your transaction is handled safely and transparently.",
  },
  {
    question: "What services can I buy?",
    answer:
      "You can purchase premium subscriptions like ChatGPT Plus, Netflix Premium, YouTube Premium, Canva Pro, Grammarly, and other digital tools.",
  },
  {
    question: "How long does it take to activate a service?",
    answer:
      "Most services are activated within 10 to 30 minutes after confirmation and payment. For certain products, it may take up to 24 hours.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes, after your order is placed, you'll receive real-time updates through WhatsApp regarding payment confirmation and service activation.",
  },
  {
    question: "Is Doller Sewa mobile friendly?",
    answer:
      "Absolutely! Our website is fully responsive and optimized for mobile devices, making it easy to browse, order, and chat on the go.",
  },
  {
    question: "Is there customer support?",
    answer:
      "Yes. Our support team is available 24/7 via WhatsApp and our Contact page to assist you with orders, inquiries, and technical help.",
  },
  {
    question: "Why choose Doller Sewa over others?",
    answer:
      "We offer unmatched convenience, local pricing, personalized WhatsApp support, and a user-friendly experience designed specifically for Nepali users.",
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
