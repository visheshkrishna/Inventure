export default function Features() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            The Future of Recruitment
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            We&apos;re building a new model that combines three powerful elements to revolutionize how recruitment works.
          </p>
        </div>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Revenue Sharing */}
          <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="ml-4 text-xl font-semibold text-slate-900">Revenue Sharing</h3>
            </div>
            <div className="mb-6 mt-8">
              <img 
                src="/img7.png" 
                alt="Revenue Sharing Illustration" 
                className="w-full h-65 rounded-lg"
              />
            </div>
            <p className="text-slate-600 leading-relaxed">
              This changes the traditional way recruiters get paid. Instead of just earning a commission on their own successful placements,
               they also share in the overall company&apos;s success. This model incentivizes collaboration and teamwork, because the more successful the entire network is, the more everyone earns.
            </p>
          </div>

          {/* Card 2: Marketing Engine */}
          <div id="about" className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow scroll-mt-20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="ml-4 text-xl font-semibold text-slate-900">Marketing Engine</h3>
            </div>
            <div className="mb-6 mt-8">
              <img 
                src="/img5.png" 
                alt="Marketing Engine Illustration" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-slate-600 leading-relaxed">
              This is designed to make the recruiter&apos;s job easier and more efficient. It handles the initial, time-consuming part of the process, like finding and attracting qualified candidates. This frees up the recruiter to focus on what matters most: building strong relationships with both candidates and clients to ensure a perfect match.
            </p>
          </div>

          {/* Card 3: Competitive Broker Community */}
          <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="ml-4 text-xl font-semibold text-slate-900">Broker Community</h3>
            </div>
            <div className="mb-6 mt-8">
              <img 
                src="/img6.png" 
                alt="Competitive Broker Community Illustration" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-slate-600 leading-relaxed">
              This creates an environment of shared knowledge and healthy competition. Recruiters can connect with their peers to get advice on difficult roles, share best practices, and learn from top performers. The &quot;competitive&quot; part motivates them to push themselves and achieve more, while the &quot;community&quot; aspect provides a support system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
