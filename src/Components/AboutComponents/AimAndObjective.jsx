import React from "react";

export default function AimAndObjective() {
  return (
    <section className="mx-6 mt-20 rounded-4xl bg-gradient-to-br from-slate-600/70 via-blue-900/60 to-indigo-950/50 py-20 px-6 flex items-center justify-center text-white">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        {/* Heading */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our <span className="text-blue-400">Aim & Objectives</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Empowering users in Nepal with easy, fast, and affordable access to
            premium global services using foreign currency payment solutions.
          </p>
        </div>

        {/* Objectives List */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {[
            "Provide seamless foreign payment options for digital services like ChatGPT, Canva, Netflix, and more.",
            "Ensure fast and secure transactions with complete transparency.",
            "Educate users about digital subscriptions and their benefits with local language support.",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-md"
            >
              <h4 className="text-xl font-semibold mb-2 text-blue-300">
                Objective {index + 1}
              </h4>
              <p className="text-gray-200">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
