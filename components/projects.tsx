import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

interface Project {
  id: number
  title: string
  image: string
  link: string
  category: "analysis" | "visualization"
  description: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Data Analyst",
    image: "/E-Commmerce.png", // Update with your image path
    link: "https://github.com/Weifeng2Wu/E-Commerce/blob/master/User_Analyse.ipynb",
    category: "analysis",
    description: " Analyzed 1,000,000+ user transactions using Python and matplotlib, examining key metrics including purchase frequency, preferences, and payment methods to drive GMV growth"
  },
  {
    id: 2,
    title: "Interactive Sales Dashboard",
    image: "/Sales-Dashboard.png", // Update with your image path
    link: "https://public.tableau.com/app/profile/wu.weifeng8098/viz/Sales_17353041691490/SalesDashboard",
    category: "visualization",
    description: "Dynamic and interactive charts for exploring complex datasets."
  },
  {
    id: 3,
    title: "Time Series Analysis",
    image: "/HK-IN-NUMBERS.png", // Update with your image path
    link: "https://public.tableau.com/app/profile/wu.weifeng8098/viz/HongKong_17356702320700/Dashboard1",
    category: "visualization",
    description: "A look at the key statistics that make up the diverse city of Hong Kong."
  }
]

export function Projects() {
  return (
    <div className="py-8 sm:py-16 px-4 sm:px-6">
      <section id="data-analyst-projects" className="max-w-6xl mx-auto mb-8 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 text-red-900">
          Data Analyst Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects
            .filter(project => project.category === "analysis")
            .map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </section>

      <section id="data-visualization" className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12 text-red-900">
          Data Viz
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects
            .filter(project => project.category === "visualization")
            .map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={project.link} target="_blank" rel="noopener noreferrer">
      <Card 
        className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0 relative h-full flex flex-col">
          <div className="relative h-40 sm:h-48 flex-shrink-0">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-contain"
            />
            {isHovered && (
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-2 sm:p-4">
                <p className="text-white text-center text-sm sm:text-base">{project.description}</p>
              </div>
            )}
          </div>
          <div className="p-3 sm:p-4 flex-grow flex items-center justify-center">
            <h3 className="text-base sm:text-lg font-semibold text-red-900 text-center">
              {project.title}
            </h3>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
