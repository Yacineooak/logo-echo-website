
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const bloggerProducts = [
  {
    id: 7,
    title: 'قالب بلوجر رياضي احترافي',
    image: '/lovable-uploads/1f96b1bd-7c6e-4fca-bc77-1faa2838f1ef.png',
    price: '40$',
    platform: 'blogger',
  },
  {
    id: 8,
    title: 'قالب بلوجر للأخبار والمجلات',
    image: '/lovable-uploads/e477ae54-5095-49a5-ba37-24f8d9d003ea.png',
    price: '45$',
    platform: 'blogger',
  },
];

const PlatformIcon = ({ platform }: { platform: string }) => {
  if (platform === 'blogger') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FF8000">
        <path d="M14.001 18c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v2zm0-6c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v2zm5-7h-14.019c-2.753.001-4.981 2.229-4.981 4.983v10.017c0 2.754 2.222 4.986 4.976 4.989l14.024.011c2.748-.005 4.995-2.234 4.999-4.982v-10.023c-.001-2.754-2.227-4.982-4.981-4.984.001-.006-.019-.011-.018-.011zm0 14.991c-.003 1.655-1.35 2.992-3.004 2.995h-9.994c-1.657-.001-3.003-1.345-3.003-3.003v-7.986c.001-1.657 1.347-3 3.006-3h9.991c1.657 0 3.004 1.345 3.004 3.003v7.991z"/>
      </svg>
    );
  }
  return null;
};

const ProductCard = ({ product }: { product: typeof bloggerProducts[0] }) => {
  return (
    <div className="product-card overflow-hidden bg-white rounded-lg shadow hover:shadow-md transition-shadow">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-2 left-2 bg-white rounded-full p-2 shadow-md">
            <PlatformIcon platform={product.platform} />
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-lg font-bold mb-4 line-clamp-2 h-14">{product.title}</h3>
        </Link>
        
        <div className="flex justify-between items-center mt-4">
          <span className="card-price text-lg font-bold">{product.price}</span>
          <div className="flex space-x-2 space-x-reverse">
            <Link to={`/product/${product.id}`}>
              <Button variant="outline" className="bg-transparent text-gray-700 border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50">
                معاينة
              </Button>
            </Link>
            <Link to={`/product/${product.id}`}>
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                شراء
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const BloggerTemplates = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-tajawal">
      <Navbar />
      <main className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              قوالب بلوجر
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              قوالب بلوجر احترافية بمزايا متقدمة، تساعدك على إنشاء مدونتك بشكل احترافي وجذاب مع تحسين السيو وسرعة التحميل
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {bloggerProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BloggerTemplates;
