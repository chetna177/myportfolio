'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface ExperienceItem {
  id: string
  company: string
  position: string
  period: string
  description: string
  highlights: string[]
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: '1',
      company: 'Glorious Insight pvt. ltd., Noida ',
      position: 'Front End Developer',
      period: 'Feb 2025 - May 2025',
      description: 'Developed and maintained multiple client-facing web applications and internal tools.',
      highlights: [
        'Learned front-end and back-end development fundamentals',
        'Improved application performance by 40% through optimization and code splitting',
        'Collaborated with design team to implement pixel-perfect UI components',
      ],
    },
    {
      id: '2',
      company: 'Jspiders Training & development center, Delhi',
      position: 'Java Full Stack Development Trainee',
      period: 'Feb 2024 - Nov 2024 ',
      description: 'learned various concept web applications and how to apply them practically.',
       highlights: [
        'It is a comprehensive training program that covers essential technologies including HTML, CSS, JavaScript,Java, ReactJS ,and SQL.'
        ,'This program holistically covers the essential concept of web development ',
        'It gives hands-on experience on real world projects.',
        
       
      ],
    },
    {
      id: '3',
      company: 'Omninos Technologies pvt. ltd.,Mohali, Punjab',
      position: 'Python Developer',
      period: 'Jul 2022 - Aug 2022',
      description: 'Served as a dedicated and supportive intern in a fast-paced environment and developed a web application called Blog Post using Python and Django during this internship. The application utilized HTML, Bootstrap, Python, and Django. ',
      highlights: [
        'Learned full-stack development fundamentals',
        'Shipped features from design mockups to production',
        'Participated in daily standups and sprint planning',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 animate-in fade-in duration-1000">
          Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={exp.id}
              className="animate-in fade-in slide-in-from-left-4 duration-1000 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-3 transition-colors duration-300 group-hover:bg-accent/5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-accent">{exp.position}</h3>
                    <p className="text-accent font-medium transition-all duration-300 group-hover:translate-x-1">{exp.company}</p>
                  </div>
                  <span className="text-sm text-foreground/60 whitespace-nowrap transition-all duration-300 group-hover:text-foreground/80">{exp.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70 leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-foreground/70 transition-colors duration-300 group-hover:text-foreground/80 animate-in fade-in slide-in-from-left-2" style={{ animationDelay: `${i * 50}ms` }}>
                      <span className="text-accent flex-shrink-0 transition-transform duration-300 group-hover:scale-125">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
