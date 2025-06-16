import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
const Testimonials = () => {
  const testimonials = [{
    text: "Resolvi um problema com meu plano de saúde e ainda ganhei cashback.",
    author: "Renata S.",
    location: "São Paulo"
  }, {
    text: "O Mestre das Finanças me ajudou a sair das dívidas. Estou aliviado.",
    author: "João M.",
    location: "Recife"
  }];
  return <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            ⭐ <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">O que nossos assinantes dizem</span>
          </h2>
          <p className="text-xl text-blue-100">
            Veja o que nossos membros estão dizendo:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                </div>
                <blockquote className="text-lg mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="text-blue-200">
                  <strong>– {testimonial.author}</strong>, {testimonial.location}
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;