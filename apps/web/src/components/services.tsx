import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Heart, Sparkles, Users, Leaf, Moon, Speech } from "lucide-react"
import { Reveal } from "@/components/animations/reveal";

const services = [
  {
    icon: Brain,
    title: "Ansiedade e Estresse",
    description: "Compreender os gatilhos da ansiedade, desenvolver estratégias de regulação emocional e formas práticas de lidar com o estresse no dia a dia.",
  },
  {
    icon: Heart,
    title: "Depressão",
    description: "Espaço terapêutico para acolher a tristeza profunda e o desânimo, onde construímos juntos ferramentas para que você possa reconstruir sua rotina e vivenciá-la de forma mais leve e significativa.",
  },
  {
    icon: Sparkles,
    title: "Autoconhecimento",
    description: "Entender como suas relações moldam suas reações e como suas reações mudam as relações à sua volta.",
  },
  {
    icon: Users,
    title: "Relacionamentos",
    description: "Compreender continuamente como nos relacionamos com o mundo, visando o bem-estar próprio e das relações.",
  },
  {
    icon: Leaf,
    title: "Desenvolvimento Pessoal",
    description: "Ampliação do autoconhecimento, desenvolvimento de habilidades socioemocionais, estratégias para busca de seus objetivos.",
  },
  {
    icon: Speech,
    title: "Orientação parental",
    description: "Espaço colaborativo para compreender os desafios da rotina com os filhos, onde construímos juntos estratégias práticas para fortalecer o vínculo, lidar com comportamentos desafiadores na busca por uma melhor relação familiar.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-background py-24 lg:py-32">
      <Reveal>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-medium tracking-wide text-accent uppercase">
              Áreas de Atuação
            </span>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-balance">
              Como posso ajudar você
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Cada jornada é única. Atendimento focado nas necessidades reais de cada pessoa e família.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="border border-border/60 bg-card/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-2">
                    <service.icon className="size-6 text-accent" />
                  </div>
                  <CardTitle className="font-serif text-xl font-medium">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
