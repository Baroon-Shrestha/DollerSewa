export default function FAQHelper({ id, question, answer, isOpen, onClick }) {
  return (
    <div className="group relative overflow-hidden">
      <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:bg-white/15 hover:border-blue-400/30">
        <button
          id={`faq-button-${id}`}
          aria-controls={`faq-panel-${id}`}
          aria-expanded={isOpen}
          onClick={onClick}
          className="w-full flex justify-between items-center text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-2xl group"
        >
          <span className="text-lg md:text-xl font-semibold text-blue-400 group-hover:text-blue-300 transition-colors duration-300 pr-4">
            {question}
          </span>

          {/* Enhanced icon with blue accent */}
          <div className="relative flex-shrink-0">
            <div
              className={`w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30 group-hover:bg-blue-500/30 transition-all duration-300 ${
                isOpen ? "bg-blue-500/40 border-blue-400/50" : ""
              }`}
            >
              <svg
                className={`w-5 h-5 text-blue-400 transform transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </button>

        {/* Enhanced answer section with smooth animation */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            id={`faq-panel-${id}`}
            role="region"
            aria-labelledby={`faq-button-${id}`}
            className="px-6 pb-6 text-gray-200 text-base md:text-lg leading-relaxed"
          >
            {/* Blue accent line */}
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 mb-4"></div>
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
