
import React from 'react';
import { Github } from 'lucide-react';

export const CodeButton = () => {
  return (
    <a 
      href="https://github.com/srtthaker?tab=repositories" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
    >
      <Github size={16} />
      Code
    </a>
  );
};

export default CodeButton;
