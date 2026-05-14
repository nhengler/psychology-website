import { Header } from "@/views/header"
import { Hero } from "@/views/hero"
import { About } from "@/views/about"
import { Services } from "@/views/services"
import { Benefits } from "@/views/benefits"
import { Materials } from "@/views/materials"
import { Appointments } from "@/views/appointments"
import { FAQ } from "@/views/faq"
import { Footer } from "@/views/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Materials />
      <Appointments />
      <Footer />
    </main>
  )
}
