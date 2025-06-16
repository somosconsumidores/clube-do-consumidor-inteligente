
import React from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Unlock, Target } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-8">
            <Rocket className="w-12 h-12 text-yellow-400" />
            <h2 className="text-4xl lg:text-6xl font-bold">
              🚀 <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Mude Seu Futuro Como Consumidor
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <Unlock className="w-16 h-16 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">🔓 Saia da vulnerabilidade</h3>
              <p className="text-blue-200">Proteja-se de abusos e pratique seus direitos</p>
            </div>
            <div className="flex flex-col items-center">
              <Target className="w-16 h-16 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">💡 Torne-se um consumidor empoderado</h3>
              <p className="text-blue-200">Conhecimento é poder no mundo do consumo</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 text-yellow-400 mb-4 text-4xl">🎯</div>
              <h3 className="text-xl font-bold mb-2">🎯 Economize. Proteja-se. Evolua.</h3>
              <p className="text-blue-200">Transforme sua relação com o consumo</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 mb-12">
            <h3 className="text-3xl font-bold mb-6">
              ⚡ Última Chance de Garantir Sua Vaga
            </h3>
            <p className="text-xl mb-8">
              Junte-se aos milhares de consumidores inteligentes que já transformaram suas vidas financeiras
            </p>
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-12 rounded-full text-2xl shadow-2xl transform hover:scale-105 transition-all duration-200 animate-pulse"
            >
              👉 CLIQUE AQUI E SEJA UM MEMBRO AGORA
            </Button>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-blue-200">
          <p>&copy; 2024 Clube do Consumo Inteligente. Todos os direitos reservados.</p>
          <p className="mt-2">🔐 Dados protegidos | 🚫 Spam free | ✅ Cancelamento fácil</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
