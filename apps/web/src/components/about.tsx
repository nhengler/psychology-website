"use client";

import { Heart, BookOpen, Users, ArrowRight, Target, RefreshCcw, UserRoundCog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/reveal";
import Link from "next/link";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AnaOliveira } from "@/components/resumes/ana-oliveira";

const values = [
  {
    icon: Target,
    title: "Metacognição",
    description:
      "''A terapia consiste não em levar o paciente a descobrir a solução para seu problema, mas em mudá-lo de tal modo que seja capaz de descobri-la''",
    author: "- B. F. Skinner"
  },
  {
    icon: RefreshCcw,
    title: "Resiliência",
    description:
      "''Não considere nenhuma prática como imutável. Mude e esteja pronto a mudar novamente''",
    author: "- B. F. Skinner"
  },
  {
    icon: UserRoundCog,
    title: "Autonomia",
    description:
      "''Liberdade é a capacidade do ser humano de participar do próprio desenvolvimento. É a nossa capacidade de moldar a nós mesmos''",
    author: "- Paul Kurtz"
  },
];

export function About() {
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="about" className="py-10 lg:py-15">
      <Reveal>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-medium tracking-wide text-subtitles uppercase text-accent">
                Sobre Mim
              </span>
              <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-balance">
                Uma jornada dedicada ao cuidado emocional
              </h2>
              <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sou <strong>Ana Paula Santos de Oliveira Almeida</strong>,
                  psicóloga clínica formada pela Universidade Paulista{" "}
                  <strong>(UNIP)</strong>, com atuação baseada na abordagem 
                  comportamental.
                </p>
                <p>
                  Há mais de 8 anos, dedico-me ao estudo e à compreensão do 
                  ser humano de forma integral, considerando os diversos
                  aspectos que influaneciam sua maneira de sentir, pensar,
                  agir e se relacionar com o mundo. Também ofereço orientação
                  parental, auxiliando pais e responsáveis na compreensão das
                  necessidades emocionais e comportamentais de seus filhos, 
                  favorecendo relações familiares mais saudáveis e promovendo o 
                  desenvolvimento infantil.
                </p>
                <p>
                  Atualmente, também atuo em uma clínica multidisciplinar, realizando atendimentos 
                  a crianças e adolescentes neurotípicos e neurodrivergentes, contribuindo para 
                  o desenvolvimento de habilidades socioemocionais, comunicativas, comportamentais 
                  e de autonomia.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-4/5 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm lg:aspect-5/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-36 h-36 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-6 lg:w-48 lg:h-48">
                      <span className="font-serif text-4xl text-accent">
                        AO
                      </span>
                    </div>
                    <p className="font-serif text-xl text-foreground">
                      Dra. Ana Oliveira
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Psicóloga Clínica
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                      
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
                <p className="italic mt-2 text-muted-foreground leading-relaxed">
                  {value.description}
                </p>

                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {value.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
