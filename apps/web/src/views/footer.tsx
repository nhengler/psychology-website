import Link from "next/link"
import { Instagram, Linkedin, Mail } from "lucide-react"

const navigation = {
  main: [
    { name: "Início", href: "#" },
    { name: "Sobre", href: "#sobre" },
    { name: "Materiais", href: "#materiais" },
    { name: "Agendamentos", href: "#agendamentos" },
    { name: "Contatos", href: "#footer" }
  ],
  social: [
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
    {
      name: "E-mail",
      href: "mailto:psiana.oliveiraalmeida@gmail.com",
      icon: Mail,
    },
  ],
}

export function Footer() {
  return (
    <footer id="footer" className="border-t border-border bg-secondary/35">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <Link href="#" className="inline-block">
              <span className="font-serif text-xl font-semibold text-foreground">
                Dra. Ana Oliveira
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Psicóloga clínica dedicada a oferecer um espaço seguro e acolhedor 
              para sua jornada de autoconhecimento e bem-estar.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              CRP: xx/xxxxxx
            </p>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-foreground">Navegação</h3>
            <ul className="mt-4 space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-foreground">Contato</h3>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <p>São Paulo, SP - Brasil</p>
              <p>psiana.oliveiraalmeida@gmail.com</p>
              <p>(11) 99999-9999</p>
            </div>
            <div className="mt-6 flex gap-4">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="size-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Dra. Ana Oliveira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
