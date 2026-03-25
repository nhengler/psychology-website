import { Heart, BookOpen, Users, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const values = [
  {
    icon: Heart,
    title: "Escuta Acolhedora",
    description:
      "Um ambiente seguro onde você pode se expressar sem julgamentos.",
  },
  {
    icon: BookOpen,
    title: "Atualização Constante",
    description:
      "Formação continuada em abordagens terapêuticas baseadas em evidências.",
  },
  {
    icon: Users,
    title: "Atendimento Humanizado",
    description:
      "Cada pessoa é única e merece um cuidado personalizado às suas necessidades.",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-10 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium tracking-wide text-accent uppercase">
              Sobre Mim
            </span>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-balance">
              Uma jornada dedicada ao cuidado emocional
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Sou Helena Martins, psicóloga clínica formada pela Universidade
                de São Paulo (USP), com especialização em Terapia
                Cognitivo-Comportamental e mestrado em Psicologia da Saúde.
              </p>
              <p>
                Há mais de uma década, dedico-me a ajudar pessoas a
                compreenderem suas emoções, desenvolverem habilidades de
                enfrentamento e construírem uma relação mais saudável consigo
                mesmas e com o mundo.
              </p>
              <p>
                Acredito que a terapia é um processo colaborativo, onde você é o
                protagonista da sua história. Meu papel é caminhar ao seu lado,
                oferecendo ferramentas e suporte para que você alcance seus
                objetivos.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-muted overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-36 h-36 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-6 lg:w-48 lg:h-48">
                    <span className="font-serif text-4xl text-accent">AO</span>
                  </div>
                  <p className="font-serif text-xl text-foreground">
                    Dra. Ana Oliveira
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Psicóloga Clínica
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button asChild size="sm" className="text-base px-8 py-5">
                      <Link href="">
                        Minha carreira
                      </Link>
                    </Button>

                    <Button asChild size="sm" className="text-base px-8 py-4">
                      <Link href="">
                        Meus materiais
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <div className="mx-auto w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                <value.icon className="size-6 text-accent" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-medium text-foreground">
                {value.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
