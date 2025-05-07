
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Database, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = {
    'Languages': [
      { name: 'Python' },
      { name: 'Java' },
      { name: 'Scala' },
      { name: 'SQL' },
      { name: 'HTML/CSS' }
    ],
    'Technologies/Tools': [
      { name: 'AWS' },
      { name: 'Docker' },
      { name: 'Jenkins' },
      { name: 'Git' },
      { name: 'Kafka' },
      { name: 'Kubeflow' },
      { name: 'Pandas' },
      { name: 'Scikit-learn' },
      { name: 'Dask' },
      { name: 'PyTorch' },
      { name: 'TensorFlow' },
      { name: 'NumPy' },
      { name: 'LangChain' },
      { name: 'ChromaDB' },
      { name: 'Streamlit' },
      { name: 'n8n' },
      { name: 'Ollama' },
      { name: 'FastAPI' },
      { name: 'smolagents' }
    ],
    'Certifications': [
      { name: 'AWS Certified Solutions Architect - Associate' }
    ]
  };

  const categoryIcons = {
    'Languages': <Code className="h-5 w-5" />,
    'Technologies/Tools': <Database className="h-5 w-5" />,
    'Certifications': <Award className="h-5 w-5" />
  };

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
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="Languages" className="w-full">
            <TabsList className="grid grid-cols-3 w-full mb-8">
              <TabsTrigger value="Languages" className="flex items-center gap-2">
                {categoryIcons['Languages']} Languages
              </TabsTrigger>
              <TabsTrigger value="Technologies/Tools" className="flex items-center gap-2">
                {categoryIcons['Technologies/Tools']} Technologies/Tools
              </TabsTrigger>
              <TabsTrigger value="Certifications" className="flex items-center gap-2">
                {categoryIcons['Certifications']} Certifications
              </TabsTrigger>
            </TabsList>
            
            {Object.keys(skillCategories).map((category) => (
              <TabsContent key={category} value={category}>
                <div className="flex flex-wrap gap-3 justify-center">
                  {skillCategories[category].map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Skills;
