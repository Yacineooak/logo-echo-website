
import { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const pricingPlans = [
  {
    name: 'Basic',
    price: {
      monthly: '$29',
      yearly: '$290',
    },
    description: 'Perfect for individuals and small projects',
    features: [
      'Up to 5 projects',
      '1GB storage',
      'Basic templates',
      'Email support',
      'Export to PDF/PNG',
    ],
    cta: 'Get Basic',
    popular: false,
  },
  {
    name: 'Professional',
    price: {
      monthly: '$79',
      yearly: '$790',
    },
    description: 'Ideal for professionals and growing teams',
    features: [
      'Unlimited projects',
      '10GB storage',
      'Premium templates',
      'Priority support',
      'Export to all formats',
      'Team collaboration',
      'Custom branding',
    ],
    cta: 'Get Professional',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: {
      monthly: '$199',
      yearly: '$1,990',
    },
    description: 'Advanced features for large organizations',
    features: [
      'Unlimited everything',
      'Advanced security',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
      'Enterprise API access',
      '24/7 phone support',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 opacity-0 slide-up" style={{animationFillMode: 'forwards'}}>
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl opacity-0 slide-up stagger-1" style={{animationFillMode: 'forwards'}}>
            Choose the perfect plan for your needs. Always know what you'll pay.
          </p>
          
          <div className="mt-8 bg-gray-100 p-1 rounded-full inline-flex opacity-0 slide-up stagger-2" style={{animationFillMode: 'forwards'}}>
            <button
              className={cn(
                "py-2 px-6 rounded-full text-sm font-medium transition-all duration-200",
                billingPeriod === 'monthly'
                  ? "bg-white shadow-sm text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              )}
              onClick={() => setBillingPeriod('monthly')}
            >
              Monthly
            </button>
            <button
              className={cn(
                "py-2 px-6 rounded-full text-sm font-medium transition-all duration-200",
                billingPeriod === 'yearly'
                  ? "bg-white shadow-sm text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              )}
              onClick={() => setBillingPeriod('yearly')}
            >
              Yearly (save 20%)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={plan.name}
              className={cn(
                "relative rounded-xl overflow-hidden transition-all duration-300 opacity-0 scale-in",
                plan.popular ? "border-2 border-primary md:scale-105" : "border border-gray-200"
              )}
              style={{ animationFillMode: 'forwards', animationDelay: `${index * 0.1 + 0.3}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 md:p-8 bg-white">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price[billingPeriod]}</span>
                  <span className="text-gray-600 ml-2">{billingPeriod === 'monthly' ? '/month' : '/year'}</span>
                </div>
                <p className="mt-2 text-gray-600">{plan.description}</p>
                
                <div className="mt-6">
                  <Button 
                    className={cn(
                      "w-full justify-center text-base py-6",
                      plan.popular 
                        ? "bg-primary text-white hover:opacity-90" 
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    )}
                  >
                    {plan.cta}
                  </Button>
                </div>
                
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
