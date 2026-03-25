import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center lg:py-18">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-14 text-center lg:px-8 lg:py-32">
        <h1 className="font-serif text-5xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance leading-tight">
          Ana Oliveira
        </h1>
        
        <span className="inline-block mb-6 mt-4 text-sm font-medium tracking-wide text-muted-foreground uppercase">
          Psicóloga Clínica | CRP: xx/xxxxxx
        </span>
        
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Ofereço um espaço seguro e acolhedor para você explorar suas emoções, 
          superar desafios e encontrar equilíbrio. Juntos, construiremos o caminho 
          para uma vida mais leve e significativa.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="text-base px-8 py-6">
            <Link href="#agendar">
              Agendar Consulta
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-20 border-t border-border"/>

      </div>
    </section>
  )
}
