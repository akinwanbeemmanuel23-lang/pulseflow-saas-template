import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'For individuals and small teams getting started with automation.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    cta: 'Start Free',
    popular: false,
    features: [
      '5 active workflows',
      '1,000 tasks/month',
      '10 integrations',
      'Basic analytics',
      'Community support',
      'Single user',
    ],
  },
  {
    name: 'Pro',
    description: 'For growing teams who need powerful automations at scale.',
    monthlyPrice: 29,
    yearlyPrice: 24,
    cta: 'Start 14-Day Free Trial',
    popular: true,
    features: [
      'Unlimited workflows',
      '50,000 tasks/month',
      '200+ integrations',
      'Advanced analytics',
      'AI-powered suggestions',
      'Priority support',
      'Up to 10 team members',
      'Conditional logic & branching',
      'Custom webhooks & API',
    ],
  },
  {
    name: 'Enterprise',
    description: 'For organizations that need security, control, and custom solutions.',
    monthlyPrice: 99,
    yearlyPrice: 79,
    cta: 'Contact Sales',
    popular: false,
    features: [
      'Everything in Pro',
      'Unlimited tasks',
      'Unlimited team members',
      'SOC 2 & GDPR compliance',
      'SSO & SAML',
      'Dedicated account manager',
      'Custom branding',
      'Audit logs & admin controls',
      'SLA guarantee (99.9%)',
      'On-premise deployment option',
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  const { ref, inView } = useInView(0.1);

  return (
    <section id="pricing" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-12 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-5">
            Simple, transparent <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            No hidden fees. No long-term contracts. Start free and upgrade when you're ready.
          </p>
        </div>

        {/* Toggle */}
        <div className={`flex items-center justify-center gap-3 mb-12 ${inView ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
          <span className={`text-sm font-medium ${!annual ? 'text-gray-900' : 'text-gray-400'}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-14 h-7 rounded-full transition-colors ${annual ? 'bg-primary-500' : 'bg-gray-300'}`}
          >
            <span className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${annual ? 'translate-x-7' : ''}`} />
          </button>
          <span className={`text-sm font-medium ${annual ? 'text-gray-900' : 'text-gray-400'}`}>
            Annual
            <span className="ml-1.5 text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">Save 20%</span>
          </span>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-3xl transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-primary-600 to-primary-700 p-[2px] shadow-2xl shadow-primary-500/20 lg:scale-105 lg:-my-4'
                  : ''
              } ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={inView ? { animationDelay: `${i * 0.1 + 0.2}s` } : undefined}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full text-xs font-bold text-white shadow-lg">
                  <Sparkles className="w-3.5 h-3.5" />
                  Most Popular
                </div>
              )}
              <div className={`bg-white rounded-3xl p-8 h-full ${plan.popular ? '' : 'border border-gray-200'}`}>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-400 mb-6">{plan.description}</p>

                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-5xl font-extrabold text-gray-900">
                    ${annual ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  {plan.monthlyPrice > 0 && (
                    <span className="text-gray-400 text-sm">/month</span>
                  )}
                </div>
                {plan.monthlyPrice === 0 ? (
                  <p className="text-sm text-gray-400 mb-6">Free forever</p>
                ) : (
                  <p className="text-sm text-gray-400 mb-6">
                    {annual ? 'Billed annually' : 'Billed monthly'}
                  </p>
                )}

                <a
                  href="#"
                  className={`group w-full flex items-center justify-center gap-2 font-semibold py-3.5 rounded-xl transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <div className="mt-8 space-y-3">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className={`flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-gray-400 ${inView ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <span className="flex items-center gap-1.5">🔒 256-bit SSL Encryption</span>
          <span className="flex items-center gap-1.5">💳 No Credit Card Required</span>
          <span className="flex items-center gap-1.5">🔄 Cancel Anytime</span>
          <span className="flex items-center gap-1.5">🛡️ 30-Day Money-Back Guarantee</span>
        </div>
      </div>
    </section>
  );
}
