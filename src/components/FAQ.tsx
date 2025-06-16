
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "🔹 Por que vale a pena entrar no clube?",
      answer: "Você economiza mais do que paga, com benefícios reais. Nossos membros economizam em média R$150 por mês em compras e serviços, além de receberem suporte especializado 24/7."
    },
    {
      question: "🔹 Recebo mesmo o presente?",
      answer: "Sim! Enviado para sua casa com frete grátis. O presente de boas-vindas é enviado em até 7 dias úteis após a confirmação da sua assinatura."
    },
    {
      question: "🔹 Posso cancelar depois?",
      answer: "Sim! A qualquer momento, sem multa ou fidelidade. Seu cancelamento é processado imediatamente e você mantém acesso até o fim do período já pago."
    },
    {
      question: "🔹 Como funciona o cashback?",
      answer: "Você recebe de volta uma porcentagem das suas compras na Amazon e Mercado Livre através do nosso sistema de parceiros. O dinheiro é creditado na sua conta do clube mensalmente."
    },
    {
      question: "🔹 Os assistentes são pessoas reais?",
      answer: "São assistentes inteligentes alimentados por IA, mas com supervisão humana especializada. Disponíveis 24/7 para te ajudar com questões de consumo, finanças e direitos."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            ❓ <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Perguntas Frequentes
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Esclarecemos suas principais dúvidas:
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-lg border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 text-left font-semibold text-lg text-gray-800 hover:bg-gray-50 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
