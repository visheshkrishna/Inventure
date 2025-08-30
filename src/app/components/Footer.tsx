export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - Branding & Contact */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                <div className="w-6 h-6 bg-teal-400 rounded-full"></div>
                <div className="w-6 h-6 bg-teal-400 rounded-full -ml-2"></div>
              </div>
              <span className="text-xl font-bold">Inventure</span>
            </div>

            {/* Contact Us */}
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p className="text-white">Telephone</p>
                <p className="text-white">
                  Email: <a href="mailto:info@inventurerecruitment.com" className="underline hover:text-teal-400 transition-colors">info@inventurerecruitment.com</a>
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-bold text-lg mb-4">Find us on social</h3>
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-black font-bold text-sm">in</span>
              </div>
            </div>
          </div>

          {/* Middle Section - Useful Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Meet The Team</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Join Us</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Sectors</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Job Search</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Right Section - Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="mb-2 md:mb-0">
              <span>2025 Inventure Recruitment</span>
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-teal-400 transition-colors">Cookie Policy</a>
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-teal-400 transition-colors">Terms & Conditions</a>
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-teal-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
