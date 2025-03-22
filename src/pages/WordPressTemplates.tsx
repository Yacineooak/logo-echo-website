
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const wordpressProducts = [
  {
    id: 1,
    title: 'سبورت جو قالب ووردبريس رياضي',
    image: '/lovable-uploads/252e5267-ece6-4afc-b2fc-f9d1ae24efda.png',
    price: '65$',
    platform: 'wordpress',
  },
  {
    id: 2,
    title: 'جول العرب قالب ووردبريس رياضي مع جدول مباريات تلقائي',
    image: '/lovable-uploads/e613ccdf-d282-4b2b-98dc-6cc566418287.png',
    price: '65$',
    platform: 'wordpress',
  },
  {
    id: 5,
    title: 'قالب أخبار ووردبريس متوافق مع AMP',
    image: '/lovable-uploads/1f96b1bd-7c6e-4fca-bc77-1faa2838f1ef.png',
    price: '70$',
    platform: 'wordpress',
  },
  {
    id: 6,
    title: 'قالب ووردبريس للأخبار والمجلات',
    image: '/lovable-uploads/e477ae54-5095-49a5-ba37-24f8d9d003ea.png',
    price: '60$',
    platform: 'wordpress',
  },
];

const PlatformIcon = ({ platform }: { platform: string }) => {
  if (platform === 'wordpress') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0073AA">
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 18c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8zm-3.11-9.977l2.194 6.479c-1.576-.358-2.921-1.353-3.686-2.727.453-1.523.942-2.653 1.492-3.752zm9.11 3.977c0 .607-.061 1.19-.171 1.755l-1.195-3.522.399.09c-.473-1.169-1.115-1.938-1.694-2.336-.329-.222-.556-.287-.556-.287v-.022c.844-.031 1.657.128 1.657.128.038-.084.082-.21.113-.313.276-1.016-1.176-1.069-1.176-1.069.087-.308.453-.919 1.359-1.432 1.022-.581 2.162-.331 2.162-.331.684.022 1.389.246 1.963.624.347.576.552 1.22.616 1.903.014.144.021.29.021.436s-.007.291-.021.436c.016.483-.022.918-.114 1.229-.549 1.862-2.213 3.192-4.111 3.271 1.179-1.147 1.898-2.585 1.898-4.146l.25.018z"/>
      </svg>
    );
  }
  return null;
};

const ProductCard = ({ product }: { product: typeof wordpressProducts[0] }) => {
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

const WordPressTemplates = () => {
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
              قوالب ووردبريس
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              مجموعة متنوعة من قوالب ووردبريس عالية الجودة مصممة خصيصًا لتناسب احتياجاتك، بتصميمات عصرية ومتجاوبة مع جميع الأجهزة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wordpressProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WordPressTemplates;
