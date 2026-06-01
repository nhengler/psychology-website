import Image from "next/image";

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
    <div className="flex w-full justify-center">
      <Image
        src="/divider.png"
        alt="Divider image"
        width={220}
        height={100}
        className="mx-auto h-auto"
      />
    </div>
  );
}

export function AnaOliveira() {
  return (
    <section
      id="ana-oliveira"
      className="bg-background py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <article className="relative overflow-hidden rounded-lg border border-border shadow-lg">
          <div className="flex flex-center min-h-[30rem] ">
            <div className="relative z-10 flex flex-col bg-ring/40 px-6 py-6 sm:px-10 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">
              <header className="max-w-xl pr-16 sm:pr-24 md:pr-0">
                <h2 className="font-serif text-4xl font-semibold leading-none text-accent sm:text-5xl lg:text-6xl">
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

              <div className="mt-6 flex max-w-3xl flex-col gap-6 text-muted-foreground sm:mt-16">
                <ResumeDivider />

                <section className="space-y-4">
                  <h3 className="text-lg font-medium text-accent">
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
                  <h3 className="text-lg font-medium text-accent">
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
                  <h3 className="text-lg font-medium text-accent">
                    Abordagem
                  </h3>
                  <p className="leading-relaxed">
                    O trabalho clínico é inspirado na Terapia
                    Cognitivo-Comportamental, com foco em psicoeducação, vínculo
                    terapêutico e construção de recursos práticos para que a
                    criança compreenda emoções, pensamentos e comportamentos de
                    forma mais saudável.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default AnaOliveira;
