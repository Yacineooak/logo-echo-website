
import { Paintbrush, Zap, BarChart, Layout, Shield, RefreshCw } from 'lucide-react';

const features = [
  {
    title: 'Beautiful Designs',
    description: 'Create stunning, professional designs without any design skills required.',
    icon: Paintbrush,
  },
  {
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance, ensuring your websites load quickly.',
    icon: Zap,
  },
  {
    title: 'Analytics',
    description: 'Built-in analytics to track and measure your website performance.',
    icon: BarChart,
  },
  {
    title: 'Responsive',
    description: 'Fully responsive layouts that work perfectly on all devices and screen sizes.',
    icon: Layout,
  },
  {
    title: 'Secure',
    description: 'Enterprise-grade security to keep your data safe and protected.',
    icon: Shield,
  },
  {
    title: 'Regular Updates',
    description: 'Continuous updates with new features and improvements to stay ahead.',
    icon: RefreshCw,
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  return (
    <div 
      className="relative p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 opacity-0 slide-up"
      style={{ animationFillMode: 'forwards', animationDelay: `${index * 0.1 + 0.2}s` }}
    >
      <div className="flex flex-col space-y-4">
        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <feature.icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 opacity-0 slide-up" style={{animationFillMode: 'forwards'}}>
            Premium features for modern designers
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl opacity-0 slide-up stagger-1" style={{animationFillMode: 'forwards'}}>
            Everything you need to create stunning designs that convert visitors into customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
