
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600 mb-8">
            Feel free to reach out to me for any queries or opportunities.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="https://www.linkedin.com/in/sonaalthaker/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="md:col-span-1">
            <CardContent className="p-6 flex items-start space-x-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Mail className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-lg text-slate-800 mb-1">Email</h3>
                <p className="text-slate-600">your.email@example.com</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-1">
            <CardContent className="p-6 flex items-start space-x-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Linkedin className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-lg text-slate-800 mb-1">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/sonaalthaker/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  linkedin.com/in/sonaalthaker
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-1">
            <CardContent className="p-6 flex items-start space-x-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <MapPin className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-lg text-slate-800 mb-1">Location</h3>
                <p className="text-slate-600">SF Bay area</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
