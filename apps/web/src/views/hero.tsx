import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-min items-center justify-center overflow-hidden bg-#ffffff">
      <div className="mx-auto max-w-4xl mt-20 px-6 pt-6 text-center lg:grid lg:grid-cols-2 lg:gap-x-40 lg:px-0 lg:py-32">
        <div className="flex flex-col items-center lg:col-start-2 ">
          <Image
            src="/user.svg"
            alt="Hero image"
            width={180}
            height={180}
            className="mb-4 lg:w-70 lg:mt-10"
          />
        </div>

        <div className="flex flex-col lg:col-start-1 lg:row-start-1">
          <h1 className="font-serif text-5xl font-medium leading-tight tracking-tight text-balance text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Ana Oliveira
          </h1>

          <span className="mt-4 mb-6 inline-block text-sm font-medium tracking-wide text-muted-foreground uppercase">
            Psicóloga Clínica | CRP: xx/xxxxxx
          </span>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground">
            Ofereço um espaço seguro e acolhedor para você explorar suas
            emoções, superar desafios e encontrar equilíbrio. Juntos,
            construiremos o caminho para uma vida mais leve e significativa.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="px-8 py-6 text-base shadow-lg shadow-[#8f72b6]/15"
            >
              <Link href="#appointments">
                Agendar Consulta
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 mb-6 border-t border-foreground/10 lg:col-span-2" />
      </div>
    </section>
  );
}
