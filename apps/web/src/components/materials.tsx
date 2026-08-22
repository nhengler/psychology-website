import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Play,
  FileText,
  Headphones,
  ArrowRight,
  ShoppingCart,
  Clock,
} from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import Link from "next/link";
import { Dialog, DialogTrigger } from "./ui/dialog";

const materials = [
  {
    icon: Play,
    storeIcon: ShoppingCart,
    type: "Vídeo",
    videoId: "043a8d838cf1343640f7f6f04cb530d2",
    title: "Técnicas de Respiração para Ansiedade",
    description:
      "Aprenda exercícios práticos de respiração que você pode usar em momentos de crise.",
    duration: "12 min",
    durationIcon: Clock,
    price: "R$ 19,90",
  },
  /*{
    icon: FileText,
    type: "E-book",
    title: "Guia do Autoconhecimento",
    description: "Um guia completo com reflexões e exercícios para aprofundar sua jornada interior.",
    duration: "45 páginas",
  },
  {
    icon: Headphones,
    type: "Áudio",
    title: "Meditação Guiada para Relaxamento",
    description: "Meditação conduzida para acalmar a mente e relaxar o corpo no fim do dia.",
    duration: "20 min",
  },
  {
    icon: Play,
    type: "Vídeo",
    title: "Comunicação Não-Violenta na Prática",
    description: "Estratégias para melhorar seus relacionamentos através de uma comunicação mais empática.",
    duration: "18 min",
  },*/
];

export function Materials() {
  return (
    <section id="materials" className="bg-fuchsia-200 py-24">
      <Reveal>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-medium tracking-wide text-accent uppercase">
              Materiais Complementares
            </span>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-balance">
              Conteúdos para apoiar sua jornada
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Além das sessões, disponibilizo materiais exclusivos para você
              continuar seu desenvolvimento pessoal em casa.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material) => (
              <Card
                key={material.title}
                className="group border border-border/60 bg-card/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <material.icon className="size-5 text-accent" />
                    </div>
                    <span className="rounded-full bg-secondary px-2 py-1 ml-2 text-xs font-medium text-secondary-foreground">
                      {material.type}
                    </span>
                  </div>
                  <CardTitle className="font-serif text-lg font-medium leading-snug">
                    {material.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {material.videoId && (
                    <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-lg">
                      <iframe
                        src={`https://customer-heo1jlgy05yg6vp2.cloudflarestream.com/${material.videoId}/iframe`}
                        className="absolute inset-0 w-full h-full border-0"
                        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                  <CardDescription className="text-sm leading-relaxed mb-2">
                    {material.description}
                  </CardDescription>
                  <p className="flex flex-row text-xs gap-1 text-muted-foreground">
                    <material.durationIcon className="size-4" />
                    {material.duration}
                  </p>
                  <Button className="m-auto flex flex-row bg-accent/70 mt-6 px-6 py-4 text-base shadow-lg shadow-[#8f72b6]/15 lg:mt-8">
                    <p className="cursor-pointer">{material.price}</p>
                    <material.storeIcon />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
