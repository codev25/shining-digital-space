
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Python, Java, Sql, 
  Aws, Docker, Git, 
  Tensorflow, Pytorch, 
  Langchain, FastApi 
} from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Languages');

  const categories = [
    'Languages',
    'Frameworks/Libraries',
    'ML/Data',
    'Cloud/DevOps',
    'Certifications'
  ];

  const skillsByCategory = {
    'Languages': [
      { name: 'Python', icon: <Python className="text-blue-500" /> },
      { name: 'Java', icon: <Java className="text-orange-500" /> },
      { name: 'Scala', icon: <span className="text-red-500 font-bold">S</span> },
      { name: 'SQL', icon: <Sql className="text-blue-600" /> },
      { name: 'HTML/CSS', icon: <span className="text-orange-500 font-bold">&lt;/&gt;</span> }
    ],
    'Frameworks/Libraries': [
      { name: 'LangChain', icon: <Langchain className="text-green-500" /> },
      { name: 'FastAPI', icon: <FastApi className="text-teal-500" /> },
      { name: 'PyTorch', icon: <Pytorch className="text-orange-500" /> },
      { name: 'TensorFlow', icon: <Tensorflow className="text-yellow-500" /> },
      { name: 'Streamlit', icon: <span className="text-red-500 font-bold">St</span> },
    ],
    'ML/Data': [
      { name: 'Pandas', icon: <span className="text-blue-500 font-bold">🐼</span> },
      { name: 'NumPy', icon: <span className="text-blue-700 font-bold">Np</span> },
      { name: 'Scikit-learn', icon: <span className="text-orange-500 font-bold">Sk</span> },
      { name: 'Dask', icon: <span className="text-green-500 font-bold">Dk</span> },
      { name: 'ChromaDB', icon: <span className="text-purple-500 font-bold">Ch</span> }
    ],
    'Cloud/DevOps': [
      { name: 'AWS', icon: <Aws className="text-orange-400" /> },
      { name: 'Docker', icon: <Docker className="text-blue-500" /> },
      { name: 'Git', icon: <Git className="text-red-500" /> },
      { name: 'Jenkins', icon: <span className="text-red-500 font-bold">J</span> },
      { name: 'Kafka', icon: <span className="text-black font-bold">K</span> }
    ],
    'Certifications': [
      { name: 'AWS Certified Solutions Architect - Associate', icon: <Aws className="text-orange-400" /> }
    ]
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
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Skills Display */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skillsByCategory[activeCategory]?.map((skill, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 flex items-center justify-center mb-2">
                  {skill.icon}
                </div>
                <span className="text-sm text-center font-medium text-slate-700">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
