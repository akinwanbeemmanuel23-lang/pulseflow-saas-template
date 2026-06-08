import { useInView } from '../hooks/useInView';
import { ArrowRight, Zap } from 'lucide-react';

export default function FinalCTA() {
  const { ref, inView } = useInView(0.2);

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-100/40 to-accent-400/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={inView ? 'animate-fade-in-up' : 'opacity-0'}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl shadow-xl shadow-primary-500/25 mb-8 animate-pulse-glow">
            <Zap className="w-8 h-8 text-white" fill="white" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Ready to automate
            <br />
            <span className="gradient-text">your growth?</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join 12,000+ teams who saved thousands of hours with PulseFlow. 
            Start free today — no credit card, no commitment, no risk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 text-lg font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 px-10 py-4.5 rounded-2xl shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 transition-all hover:-translate-y-0.5"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-lg font-semibold text-gray-600 hover:text-gray-900 px-8 py-4.5 transition-colors"
            >
              See how it works →
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-400">
            Free forever plan available • Setup in 2 minutes • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
