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
    <section className="bg-gradint-to-br from-slate-100 via-blue-50 to-indigo-100 h-auto md:h-[80vh] px-6 py-20 flex items-center justify-center">
      <div
        ref={ref}
        className={`container mx-auto flex flex-wrap items-start justify-center gap-12 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* === Left: Image === */}
        <div className="flex-1 min-w-[250px] max-w-sm">
          <img
            src="/uploads/intro.jpg" // Make sure this image is placed in the `public/` folder
            alt="Doller Sewa Logo"
            className="w-full h-auto rounded-xl shadow-xl"
          />
        </div>

        {/* === Right: Text Content === */}
        <div className="flex-1 min-w-[300px] max-w-2xl text-ray-800">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-center md:text-left">
            Who Are We?
          </h2>
          <div className="text-base md:text-lg font-extralight text-justify">
            <p className=" leading-relaxed mb-4">
              At{" "}
              <span className="font-semibold text-blue-600">Doller Sewa</span>,
              we specialize in providing seamless and reliable solutions for
              purchasing foreign-currency-based online services from Nepal.
              Whether it's subscribing to platforms like Spotify, Netflix, or
              purchasing international software, we simplify the entire process
              for users who don’t have access to international payment methods.
            </p>
            <p className=" mb-4">
              Navigating online transactions in Nepal can be challenging due to
              strict currency and payment restrictions. That’s where we step in
              — offering transparent, secure, and affordable digital solutions
              tailored to modern Nepali users.
            </p>
            <p className="">
              Our mission is to empower individuals and businesses in Nepal to
              connect globally through access to digital services,
              subscriptions, and tools that were previously out of reach. With a
              dedicated support team and streamlined payment methods, Doller
              Sewa is your trusted partner for accessing the marketplace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
