'use client'

import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      {/* Full background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/bg.avif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-0 bg-black/40" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background/10 via-transparent to-background/20" />
      
      <div className="max-w-6xl mx-auto relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-balance leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-accent  bg-clip-text text-transparent">Chetna</span>
              </h1>
              <p className="text-xl sm:text-2xl text-foreground/70 text-balance animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both" style={{ animationDelay: '200ms' }}>
                      Engineer turned Analytics enthusiast.
              </p>
            </div>

            <p className="text-base sm:text-lg text-foreground/60 text-balance leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both" style={{ animationDelay: '300ms' }}>
       
            With a BE in Computer Science and ongoing MBA in Business Analytics, I bring the perfect mix of technical skills and business understanding. My training in full stack development strengthened my coding skills, 
            while my MBA has shaped my passion for data, insights, and decision-making.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both justify-center lg:justify-start" style={{ animationDelay: '400ms' }}>
              <Button
                size="lg"
                onClick={() => scrollToSection('#projects')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 transform hover:scale-105"
              >
                
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#contact')}
                className="transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-6 pt-8 text-foreground/60 animate-in fade-in duration-1000 fill-mode-both justify-center lg:justify-start" style={{ animationDelay: '500ms' }}>
          <a
            href="https://github.com/chetna177"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/chetnasahu501/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:chetnasahu501@gmail.com"
            className="hover:text-accent transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="hidden lg:flex justify-center animate-in fade-in slide-in-from-right-4 duration-1000 fill-mode-both" style={{ animationDelay: '300ms' }}>
            <div className="relative w-80 h-96">
              <img
                src="/images/hero.jpg"
                alt="Profile photo"
                className="w-full h-full object-cover rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105"
                style={{
                  filter: 'brightness(1.1) contrast(1.15) saturate(1.1) sharpness(1.2)',
                }}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 rounded-2xl border-2 border-accent/30 shadow-lg shadow-accent/20" />
            </div>
          </div>

          {/* Mobile Profile Image */}
          <div className="lg:hidden flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both" style={{ animationDelay: '300ms' }}>
            <div className="relative w-64 h-80">
              <img
                src="/images/hero.jpg"
                alt="Profile photo"
                className="w-full h-full object-cover rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105"
                style={{
                  filter: 'brightness(1.1) contrast(1.15) saturate(1.1) sharpness(1.2)',
                }}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 rounded-2xl border-2 border-accent/30 shadow-lg shadow-accent/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
