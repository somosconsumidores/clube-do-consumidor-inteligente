import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Clock, Gift, Truck, Shield, Users } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 px-2">
            💳 <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Tudo Isso por Menos que uma Pizza
            </span>
          </h2>
        </div>
        
        <div className="max-w-lg mx-auto mb-12 sm:mb-16">
          <Card className="bg-gradient-to-br from-green-500 to-blue-600 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="mb-4 sm:mb-6">
                <div className="text-4xl sm:text-6xl font-bold mb-2">🍕</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Apenas 1 pizza por mês</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-center justify-center gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-300" />
                  <span className="text-base sm:text-lg">Acesso ilimitado 24/7</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-300" />
                  <span className="text-base sm:text-lg">Vale de R$25 logo na entrada</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-300" />
                  <span className="text-base sm:text-lg">Todos os assistentes inclusos</span>
                </div>
              </div>
              
              <a href="https://www.somosconsumidores.com.br/plano-clube-de-membros" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-lg sm:text-xl shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  💳 Quero Ser Membro Agora
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16 shadow-2xl mx-2">
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
              <h3 className="text-2xl sm:text-3xl font-bold">⏳ Oferta por Tempo Limitado</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center mb-6 sm:mb-8">
            <div className="flex flex-col items-center">
              <Gift className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-300 mb-2 sm:mb-3" />
              <span className="font-semibold text-xs sm:text-base">🎁 Presente Garantido</span>
            </div>
            <div className="flex flex-col items-center">
              <Truck className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-300 mb-2 sm:mb-3" />
              <span className="font-semibold text-xs sm:text-base">🚚 Frete Grátis</span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-300 mb-2 sm:mb-3" />
              <span className="font-semibold text-xs sm:text-base">🔐 Cancelamento fácil</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-300 mb-2 sm:mb-3" />
              <span className="font-semibold text-xs sm:text-base">🕒 Vagas Limitadas</span>
            </div>
          </div>
          
          <div className="text-center">
            <a href="https://www.somosconsumidores.com.br/plano-clube-de-membros" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="w-full bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-4 rounded-full text-sm sm:text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <span className="sm:hidden">👉 Quero Ser Membro</span>
                <span className="hidden sm:inline">👉 Quero Ser Membro e Ganhar Meu Presente</span>
              </Button>
            </a>
          </div>
        </div>

        <Card className="bg-gradient-to-r from-green-100 to-blue-100 border-green-200">
          <CardContent className="p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
              🔒 <span className="text-green-600">Sem Risco. Sem Complicação.</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-center justify-center gap-2">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                <span className="font-semibold text-gray-700 text-sm sm:text-base">✅ Cancele quando quiser</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                <span className="font-semibold text-gray-700 text-sm sm:text-base">✅ Dados 100% protegidos</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                <span className="font-semibold text-gray-700 text-sm sm:text-base">✅ Transparência total</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;
