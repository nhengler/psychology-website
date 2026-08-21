import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Benefits } from "@/components/benefits"
import { Materials } from "@/components/materials"
import { Appointments } from "@/components/appointments"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Materials/>
      <Appointments />
      <Footer />
    </main>
  )
}
