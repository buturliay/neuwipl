export default function Join() {
    return (
      <section
        id="join"
        className="text-center w-full px-6 sm:px-12 lg:px-24 py-16 scroll-mt-24 mb-10"
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 uppercase mb-6">
          How To Join
        </h2>
        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed sm:leading-loose max-w-7xl mx-auto">
        Women in Pre-Law is open to all undergraduate women at Northeastern University who are interested 
        in pursuing a career in law! To join, simply register using the form linked below and attend our meetings. 
        
        Join the slack channel and mailing list to stay updated!
        </p>
        <div className="flex justify-center gap-[30px] mt-8">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd0qjHSXvBkOn77IlkP6rGuQPcdm38widqTC79SZmM6g0v5bQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-2 border border-pink600 text-pink-600 text-m font-inter rounded-sm transition-colors hover:bg-pink-500 hover:text-white">
              form →
            </button>
          </a>
          <a
            href="https://linktr.ee/northeasternwomeninprelaw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-2 border border-pink-600 text-pink-600 text-m font-inter rounded-sm transition-colors hover:bg-pink-500 hover:text-white">
              linktree →
            </button>
          </a>
        </div>

      </section>
    );
  }
  