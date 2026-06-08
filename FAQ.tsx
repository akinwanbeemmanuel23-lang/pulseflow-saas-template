import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is PulseFlow really free to start?',
    answer: 'Yes! Our Starter plan is 100% free forever — no credit card required. You get 5 active workflows and 1,000 tasks per month. Upgrade only when your team outgrows it.',
  },
  {
    question: 'How long does setup take?',
    answer: 'Most teams are up and running in under 2 minutes. Just sign up, connect your apps (one-click integrations), and either build a workflow from scratch or choose from 100+ pre-built templates.',
  },
  {
    question: 'Do I need technical skills to use PulseFlow?',
    answer: 'Not at all. PulseFlow is designed for non-technical users. Our visual drag-and-drop builder makes it easy for anyone to create powerful automations. Plus, our AI assistant can suggest and build workflows for you.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Absolutely. There are no long-term contracts or commitments. You can upgrade, downgrade, or cancel your subscription anytime from your account settings. We also offer a 30-day money-back guarantee on all paid plans.',
  },
  {
    question: 'What apps and tools does PulseFlow integrate with?',
    answer: 'We support 200+ integrations including Slack, Gmail, Google Sheets, Notion, Salesforce, HubSpot, Jira, Trello, Stripe, Shopify, and many more. New integrations are added every week. You can also use our API and webhooks for custom connections.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Security is our top priority. PulseFlow is SOC 2 Type II certified, GDPR compliant, and uses 256-bit encryption for all data in transit and at rest. We also offer SSO/SAML for Enterprise customers and maintain a 99.9% uptime SLA.',
  },
  {
    question: 'Who is PulseFlow for?',
    answer: 'PulseFlow is built for anyone who wants to automate repetitive work — from solopreneurs and startups to enterprise teams. Our most popular use cases include marketing automation, customer onboarding, sales ops, HR workflows, and data sync across tools.',
  },
  {
    question: 'What happens if I exceed my task limit?',
    answer: 'We\'ll notify you before you hit your limit. Your workflows won\'t suddenly stop — we give you a grace period and the option to upgrade seamlessly. You\'ll never lose data or miss a critical automation.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, inView } = useInView(0.1);

  return (
    <section id="faq" ref={ref} className="py-20 lg:py-28 bg-gray-50/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-5">
            Got questions? We've got <span className="gradient-text">answers</span>
          </h2>
          <p className="text-lg text-gray-500">
            Everything you need to know about PulseFlow. Can't find what you're looking for?{' '}
            <a href="#" className="text-primary-600 font-medium hover:text-primary-700 underline underline-offset-2">
              Chat with us
            </a>.
          </p>
        </div>

        <div className={`space-y-3 ${inView ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all hover:border-primary-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between text-left p-6 gap-4"
              >
                <span className="text-base font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180 text-primary-500' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-6 text-gray-500 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
