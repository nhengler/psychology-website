import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Heart, Sparkles, Users, Leaf, Moon } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "Ansiedade e Estresse",
    description: "Técnicas e estratégias para gerenciar a ansiedade, reduzir o estresse e recuperar a tranquilidade no dia a dia.",
  },
  {
    icon: Heart,
    title: "Depressão",
    description: "Acompanhamento terapêutico para superar a tristeza profunda, recuperar a energia vital e encontrar novos sentidos.",
  },
  {
    icon: Sparkles,
    title: "Autoconhecimento",
    description: "Exploração da sua história, padrões de comportamento e crenças para uma vida mais autêntica e consciente.",
  },
  {
    icon: Users,
    title: "Relacionamentos",
    description: "Trabalho sobre vínculos afetivos, comunicação assertiva e construção de relações mais saudáveis.",
  },
  {
    icon: Leaf,
    title: "Desenvolvimento Pessoal",
    description: "Fortalecimento da autoestima, definição de metas e desenvolvimento de habilidades emocionais.",
  },
  {
    icon: Moon,
    title: "Luto e Perdas",
    description: "Suporte no processo de elaboração de perdas, respeitando o tempo e as particularidades de cada pessoa.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium tracking-wide text-accent uppercase">
            Áreas de Atuação
          </span>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-balance">
            Como posso ajudar você
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Cada jornada é única. Ofereço atendimento especializado em diversas áreas, 
            sempre com foco no seu bem-estar e crescimento pessoal.
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
    </section>
  )
}
