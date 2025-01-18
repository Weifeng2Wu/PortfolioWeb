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
    title: "Sales Analysis Dashboard",
    image: "/sales-dashboard.jpg", // Update with your image path
    link: "#",
    category: "analysis",
    description: "Interactive dashboard showcasing key sales metrics and trends."
  },
  {
    id: 2,
    title: "Customer Segmentation",
    image: "/customer-segmentation.jpg", // Update with your image path
    link: "#",
    category: "analysis",
    description: "Analysis of customer groups based on purchasing behavior and demographics."
  },
  {
    id: 3,
    title: "Predictive Analytics",
    image: "/predictive-analytics.jpg", // Update with your image path
    link: "#",
    category: "analysis",
    description: "Forecasting future trends using machine learning algorithms."
  },
  {
    id: 4,
    title: "Interactive Data Visualization",
    image: "/interactive-visualization.jpg", // Update with your image path
    link: "#",
    category: "visualization",
    description: "Dynamic and interactive charts for exploring complex datasets."
  },
  {
    id: 5,
    title: "Time Series Analysis",
    image: "/time-series-analysis.jpg", // Update with your image path
    link: "#",
    category: "visualization",
    description: "Visualization of temporal data patterns and seasonality."
  },
  {
    id: 6,
    title: "Market Trend Visualization",
    image: "/market-trend-visualization.jpg", // Update with your image path
    link: "#",
    category: "visualization",
    description: "Visual representation of market trends and competitive landscape."
  }
]

export function Projects() {
  return (
    <div className="py-16 px-6">
      <section id="data-analyst-projects" className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-red-900">
          Data Analyst Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects
            .filter(project => project.category === "analysis")
            .map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </section>

      <section id="data-visualization" className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-red-900">
          Data Visualization
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
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
    <Link href={project.link}>
      <Card 
        className="overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0 relative">
          <div className="relative h-48">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
            />
            {isHovered && (
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4">
                <p className="text-white text-center">{project.description}</p>
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-red-900 text-center">
              {project.title}
            </h3>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

