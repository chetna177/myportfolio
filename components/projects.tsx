'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  link?: string
  github?: string
  image?: string
}

export function Projects() {
  const projects: Project[] = [
    {
      id: '1',
      title: ' Space Mission Data Analysis',
      description: 'Real-time data visualization platform with interactive charts, custom reports, and user analytics tracking for enterprise clients.',
      tags: ['Pyhton','Pandas','Numpy','Plotly','matplotlib','seaborn','jupyter sNotebook'],
      image: '/images/spacemission.png',
      link: 'https://example.com',
      github: 'https://github.com/chetna177/SpaceMission',
    },
    {
      id: '2',
      title: 'Dr Semmelweis Handwashing Discovery',
      description: 'Full-featured online store with product catalog, shopping cart, payment integration, and admin dashboard for inventory management.',
      tags: ['python', 'numpy', 'matplotlib', 'pandas', 'seaborn','scipy.stat','HTML'],
      image: '/images/drseimm.png',
      link: 'https://example.com',
      github: 'https://github.com/chetna177/Dr_Semmelweis_Handwashing_Discovery',
    },
    {
      id: '3',
      title: 'Computation with NumPy and N-Dimensional Arrays',
      description: 'Collaborative task management tool with real-time updates, team collaboration features, and project tracking capabilities.',
      tags: ['Python','matplotlib', 'Numpy','scipy','PIL','Jupyter Notebook', 'HTML'],
      image: '/images/computationumpy.png',
      link: 'https://example.com',
      github: 'https://github.com/chetna177/Computation-with-Numpy-and-NDimentional-Arrays',
    },
    {
      id: '4',
      title: 'Pong Game',
      description: 'AI-powered content creation tool leveraging OpenAI API to generate marketing copy, blog posts, and creative content.',
      tags: ['Python', 'turtle', ''],
      image: '/images/ponggame.png',
      link: 'https://example.com',
      github: 'https://github.com/chetna177/PongGame',
    },
    {
      id: '5',
      title: 'Stock Trading Market',
      description: 'This project is a Python-based Stock & News Alert System that monitors stock price changes and sends real-time notifications when significant fluctuations occur.',
      tags: ['python', 'Twilio API (SMS service)', 'stock market API'],
      image: '/images/stockmarket.jpeg',
      link: '/video/TextToSpeechConverter – C__Users_hp_PycharmProjects_TextToSpeechConverter_.venv_.mp4',
      github: 'https://github.com/chetna177/PDFtoAudio-Generator',
    },
    {
      id: '6',
      title: 'Rain alert',
      description: 'A simple Python project that checks weather forecast data and sends an SMS alert if rain is expected — so you never forget your umbrella ',
      tags: ['python', 'OpenWeatherMap API', 'Twilio API (SMS service)', 'Geolocation'],
      image: '/images/rainalert.jpeg',
      link: 'https://example.com',
      github: 'https://github.com/chetna177/rain-alert'
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 animate-in fade-in duration-1000">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="animate-in fade-in duration-1000 flex flex-col hover:shadow-xl transition-all duration-300 border border-border hover:border-accent/50 overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {project.image && (
                <div className="relative w-full h-48 overflow-hidden bg-secondary">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-foreground text-lg transition-colors duration-300 group-hover:text-accent">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4 flex flex-col">
                <p className="text-foreground/70 leading-relaxed flex-1">{project.description}</p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs bg-accent/5 text-accent border-accent/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.link && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
