import { Header } from "@/views/marketing/header"
import { Hero } from "@/views/marketing/hero"
import { About } from "@/views/marketing/about"
import { Services } from "@/views/marketing/services"
import { Benefits } from "@/views/marketing/benefits"
import { Materials } from "@/views/marketing/materials"
import { CTA } from "@/views/marketing/cta"
import { FAQ } from "@/views/marketing/faq"
import { Footer } from "@/views/marketing/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Materials />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  )
}
