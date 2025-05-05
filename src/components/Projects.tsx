
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of your first project. What was it about, what technologies did you use?',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubUrl: '#',
      liveUrl: '#',
      imageClass: 'bg-blue-100',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A brief description of your second project. What was it about, what technologies did you use?',
      technologies: ['React', 'TailwindCSS', 'Firebase'],
      githubUrl: '#',
      liveUrl: '#',
      imageClass: 'bg-green-100',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A brief description of your third project. What was it about, what technologies did you use?',
      technologies: ['Next.js', 'TypeScript', 'Prisma'],
      githubUrl: '#',
      liveUrl: '#',
      imageClass: 'bg-purple-100',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600">
            Here are some of my recent projects. Feel free to check them out!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map(project => (
            <Card key={project.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className={`h-52 ${project.imageClass} flex items-center justify-center`}>
                <span className="text-slate-500">Project Image</span>
              </div>
              
              <CardHeader className="py-4">
                <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
              </CardHeader>
              
              <CardContent>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between pt-2 border-t">
                <a 
                  href={project.githubUrl}
                  className="inline-flex items-center text-slate-700 hover:text-slate-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} className="mr-2" />
                  Code
                </a>
                <a 
                  href={project.liveUrl}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={18} className="mr-2" />
                  Live Demo
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
