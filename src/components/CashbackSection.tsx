
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge, ShoppingCart, ArrowRight, DollarSign } from 'lucide-react';

const CashbackSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 px-2">
            💰 <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Programa de Cashback Exclusivo
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-2 max-w-3xl mx-auto">
            Compre na Amazon e Mercado Livre e receba de volta 4% do valor da compra direto no seu PIX!
          </p>
        </div>
        
        {/* Como funciona */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              🔄 Como Funciona?
            </h3>
            <p className="text-gray-600">É simples e rápido! Siga os passos:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Passo 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <div className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
                  PASSO 1
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Escolha o Produto</h4>
                <p className="text-gray-600">
                  Nos informe qual produto você deseja comprar na Amazon ou Mercado Livre
                </p>
              </CardContent>
            </Card>

            {/* Passo 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <div className="bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
                  PASSO 2
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Receba o Link</h4>
                <p className="text-gray-600">
                  Enviamos a URL oficial de compra para você realizar a compra com segurança
                </p>
              </CardContent>
            </Card>

            {/* Passo 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <div className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
                  PASSO 3
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Receba o Cashback</h4>
                <p className="text-gray-600">
                  Após a compra, devolvemos 4% do valor direto no seu PIX em até 48h
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Seção de benefícios */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto mb-12">
          {/* Amazon */}
          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-orange-50 to-yellow-50 border-0 shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-3xl font-bold text-white">A</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🛒 Amazon Brasil</h3>
                
                <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-4 mb-6">
                  <p className="text-orange-800 font-bold text-2xl">4% DE VOLTA</p>
                  <p className="text-orange-700 text-sm">em todas as compras</p>
                </div>
                
                <ul className="text-left text-gray-600 space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Eletrônicos e gadgets
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Livros e produtos para casa
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Moda e beleza
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Cashback direto no PIX
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Mercado Livre */}
          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-yellow-50 border-0 shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-3xl font-bold text-white">ML</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">🛍️ Mercado Livre</h3>
                
                <div className="bg-gradient-to-r from-blue-100 to-yellow-100 rounded-lg p-4 mb-6">
                  <p className="text-blue-800 font-bold text-2xl">4% DE VOLTA</p>
                  <p className="text-blue-700 text-sm">em todas as compras</p>
                </div>
                
                <ul className="text-left text-gray-600 space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Milhões de produtos disponíveis
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Entrega rápida e segura
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Parcelamento facilitado
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Dinheiro de volta garantido
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to action */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 sm:p-8 text-white mx-2">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              💸 Comece a Economizar Hoje Mesmo!
            </h3>
            <p className="text-lg sm:text-xl mb-6 text-green-100">
              Milhares de produtos + 4% de volta no PIX + Assistentes IA + Conteúdo exclusivo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <div className="bg-white/20 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold">R$ 100</p>
                <p className="text-sm text-green-100">compra = R$ 4 de volta</p>
              </div>
              <div className="bg-white/20 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold">R$ 500</p>
                <p className="text-sm text-green-100">compra = R$ 20 de volta</p>
              </div>
              <div className="bg-white/20 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold">R$ 1000</p>
                <p className="text-sm text-green-100">compra = R$ 40 de volta</p>
              </div>
            </div>
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200">
              🚀 Quero Meu Cashback Agora
            </Button>
          </div>
        </div>

        {/* Moved section from MagazineSection */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white mx-2">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              🚀 Tudo isso incluso na sua assinatura!
            </h3>
            <p className="text-lg sm:text-xl mb-6 text-indigo-100">
              Revista digital + Biblioteca de e-books + Assistentes IA + Cashback
            </p>
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200">
              💎 Quero Acesso Completo Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CashbackSection;
