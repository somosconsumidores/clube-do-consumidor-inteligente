
import React from 'react';
import { Button } from '@/components/ui/button';
import { Gift, Zap, Package } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://video.wixstatic.com/video/a025ad_9e9768cfb13447f78cb6bc0817b14ecc/1080p/mp4/file.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-4 sm:mb-6">
            <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
            <span className="text-yellow-300 font-semibold text-sm sm:text-lg">PRESENTE DE BOAS-VINDAS GARANTIDO</span>
          </div>
          
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            💸 <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Economize Dinheiro
            </span> e Proteja seus Direitos como Consumidor
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-blue-100 px-2">
            ⚡ Já pensou em fazer parte de um clube que protege suas finanças, garante seus direitos e ainda te ajuda a consumir de forma inteligente?
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-8 sm:mb-10 border border-white/20 mx-2">
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <Package className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" />
              <span className="text-yellow-300 font-semibold text-sm sm:text-base">OFERTA ESPECIAL</span>
            </div>
            <p className="text-base sm:text-lg">
              📦 Chegou a sua hora: entre agora e ganhe um presente de boas-vindas exclusivo!
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-6 sm:px-8 rounded-full text-lg sm:text-xl shadow-2xl transform hover:scale-105 transition-all duration-200 animate-pulse mx-2"
          >
            👉 Quero Começar a Economizar Agora
          </Button>
          
          <p className="mt-4 text-blue-200 text-xs sm:text-sm px-2">
            🔐 Sem compromisso • Cancelamento fácil • Dados protegidos
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
