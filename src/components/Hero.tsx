
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
              <h4 className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-accent text-primary opacity-0 slide-up stagger-1" style={{animationFillMode: 'forwards'}}>
                حلول احترافية لتصاميم الويب
              </h4>
              
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 opacity-0 slide-up stagger-2" style={{animationFillMode: 'forwards'}}>
                قوالب و <span className="text-anubis-yellow">اضافات</span> جاهزة
              </h1>
              
              <p className="text-xl text-gray-600 opacity-0 slide-up stagger-3" style={{animationFillMode: 'forwards'}}>
                تصميم المواقع الخاصة بالشركات و المؤسسات و المواقع الشخصية والفنية و 
                التصميم و برمجة القوالب والسكربتات و برمجة قوالب خاصة على بلوجر والووردبريس
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-2 opacity-0 slide-up stagger-4" style={{animationFillMode: 'forwards'}}>
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
          <div className="relative w-full h-full order-1 lg:order-2 opacity-0 scale-in" style={{animationFillMode: 'forwards', animationDelay: '0.3s'}}>
            <img 
              src="/lovable-uploads/d609904e-16f5-43bc-aca6-21fbd24480bd.png" 
              alt="أنوبيس ويب - مطور ويب" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
