import { useInView } from '../hooks/useInView';
import { Rocket, Clock, DollarSign, BarChart3, Shield } from 'lucide-react';

const props = [
  {
    icon: Clock,
    title: 'Save 20+ Hours Per Week',
    description: 'Automate the repetitive tasks that drain your team. Every workflow you automate is time you get back.',
    stat: '20hrs',
    statLabel: 'saved weekly',
    color: 'from-blue-500 to-cyan-400',
    bg: 'bg-blue-50',
    text: 'text-blue-600',
  },
  {
    icon: Rocket,
    title: '10x Team Productivity',
    description: 'Let your team focus on creative, high-impact work while PulseFlow handles the busy-work automatically.',
    stat: '10x',
    statLabel: 'faster output',
    color: 'from-primary-500 to-violet-400',
    bg: 'bg-primary-50',
    text: 'text-primary-600',
  },
  {
    icon: DollarSign,
    title: 'Cut Costs by 40%',
    description: 'Replace expensive manual processes and redundant tools. One platform to rule them all — at a fraction of the cost.',
    stat: '40%',
    statLabel: 'cost reduction',
    color: 'from-emerald-500 to-teal-400',
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Insights',
    description: 'See exactly how your workflows perform. Track bottlenecks, measure outcomes, and optimize in real-time.',
    stat: '99.9%',
    statLabel: 'uptime SLA',
    color: 'from-amber-500 to-orange-400',
    bg: 'bg-amber-50',
    text: 'text-amber-600',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'SOC 2 certified, end-to-end encryption, GDPR compliant. Your data is safe with bank-level protection.',
    stat: 'SOC 2',
    statLabel: 'certified',
    color: 'from-rose-500 to-pink-400',
    bg: 'bg-rose-50',
    text: 'text-rose-600',
  },
];

export default function ValueProps() {
  const { ref, inView } = useInView(0.1);

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Why PulseFlow</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-5">
            Results that speak for <span className="gradient-text">themselves</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Don't just take our word for it. These are the measurable outcomes our customers experience within the first 30 days.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {props.map((prop, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''} ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={inView ? { animationDelay: `${i * 0.1}s` } : undefined}
            >
              <div className={`w-12 h-12 ${prop.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <prop.icon className={`w-6 h-6 ${prop.text}`} />
              </div>
              <div className={`text-3xl font-extrabold bg-gradient-to-r ${prop.color} bg-clip-text text-transparent mb-0.5`}>
                {prop.stat}
              </div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">{prop.statLabel}</p>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{prop.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
