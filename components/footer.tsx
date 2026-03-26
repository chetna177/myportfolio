'use client'

import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/chetna177', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/chetnasahu501/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:chetnasahu501@gmail.com', label: 'Email' },
  ]

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-1000">
            <h3 className="text-lg font-bold transition-colors duration-300 hover:text-accent">Chetna Sahu</h3>
            <p className="text-foreground/70 text-sm">
              Business Analytics Enthusiast passionate about turning data into actionable insights for smarter decision-making.
            </p>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000" style={{ animationDelay: '100ms' }}>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <nav className="space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-foreground/70 hover:text-accent transition-all duration-300 text-sm transform hover:translate-x-1 animate-in fade-in slide-in-from-left-4"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="animate-in fade-in slide-in-from-right-4 duration-1000" style={{ animationDelay: '200ms' }}>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-accent transition-all duration-300 hover:scale-125 hover:-translate-y-1 transform animate-in fade-in zoom-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 animate-in fade-in duration-1000" style={{ animationDelay: '300ms' }}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-foreground/60 text-sm">
            <p>© {currentYear} Chetna. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-all duration-300 hover:translate-y-0.5">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-all duration-300 hover:translate-y-0.5">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
