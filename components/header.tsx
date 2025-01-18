import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-red-900 text-white">
      <h1 className="text-2xl font-bold">Weifeng</h1>
      <div className="flex-grow flex justify-center space-x-8">
        <Link href="#data-analyst-projects" className="text-lg hover:text-red-200 transition-colors">
          Data Analyst Project
        </Link>
        <Link href="#data-visualization" className="text-lg hover:text-red-200 transition-colors">
          Data Viz
        </Link>
      </div>
      <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <Button variant="secondary" className="bg-red-700 hover:bg-red-600 text-white">
          Resume
        </Button>
      </Link>
    </header>
  )
}

