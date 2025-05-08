
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-16 pb-8 bg-gradient-to-tr from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl font-medium text-blue-600 mb-4 animate-fade-in">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">Sonaal Thaker</h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed font-light">
            I'm a <span className="font-semibold text-blue-600">Software Engineer with expertise in GenAI/ML/Data Eng/Backend</span>, passionate about building AI/ML applications.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects">
              <Button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all">
                View My Work
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-100 font-medium rounded-lg shadow-sm hover:shadow-md flex items-center gap-2 transition-all">
                Contact Me
                <ArrowRight size={18} />
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      <div className="w-full flex justify-center mt-12 animate-bounce">
        <a href="#about" aria-label="Scroll to About section" className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all">
          <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>;
};

export default Hero;
