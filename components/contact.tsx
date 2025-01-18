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
    <Card className="bg-red-50 shadow-xl">
      <CardContent className="p-8">
        <section id="contact" className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-red-900">Contact Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-800">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Textarea
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="min-h-[150px]"
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
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-red-800">Connect with me</h3>
                <div className="space-y-4">
                  <a
                    href="https://www.linkedin.com/in/weifeng-wu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-red-700 hover:text-red-600 transition-colors p-3 rounded-lg bg-white shadow-md hover:shadow-lg"
                  >
                    <Linkedin className="w-8 h-8" />
                    <span className="text-lg font-medium">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/weifeng2wu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-red-700 hover:text-red-600 transition-colors p-3 rounded-lg bg-white shadow-md hover:shadow-lg"
                  >
                    <Github className="w-8 h-8" />
                    <span className="text-lg font-medium">GitHub</span>
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

