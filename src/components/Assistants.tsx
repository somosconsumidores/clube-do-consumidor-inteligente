
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Scale, Calculator, ShoppingCart, Lightbulb } from 'lucide-react';

const Assistants = () => {
  const assistants = [
    {
      icon: <Scale className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />,
      title: "👨‍⚖️ Mestre do Direito do Consumidor",
      description: "Orientação e suporte jurídico gratuito.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Calculator className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />,
      title: "🧮 Mestre das Finanças",
      description: "Planejamento financeiro para sair das dívidas.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: <ShoppingCart className="w-8 h-8 sm:w-10 sm:h-10 text-orange-600" />,
      title: "🛒 Mestre do Supermercado",
      description: "Economia nas compras do dia a dia.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />,
      title: "🧠 Mestre dos Produtos",
      description: "Ajuda para escolher o melhor produto antes de comprar.",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 px-2">
            🧠 <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Nossos Assistentes Inteligentes
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-2">
            Tenha ajuda especializada no que você precisar:
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {assistants.map((assistant, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 bg-white border-0 shadow-lg"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <div className={`p-4 sm:p-6 bg-gradient-to-br ${assistant.gradient} rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {assistant.icon}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
                  {assistant.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {assistant.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Assistants;
