
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Download, Star } from 'lucide-react';

const MagazineSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 px-2">
            📚 <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Revista SOMOS & Biblioteca de E-books
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-2">
            Conteúdo exclusivo para membros: revista digital mensal e biblioteca completa de e-books
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Revista Digital */}
          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/a62c1d8c-0e52-4c8e-82a0-e56b31b8faf8.png" 
                    alt="Revista SOMOS - Edições digitais"
                    className="w-full max-w-sm rounded-lg shadow-xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    NOVO
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center items-center gap-2 mb-4">
                  <BookOpen className="w-6 h-6 text-indigo-600" />
                  <h3 className="text-2xl font-bold text-gray-800">📖 Revista Digital SOMOS</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Revista mensal exclusiva com conteúdos sobre direitos do consumidor, 
                  tecnologia, alimentação saudável e muito mais. Sempre atualizada 
                  com as últimas tendências e informações relevantes.
                </p>
                
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">Avaliação dos membros</span>
                </div>
                
                <ul className="text-left text-gray-600 mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    Edições mensais com conteúdo exclusivo
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    Temas relevantes para consumidores
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    Formato digital de alta qualidade
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Biblioteca de E-books */}
          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/8c07c645-86a2-46e5-841e-07d589cdcf2f.png" 
                    alt="Biblioteca de E-books exclusivos"
                    className="w-full max-w-sm rounded-lg shadow-xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    EXCLUSIVO
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center items-center gap-2 mb-4">
                  <Download className="w-6 h-6 text-purple-600" />
                  <h3 className="text-2xl font-bold text-gray-800">📚 Biblioteca de E-books</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Acesso completo à nossa biblioteca digital com dezenas de e-books 
                  sobre nutrição, finanças, direitos do consumidor, inteligência 
                  artificial e desenvolvimento pessoal.
                </p>
                
                <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-4 mb-6">
                  <p className="text-purple-800 font-semibold text-sm">
                    🎯 Mais de 50 e-books disponíveis para download
                  </p>
                </div>
                
                <ul className="text-left text-gray-600 mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Guias práticos e tutoriais
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Downloads ilimitados
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Novos títulos adicionados mensalmente
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white mx-2">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              🚀 Tudo isso incluso na sua assinatura!
            </h3>
            <p className="text-lg sm:text-xl mb-6 text-indigo-100">
              Revista digital + Biblioteca de e-books + Assistentes IA + Cashback
            </p>
            <Button 
              size="lg" 
              className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              💎 Quero Acesso Completo Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MagazineSection;
