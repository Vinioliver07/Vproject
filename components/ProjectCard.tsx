import React from 'react';
import { Project } from '../types';
import { ExternalLink, Smartphone } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col items-center group">
      {/* Phone Mockup Frame */}
      <div className="relative w-[280px] h-[550px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden transition-transform duration-500 group-hover:-translate-y-2">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>
        
        {/* Screen Content */}
        <div className={`w-full h-full ${project.imageColor} relative z-10 flex flex-col`}>
          {/* Header Simulation */}
          <div className="h-16 bg-black/20 backdrop-blur-md w-full flex items-end justify-center pb-2">
             <span className="text-xs font-semibold text-white/80">{project.title}</span>
          </div>
          
          {/* Main Content Body Simulation */}
          <div className="flex-1 p-6 flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center shadow-inner border border-white/30">
               <span className="text-4xl font-bold text-white opacity-80">{project.title.charAt(0)}</span>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-sm text-white/70">{project.category}</p>
            </div>

            <div className="w-full space-y-3">
              {project.features.slice(0, 3).map((feat, idx) => (
                <div key={idx} className="w-full py-3 bg-white/10 rounded-lg text-xs font-medium text-white/90 border border-white/10">
                  {feat}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="p-6">
             <a 
               href={project.url} 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center justify-center w-full py-4 bg-white text-gray-900 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors"
             >
               Ver Projeto Real <ExternalLink size={16} className="ml-2" />
             </a>
          </div>
        </div>
      </div>
      
      {/* Description below phone */}
      <div className="mt-8 text-center max-w-xs">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm">{project.description}</p>
      </div>
    </div>
  );
};