import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="relative flex justify-between items-center p-4 sm:p-6 bg-red-900 text-white">
      <h1 className="text-xl sm:text-2xl font-bold">Weifeng</h1>
      
      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden z-50" 
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-grow justify-center space-x-4 lg:space-x-8">
        <Link href="#data-analyst-projects" className="text-base lg:text-lg hover:text-red-200 transition-colors">
          Data Analyst Project
        </Link>
        <Link href="#data-visualization" className="text-base lg:text-lg hover:text-red-200 transition-colors">
          Data Viz
        </Link>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-red-900 z-40 py-4">
          <div className="flex flex-col items-center space-y-4">
            <Link 
              href="#data-analyst-projects" 
              className="text-lg hover:text-red-200 transition-colors"
              onClick={toggleMenu}
            >
              Data Analyst Project
            </Link>
            <Link 
              href="#data-visualization" 
              className="text-lg hover:text-red-200 transition-colors"
              onClick={toggleMenu}
            >
              Data Viz
            </Link>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="bg-red-700 hover:bg-red-600 text-white">
                Resume
              </Button>
            </Link>
          </div>
        </div>
      )}
      
      {/* Desktop Resume Button */}
      <div className="hidden md:block">
        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" className="bg-red-700 hover:bg-red-600 text-white">
            Resume
          </Button>
        </Link>
      </div>
    </header>
  )
}
