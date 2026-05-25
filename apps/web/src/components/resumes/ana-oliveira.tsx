const education = [
  "Graduação em Psicologia pela Universidade Paulista (UNIP).",
  "Formação continuada em Terapia Cognitivo-Comportamental.",
  "Estudos voltados ao desenvolvimento infantil e orientação parental.",
];

const experience = [
  "Atuação clínica com crianças de 4 a 12 anos e acompanhamento familiar.",
  "Planejamento de intervenções para habilidades sociais, autoestima e regulação emocional.",
  "Apoio a famílias e escolas na construção de rotinas mais saudáveis.",
];

const practiceAreas = [
  "Ansiedade infantil",
  "Habilidades sociais",
  "Autoestima",
  "Orientação parental",
  "Dificuldades emocionais",
  "Adaptação escolar",
];

function ResumeDivider() {
  return (
    <div className="relative h-px bg-primary/35" aria-hidden="true">
      <span className="absolute -left-1.5 -top-1.5 size-3 rounded-full border-2 border-primary/45 bg-card" />
      <span className="absolute -right-1.5 -top-1.5 size-3 rounded-full border-2 border-primary/45 bg-card" />
    </div>
  );
}

export function AnaOliveira() {
  return (
    <section id="ana-oliveira" className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <article className="relative overflow-hidden rounded-lg border border-border bg-card shadow-sm">
          <div className="absolute right-2 top-8 z-20 flex size-28 items-center justify-center overflow-hidden rounded-full border border-border bg-primary-foreground shadow-md sm:right-8 sm:size-36 md:left-[72%] md:right-auto md:top-28 md:size-48 md:-translate-x-1/2 lg:size-60">
            <img
              src="/user.svg"
              alt="Ilustração de perfil da Dra. Ana Oliveira"
              className="h-3/5 w-3/5 object-contain"
            />
          </div>

          <div className="grid min-h-[38rem] grid-cols-[minmax(0,1fr)_5rem] sm:grid-cols-[minmax(0,1fr)_8rem] md:grid-cols-[72%_28%]">
            <div className="relative z-10 flex flex-col bg-card px-6 py-10 pr-8 sm:px-10 sm:py-14 sm:pr-12 md:px-12 md:py-16 md:pr-36 lg:px-16 lg:py-20 lg:pr-44">
              <header className="max-w-xl pr-16 sm:pr-24 md:pr-0">
                <h2 className="font-serif text-4xl font-medium leading-none text-primary/75 sm:text-5xl lg:text-6xl">
                  Dra. Ana
                  <span className="block">Oliveira</span>
                </h2>
                <p className="mt-5 text-lg font-medium uppercase text-muted-foreground sm:text-xl">
                  Psicóloga clínica
                </p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                  CRP 00/000000 · Atendimento infantil e orientação familiar
                </p>
              </header>

              <div className="mt-14 flex max-w-3xl flex-col gap-10 text-muted-foreground sm:mt-16">
                <section className="space-y-4">
                  <h3 className="text-lg font-semibold uppercase text-foreground">
                    Apresentação
                  </h3>
                  <p className="leading-relaxed">
                    Ana Oliveira é psicóloga clínica dedicada ao cuidado emocional de
                    crianças e ao acolhimento de suas famílias. Sua trajetória une
                    escuta sensível, planejamento terapêutico e intervenções pensadas
                    para cada fase do desenvolvimento infantil.
                  </p>
                </section>

                <ResumeDivider />

                <section className="space-y-4">
                  <h3 className="text-lg font-semibold uppercase text-foreground">
                    Formação
                  </h3>
                  <ul className="list-disc space-y-3 pl-5 leading-relaxed">
                    {education.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <ResumeDivider />

                <section className="space-y-4">
                  <h3 className="text-lg font-semibold uppercase text-foreground">
                    Experiência
                  </h3>
                  <ul className="list-disc space-y-3 pl-5 leading-relaxed">
                    {experience.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <ResumeDivider />

                <section className="space-y-4">
                  <h3 className="text-lg font-semibold uppercase text-foreground">
                    Abordagem
                  </h3>
                  <p className="leading-relaxed">
                    O trabalho clínico é inspirado na Terapia Cognitivo-Comportamental,
                    com foco em psicoeducação, vínculo terapêutico e construção de
                    recursos práticos para que a criança compreenda emoções, pensamentos
                    e comportamentos de forma mais saudável.
                  </p>
                </section>

                <ResumeDivider />

                <section className="space-y-4">
                  <h3 className="text-lg font-semibold uppercase text-foreground">
                    Áreas de atuação
                  </h3>
                  <ul className="grid gap-2 leading-relaxed sm:grid-cols-2">
                    {practiceAreas.map((area) => (
                      <li key={area} className="flex items-center gap-2">
                        <span
                          className="size-1.5 rounded-full bg-primary/60"
                          aria-hidden="true"
                        />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>

            <div className="overflow-hidden lg:bg-primary/25" aria-hidden="true" />
          </div>
        </article>
      </div>
    </section>
  );
}

export default AnaOliveira;
