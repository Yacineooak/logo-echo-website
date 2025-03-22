
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "تم إرسال الرسالة!",
        description: "سنقوم بالرد عليكم في أقرب وقت ممكن.",
        duration: 5000,
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <div className="max-w-md">
              <h2 className="text-4xl font-bold text-gray-900 opacity-0 slide-up" style={{animationFillMode: 'forwards'}}>
                تواصل معنا
              </h2>
              <p className="mt-4 text-xl text-gray-600 opacity-0 slide-up stagger-1" style={{animationFillMode: 'forwards'}}>
                هل لديك استفسارات؟ نحن هنا للمساعدة. اتصل بنا وسنرد في أقرب وقت ممكن.
              </p>

              <div className="mt-8 space-y-6 opacity-0 slide-up stagger-2" style={{animationFillMode: 'forwards'}}>
                <div className="flex items-start">
                  <div className="ml-3 text-right">
                    <h3 className="text-lg font-medium text-gray-900">موقعنا</h3>
                    <p className="mt-1 text-gray-600">
                      123 شارع التصميم<br />
                      الرياض، المملكة العربية السعودية
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-anubis-yellow mt-1" />
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="ml-3 text-right">
                    <h3 className="text-lg font-medium text-gray-900">البريد الإلكتروني</h3>
                    <p className="mt-1 text-gray-600">
                      info@anubis-web.com<br />
                      support@anubis-web.com
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-anubis-yellow mt-1" />
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="ml-3 text-right">
                    <h3 className="text-lg font-medium text-gray-900">اتصل بنا</h3>
                    <p className="mt-1 text-gray-600">
                      +966 555 123 4567<br />
                      الاثنين-الجمعة، 9ص-6م
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-anubis-yellow mt-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 opacity-0 scale-in" style={{animationFillMode: 'forwards', animationDelay: '0.3s'}}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 text-right">
                  الاسم
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring-anubis-blue focus:border-anubis-blue"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 text-right">
                  البريد الإلكتروني
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring-anubis-blue focus:border-anubis-blue"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 text-right">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-anubis-blue focus:border-anubis-blue"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <Button
                  type="submit"
                  className="w-full bg-anubis-blue text-white py-6 rounded-md hover:opacity-90 transition-all duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
