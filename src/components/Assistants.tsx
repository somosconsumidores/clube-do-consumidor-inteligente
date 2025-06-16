
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Scale, Calculator, ShoppingCart, Lightbulb } from 'lucide-react';

const Assistants = () => {
  const assistants = [
    {
      icon: <Scale className="w-10 h-10 text-blue-600" />,
      title: "👨‍⚖️ Mestre do Direito do Consumidor",
      description: "Orientação e suporte jurídico gratuito.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Calculator className="w-10 h-10 text-green-600" />,
      title: "🧮 Mestre das Finanças",
      description: "Planejamento financeiro para sair das dívidas.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: <ShoppingCart className="w-10 h-10 text-orange-600" />,
      title: "🛒 Mestre do Supermercado",
      description: "Economia nas compras do dia a dia.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-purple-600" />,
      title: "🧠 Mestre dos Produtos",
      description: "Ajuda para escolher o melhor produto antes de comprar.",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            🧠 <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Nossos Assistentes Inteligentes
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Tenha ajuda especializada no que você precisar:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {assistants.map((assistant, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 bg-white border-0 shadow-lg"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className={`p-6 bg-gradient-to-br ${assistant.gradient} rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {assistant.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 leading-tight">
                  {assistant.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
