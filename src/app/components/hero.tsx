export default function Hero() {
    return (
      <section
        id="hero"
        className="relative isolate bg-gray-100 group overflow-hidden"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* vertical spacing to feel airy */}
          <div className="py-20 sm:py-28 md:py-32 text-center">
            {/* Header */}
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Recruiting Without Limits.
            </h1>
  
            {/* Sub-Header */}
            <p className="mt-4 text-lg text-slate-700 sm:text-xl">
              Speed and Scale.
            </p>
  
            {/* Body Copy */}
            <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 max-w-2xl mx-auto">
              We’re building a new model for recruitment. One that combines revenue sharing, a marketing engine, a competitive broker community, and an AI-driven learning platform. This is recruitment rewritten for the modern era.
            </p>
  
            {/* Optional CTA */}
            <div className="mt-10">
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-900 hover:border-slate-400 transition-colors"
              >
                Learn More
              </a>
              {/* If you prefer: replace with “Coming Soon” text button */}
            </div>
          </div>
          <div className="absolute top-0 -left-20 flex items-start pt-4 transition-transform duration-500 ease-out group-hover:translate-x-20">
            <img src="/img 3.webp" alt="Left" className="w-60 rounded-xl shadow-lg" />
          </div>
          <div className="absolute bottom-0 -right-20 flex items-start pt-4 transition-transform duration-500 ease-out group-hover:-translate-x-20">
            <img src="/img 4.webp" alt="Right" className="w-60 rounded-xl shadow-lg" />
          </div>
          <div className="absolute top-0 -right-20 flex items-start pt-4 transition-transform duration-500 ease-out group-hover:-translate-x-20">
            <img src="/img2.webp" alt="Right" className="w-60 rounded-xl shadow-lg" />
          </div>
          <div className="absolute bottom-0 -left-20 flex items-start pt-4 transition-transform duration-500 ease-out group-hover:translate-x-20">
            <img src="/img1.webp" alt="Left" className="w-60 rounded-xl shadow-lg" />
          </div>
        </div>
      </section>
    );
  }
  