import { ArrowRight, Play, Star, Users, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-primary-100/60 via-primary-50/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-accent-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary-200/20 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-200 rounded-full text-sm font-medium text-primary-700 mb-6 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Now in Public Beta — Free for Early Adopters
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6 animate-fade-in-up delay-100" style={{ opacity: 0 }}>
            Automate Your Workflows.
            <br />
            <span className="gradient-text">10x Your Productivity.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200" style={{ opacity: 0 }}>
            PulseFlow connects your apps, automates repetitive tasks, and gives your team 
            superpowers — so you can focus on what actually matters. No code required.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up delay-300" style={{ opacity: 0 }}>
            <a
              href="#pricing"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 px-8 py-4 rounded-2xl shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 transition-all hover:-translate-y-0.5"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#how-it-works"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 px-8 py-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              <Play className="w-5 h-5 text-primary-500" fill="currentColor" />
              Watch Demo
            </a>
          </div>

          {/* Social Proof Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm text-gray-500 animate-fade-in-up delay-400" style={{ opacity: 0 }}>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['bg-primary-400', 'bg-accent-500', 'bg-pink-400', 'bg-amber-400'].map((bg, i) => (
                  <div key={i} className={`w-7 h-7 ${bg} rounded-full border-2 border-white flex items-center justify-center`}>
                    <Users className="w-3 h-3 text-white" />
                  </div>
                ))}
              </div>
              <span className="font-semibold text-gray-700">12,000+</span> teams
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400" fill="currentColor" />
                ))}
              </div>
              <span><span className="font-semibold text-gray-700">4.9/5</span> rating</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-primary-500" />
              <span><span className="font-semibold text-gray-700">2 min</span> setup</span>
            </div>
          </div>
        </div>

        {/* Product Screenshot */}
        <div className="mt-16 lg:mt-20 relative animate-fade-in-up delay-500" style={{ opacity: 0 }}>
          <div className="relative mx-auto max-w-5xl">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 via-primary-500/5 to-transparent rounded-3xl blur-2xl -m-4" />
            
            {/* Browser Frame */}
            <div className="relative bg-white rounded-2xl lg:rounded-3xl shadow-2xl shadow-gray-900/10 border border-gray-200/60 overflow-hidden">
              {/* Browser Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded-lg border border-gray-200 px-4 py-1.5 text-xs text-gray-400 text-center max-w-md mx-auto">
                    app.pulseflow.io/dashboard
                  </div>
                </div>
              </div>
              {/* Screenshot */}
              <img
                src="/images/dashboard-preview.png"
                alt="PulseFlow Dashboard — Real-time workflow analytics and automation builder"
                className="w-full"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
