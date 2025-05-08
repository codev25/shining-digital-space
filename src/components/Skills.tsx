
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wrench, Code, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = {
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
    'Languages': [
      { name: 'Python' },
      { name: 'Java' },
      { name: 'Scala' },
      { name: 'SQL' },
      { name: 'HTML/CSS' }
    ],
    'Certifications': [
      { name: 'AWS Certified Solutions Architect - Associate' }
    ]
  };

  const categoryIcons = {
    'Technologies/Tools': <Wrench className="h-5 w-5" />,
    'Languages': <Code className="h-5 w-5" />,
    'Certifications': <Award className="h-5 w-5" />
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600 font-light">
            Here are the technologies and tools I work with
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="Technologies/Tools" className="w-full">
            <TabsList className="grid grid-cols-3 w-full mb-8 bg-blue-50 border border-blue-100 p-1 rounded-xl">
              <TabsTrigger 
                value="Technologies/Tools" 
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md rounded-lg transition-all"
              >
                {categoryIcons['Technologies/Tools']} Technologies
              </TabsTrigger>
              <TabsTrigger 
                value="Languages" 
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md rounded-lg transition-all"
              >
                {categoryIcons['Languages']} Languages
              </TabsTrigger>
              <TabsTrigger 
                value="Certifications" 
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md rounded-lg transition-all"
              >
                {categoryIcons['Certifications']} Certifications
              </TabsTrigger>
            </TabsList>
            
            {Object.keys(skillCategories).map((category) => (
              <TabsContent key={category} value={category} className="animate-fade-in">
                <div className="flex flex-wrap gap-3 justify-center">
                  {skillCategories[category].map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 bg-white text-blue-700 rounded-lg text-sm font-medium shadow-sm border border-blue-100 hover:shadow-md transition-all"
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
