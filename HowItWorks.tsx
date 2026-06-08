import { useInView } from '../hooks/useInView';

const steps = [
  {
    number: '01',
    title: 'Connect Your Tools',
    description: 'Sign up in 30 seconds and connect the apps your team already uses. We support 200+ integrations out of the box — no API keys needed.',
    image: '/images/dashboard-step1.png',
    alt: 'PulseFlow onboarding — connect your apps',
  },
  {
    number: '02',
    title: 'Build Your Workflows',
    description: 'Use our visual drag-and-drop builder to create automations. Choose from 100+ templates or build from scratch. AI helps you optimize every step.',
    image: '/images/dashboard-step2.png',
    alt: 'PulseFlow workflow builder — drag and drop automations',
  },
  {
    number: '03',
    title: 'Launch & Scale',
    description: 'Hit "Activate" and watch your workflows run on autopilot. Monitor performance in real-time and scale effortlessly as your team grows.',
    image: '/images/dashboard-step3.png',
    alt: 'PulseFlow dashboard — real-time analytics and monitoring',
  },
];

export default function HowItWorks() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="how-it-works" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-5">
            Up and running in <span className="gradient-text">under 2 minutes</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            No onboarding calls, no implementation fees, no waiting. Just three simple steps.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''} ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={inView ? { animationDelay: `${i * 0.15}s` } : undefined}
            >
              {/* Content */}
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center gap-3 mb-5">
                  <span className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-br from-primary-200 to-primary-100 bg-clip-text text-transparent">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">
                  {step.description}
                </p>
                {i === steps.length - 1 && (
                  <a
                    href="#pricing"
                    className="inline-flex items-center gap-2 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 px-7 py-3.5 rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all hover:-translate-y-0.5"
                  >
                    Start Free Now
                  </a>
                )}
              </div>

              {/* Image */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-2xl blur-xl" />
                  <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200/60 overflow-hidden">
                    <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <img
                      src={step.image}
                      alt={step.alt}
                      className="w-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
