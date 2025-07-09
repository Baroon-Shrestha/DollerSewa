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

  return (
    <section className="bg-gray-50 py-24 px-6 md:px-20">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto text-center transition-opacity transition-transform duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-900 tracking-tight">
          Why Choose{" "}
          <span className="text-[#D1863C] underline decoration-2 decoration-[#D1863C]/50">
            Dolleer Sewa
          </span>
          ?
        </h2>

        <div className="grid gap-10 md:grid-cols-3 mt-12 text-left">
          {[
            {
              title: "Trusted Team",
              description:
                "Our experienced professionals deliver reliable and transparent service every time.",
            },
            {
              title: "Fast & Efficient",
              description:
                "We provide fast and accurate solutions tailored to your needs and timeline.",
            },
            {
              title: "Client-Focused",
              description:
                "Your satisfaction is our priority. We work with integrity, care, and commitment.",
            },
          ].map(({ title, description }) => (
            <div
              key={title}
              className="bg-white p-8 rounded-xl shadow-md cursor-default
                         transform transition duration-300 ease-in-out
                         hover:shadow-2xl hover:scale-[1.03]
                         group"
            >
              <h4 className="text-2xl font-semibold mb-4 text-[#D1863C] group-hover:text-[#a35d1b] transition-colors duration-300">
                {title}
              </h4>
              <p className="text-gray-700 leading-relaxed text-base group-hover:text-gray-900 transition-colors duration-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
