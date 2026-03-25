import { Check } from "lucide-react"

const benefits = [
  "Maior autoconhecimento e clareza sobre seus sentimentos",
  "Ferramentas práticas para lidar com emoções difíceis",
  "Melhora nos relacionamentos pessoais e profissionais",
  "Redução dos sintomas de ansiedade e estresse",
  "Desenvolvimento de uma autoimagem mais positiva",
  "Capacidade de tomar decisões mais conscientes",
  "Resiliência emocional para enfrentar desafios",
  "Uma vida com mais propósito e significado",
]

export function Benefits() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium tracking-wide text-accent uppercase">
              Benefícios
            </span>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-balance">
              O que a psicoterapia pode fazer por você
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              A terapia é um investimento em você mesmo. Com o acompanhamento adequado, 
              é possível transformar padrões limitantes e construir uma vida mais equilibrada 
              e satisfatória.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div 
                key={benefit} 
                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <div className="shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                  <Check className="size-3.5 text-accent" />
                </div>
                <p className="text-sm text-foreground leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
