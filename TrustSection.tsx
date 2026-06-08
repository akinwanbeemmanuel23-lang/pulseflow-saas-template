import { useInView } from '../hooks/useInView';
import { Shield, Server, Lock, Award, Clock, Globe } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    title: 'SOC 2 Type II',
    description: 'Independently audited for security, availability, and confidentiality.',
  },
  {
    icon: Lock,
    title: 'GDPR Compliant',
    description: 'Full data protection compliance for EU customers and beyond.',
  },
  {
    icon: Server,
    title: '99.9% Uptime SLA',
    description: 'Enterprise-grade infrastructure with guaranteed reliability.',
  },
  {
    icon: Award,
    title: '256-bit Encryption',
    description: 'Bank-level encryption for data in transit and at rest.',
  },
  {
    icon: Clock,
    title: '24/7 Monitoring',
    description: 'Round-the-clock system monitoring and incident response.',
  },
  {
    icon: Globe,
    title: 'Global CDN',
    description: 'Lightning-fast performance with servers on every continent.',
  },
];

export default function TrustSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-sm font-semibold text-primary-400 uppercase tracking-wider">Security & Trust</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-5">
            Your data is safe with us
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            We take security seriously. PulseFlow is built on enterprise-grade infrastructure 
            with the certifications and compliance your organization demands.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge, i) => (
            <div
              key={i}
              className={`group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-500/30 rounded-2xl p-7 transition-all duration-300 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={inView ? { animationDelay: `${i * 0.08}s` } : undefined}
            >
              <div className="w-12 h-12 bg-primary-500/10 group-hover:bg-primary-500/20 rounded-2xl flex items-center justify-center mb-5 transition-colors">
                <badge.icon className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{badge.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{badge.description}</p>
            </div>
          ))}
        </div>

        {/* Founder Note */}
        <div className={`mt-16 max-w-3xl mx-auto text-center ${inView ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
            <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
              AK
            </div>
            <p className="text-gray-300 italic leading-relaxed mb-4">
              "We built PulseFlow because we were tired of burning hours on tasks that should take seconds. 
              Security isn't a feature for us — it's a foundation. Every line of code is written with your 
              data protection in mind."
            </p>
            <p className="text-sm font-semibold text-white">Alex Kim</p>
            <p className="text-xs text-gray-500">Co-founder & CTO, PulseFlow</p>
          </div>
        </div>
      </div>
    </section>
  );
}
