import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, FileText, Headphones, ArrowRight } from "lucide-react"
import Link from "next/link"

const materials = [
  {
    icon: Play,
    type: "Vídeo",
    title: "Técnicas de Respiração para Ansiedade",
    description: "Aprenda exercícios práticos de respiração que você pode usar em momentos de crise.",
    duration: "12 min",
  },
  {
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
  },
]

export function Materials() {
  return (
    <section id="materiais" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium tracking-wide text-accent uppercase">
            Materiais Complementares
          </span>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-balance">
            Conteúdos para apoiar sua jornada
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Além das sessões, disponibilizo materiais exclusivos para você continuar 
            seu desenvolvimento pessoal em casa.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((material) => (
            <Card key={material.title} className="group border-0 shadow-none bg-background hover:shadow-md transition-all duration-300 cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <material.icon className="size-5 text-accent" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {material.type}
                  </span>
                </div>
                <CardTitle className="font-serif text-lg font-medium leading-snug">
                  {material.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed mb-4">
                  {material.description}
                </CardDescription>
                <p className="text-xs text-muted-foreground">{material.duration}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="#">
              Ver todos os materiais
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
