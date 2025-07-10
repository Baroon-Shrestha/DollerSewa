import React, { useState } from "react";

export default function Whyus() {
  const [selected, setSelected] = useState(null);

  const cards = [
    {
      title: "Instant Payment Processing",
      description:
        "No delays — get your international payments processed within minutes for top platforms like ChatGPT, Midjourney, Canva, and more.",
    },
    {
      title: "Local Currency, Global Access",
      description:
        "Pay in NPR. Get access to USD-based services without any international cards or PayPal accounts.",
    },
    {
      title: "Secure & Transparent",
      description:
        "No hidden fees. Clear breakdown of charges and 100% payment transparency at every step.",
    },
    {
      title: "Flexible Services for All",
      description:
        "Whether you're a student, freelancer, gamer, or small business — we tailor services to your use case.",
    },
    {
      title: "Growing Trusted Community",
      description:
        "Join 1000+ happy users who've simplified their global payments with DollerSewa.",
    },
    {
      title: "WhatsApp based Support & checkout",
      description:
        "Got a question or custom need? Our support team is one message away — fast, friendly, and real humans.",
    },
  ];

  return (
    <section className="container mx-auto py-20">
      <div className=" text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            DollerSewa?
          </span>
        </h2>
        <p className=" text-lg mb-8 max-w-3xl mx-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          cupiditate debitis voluptas exercitationem obcaecati beatae cumque
          molestiae fugit, fuga culpa.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12 text-left mx-4">
          {cards.map(({ title, description }, index) => {
            const isSelected = selected === index;
            return (
              <div
                key={title}
                onClick={() => setSelected(isSelected ? null : index)}
                className={`
                  p-8 rounded-xl cursor-pointer
                  transform transition duration-200 ease-in-out
                  hover:shadow-lg hover:scale-[1.02]
                  ${
                    isSelected
                      ? "bg-white shadow-lg scale-[1.02]"
                      : "bg-white shadow-md"
                  }
                `}
              >
                <h4 className="text-xl font-semibold mb-4 text-blue-600">
                  {title}
                </h4>
                <p className="leading-relaxed text-gray-700 text-sm">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
