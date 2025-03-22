
import { Button } from '@/components/ui/button';

const products = [
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
];

const PlatformIcon = ({ platform }: { platform: string }) => {
  if (platform === 'wordpress') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0073AA">
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 18c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8zm-3.11-9.977l2.194 6.479c-1.576-.358-2.921-1.353-3.686-2.727.453-1.523.942-2.653 1.492-3.752zm9.11 3.977c0 .607-.061 1.19-.171 1.755l-1.195-3.522.399.09c-.473-1.169-1.115-1.938-1.694-2.336-.329-.222-.556-.287-.556-.287v-.022c.844-.031 1.657.128 1.657.128.038-.084.082-.21.113-.313.276-1.016-1.176-1.069-1.176-1.069.087-.308.453-.919 1.359-1.432 1.022-.581 2.162-.331 2.162-.331.684.022 1.389.246 1.963.624.347.576.552 1.22.616 1.903.014.144.021.29.021.436s-.007.291-.021.436c.016.483-.022.918-.114 1.229-.549 1.862-2.213 3.192-4.111 3.271 1.179-1.147 1.898-2.585 1.898-4.146l.25.018z"/>
      </svg>
    );
  } else if (platform === 'blogger') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FF8000">
        <path d="M14.001 18c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v2zm0-6c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v2zm5-7h-14.019c-2.753.001-4.981 2.229-4.981 4.983v10.017c0 2.754 2.222 4.986 4.976 4.989l14.024.011c2.748-.005 4.995-2.234 4.999-4.982v-10.023c-.001-2.754-2.227-4.982-4.981-4.984.001-.006-.019-.011-.018-.011zm0 14.991c-.003 1.655-1.35 2.992-3.004 2.995h-9.994c-1.657-.001-3.003-1.345-3.003-3.003v-7.986c.001-1.657 1.347-3 3.006-3h9.991c1.657 0 3.004 1.345 3.004 3.003v7.991z"/>
      </svg>
    );
  } else {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#4CAF50">
        <path d="M0 0v24h24v-24h-24zm13 22c0 .552-.448 1-1 1s-1-.448-1-1v-6h-2v6c0 .552-.448 1-1 1s-1-.448-1-1v-6h-1v-10h8v10h-1v6z"/>
      </svg>
    );
  }
};

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  return (
    <div className="product-card overflow-hidden">
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
      
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4 line-clamp-2 h-14">{product.title}</h3>
        
        <div className="flex justify-between items-center mt-4">
          <span className="card-price">{product.price}</span>
          <div className="flex space-x-2 space-x-reverse">
            <Button variant="outline" className="bg-transparent text-gray-700 border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50">
              معاينة
            </Button>
            <Button className="card-button">
              شراء
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="section-title">
            قوالب و اضافات جاهزة
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button className="bg-anubis-blue text-white text-lg px-8 py-6 rounded-md hover:opacity-90">
            تحميل المزيد
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
