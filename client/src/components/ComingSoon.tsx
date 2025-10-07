export default function ComingSoon({ pageName }: { pageName: string }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-orange-50/10 to-white pt-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-white/80 to-orange-50/40 backdrop-blur-sm rounded-3xl border border-orange-100/50 shadow-xl p-12">
          {/* PaidIn Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-200/50 flex items-center justify-center shadow-lg">
              <img 
                src="/paidin-logo.svg" 
                alt="PaidIn Logo" 
                className="h-12 w-12"
              />
            </div>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full border border-orange-200/50 mb-6">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-2"></div>
            <span className="text-sm font-semibold text-gray-800">Coming Soon</span>
          </div>

          {/* Page Name */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {pageName}
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We're working hard to bring you this page. Check back soon!
          </p>

          {/* Contact */}
          <div className="bg-white/60 rounded-2xl p-6 border border-orange-100/50">
            <p className="text-sm font-semibold text-gray-700 mb-3">Questions? Reach out:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <a 
                href="mailto:connect@paidin.io" 
                className="text-bitcoin hover:text-orange-600 font-semibold transition-colors"
              >
                connect@paidin.io
              </a>
              <span className="hidden sm:inline text-gray-400">|</span>
              <a 
                href="tel:+12815417279" 
                className="text-bitcoin hover:text-orange-600 font-semibold transition-colors"
              >
                (281) 541-7279
              </a>
            </div>
          </div>

          {/* Bitcoin symbol */}
          <p className="text-sm text-gray-500 mt-6">
            The ₿itcoin business revolution is coming
          </p>
        </div>
      </div>
    </section>
  );
}

