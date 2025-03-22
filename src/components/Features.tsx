
import { Smartphone, Code, FileText, Rocket } from 'lucide-react';

const features = [
  {
    title: 'تطبيقات اندرويد',
    description: 'برمجة تطبيق اندرويد الذي يعتبر امتدادا لموقعك على منصة ووردبريس، وبتكلفة جد محفزة.',
    icon: Smartphone,
    iconColor: 'text-orange-500',
  },
  {
    title: 'تطوير الووردبريس',
    description: 'تصميم وتطوير وتعديل وتعريب مواقع الووردبريس',
    icon: Code,
    iconColor: 'text-anubis-blue',
  },
  {
    title: 'تكويد بلوجر',
    description: 'تصميم وتطوير وتعديل وتعريب مواقع بلوجر',
    icon: FileText,
    iconColor: 'text-orange-500',
  },
  {
    title: 'تصميم المواقع',
    description: 'تصميم جميع انواع مواقع الانترنت (شخصية - شركات) وجعلها متوافقة مع جميع الشاشات',
    icon: Rocket,
    iconColor: 'text-anubis-blue',
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  return (
    <div 
      className="relative p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 opacity-0 slide-up"
      style={{ animationFillMode: 'forwards', animationDelay: `${index * 0.1 + 0.2}s` }}
    >
      <div className="flex flex-col space-y-4">
        <div className="h-16 w-16 rounded-full bg-white shadow-md flex items-center justify-center">
          <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
      </div>
    </div>
  );
};

// Features section component
const Features = () => {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 opacity-0 slide-up" style={{animationFillMode: 'forwards'}}>
            ما الذي يميزنا
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl opacity-0 slide-up stagger-1" style={{animationFillMode: 'forwards'}}>
            نقدم لكم أفضل الحلول التقنية لتطوير مواقع الويب وتطبيقات الجوال
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
