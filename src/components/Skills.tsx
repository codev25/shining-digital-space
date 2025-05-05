
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML5', proficiency: 90 },
        { name: 'CSS3', proficiency: 85 },
        { name: 'JavaScript', proficiency: 90 },
        { name: 'React', proficiency: 85 },
        { name: 'Next.js', proficiency: 80 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', proficiency: 80 },
        { name: 'Express', proficiency: 75 },
        { name: 'MongoDB', proficiency: 70 },
        { name: 'PostgreSQL', proficiency: 65 },
        { name: 'GraphQL', proficiency: 60 },
      ],
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', proficiency: 85 },
        { name: 'Docker', proficiency: 70 },
        { name: 'AWS', proficiency: 65 },
        { name: 'Figma', proficiency: 75 },
        { name: 'VS Code', proficiency: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600">
            Here are the technologies and tools I work with
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-6">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-slate-700">{skill.name}</span>
                        <span className="text-slate-500">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2.5 rounded-full">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
