import React, { useState } from 'react';
import { Button } from './Button';
import { analyzeProjectIdea } from '../services/geminiService';
import { FormStatus } from '../types';
import { Sparkles, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export const ConsultationForm: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [result, setResult] = useState<{ analysis: string; recommendation: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.trim()) return;

    setStatus(FormStatus.LOADING);
    const response = await analyzeProjectIdea(idea);
    
    if (response) {
      setResult(response);
      setStatus(FormStatus.SUCCESS);
    } else {
      setStatus(FormStatus.ERROR);
    }
  };

  const handleReset = () => {
    setStatus(FormStatus.IDLE);
    setResult(null);
    setIdea('');
  };

  return (
    <div className="w-full max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-light/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-start">
        <div>
           <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-dark/50 border border-brand-light/30 text-brand-light text-xs font-bold mb-6">
              <Sparkles size={14} className="mr-2" />
              IA Powered
           </div>
           <h2 className="text-3xl md:text-4xl font-bold mb-4">
             Tire sua ideia do papel
           </h2>
           <p className="text-gray-400 mb-8 leading-relaxed">
             Descreva seu projeto para nossa Inteligência Artificial. Ela analisará sua necessidade e mostrará como a 
             <span className="text-brand-light font-bold"> V Project</span> pode transformar sua visão em realidade.
           </p>
           
           {status === FormStatus.SUCCESS && result && (
             <div className="space-y-6 animate-fade-in">
               <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
                 <h4 className="text-emerald-400 font-bold mb-2 flex items-center">
                   <CheckCircle size={18} className="mr-2" /> Análise Técnica
                 </h4>
                 <p className="text-sm text-gray-300">{result.analysis}</p>
               </div>
               <div className="bg-brand-dark/40 border border-brand-light/20 rounded-xl p-6">
                 <h4 className="text-brand-light font-bold mb-2">Por que a V Project?</h4>
                 <p className="text-sm text-gray-300">{result.recommendation}</p>
               </div>
               <Button onClick={handleReset} variant="outline" className="w-full">
                 Nova Consulta
               </Button>
               <a 
                 href={`https://wa.me/5511999999999?text=Olá, fiz uma consulta na IA sobre: ${encodeURIComponent(idea)}`}
                 target="_blank"
                 rel="noreferrer"
                 className="block w-full"
               >
                 <Button fullWidth variant="primary">
                   Falar com Humano agora
                 </Button>
               </a>
             </div>
           )}
        </div>

        {status !== FormStatus.SUCCESS && (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-6 rounded-2xl border border-white/5">
            <div>
              <label htmlFor="idea" className="block text-sm font-medium text-gray-300 mb-2">
                O que você deseja construir?
              </label>
              <textarea
                id="idea"
                rows={6}
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="Ex: Gostaria de um cartão de visita digital para minha clínica de estética, com links para WhatsApp e Instagram..."
                className="w-full bg-gray-900/50 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-brand-light focus:border-transparent transition-all resize-none"
                required
              />
            </div>
            
            {status === FormStatus.ERROR && (
               <div className="flex items-center text-red-400 text-sm bg-red-900/20 p-3 rounded-lg">
                 <AlertCircle size={16} className="mr-2" />
                 Ocorreu um erro ao consultar a IA. Tente novamente.
               </div>
            )}

            <Button 
              type="submit" 
              fullWidth 
              disabled={status === FormStatus.LOADING || !idea.trim()}
              className="flex items-center justify-center"
            >
              {status === FormStatus.LOADING ? (
                <>
                  <Loader2 size={20} className="animate-spin mr-2" />
                  Analisando...
                </>
              ) : (
                <>
                  Consultar Gratuitamente <Send size={18} className="ml-2" />
                </>
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};