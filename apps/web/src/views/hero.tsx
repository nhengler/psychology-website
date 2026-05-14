import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative flex min-h-min items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#c5acdf_0%,#ddd0ef_55%,#f6f0ff_100%)]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/5 -left-20 h-96 w-96 rounded-full bg-background/70 blur-3xl" />
        <div className="absolute bottom-1/5 -right-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl mt-20 px-6 py-6 text-center lg:grid lg:grid-cols-2 lg:gap-x-40 lg:px-0 lg:py-32 ">
        <div className="flex flex-col">
          <h1 className="font-serif text-5xl font-medium leading-tight tracking-tight text-balance text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Ana Oliveira
          </h1>
        
          <span className="mt-4 mb-6 inline-block text-sm font-medium tracking-wide text-muted-foreground uppercase">
            Psicóloga Clínica | CRP: xx/xxxxxx
          </span>
        
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground">
            Ofereço um espaço seguro e acolhedor para você explorar suas emoções, 
            superar desafios e encontrar equilíbrio. Juntos, construiremos o caminho 
            para uma vida mais leve e significativa.
          </p>
        
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="px-8 py-6 text-base shadow-lg shadow-[#8f72b6]/15">
              <Link href="#agendar">
                Agendar Consulta
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <Image
            src="/user.svg"
            alt="Hero image"
            width={280}
            height={280}
          />
        </div>

        <div className="mt-12 mb-16 border-t border-foreground/10 lg:col-span-2" />

      </div>
    </section>
  )
}
