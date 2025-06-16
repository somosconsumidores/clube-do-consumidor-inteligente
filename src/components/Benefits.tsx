
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Gift, CreditCard, Bot, DollarSign, BookOpen } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500" />,
      title: "Presente de Boas-Vindas",
      description: "Receba um brinde incrível direto na sua casa."
    },
    {
      icon: <CreditCard className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />,
      title: "Vale-Presente de R$25",
      description: "Gaste como quiser nas Americanas."
    },
    {
      icon: <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />,
      title: "Assistentes Inteligentes 24/7",
      description: "Especialistas em finanças, direito, supermercado, viagens e mais."
    },
    {
      icon: <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />,
      title: "Cashback Exclusivo",
      description: "Receba dinheiro de volta em compras na Amazon e Mercado Livre."
    },
    {
      icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />,
      title: "Conteúdo Premium",
      description: "Acesso à Revista SOMOS e eBooks exclusivos sobre consumo inteligente."
    }
  ];

  const giftImages = [
    "/lovable-uploads/410a6ff9-9a33-47de-980c-41489d7e70f3.png",
    "/lovable-uploads/678d5efe-5ef7-423b-b963-298c0f512067.png",
    "/lovable-uploads/3e6a5cbd-218c-4361-bbea-0e2f848e55fe.png",
    "/lovable-uploads/2930ab0f-7c16-4586-a4bc-35b8563ec902.png",
    "/lovable-uploads/c458f8cb-81b5-4d0e-9e31-f86fd3eaa39e.png"
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 px-2">
            🎁 <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              O que você ganha como membro:
            </span>
          </h2>
        </div>
        
        {/* Seção de Presentes com Imagens */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              🎁 Exemplos de Presentes Exclusivos
            </h3>
            <p className="text-lg text-gray-600">
              Produtos incríveis que você pode receber como presente de boas-vindas
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {giftImages.map((image, index) => (
              <div 
                key={index}
                className="group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-transparent hover:border-blue-200">
                  <img 
                    src={image} 
                    alt={`Presente ${index + 1}`}
                    className="w-full h-32 sm:h-40 object-cover rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-base sm:text-lg text-gray-600 font-medium">
              ✨ E muito mais surpresas incríveis esperando por você!
            </p>
          </div>
        </div>
        
        {/* Seção de Benefícios Original */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg hover:shadow-xl"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <div className="p-3 sm:p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                  ✅ {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
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
