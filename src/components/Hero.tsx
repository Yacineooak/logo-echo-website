
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/50 to-transparent opacity-80 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero text content */}
          <div className="flex flex-col order-2 lg:order-1">
            <div className="flex flex-col space-y-6 max-w-3xl">
              <h4 className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-accent text-primary opacity-0 slide-up stagger-1" style={{animationFillMode: 'forwards'}} data-animate>
                حلول احترافية لتصاميم الويب
              </h4>
              
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 opacity-0 slide-up stagger-2" style={{animationFillMode: 'forwards'}} data-animate>
                قوالب و <span className="text-anubis-yellow">اضافات</span> جاهزة
              </h1>
              
              <p className="text-xl text-gray-600 opacity-0 slide-up stagger-3" style={{animationFillMode: 'forwards'}} data-animate>
                تصميم المواقع الخاصة بالشركات و المؤسسات و المواقع الشخصية والفنية و 
                التصميم و برمجة القوالب والسكربتات و برمجة قوالب خاصة على بلوجر والووردبريس
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-2 opacity-0 slide-up stagger-4" style={{animationFillMode: 'forwards'}} data-animate>
                <Button className="bg-anubis-blue text-white text-base px-8 py-6 rounded-md hover:opacity-90 shadow-md transition-all duration-200">
                  تقدم بطلبك الآن
                </Button>
                <Button variant="outline" className="bg-transparent text-base border border-gray-300 px-8 py-6 rounded-md hover:bg-gray-50 transition-all duration-200">
                  عرض القوالب
                </Button>
              </div>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="relative w-full h-full order-1 lg:order-2 opacity-0 scale-in" style={{animationFillMode: 'forwards', animationDelay: '0.3s'}} data-animate>
            <img 
              src="/lovable-uploads/d609904e-16f5-43bc-aca6-21fbd24480bd.png" 
              alt="أنوبيس ويب - مطور ويب" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
            
            {/* Floating badges */}
            <div className="absolute top-10 right-6 bg-white rounded-xl shadow-lg px-5 py-3 animate-float hidden md:block">
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700 font-medium">أكثر من 150 قالب</span>
              </div>
            </div>
            
            <div className="absolute bottom-10 left-6 bg-white rounded-xl shadow-lg px-5 py-3 animate-float animation-delay-1000 hidden md:block">
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 text-sm">★</span>
                </div>
                <span className="text-gray-700 font-medium">دعم فني 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
