export default function AIFeatures() {
  return (
    <section id="coming-soon" className="pt-2 pb-20 bg-gray-100 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            AI FEATURES
          </h2>
        </div>

        {/* AI Job Match Section */}
        <div className="mb-20">
          <div className="flex items-start gap-12">
            {/* Left Side - Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-3xl font-bold text-slate-900">
                  AI Job Match
                </h3>
              </div>
              <p className="text-xl text-slate-600 mb-8">
                Job searching is already hard! Increase your odds with AI matched Jobs
              </p>
              
              {/* Benefits List */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Apply only to Jobs you are qualified for</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Discover matched jobs based on your skills, not only titles</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Say goodbye to fake jobs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Apply early with our custom job alerts</span>
                </li>
              </ul>

              {/* CTA Button */}
              <button className="bg-slate-900 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-colors">
                Start Matching
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right Side - Job Match Card */}
            <div className="w-96">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                {/* Job Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">M</span>
                    </div>
                    <div>
                      <p className="text-green-600 text-sm font-medium">1 hour ago</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-lg">96%</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">Overall</p>
                  </div>
                </div>

                {/* Job Title */}
                <h4 className="font-bold text-slate-900 mb-2">Senior Data Analyst</h4>
                <p className="text-slate-600 mb-4">Microsoft</p>

                {/* Match Breakdown */}
                <div className="flex gap-4 mb-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-1">
                      <span className="text-green-600 font-bold text-sm">100%</span>
                    </div>
                    <p className="text-xs text-slate-600">Exp. Level</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-1">
                      <span className="text-green-600 font-bold text-sm">92%</span>
                    </div>
                    <p className="text-xs text-slate-600">Skill</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-1">
                      <span className="text-green-600 font-bold text-sm">96%</span>
                    </div>
                    <p className="text-xs text-slate-600">Industry Exp.</p>
                  </div>
                </div>

                {/* Fit Analysis */}
                <div>
                  <h5 className="font-semibold text-slate-900 mb-2">Why You Are A Good Fit</h5>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-slate-700">Experience Level</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-slate-700">Relevant Experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-slate-700">Education</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-slate-700">Core Skills</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resume AI Section */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <div className="flex items-start gap-12">
            {/* Left Side - Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
                <h3 className="text-3xl font-bold text-slate-900">
                  Resume AI
                </h3>
              </div>
              <p className="text-xl text-slate-600 mb-8">
                Stand out from the crowd with a top notch resume
              </p>
              
              {/* Benefits List */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Get a professional quality resume in minutes, not hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Keep tailoring your resume with AI and catch HR's eyes in 6 seconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Rest easy knowing your resume will be ATS compatible</span>
                </li>
              </ul>

              {/* CTA Button */}
              <button className="bg-slate-900 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-colors">
                Improve My Resume
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right Side - Resume Card */}
            <div className="w-96">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                {/* Resume Header */}
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-slate-900">Jamie Parker</h4>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-lg">9.0</span>
                    </div>
                    <p className="text-xs text-green-600 font-semibold mt-1">EXCELLENT</p>
                  </div>
                </div>

                {/* Resume Content */}
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-slate-900 border-b-2 border-green-500 pb-1 mb-2">PROFESSIONAL SUMMARY</h5>
                    <p className="text-sm text-slate-600">Experienced software engineer with expertise in distributed systems...</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">SKILLS</h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs text-slate-700">Java</span>
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs text-slate-700">Python</span>
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs text-slate-700">Apache Kafka</span>
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs text-slate-700">Kubernetes</span>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-slate-900 mb-2">EXPERIENCE</h5>
                    <div>
                      <p className="font-medium text-slate-900 text-sm">Distributed Systems Engineer</p>
                      <p className="text-xs text-slate-600">Tech Company • 2022-Present</p>
                    </div>
                  </div>
                </div>

                {/* AI Enhancements */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs text-green-600 font-medium">Summary Enhanced</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs text-green-600 font-medium">Relevant Skills Highlighted</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs text-green-600 font-medium">Recent Work Experience Enhanced</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
