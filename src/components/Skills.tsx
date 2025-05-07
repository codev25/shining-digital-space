
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'Java', 'Scala', 'SQL', 'HTML/CSS'],
    },
    {
      category: 'Technologies/Tools',
      skills: [
        'AWS', 'Docker', 'Jenkins', 'Git', 'Kafka', 'Kubeflow', 
        'Pandas', 'Scikit-learn', 'Dask', 'PyTorch', 'TensorFlow', 
        'NumPy', 'LangChain', 'ChromaDB', 'Streamlit', 'n8n', 
        'Ollama', 'FastAPI', 'smolagents'
      ],
    },
    {
      category: 'Certifications',
      skills: ['AWS Certified Solutions Architect - Associate'],
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
                <div className="space-y-2">
                  <ul className="list-disc pl-5">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-slate-700">
                        {skill}
                      </li>
                    ))}
                  </ul>
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
