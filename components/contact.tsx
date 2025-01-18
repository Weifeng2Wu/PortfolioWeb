import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      })
      const data = await response.json()
      if (data.success) {
        alert('Message sent successfully!')
        setEmail('')
        setMessage('')
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('An error occurred. Please try again.')
    }
    setIsSubmitting(false)
  }

  return (
    <Card className="bg-red-50 shadow-xl w-full">
      <CardContent className="p-4 sm:p-8">
        <section id="contact" className="py-8 sm:py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-red-900">Contact Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-red-800">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                  <Textarea
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="min-h-[100px] sm:min-h-[150px] w-full"
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-red-700 hover:bg-red-600 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
              <div className="mt-6 md:mt-0">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-red-800">Connect with me</h3>
                <div className="space-y-3 sm:space-y-4">
                  <a
                    href="https://www.linkedin.com/in/weifeng-wu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 sm:space-x-3 text-red-700 hover:text-red-600 transition-colors p-2 sm:p-3 rounded-lg bg-white shadow-md hover:shadow-lg"
                  >
                    <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
                    <span className="text-base sm:text-lg font-medium">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/weifeng2wu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 sm:space-x-3 text-red-700 hover:text-red-600 transition-colors p-2 sm:p-3 rounded-lg bg-white shadow-md hover:shadow-lg"
                  >
                    <Github className="w-6 h-6 sm:w-8 sm:h-8" />
                    <span className="text-base sm:text-lg font-medium">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  )
}
