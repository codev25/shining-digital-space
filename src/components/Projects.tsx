
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Smart Agent Architecture',
      description: 'Developed a Python application utilizing the smolagents library to create and manage code agents. Implemented a web-enabled agent using a Llama 3.1 transformer model and web search tool integration for task execution. Designed a manager agent architecture to oversee worker agents, incorporating mechanisms for planning and verifying the correctness of agent-generated answers.',
      technologies: ['Llama', 'Smolagents', 'Python'],
      githubUrl: 'https://github.com/srtthaker?tab=repositories',
      imageClass: 'bg-blue-100',
    },
    {
      id: 2,
      title: 'Fine-tuning',
      description: 'Fine-tuned a DistilBERT model for text-based emotion classification using Hugging Face transformers and PyTorch. Implemented Parameter-Efficient Fine-Tuning (PEFT) with Low-Rank Adaptation (LoRA) to significantly reduce trainable parameters during training on the emotion dataset. Evaluated the fine-tuned model\'s accuracy & fit compared to the untrained base model.',
      technologies: ['DistilBERT', 'PyTorch', 'Python'],
      githubUrl: 'https://github.com/srtthaker?tab=repositories',
      imageClass: 'bg-green-100',
    },
    {
      id: 3,
      title: 'Retrieval-Augmented-Generation',
      description: 'Built an interview preparation helper using Python, featuring a Streamlit interface for user interaction. Orchestrated the backend workflow with LangChain, utilizing WebBaseLoader to ingest job descriptions from URLs, Gemma3 for structured information extraction and generation of tailored interview questions and answers. Implemented ChromaDB for vector data storage and retrieval to generate answers based on job skills.',
      technologies: ['Python', 'LangChain', 'Gemma3', 'Streamlit', 'ChromaDB'],
      githubUrl: 'https://github.com/srtthaker?tab=repositories',
      imageClass: 'bg-purple-100',
    },
    {
      id: 4,
      title: 'Retrieval-Augmented-Generation',
      description: 'Developed a question-answering system designed to smartly query a corpus of documents in Python, implementing a RAG pipeline. Utilized LangChain to combine retrieved context with the user query, feeding the augmented prompt to a Google Gemini model to produce grounded, context-aware answers.',
      technologies: ['Python', 'LangChain', 'Gemini'],
      githubUrl: 'https://github.com/srtthaker?tab=repositories',
      imageClass: 'bg-yellow-100',
    },
    {
      id: 5,
      title: 'Classification Model',
      description: 'Built a handwritten digit classification system using PyTorch, featuring a custom Convolutional Neural Network (CNN) architecture. Utilized torchvision and DataLoader for efficient loading, transformation, and batching of the MNIST dataset. Used the Adam optimizer with CrossEntropyLoss for the training process, followed by model evaluation to measure classification accuracy on the test set.',
      technologies: ['Python', 'PyTorch', 'CNN', 'torchvision', 'DataLoader'],
      githubUrl: 'https://github.com/srtthaker?tab=repositories',
      imageClass: 'bg-red-100',
    },
    {
      id: 6,
      title: 'Potato Disease Classifier',
      description: 'Built a full-stack potato disease classifier using Python (TensorFlow/Keras, FastAPI) and React, featuring a web interface for drag-and-drop image upload and classification display. Trained a custom Convolutional Neural Network (CNN) with TensorFlow/Keras on a PlantVillage dataset subset, utilizing data augmentation (rotations, flips) and evaluating accuracy on the test set. Developed a RESTful API using FastAPI to serve the trained model, handling image preprocessing and returning predictions (disease class, confidence) as JSON to the frontend.',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      githubUrl: 'https://github.com/srtthaker?tab=repositories',
      imageClass: 'bg-orange-100',
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
              
              <CardFooter className="flex justify-start pt-2 border-t">
                <a 
                  href={project.githubUrl}
                  className="inline-flex items-center text-slate-700 hover:text-slate-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} className="mr-2" />
                  Code
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
