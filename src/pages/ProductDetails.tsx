
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

// Mock data for product details
const productsData = [
  {
    id: '1',
    title: 'سبورت جو قالب ووردبريس رياضي',
    image: '/lovable-uploads/252e5267-ece6-4afc-b2fc-f9d1ae24efda.png',
    price: '65$',
    platform: 'wordpress',
    description: 'السلام عليكم متابعي موقع أنوبيس ويب الأعزاء، اليوم أقدم لكم قالب سبورت جو، للتركيب، رياضي و هو صالح بالدرجة الأولى للأشخاص الذين يريدون إنشاء مواقع ومدونات للبث المباشر و مخصص للمباريات.',
    features: [
      'متجاوب مع جميع الشاشات',
      'متوافق مع جميع معايير السيو',
      'ذات الصلة في المقال',
      'هدف تحسين محركات البحث',
      'يوجد 14 اماكن لوضع الاعلانات في الصفحة الموضوع',
      'اماكن لوضع اكواد اضافية تلقائية',
      'القالب سريع علي الكمبيوتر و الاب و الاجهزة المحمولة.',
      'العديد من مشغلات البث.',
      'بطاقة الفريقين.',
      'الوضع المظلم.',
      'أكثر.'
    ],
    compatibility: 'IE9, IE10, IE11, Firefox, Safari, Opera, Chrome',
    type: 'قالب ووردبريس',
    worksWith: 'ووردبريس',
    version: '+4.5',
    specs: 'Ioncube Loader'
  },
  {
    id: '2',
    title: 'جول العرب قالب ووردبريس رياضي مع جدول مباريات تلقائي',
    image: '/lovable-uploads/e613ccdf-d282-4b2b-98dc-6cc566418287.png',
    price: '65$',
    platform: 'wordpress',
    description: 'السلام عليكم متابعي موقع أنوبيس ويب الأعزاء، اليوم أقدم لكم قالب جول العرب قالب ووردبريس رياضي مع جدول مباريات تلقائي، للتركيب، رياضي و هو صالح بالدرجة الأولى للأشخاص الذين يريدون إنشاء مواقع ومدونات للبث المباشر و مخصص للمباريات.',
    features: [
      'متجاوب مع جميع الشاشات',
      'متوافق مع جميع معايير السيو',
      'ذات الصلة في المقال',
      'هدف تحسين محركات البحث',
      'يوجد 14 اماكن لوضع الاعلانات في الصفحة الموضوع',
      'اماكن لوضع اكواد اضافية تلقائية',
      'القالب سريع علي الكمبيوتر و الاب و الاجهزة المحمولة.',
      'العديد من مشغلات البث.',
      'بطاقة الفريقين.',
      'الوضع المظلم.',
      'أكثر.'
    ],
    compatibility: 'IE9, IE10, IE11, Firefox, Safari, Opera, Chrome',
    type: 'قالب ووردبريس',
    worksWith: 'ووردبريس',
    version: '+4.5',
    specs: 'Ioncube Loader'
  },
  {
    id: '3',
    title: 'اضافة جدول مباريات اليوم و الأمس و الغد تلقائي بتقنية API',
    image: '/lovable-uploads/0752f0df-1ae4-40c3-b278-80b01963c221.png',
    price: '30$',
    platform: 'addon',
    description: 'السلام عليكم متابعي موقع أنوبيس ويب الأعزاء، اليوم أقدم لكم اضافة جدول مباريات اليوم و الأمس و الغد تلقائي بتقنية API للووردبريس.',
    features: [
      'متجاوب مع جميع الشاشات',
      'سهل التركيب',
      'تحديث تلقائي',
      'واجهة عربية',
      'دعم فني متكامل',
      'متوافق مع جميع إصدارات الووردبريس',
      'بيانات محدثة تلقائياً'
    ],
    compatibility: 'WordPress 5.x+',
    type: 'اضافة ووردبريس',
    worksWith: 'ووردبريس',
    version: '+5.0',
    specs: 'PHP 7.4+'
  },
  {
    id: '4',
    title: 'اضافة مشغل ملفات البث المباشر ل AP للووردبريس',
    image: '/lovable-uploads/c5940365-7b69-43b3-b3f3-cee7cb889948.png',
    price: '20$',
    platform: 'addon',
    description: 'السلام عليكم متابعي موقع أنوبيس ويب الأعزاء، اليوم أقدم لكم اضافة مشغل ملفات البث المباشر ل AP للووردبريس.',
    features: [
      'دعم جميع صيغ البث المباشر',
      'واجهة مستخدم سهلة',
      'إمكانية تخصيص المظهر',
      'متوافق مع جميع متصفحات الويب',
      'دعم الجوال',
      'سهل التركيب',
      'تحديثات مستمرة'
    ],
    compatibility: 'WordPress 5.x+',
    type: 'اضافة ووردبريس',
    worksWith: 'ووردبريس',
    version: '+5.0',
    specs: 'PHP 7.2+'
  }
];

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  
  useEffect(() => {
    // Fetch product details based on id
    const foundProduct = productsData.find(p => p.id === id);
    setProduct(foundProduct);
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen font-tajawal">
        <Navbar />
        <div className="py-32 text-center">
          <p className="text-xl">جاري تحميل المنتج...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen font-tajawal">
      <Navbar />
      <main className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
                <div className="flex justify-center items-center bg-blue-900 text-white p-8">
                  <span className="text-4xl font-bold">{product.price}</span>
                </div>
                
                <div className="p-4 flex flex-col gap-3">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-6">
                    شراء
                  </Button>
                  
                  <Button variant="outline" className="w-full border-gray-300 text-gray-800 text-lg py-6">
                    معاينة
                  </Button>
                  
                  <div className="mt-4 border-t pt-4">
                    <h3 className="text-lg font-bold mb-3">وسائل اضافية</h3>
                    <div className="flex items-center gap-2">
                      <svg viewBox="0 0 32 32" width="40" height="40">
                        <path fill="#253B80" d="M23.9 8.3c.2-1.2 0-2-.7-2.7-.7-.7-1.8-1-3.3-1h-4.8c-.3 0-.5.2-.6.5L12 23.6c0 .2 0 .4.1.5.1.1.3.2.5.2h3.4c.3 0 .5-.2.6-.5l.8-5c0-.3.3-.5.6-.5H19c2.8 0 5-1.1 5.7-3.8.3-1.2.3-2.2 0-3 0-.5-.1-.8-.3-1.2z"></path>
                        <path fill="#179BD7" d="M22.2 13.7c-.2.9-.9 1.7-1.8 2.2-.9.5-2 .7-3.3.7h-.6c-.3 0-.5.2-.6.5l-.4 2.4c0 .3-.3.5-.6.5h-1.5c-.3 0-.5-.2-.4-.5l1.9-12c0-.3.3-.5.6-.5H19c1.2 0 2.1.1 2.7.4.3.1.5.3.6.6.1.2.1.5.1.7 0 .3 0 .5-.1.8l-.1.4z"></path>
                      </svg>
                      <span className="font-medium text-gray-600">تقبل الدفع بواسطة</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 border-t pt-4">
                    <Link to="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z"/>
                      </svg>
                      <span>وثائق المساعدة & شرح</span>
                    </Link>
                    
                    <Link to="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 mt-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 15.654c-0.417 0-0.741 0.333-0.741 0.741s0.324 0.741 0.741 0.741c0.416 0 0.741-0.333 0.741-0.741s-0.325-0.741-0.741-0.741z"></path>
                        <path d="M5.142 12.416h1.851c0.415 0 0.741-0.333 0.741-0.741s-0.326-0.741-0.741-0.741h-1.851c-0.416 0-0.741 0.333-0.741 0.741s0.325 0.741 0.741 0.741z"></path>
                        <path d="M10 10.934c-0.417 0-0.741 0.333-0.741 0.741s0.324 0.741 0.741 0.741c0.416 0 0.741-0.333 0.741-0.741s-0.325-0.741-0.741-0.741z"></path>
                        <path d="M14.601 12.416h4.141c0.417 0 0.741-0.333 0.741-0.741s-0.324-0.741-0.741-0.741h-4.141c-0.416 0-0.741 0.333-0.741 0.741s0.325 0.741 0.741 0.741z"></path>
                        <path d="M10 6.214c-0.417 0-0.741 0.333-0.741 0.741s0.324 0.741 0.741 0.741c0.416 0 0.741-0.333 0.741-0.741s-0.325-0.741-0.741-0.741z"></path>
                        <path d="M14.601 7.696h4.141c0.417 0 0.741-0.333 0.741-0.741s-0.324-0.741-0.741-0.741h-4.141c-0.416 0-0.741 0.333-0.741 0.741s0.325 0.741 0.741 0.741z"></path>
                        <path d="M5.142 7.696h1.851c0.415 0 0.741-0.333 0.741-0.741s-0.326-0.741-0.741-0.741h-1.851c-0.416 0-0.741 0.333-0.741 0.741s0.325 0.741 0.741 0.741z"></path>
                        <path d="M19.486 3.149h-14.972c-1.527 0-2.766 1.239-2.766 2.766v7.411c0 1.527 1.239 2.766 2.766 2.766h5.169l3.746 4.057c0.142 0.154 0.336 0.241 0.546 0.241 0.095 0 0.192-0.019 0.284-0.057 0.276-0.114 0.457-0.384 0.457-0.681v-3.561h4.77c1.527 0 2.766-1.239 2.766-2.766v-7.411c0-1.527-1.239-2.766-2.766-2.766zM20.77 13.325c0 0.709-0.576 1.285-1.285 1.285h-5.251c-0.414 0-0.741 0.325-0.741 0.741v2.705l-2.779-3.009c-0.141-0.153-0.336-0.24-0.546-0.24h-5.453c-0.709 0-1.285-0.576-1.285-1.285v-7.411c0-0.709 0.576-1.285 1.285-1.285h14.972c0.709 0 1.285 0.576 1.285 1.285v7.411z"></path>
                      </svg>
                      <span>شرح فيديو</span>
                    </Link>
                  </div>
                  
                  <div className="mt-4 border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold">الإصدار:</span>
                      <span className="text-gray-600">{product.version}</span>
                    </div>
                    
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold">النوع:</span>
                      <span className="text-gray-600">{product.type}</span>
                    </div>
                    
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold">يعمل علي:</span>
                      <span className="text-gray-600">{product.worksWith}</span>
                    </div>
                    
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold">التصميم:</span>
                      <span className="text-gray-600">متجاوب</span>
                    </div>
                    
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold">المتصفحات:</span>
                      <span className="text-gray-600">{product.compatibility}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-center">جول العرب قالب ووردبريس رياضي مع جدول مباريات تلقائي</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">{product.description}</p>
                  
                  <div className="bg-blue-100 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-bold mb-4 text-center">مميزات القالب</h3>
                    <ul className="space-y-3 pr-6">
                      {product.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-center space-x-4 space-x-reverse mt-8">
                    <a href="#" className="social-icon bg-blue-500 text-white p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                      </svg>
                    </a>
                    <a href="#" className="social-icon bg-blue-700 text-white p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                      </svg>
                    </a>
                    <a href="#" className="social-icon bg-green-500 text-white p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.288.131.332.202.043.72.43.375-.101.737z"/>
                      </svg>
                    </a>
                    <a href="#" className="social-icon bg-blue-400 text-white p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm3.224 17.871c.188.133.43.166.619.084.188-.08.293-.285.24-.477-.715-2.636-2.155-10.447-2.654-12.51-.068-.282-.372-.428-.605-.347-.234.081-.363.323-.296.605l2.696 12.645zm-6.284-7.987l5.878 4.182c.229.116.489.018.579-.199s.045-.465-.18-.589l-5.881-3.109c-.23-.115-.487-.017-.576.199-.89.217-.46.463.18.588z"/>
                      </svg>
                    </a>
                    <a href="#" className="social-icon bg-blue-600 text-white p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Product copyright section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#333" className="ml-2">
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 15c-1.466 0-2.785-.631-3.701-1.638-.184-.207-.456-.327-.749-.327-.206 0-.41.056-.59.168-.535.33-.618 1.067-.186 1.538 1.246 1.436 3.071 2.259 5.226 2.259 3.714 0 6.745-3.031 6.745-6.745s-3.031-6.745-6.745-6.745c-2.16 0-4.101.918-5.462 2.382-.452.487-.351 1.247.203 1.637.541.38 1.29.241 1.718-.236.961-1.078 2.357-1.756 3.904-1.756 2.858 0 5.202 2.331 5.202 5.181 0 2.865-2.344 5.202-5.202 5.202-1.152 0-2.225-.391-3.087-1.046-.335-.253-.752-.345-1.149-.237-.393.108-.701.396-.82.787-.186.61.227 1.234.839 1.384.962.235 1.549.365 2.216.365z"/>
                  </svg>
                  <h3 className="text-xl font-bold">قوانين الشركة & تراخيص المنتج</h3>
                </div>
                <div className="text-gray-700 text-center">
                  <p className="mb-2">جميع حقوق النشر محفوظة لموقع أنوبيس ويب © 2023</p>
                  <p className="mb-2">ترخيص المنتج: ترخيص شخصي لموقع واحد فقط</p>
                  <p>يمنع منعا باتا إعادة بيع أو نشر المنتج بأي شكل من الأشكال</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
