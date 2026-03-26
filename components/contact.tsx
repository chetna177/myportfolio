'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Mail, Send, CheckCircle2 } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center animate-in fade-in duration-1000">
          Let's Work Together
        </h2>
        <p className="text-center text-foreground/70 mb-12 animate-in fade-in duration-1000 delay-100">
          Got a project in mind? Let's talk about it. I'm always interested in hearing about new opportunities.
        </p>

        <Card className="animate-in fade-in slide-in-from-bottom-4 duration-1000 border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg group" style={{ animationDelay: '200ms' }}>
          <CardHeader className="transition-colors duration-300 group-hover:bg-accent/5">
            <div className="flex items-center gap-2 text-lg font-semibold transition-colors duration-300 group-hover:text-accent">
              <Mail size={24} className="text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              Send me a message
            </div>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="rounded-full bg-accent/10 p-4 animate-in scale-in duration-500">
                  <CheckCircle2 size={32} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold animate-in fade-in slide-in-from-bottom-2 duration-500" style={{ animationDelay: '100ms' }}>Thank you for reaching out!</h3>
                <p className="text-foreground/70 text-center animate-in fade-in slide-in-from-bottom-2 duration-500" style={{ animationDelay: '200ms' }}>
                  I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 hover:border-accent/50"
                  />
                </div>

                <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-500" style={{ animationDelay: '100ms' }}>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 hover:border-accent/50"
                  />
                </div>

                <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-500" style={{ animationDelay: '200ms' }}>
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 hover:border-accent/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 transform hover:scale-105 active:scale-95 animate-in fade-in slide-in-from-bottom-2 duration-500"
                  style={{ animationDelay: '300ms' }}
                >
                  {isLoading ? (
                    <>
                      <span className="inline-block animate-spin mr-2">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        <div className="mt-12 text-center space-y-4 animate-in fade-in duration-1000 delay-300">
          <p className="text-foreground/70">Or reach out directly:</p>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium text-lg"
          >
            <Mail size={20} />
            chetnasahu501@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
