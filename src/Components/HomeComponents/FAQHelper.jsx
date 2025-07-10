export default function FAQHelper({ id, question, answer, isOpen, onClick }) {
  return (
    <div className="group relative overflow-hidden">
      <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out hover:bg-gradient-to-br hover:from-white/10 hover:to-white/15 hover:border-blue-300/20 hover:shadow-blue-500/10">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        {/* Animated border glow */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 opacity-0 transition-opacity duration-700 ${
            isOpen ? "opacity-100" : "group-hover:opacity-50"
          }`}
        ></div>
        <div className="absolute inset-[1px] bg-gradient-to-br from-slate-900/40 to-slate-800/40 rounded-2xl"></div>

        <div className="relative z-10">
          <button
            id={`faq-button-${id}`}
            aria-controls={`faq-panel-${id}`}
            aria-expanded={isOpen}
            onClick={onClick}
            className="w-full flex justify-between items-center text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-2xl group transition-all duration-500"
          >
            <span
              className={`text-lg md:text-xl font-semibold pr-4 transition-all duration-500 ${
                isOpen
                  ? "text-blue-100 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent"
                  : "text-slate-100 group-hover:text-blue-200"
              }`}
            >
              {question}
            </span>

            {/* Enhanced Chevron Icon */}
            <div className="relative flex-shrink-0">
              {/* Outer glow ring */}
              <div
                className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 opacity-0 scale-110 transition-all duration-500 ${
                  isOpen
                    ? "opacity-100 scale-125"
                    : "group-hover:opacity-50 group-hover:scale-115"
                }`}
              ></div>

              {/* Main button */}
              <div
                className={`relative w-10 h-10 rounded-full bg-gradient-to-br flex items-center justify-center border transition-all duration-500 ${
                  isOpen
                    ? "from-blue-500/40 to-purple-500/40 border-blue-400/60 shadow-lg shadow-blue-500/25"
                    : "from-blue-500/20 to-purple-500/20 border-blue-400/30 group-hover:from-blue-500/30 group-hover:to-purple-500/30 group-hover:border-blue-400/50"
                }`}
              >
                <svg
                  className={`w-5 h-5 transition-all duration-500 ease-out ${
                    isOpen
                      ? "text-blue-300 rotate-180 scale-110"
                      : "text-blue-400 group-hover:text-blue-300 group-hover:scale-105"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </button>

          {/* Answer Content with smooth height animation */}
          <div
            className={`overflow-hidden transition-all duration-700 ease-out ${
              isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div
              id={`faq-panel-${id}`}
              role="region"
              aria-labelledby={`faq-button-${id}`}
              className={`px-6 pb-6 text-slate-200 text-base md:text-lg leading-relaxed transition-all duration-700 delay-150 ${
                isOpen ? "translate-y-0" : "translate-y-2"
              }`}
            >
              {/* Enhanced gradient divider */}
              <div className="relative mb-4">
                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full"></div>
                <div className="absolute inset-0 w-16 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full blur-sm opacity-60"></div>
              </div>

              <div className="text-slate-300 group-hover:text-slate-200 transition-colors duration-500">
                {answer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
