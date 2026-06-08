import { useInView } from '../hooks/useInView';
import { AlertTriangle, Frown, Clock, ArrowRight, Sparkles, Zap, Heart } from 'lucide-react';

export default function ProblemSolution() {
  const { ref, inView } = useInView(0.15);

  const problems = [
    { icon: Clock, text: 'Wasting 20+ hours/week on repetitive manual tasks' },
    { icon: Frown, text: 'Drowning in disconnected apps and spreadsheets' },
    { icon: AlertTriangle, text: 'Missing deadlines because nothing is automated' },
  ];

  const solutions = [
    { icon: Zap, text: 'Connect all your tools in one central hub' },
    { icon: Sparkles, text: 'Build automations with simple drag-and-drop' },
    { icon: Heart, text: 'Reclaim your time and focus on high-impact work' },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">The Problem</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-5">
            Your team is drowning in <span className="gradient-text">busywork</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            The average knowledge worker spends 60% of their time on "work about work" — 
            toggling between apps, updating spreadsheets, and chasing status updates. It's exhausting. There's a better way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Problem Card */}
          <div className={`relative group ${inView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-white border border-red-100 rounded-3xl p-8 lg:p-10 h-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 rounded-full text-sm font-medium text-red-600 mb-6">
                <AlertTriangle className="w-4 h-4" />
                Without PulseFlow
              </div>
              <div className="space-y-5">
                {problems.map((p, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                      <p.icon className="w-5 h-5 text-red-500" />
                    </div>
                    <p className="text-gray-600 leading-relaxed pt-1.5">{p.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-red-50/50 rounded-2xl border border-red-100">
                <p className="text-sm text-red-600 font-medium">
                  ❌ Result: Burnout, missed targets, and frustrated teams
                </p>
              </div>
            </div>
          </div>

          {/* Solution Card */}
          <div className={`relative group ${inView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-white border border-primary-100 rounded-3xl p-8 lg:p-10 h-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 rounded-full text-sm font-medium text-primary-600 mb-6">
                <Sparkles className="w-4 h-4" />
                With PulseFlow
              </div>
              <div className="space-y-5">
                {solutions.map((s, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                      <s.icon className="w-5 h-5 text-primary-500" />
                    </div>
                    <p className="text-gray-600 leading-relaxed pt-1.5">{s.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-primary-50/50 rounded-2xl border border-primary-100">
                <p className="text-sm text-primary-600 font-medium">
                  ✅ Result: 20+ hours saved per week, happier teams, faster growth
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 ${inView ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
          <a href="#features" className="group inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
            See how it works
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
