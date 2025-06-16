
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Gift, CreditCard, Bot, DollarSign, BookOpen } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Gift className="w-8 h-8 text-pink-500" />,
      title: "Presente de Boas-Vindas",
      description: "Receba um brinde incrível direto na sua casa."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-green-500" />,
      title: "Vale-Presente de R$25",
      description: "Gaste como quiser nas Americanas."
    },
    {
      icon: <Bot className="w-8 h-8 text-blue-500" />,
      title: "Assistentes Inteligentes 24/7",
      description: "Especialistas em finanças, direito, supermercado, viagens e mais."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
      title: "Cashback Exclusivo",
      description: "Receba dinheiro de volta em compras na Amazon e Mercado Livre."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-purple-500" />,
      title: "Conteúdo Premium",
      description: "Acesso à Revista SOMOS e eBooks exclusivos sobre consumo inteligente."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            🎁 <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              O que você ganha como membro:
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg hover:shadow-xl"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  ✅ {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
