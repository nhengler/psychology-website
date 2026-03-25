"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como funciona a primeira consulta?",
    answer: "A primeira consulta é um momento de acolhimento e conhecimento mútuo. Você pode compartilhar o que te traz à terapia, suas expectativas e tirar dúvidas sobre o processo. Não há compromisso de continuidade, e juntos avaliamos se faz sentido seguirmos trabalhando.",
  },
  {
    question: "Quanto tempo dura o processo terapêutico?",
    answer: "O tempo varia de pessoa para pessoa e depende dos objetivos terapêuticos. Algumas questões podem ser trabalhadas em algumas sessões, enquanto processos mais profundos de autoconhecimento podem levar mais tempo. O importante é respeitar seu ritmo.",
  },
  {
    question: "Qual a diferença entre atendimento presencial e online?",
    answer: "Ambas as modalidades são igualmente eficazes. O atendimento online oferece flexibilidade geográfica e de horários, enquanto o presencial pode ser preferido por quem valoriza a presença física. Você pode escolher o que melhor se adapta à sua rotina.",
  },
  {
    question: "O que é sigilo profissional?",
    answer: "Tudo o que é compartilhado em sessão é protegido pelo sigilo profissional, garantido pelo Código de Ética do Psicólogo. Isso significa que suas informações são confidenciais e não serão compartilhadas com terceiros, exceto em situações previstas em lei.",
  },
  {
    question: "Como sei se preciso de terapia?",
    answer: "Buscar ajuda profissional é válido sempre que você sentir que algo está afetando seu bem-estar, seus relacionamentos ou sua qualidade de vida. Não é necessário estar em crise para fazer terapia – ela também é uma ferramenta de autoconhecimento e crescimento.",
  },
  {
    question: "Qual o valor da consulta e formas de pagamento?",
    answer: "Os valores são informados no momento do agendamento. Ofereço opções de pagamento via PIX, transferência bancária ou cartão. Algumas situações podem ter valor social mediante avaliação. Entre em contato para mais informações.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-wide text-accent uppercase">
            Perguntas Frequentes
          </span>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-balance">
            Tire suas dúvidas
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Separei as perguntas mais comuns sobre o processo terapêutico. 
            Se tiver outras dúvidas, entre em contato.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
