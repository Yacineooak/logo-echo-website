
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-1 md:col-span-1">
            <img 
              src="/lovable-uploads/eae4a9d5-8e3d-4420-a594-db79c99d1b5e.png" 
              alt="أنوبيس ويب"
              className="h-10 mb-6 brightness-0 invert" 
            />
            <p className="text-gray-400 text-sm mb-6">
              تخصصنا هو تصميم وتطوير الويب بجودة عالية وأسعار منافسة
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="social-icon social-icon-youtube">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a href="#" className="social-icon social-icon-telegram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm3.224 17.871c.188.133.43.166.619.084.188-.08.293-.285.24-.477-.715-2.636-2.155-10.447-2.654-12.51-.068-.282-.372-.428-.605-.347-.234.081-.363.323-.296.605l2.696 12.645zm-6.284-7.987l5.878 4.182c.229.116.489.018.579-.199s.045-.465-.18-.589l-5.881-3.109c-.230-.115-.487-.017-.576.199-.89.217-.46.463.18.588z"/>
                </svg>
              </a>
              <a href="#" className="social-icon social-icon-whatsapp">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.288.131.332.202.043.72.43.375-.101.737z"/>
                </svg>
              </a>
              <a href="#" className="social-icon social-icon-facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">قوالب ووردبريس</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">قوالب بلوجر</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">اضافات ووردبريس</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">خدمات التصميم</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">مشاريع سابقة</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">خدماتنا</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">تطوير الويب</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">تطبيقات الجوال</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">استضافة المواقع</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">الدعم الفني</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">تحسين محركات البحث</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 ml-3">
                  <MapPin className="h-5 w-5 text-anubis-yellow" />
                </div>
                <span className="text-gray-400 text-sm">123 شارع التصميم، الرياض، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 ml-3">
                  <Mail className="h-5 w-5 text-anubis-yellow" />
                </div>
                <span className="text-gray-400 text-sm">info@anubis-web.com</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 ml-3">
                  <Phone className="h-5 w-5 text-anubis-yellow" />
                </div>
                <span className="text-gray-400 text-sm">+966 555 123 4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} جميع الحقوق محفوظة لشركة أنوبيس ويب
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 space-x-reverse">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">سياسة الخصوصية</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">الشروط والأحكام</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">الأسئلة الشائعة</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
