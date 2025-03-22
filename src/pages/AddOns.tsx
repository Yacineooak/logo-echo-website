
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const addonProducts = [
  {
    id: 3,
    title: 'اضافة جدول مباريات اليوم و الأمس و الغد تلقائي بتقنية API',
    image: '/lovable-uploads/0752f0df-1ae4-40c3-b278-80b01963c221.png',
    price: '30$',
    platform: 'addon',
  },
  {
    id: 4,
    title: 'اضافة مشغل ملفات البث المباشر ل AP للووردبريس',
    image: '/lovable-uploads/c5940365-7b69-43b3-b3f3-cee7cb889948.png',
    price: '20$',
    platform: 'addon',
  },
  {
    id: 9,
    title: 'اضافة اظهار نتائج المباريات مباشرة',
    image: '/lovable-uploads/1f96b1bd-7c6e-4fca-bc77-1faa2838f1ef.png',
    price: '25$',
    platform: 'addon',
  },
];

const PlatformIcon = ({ platform }: { platform: string }) => {
  if (platform === 'addon') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#4CAF50">
        <path d="M0 0v24h24v-24h-24zm13 22c0 .552-.448 1-1 1s-1-.448-1-1v-6h-2v6c0 .552-.448 1-1 1s-1-.448-1-1v-6h-1v-10h8v10h-1v6z"/>
      </svg>
    );
  }
  return null;
};

const ProductCard = ({ product }: { product: typeof addonProducts[0] }) => {
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

const AddOns = () => {
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
              اضافات
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              اضافات متخصصة لتحسين وظائف موقعك وإضافة مزايا احترافية، مثل جداول المباريات التلقائية ومشغلات الوسائط المتعددة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {addonProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AddOns;
