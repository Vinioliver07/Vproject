import React, { useState } from 'react';
import { Button } from './Button';
import { Send, AlertCircle, CheckCircle } from 'lucide-react';

interface ContactFormState {
  name: string;
  email: string;
  message: string;
  company_role_verification: string; // Honeypot
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    message: '',
    company_role_verification: ''
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof ContactFormState]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (data: ContactFormState): boolean => {
    const newErrors: Partial<Record<keyof ContactFormState, string>> = {};
    let isValid = true;

    // Name Validation
    if (!data.name || data.name.trim().length < 2) {
      newErrors.name = "Nome deve ter pelo menos 2 caracteres";
      isValid = false;
    }

    // Email Validation (Simple Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
      newErrors.email = "Digite um email válido";
      isValid = false;
    }

    // Message Validation
    if (!data.message || data.message.trim().length < 10) {
      newErrors.message = "Mensagem muito curta";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');

    // 1. Anti-Spam Honeypot Check
    // If the hidden field has any value, it's likely a bot filling out all inputs.
    if (formData.company_role_verification) {
      console.warn("Spam attempt blocked by Honeypot");
      // Fake success to confuse the bot
      setStatus('success'); 
      return;
    }

    // 2. Manual Validation
    if (!validate(formData)) {
      return;
    }

    // If valid, proceed with submission (Simulated)
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      
      // ANALYTICS: Push Data Layer Event
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'lead_gerado',
          formName: 'Contact Form',
          leadLocation: 'Home Page'
        });
      }

      setFormData({ name: '', email: '', message: '', company_role_verification: '' });
    }, 1000);
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-8 text-center animate-fade-in">
        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="text-emerald-400" size={32} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Mensagem Recebida!</h3>
        <p className="text-gray-300 mb-6">Nossa equipe entrará em contato em breve.</p>
        <Button onClick={() => setStatus('idle')} variant="outline">Enviar outra mensagem</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left w-full max-w-lg mx-auto">
      {/* Honeypot Field - Visually Hidden */}
      <div className="hidden opacity-0 absolute -left-[9999px]" aria-hidden="true">
        <input 
          type="text" 
          name="company_role_verification" 
          tabIndex={-1} 
          autoComplete="off"
          value={formData.company_role_verification}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full bg-gray-900/50 border rounded-xl p-3 text-white focus:ring-2 focus:ring-brand-light transition-all outline-none ${errors.name ? 'border-red-500/50' : 'border-gray-700'}`}
          placeholder="Seu nome"
        />
        {errors.name && <span className="text-red-400 text-xs mt-1 flex items-center"><AlertCircle size={12} className="mr-1"/> {errors.name}</span>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full bg-gray-900/50 border rounded-xl p-3 text-white focus:ring-2 focus:ring-brand-light transition-all outline-none ${errors.email ? 'border-red-500/50' : 'border-gray-700'}`}
          placeholder="seu@email.com"
        />
        {errors.email && <span className="text-red-400 text-xs mt-1 flex items-center"><AlertCircle size={12} className="mr-1"/> {errors.email}</span>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Mensagem</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`w-full bg-gray-900/50 border rounded-xl p-3 text-white focus:ring-2 focus:ring-brand-light transition-all outline-none resize-none ${errors.message ? 'border-red-500/50' : 'border-gray-700'}`}
          placeholder="Como podemos ajudar você?"
        />
        {errors.message && <span className="text-red-400 text-xs mt-1 flex items-center"><AlertCircle size={12} className="mr-1"/> {errors.message}</span>}
      </div>

      <Button type="submit" fullWidth className="flex items-center justify-center py-4">
        Enviar Mensagem Segura <Send size={18} className="ml-2" />
      </Button>
    </form>
  );
};