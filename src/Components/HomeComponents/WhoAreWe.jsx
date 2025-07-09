import React, { useEffect, useState, useRef } from "react";

function useInView(threshold = 0.3) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate once
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

export default function WhoAreWe() {
  const [ref, isVisible] = useInView(0.3);

  return (
    <section className="bg-white text-gray-900 py-20 px-6 md:px-20">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center transition-opacity transition-transform duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-gray-900 drop-shadow-sm">
          Who Are We?
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          At <span className="font-semibold text-[#D1863C]">Dolleer Sewa</span>, we
          are committed to providing trusted, efficient, and customized
          services designed to meet your unique needs. Our dedicated team
          combines expertise with passion to empower our clients to build a
          better tomorrow with integrity and excellence.
        </p>
      </div>
    </section>
  );
}
