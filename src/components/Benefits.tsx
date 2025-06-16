import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Gift, CreditCard, Bot, DollarSign, BookOpen } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Gift className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-pink-500" />,
      title: "Presente de Boas-Vindas",
      description: "Receba um brinde incrível direto na sua casa."
    },
    {
      icon: <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-green-500" />,
      title: "Vale-Presente de R$25",
      description: "Gaste como quiser nas Americanas."
    },
    {
      icon: <Bot className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-blue-500" />,
      title: "Assistentes Inteligentes 24/7",
      description: "Especialistas em finanças, direito, supermercado, viagens e mais."
    },
    {
      icon: <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-yellow-500" />,
      title: "Cashback Exclusivo",
      description: "Receba dinheiro de volta em compras na Amazon e Mercado Livre."
    },
    {
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-purple-500" />,
      title: "Conteúdo Premium",
      description: "Acesso à Revista SOMOS e eBooks exclusivos sobre consumo inteligente."
    }
  ];

  const giftImages = [
    "/lovable-uploads/3e6a5cbd-218c-4361-bbea-0e2f848e55fe.png",
    "/lovable-uploads/2930ab0f-7c16-4586-a4bc-35b8563ec902.png",
    "/lovable-uploads/c458f8cb-81b5-4d0e-9e31-f86fd3eaa39e.png",
    "/lovable-uploads/410a6ff9-9a33-47de-980c-41489d7e70f3.png",
    "/lovable-uploads/dac46272-ec36-4698-a1d9-9a5c8843c861.png"
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 lg:mb-6 px-2">
            🎁 <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              O que você ganha como membro:
            </span>
          </h2>
        </div>
        
        {/* Seção de Presentes com Imagens */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
              🎁 Exemplos de Presentes Exclusivos
            </h3>
            <p className="text-base sm:text-lg text-gray-600 px-4">
              Produtos incríveis que você pode receber como presente de boas-vindas
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 max-w-7xl mx-auto">
            {giftImages.map((image, index) => (
              <div 
                key={index}
                className="group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-transparent hover:border-blue-200">
                  <img 
                    src={image} 
                    alt={`Presente ${index + 1}`}
                    className="w-full h-24 sm:h-32 lg:h-40 object-cover rounded-lg sm:rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6 sm:mt-8">
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium px-4">
              ✨ E muito mais surpresas incríveis esperando por você!
            </p>
          </div>
        </div>
        
        {/* Seção de Benefícios Original */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg hover:shadow-xl"
            >
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                <div className="mb-3 sm:mb-4 lg:mb-6 flex justify-center">
                  <div className="p-2.5 sm:p-3 lg:p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4">
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
