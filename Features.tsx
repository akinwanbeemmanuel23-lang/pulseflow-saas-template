import { useInView } from '../hooks/useInView';
import {
  Workflow, Bell, BarChart3, Puzzle, Bot, Lock,
  Globe, Repeat, FileText, Users2, Palette, Gauge
} from 'lucide-react';

const features = [
  {
    icon: Workflow,
    title: 'Visual Workflow Builder',
    description: 'Drag-and-drop interface to create powerful automations without writing a single line of code.',
  },
  {
    icon: Puzzle,
    title: '200+ Integrations',
    description: 'Connect Slack, Gmail, Notion, Salesforce, HubSpot, and hundreds more in seconds.',
  },
  {
    icon: Bot,
    title: 'AI-Powered Automations',
    description: 'Let AI suggest optimal workflows based on your team\'s patterns and goals.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Real-time metrics on workflow performance, bottlenecks, and time saved.',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Get alerted only when it matters. Reduce noise, increase action.',
  },
  {
    icon: Repeat,
    title: 'Conditional Logic',
    description: 'Build branching workflows with if/then rules, filters, and custom triggers.',
  },
  {
    icon: Users2,
    title: 'Team Collaboration',
    description: 'Share workflows, assign tasks, and collaborate in real-time across your organization.',
  },
  {
    icon: Lock,
    title: 'Role-Based Access',
    description: 'Granular permissions ensure the right people have access to the right workflows.',
  },
  {
    icon: Globe,
    title: 'Webhooks & API',
    description: 'Full REST API and webhook support for custom integrations and advanced use cases.',
  },
  {
    icon: FileText,
    title: 'Audit Logs',
    description: 'Complete activity history for compliance, debugging, and peace of mind.',
  },
  {
    icon: Palette,
    title: 'Custom Branding',
    description: 'White-label your workspace with custom domains, logos, and colors.',
  },
  {
    icon: Gauge,
    title: '99.9% Uptime SLA',
    description: 'Enterprise-grade infrastructure with guaranteed reliability and global CDN.',
  },
];

export default function Features() {
  const { ref, inView } = useInView(0.05);

  return (
    <section id="features" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Features</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-5">
            Everything you need to <span className="gradient-text">automate</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Powerful features wrapped in a simple interface. No engineering degree required.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group relative bg-gray-50 hover:bg-white rounded-2xl p-6 border border-transparent hover:border-primary-100 hover:shadow-lg transition-all duration-300 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={inView ? { animationDelay: `${i * 0.05}s` } : undefined}
            >
              <div className="w-10 h-10 bg-white group-hover:bg-primary-50 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:shadow-none transition-all">
                <feature.icon className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-1.5">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
