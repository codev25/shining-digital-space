
import React from 'react';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CodeButton = () => {
  return (
    <a 
      href="https://github.com/srtthaker?tab=repositories" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors"
    >
      <Github size={16} />
      Code
    </a>
  );
};

export default CodeButton;
