import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, MapPin, Video } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Horários Flexíveis",
    description: "Sessões durante a semana",
  },
  {
    icon: Clock,
    title: "45 Minutos",
    description: "Duração de cada sessão individual",
  },
  {
    icon: Video,
    title: "Online",
    description: "Atendimento via videochamada",
  },
]

export function Appointments() {
  return (
    <section id="appointments" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-[linear-gradient(135deg,#c1a6dc_0%,#ddd0ef_52%,#f5efff_100%)] px-6 py-16 shadow-[0_24px_80px_-36px_rgba(111,78,145,0.28)] sm:px-12 sm:py-20 lg:px-20 lg:py-24">
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-balance">
            Dê o primeiro passo 
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Agendar sua primeira consulta é simples e sem compromisso. 
              Vamos conversar sobre as necessidades da criança, e pensar 
              juntos em como a terapia pode ajudar.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="px-8 py-6 text-base shadow-lg shadow-[#8f72b6]/15">
                <Link href="https://wa.me/5511999999999" target="_blank">
                  Agendar pelo WhatsApp
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-background/70 border-border/70 px-8 py-6 text-base text-foreground hover:bg-background/90 hover:text-foreground">
                <Link href="mailto:contato@helenamartins.com.br">
                  Enviar E-mail
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative z-10 mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-background/75">
                  <feature.icon className="size-5 text-accent" />
                </div>
                <h3 className="mt-4 font-medium text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 h-96 w-96 -translate-y-1/2 translate-x-1/3 rounded-full bg-accent/12 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-80 w-80 translate-y-1/2 -translate-x-1/3 rounded-full bg-background/70 blur-3xl" />
        </div>
      </div>
    </section>
  )
}
