import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { Projects } from "./components/projects"
import { Contact } from "./components/contact"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Header />
      <Hero />
      <Projects />
      <Contact />
    </div>
  )
}

