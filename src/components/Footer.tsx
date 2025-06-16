import React from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Unlock, Target } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center items-center gap-3 mb-6 sm:mb-8">
            <Rocket className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-400" />
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold px-2">
              🚀 <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Mude Seu Futuro Como Consumidor
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <Unlock className="w-12 h-12 sm:w-16 sm:h-16 text-blue-400 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">🔓 Saia da vulnerabilidade</h3>
              <p className="text-blue-200 text-sm sm:text-base">Proteja-se de abusos e pratique seus direitos</p>
            </div>
            <div className="flex flex-col items-center">
              <Target className="w-12 h-12 sm:w-16 sm:h-16 text-green-400 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">💡 Torne-se um consumidor empoderado</h3>
              <p className="text-blue-200 text-sm sm:text-base">Conhecimento é poder no mundo do consumo</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-400 mb-3 sm:mb-4 text-3xl sm:text-4xl">🎯</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">🎯 Economize. Proteja-se. Evolua.</h3>
              <p className="text-blue-200 text-sm sm:text-base">Transforme sua relação com o consumo</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 mx-2">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              ⚡ Última Chance de Garantir Sua Vaga
            </h3>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8">
              Junte-se aos milhares de consumidores inteligentes que já transformaram suas vidas financeiras
            </p>
            <Button size="lg" className="w-full sm:w-auto bg-white text-red-600 hover:bg-gray-100 font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-full text-lg sm:text-2xl shadow-2xl transform hover:scale-105 transition-all duration-200 animate-pulse">
              👉 CLIQUE AQUI E SEJA UM MEMBRO AGORA
            </Button>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 sm:pt-8 text-center text-blue-200">
          <p className="text-sm sm:text-base">© 2025 Clube do Consumo Inteligente. Todos os direitos reservados.</p>
          <p className="mt-2 text-xs sm:text-sm">🔐 Dados protegidos | 🚫 Spam free | ✅ Cancelamento fácil</p>
        </div>
      </div>
    </footer>;
};
export default Footer;