import React, { useEffect, useState, useRef } from "react";

// Scroll animation hook
function useInView(threshold = 0.3) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

export default function Why() {
  const [ref, isVisible] = useInView(0.3);

  const cards = [
    {
      title: "Trusted Team",
      description:
        "Our experienced professionals deliver reliable and transparent service every time.",
      icon: "🛡️",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Fast & Efficient",
      description:
        "We provide fast and accurate solutions tailored to your needs and timeline.",
      icon: "⚡",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Client-Focused",
      description:
        "Your satisfaction is our priority. We work with integrity, care, and commitment.",
      icon: "🎯",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div
        ref={ref}
        className={`container mx-auto text-center transition-all duration-1000 ease-out relative z-10 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Doller Sewa?
            </span>
          </h2>
          <p className="max-w-3xl text-lg mx-auto leading-relaxed">
            Experience excellence with our comprehensive financial services
            designed for your success.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          {cards.map(({ title, description, icon, color }) => (
            <div
              key={title}
              className="p-8 rounded-2xl border border-gray-200 bg-white/80 shadow-xl backdrop-blur-md text-left hover:shadow-2xl transition-all"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-2xl bg-gradient-to-br ${color} text-white shadow-lg`}
              >
                {icon}
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">{title}</h4>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
