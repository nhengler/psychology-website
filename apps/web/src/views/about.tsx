import { Heart, BookOpen, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <section id="about" className="py-10 lg:py-30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium tracking-wide text-subtitles uppercase text-accent">
              Sobre Mim
            </span>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-balance">
              Uma jornada dedicada ao cuidado emocional
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Sou <strong>Ana Paula Santos de Oliveira Almeida</strong>, psicóloga clínica formada pela 
                Universidade Paulista <strong>(UNIP)</strong>, com atuação baseada na Terapia Cognitivo-Comportamental e foco 
                no atendimento de crianças na primeira e segunda infância, dos 4 aos 12 anos.
              </p>
              <p>
                Há cerca de 6 anos, dedico-me a estudar comportamentos e ajudar crianças a compreenderem melhor suas 
                emoções, desenvolverem habilidades sociais, fortalecerem sua autoestima e lidarem de forma mais saudável 
                com os desafios dessa fase do desenvolvimento.
              </p>
              <p>
                Acredito que a terapia infantil é um processo acolhedor e colaborativo, que envolve a criança e sua rede 
                de apoio. Meu papel é caminhar junto à família, oferecendo ferramentas e suporte para favorecer o bem-estar 
                emocional e o desenvolvimento saudável da criança.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-4/5 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm lg:aspect-5/5">
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
                      <Link href="">Minha carreira</Link>
                    </Button>

                    <Button
                      asChild
                      size="sm"
                      className="text-base px-8 py-4 lg:py-5"
                    >
                      <Link href="">Meus materiais</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-16">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-border/60 bg-background/80 p-8 text-center shadow-sm"
            >
              <div className="mx-auto w-14 h-14 rounded-full flex items-center justify-center bg-accent/10">
                <value.icon className="size-6 text-accent" />
              </div>
              <h3 className="mt-2 font-serif text-xl font-medium text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
