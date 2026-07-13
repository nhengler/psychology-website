import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";

export function Hero() {
  return (
    <section className="flex min-h-min items-center justify-center overflow-hidden bg-#ffffff">
      <Reveal>
        <div className="mx-auto max-w-5xl mt-20 px-6 pt-6 text-center lg:grid lg:grid-cols-2 lg:gap-x-40 lg:px-0 lg:py-32">
          <div className="flex flex-col items-center lg:col-start-2 relative  ">
            <Image
              src="/bg-smoke.png"
              alt="Hero image"
              width={250}
              height={300}
              className="opacity-40 mt-12 mb-10 lg:w-90 lg:h-70 lg:mt-20 absolute"
            />

            <Image
              src="/bg-smoke.png"
              alt="Hero image"
              width={250}
              height={300}
              className="opacity-40 mt-30 mb-10 lg:w-90 lg:h-70 lg:mt-20 absolute"
            />

            <Image
              src="/bg-smoke.png"
              alt="Hero image"
              width={150}
              height={200}
              className="z-20 opacity-70 mt-45 mb-10 lg:w-70 lg:h-35 lg:mt-66 lg:opacity-50 absolute"
            />

            <Image
              src="/ana-profile-pic.png"
              alt="User image"
              width={180}
              height={200}
              className="z-10 mb-10 lg:w-2xs lg:-translate-y-3 lg:absolute"
            />
          </div>

          <div className="flex flex-col lg:col-start-1 lg:row-start-1">
            <h1 className="font-serif text-5xl font-medium leading-tight tracking-tight text-balance text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Ana Oliveira
            </h1>

            <span className="mt-2 mb-4 inline-block text-sm font-medium tracking-wide text-muted-foreground uppercase">
              Psicóloga Clínica | CRP: 06/181389
            </span>

            <p className="mx-auto mt-4 max-w-2xl text-md leading-7 text-pretty text-muted-foreground lg:text-md">
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
      </Reveal>
    </section>
  );
}
