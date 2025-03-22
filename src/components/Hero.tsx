
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-accent to-transparent opacity-80 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero text content */}
          <div className="flex flex-col">
            <div className="flex flex-col space-y-6 max-w-3xl">
              <h4 className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent text-primary opacity-0 slide-up stagger-1" style={{animationFillMode: 'forwards'}}>
                The ultimate design platform
              </h4>
              
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 opacity-0 slide-up stagger-2" style={{animationFillMode: 'forwards'}}>
                Create stunning <br className="hidden md:block" />designs that <span className="text-blue-600">convert</span>
              </h1>
              
              <p className="text-xl text-gray-600 opacity-0 slide-up stagger-3" style={{animationFillMode: 'forwards'}}>
                A professional toolkit for designers and agencies to create
                high-converting websites and marketing materials.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-2 opacity-0 slide-up stagger-4" style={{animationFillMode: 'forwards'}}>
                <div className="inline-flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">No coding required</span>
                </div>
                <div className="inline-flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">Fast development</span>
                </div>
                <div className="inline-flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">Premium support</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-2 opacity-0 slide-up stagger-4" style={{animationFillMode: 'forwards'}}>
                <Button className="bg-primary text-white text-base px-8 py-6 rounded-md hover:opacity-90 shadow-md transition-all duration-200">
                  Get started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="bg-transparent text-base border border-gray-300 px-8 py-6 rounded-md hover:bg-gray-50 transition-all duration-200">
                  See demos
                </Button>
              </div>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="relative w-full h-full min-h-[400px] opacity-0 scale-in" style={{animationFillMode: 'forwards', animationDelay: '0.3s'}}>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-blue-400/5 rounded-2xl transform rotate-3 scale-105" />
            <div className="relative z-10 bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-200">
              <div className="h-8 bg-gray-100 flex items-center space-x-2 px-3">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
              </div>
              <div className="relative aspect-[5/3] bg-gray-50 border-t border-gray-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse-slow flex items-center justify-center">
                    <p className="text-gray-400 text-sm">Dashboard preview loading...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
