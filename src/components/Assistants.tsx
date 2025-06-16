
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Scale, Calculator, ShoppingCart, Lightbulb } from 'lucide-react';

const Assistants = () => {
  const assistants = [
    {
      icon: <Scale className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
      title: "👨‍⚖️ Mestre do Direito do Consumidor",
      description: "Orientação e suporte jurídico gratuito.",
      gradient: "from-blue-500 to-indigo-600",
      shadowColor: "shadow-blue-500/30"
    },
    {
      icon: <Calculator className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
      title: "🧮 Mestre das Finanças",
      description: "Planejamento financeiro para sair das dívidas.",
      gradient: "from-green-500 to-emerald-600",
      shadowColor: "shadow-green-500/30"
    },
    {
      icon: <ShoppingCart className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
      title: "🛒 Mestre do Supermercado",
      description: "Economia nas compras do dia a dia.",
      gradient: "from-orange-500 to-red-600",
      shadowColor: "shadow-orange-500/30"
    },
    {
      icon: <Lightbulb className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
      title: "🧠 Mestre dos Produtos",
      description: "Ajuda para escolher o melhor produto antes de comprar.",
      gradient: "from-purple-500 to-pink-600",
      shadowColor: "shadow-purple-500/30"
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
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white border-0 shadow-lg hover:shadow-xl"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="mb-6 sm:mb-8 flex justify-center">
                  <div className={`
                    relative p-6 sm:p-8 bg-gradient-to-br ${assistant.gradient} 
                    rounded-2xl group-hover:scale-110 transition-all duration-500 
                    shadow-2xl ${assistant.shadowColor} group-hover:shadow-3xl
                    before:absolute before:inset-0 before:bg-white/20 before:rounded-2xl
                    before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300
                  `}>
                    <div className="relative z-10">
                      {assistant.icon}
                    </div>
                    {/* Efeito de brilho */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4 leading-tight group-hover:text-gray-900 transition-colors duration-300">
                  {assistant.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">
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
