
import React from 'react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    content: "This platform has completely transformed our design workflow. We've cut our design time in half while improving quality.",
    author: "Sarah Johnson",
    role: "Design Director, Artify",
    avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    content: "I've tried many design tools, but nothing compares to the ease of use and professional results I get with this platform.",
    author: "Michael Chen",
    role: "Freelance Designer",
    avatarSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    content: "The templates are top-notch and the customer support team goes above and beyond to help with any questions.",
    author: "Emma Rodriguez",
    role: "Marketing Manager, TechStart",
    avatarSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    content: "We've seen a 40% increase in conversion rates since switching to these designs. The ROI has been incredible.",
    author: "James Wilson",
    role: "CEO, GrowthVentures",
    avatarSrc: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    content: "The intuitive interface allowed our entire team to create professional designs without any design background.",
    author: "Olivia Thompson",
    role: "Product Lead, Innovate Inc.",
    avatarSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    content: "The collaboration features have revolutionized how our distributed team works together on design projects.",
    author: "Daniel Martinez",
    role: "Head of Design, RemoteWorks",
    avatarSrc: "https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => {
  return (
    <div 
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 opacity-0 scale-in"
      style={{ animationFillMode: 'forwards', animationDelay: `${0.1 * index + 0.2}s` }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4 flex-grow">
          <p className="text-gray-700 italic">"{testimonial.content}"</p>
        </div>
        <div className="flex items-center mt-4">
          <img 
            src={testimonial.avatarSrc} 
            alt={testimonial.author}
            className="h-10 w-10 rounded-full object-cover mr-3"
          />
          <div>
            <h4 className="text-sm font-semibold text-gray-900">{testimonial.author}</h4>
            <p className="text-xs text-gray-600">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 opacity-0 slide-up" style={{animationFillMode: 'forwards'}}>
            Loved by designers worldwide
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl opacity-0 slide-up stagger-1" style={{animationFillMode: 'forwards'}}>
            Join thousands of satisfied customers who have transformed their design process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
