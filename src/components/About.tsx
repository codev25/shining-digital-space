
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const About = () => {
  return <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/1e1fdc2f-78c2-4c38-8905-c28b4ff65483.png" 
                alt="Sonaal Thaker" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800">I'm Sonaal Thaker, a Software Engineer with expertise in AI/ML, Data and backend Engineering based. I am based in SF Bay area.</h3>
              
              <p className="text-slate-600 leading-relaxed">I have about 3 years of software development experience from brands such as Cisco and CapitalOne. Most recently, I have been focused on independent project work in both traditional ML as well as Gen AI model development.</p>
              
              <p className="text-slate-600 leading-relaxed">I am an avid reader and enjoy reading both fiction and non-fiction. I am also a cross-fit enthusiast, and in my spare time enjoy intense workouts with my cross-fit community.</p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <Card>
                  <CardContent className="p-4">
                    <p className="font-semibold text-slate-700">Name:</p>
                    <p className="text-slate-600">Sonaal Thaker</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <p className="font-semibold text-slate-700">LinkedIn:</p>
                    <p className="text-slate-600">linkedin.com/in/sonaalthaker</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <p className="font-semibold text-slate-700">Location:</p>
                    <p className="text-slate-600">SF Bay area</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <p className="font-semibold text-slate-700">Experience:</p>
                    <p className="text-slate-600">3 Years</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="pt-4">
                <a href="#contact" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
