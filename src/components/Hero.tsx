

import React from 'react';
import { Button } from '@/components/ui/button';
import { Gift, Zap, Package, Star, Shield, TrendingUp } from 'lucide-react';
const Hero = () => {
  return <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Video Background with Creative Overlay */}
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30">
          <source src="https://video.wixstatic.com/video/a025ad_9e9768cfb13447f78cb6bc0817b14ecc/1080p/mp4/file.mp4" type="video/mp4" />
        </video>
        
        {/* Creative Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-slate-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        
        {/* Animated Mesh Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse"></div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-green-400/30 to-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full blur-lg animate-bounce delay-300"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 min-h-screen flex flex-col">
        {/* Logo */}
        <div className="mb-2 flex justify-center">
          <img src="/lovable-uploads/cf8b4454-89d3-4b59-8586-50e907b2500c.png" alt="Logo" className="h-8 sm:h-10 lg:h-8 w-auto" />
        </div>
        
        <div className="max-w-6xl mx-auto flex-1 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            
            {/* Left Content */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-md rounded-full px-4 py-2 border border-yellow-400/30">
                <Gift className="w-5 h-5 text-yellow-300 animate-pulse" />
                <span className="text-yellow-300 font-semibold text-sm">PRESENTE DE BOAS-VINDAS GARANTIDO</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                💸 <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
                  Economize Dinheiro
                </span>
                <br />
                <span className="text-2xl sm:text-3xl lg:text-5xl bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  e Proteja seus Direitos
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl mb-8 text-blue-100 leading-relaxed">
                ⚡ Já pensou em fazer parte de um clube que protege suas finanças, 
                garante seus direitos e ainda te ajuda a consumir de forma inteligente?
              </p>
              
              {/* Quick Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                  <Shield className="w-5 h-5 text-green-300" />
                  <span className="text-white text-sm font-medium">Proteção Legal</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                  <TrendingUp className="w-5 h-5 text-blue-300" />
                  <span className="text-white text-sm font-medium">Cashback 4%</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                  <Star className="w-5 h-5 text-yellow-300" />
                  <span className="text-white text-sm font-medium">Conteúdo VIP</span>
                </div>
              </div>
              
              <a href="https://www.somosconsumidores.com.br/plano-clube-de-membros" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse border border-white/20">
                  👉 Quero Começar a Economizar Agora
                </Button>
              </a>
              
              <p className="mt-4 text-blue-200 text-sm">
                🔐 Sem compromisso • Cancelamento fácil • Dados protegidos
              </p>
            </div>
            
            {/* Right Content - Feature Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="w-8 h-8 text-yellow-300" />
                  <h3 className="text-2xl font-bold text-white">OFERTA ESPECIAL</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white">📦 Presente de boas-vindas exclusivo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white">💰 Cashback de até 4% em compras</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-white">📚 Acesso à biblioteca de e-books</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-white">🤖 Assistentes especializados</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-4 border border-green-400/30">
                  <p className="text-green-300 font-semibold text-center">
                    ✨ Transforme sua relação com o consumo hoje mesmo!
                  </p>
                </div>
              </div>
              
              {/* Floating Elements around the card */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>;
};
export default Hero;

