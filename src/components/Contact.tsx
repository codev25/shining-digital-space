
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600">
            Feel free to reach out to me for any queries or opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="lg:col-span-1 space-y-6">
            <Card>
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
            
            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Phone className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-slate-800 mb-1">Phone</h3>
                  <p className="text-slate-600">+1 234 567 890</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <MapPin className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-slate-800 mb-1">Location</h3>
                  <p className="text-slate-600">City, Country</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Send Me a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                    <Input
                      id="subject"
                      placeholder="Subject"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      className="w-full min-h-32"
                    />
                  </div>
                  
                  <div>
                    <Button className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg">
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
