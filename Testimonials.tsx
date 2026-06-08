import { useInView } from '../hooks/useInView';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "PulseFlow replaced 5 different tools we were paying for. Our team saves over 25 hours a week on manual data entry alone. It's genuinely changed how we operate.",
    name: 'Sarah Chen',
    role: 'Head of Operations',
    company: 'TechScale Inc.',
    avatar: 'SC',
    color: 'bg-primary-500',
    rating: 5,
    metric: '25hrs/week saved',
  },
  {
    quote: "We went from idea to fully automated onboarding flow in under an hour. No devs needed. Our conversion rate jumped 34% in the first month.",
    name: 'Marcus Johnson',
    role: 'Growth Lead',
    company: 'RapidLaunch',
    avatar: 'MJ',
    color: 'bg-accent-500',
    rating: 5,
    metric: '34% more conversions',
  },
  {
    quote: "As a non-technical founder, I was able to automate our entire customer support workflow. Response times dropped from 4 hours to 12 minutes.",
    name: 'Elena Rodriguez',
    role: 'CEO & Founder',
    company: 'NovaBrand',
    avatar: 'ER',
    color: 'bg-emerald-500',
    rating: 5,
    metric: '4hrs → 12min response',
  },
  {
    quote: "The AI suggestions are incredible. PulseFlow literally told us where our bottlenecks were and built the automation to fix them. ROI was obvious within a week.",
    name: 'David Park',
    role: 'VP Engineering',
    company: 'CloudNine Labs',
    avatar: 'DP',
    color: 'bg-amber-500',
    rating: 5,
    metric: '10x ROI in 7 days',
  },
  {
    quote: "We've tried Zapier, Make, and n8n. PulseFlow is the only one our whole team actually enjoys using. The UX is on another level.",
    name: 'Aisha Patel',
    role: 'Product Manager',
    company: 'DesignOps Co.',
    avatar: 'AP',
    color: 'bg-pink-500',
    rating: 5,
    metric: 'Team adoption: 100%',
  },
  {
    quote: "SOC 2 compliance was a must for us. PulseFlow checked every box on security and still managed to be the most user-friendly option out there.",
    name: 'James Mitchell',
    role: 'CTO',
    company: 'SecureStack',
    avatar: 'JM',
    color: 'bg-indigo-500',
    rating: 5,
    metric: 'SOC 2 compliant',
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView(0.1);

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-5">
            Loved by <span className="gradient-text">12,000+ teams</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Don't just take our word for it — hear from the teams who transformed their workflows with PulseFlow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-lg transition-all duration-300 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={inView ? { animationDelay: `${i * 0.1}s` } : undefined}
            >
              <Quote className="w-8 h-8 text-primary-100 mb-4" />
              
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400" fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">"{t.quote}"</p>

              {/* Metric Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-primary-50 rounded-full text-xs font-semibold text-primary-600 mb-5">
                📈 {t.metric}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-50">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
