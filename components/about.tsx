'use client'

import { Badge } from '@/components/ui/badge'

export function About() {
  const skills = [
    'Python',
    'Excel',
    'SQL',
    'PostgreSQL',
    'AI Tools & Technology',
    'HTML',
    'CSS',
    'JavaScript'
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 animate-in fade-in duration-1000">
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl">
              I'm a passionate full-stack engineer with 5+ years of experience building scalable web applications. 
              I love the intersection of design and engineering, creating products that are both beautiful and 
              functional. When I'm not coding, you can find me exploring new technologies or contributing to open source.
            </p>
          </div>

          <div className="space-y-4 animate-in fade-in duration-1000 delay-300" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-bold">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 cursor-default text-sm py-2 px-4 animate-in fade-in slide-in-from-bottom-2 hover:shadow-lg hover:shadow-accent/25 transform hover:scale-110 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
