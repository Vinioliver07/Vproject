import React, { useState, useEffect } from 'react';
import { Logo } from './components/Logo';
import { Button } from './components/Button';
import { ContactForm } from './components/ContactForm';
import { ProjectCard } from './components/ProjectCard';
import { Project } from './types';
import { Menu, X, ChevronDown, Instagram, Facebook, Globe, Code, Layers, Zap, Mail, MessageCircle } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'Dr. Lauane',
    category: 'Cartão de Visita Digital',
    description: 'Solução elegante para profissionais da saúde, centralizando agendamentos e redes sociais.',
    url: 'https://dr-lauane-cartao-visita.netlify.app/',
    imageColor: 'bg-gradient-to-br from-pink-400 to-rose-600',
    features: ['Design Clean', 'Botão WhatsApp', 'Links Sociais']
  },
  {
    id: '2',
    title: 'Mateus Silva',
    category: 'Portfólio Pessoal',
    description: 'Cartão interativo moderno para apresentação profissional e links rápidos.',
    url: 'https://mateussilvacartaov.netlify.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn_F9kLxGv5XwnBPTPDGxDt2vc_4uMiLOcsW44nvxX85w92tO2OuPwtZJAhgE_aem_xkSazaA5wxZdiXGjXGHUCA',
    imageColor: 'bg-gradient-to-br from-blue-600 to-slate-900',
    features: ['Perfil Profissional', 'Links Rápidos', 'Design Responsivo']
  }
];

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // SEO: Dynamic Title Logic
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section for Title SEO
      const sections = ['home', 'services', 'about', 'portfolio', 'contact'];
      let currentSection = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = section;
            break;
          }
        }
      }

      // Format Title: Page | V Projects - Web Solutions
      const sectionTitles: {[key: string]: string} = {
        home: 'Home',
        services: 'Serviços',
        about: 'Sobre',
        portfolio: 'Portfólio',
        contact: 'Contato'
      };

      const titlePart = sectionTitles[currentSection] || 'Home';
      document.title = `${titlePart} | V Project - Web Solutions`;
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to set title correctly on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Analytics Helper
  const trackWhatsAppClick = () => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'whatsapp_click',
        destination: 'wa_me',
        location: 'Contact Section'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans selection:bg-brand-light selection:text-white overflow-x-hidden">
      
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f172a]/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Logo className="h-10 w-10 md:h-12 md:w-12" />
            <span className="text-2xl font-black tracking-tighter text-white">V PROJECT</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium hover:text-brand-light transition-colors">Início</a>
            <a href="#services" className="text-sm font-medium hover:text-brand-light transition-colors">Serviços</a>            <a href="#about" className="text-sm font-medium hover:text-brand-light transition-colors">Sobre</a>            <a href="#portfolio" className="text-sm font-medium hover:text-brand-light transition-colors">Portfólio</a>
            <a href="#contact">
              <Button variant="outline" className="py-2 px-4 text-sm">Orçamento</Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0f172a] border-b border-white/10 p-6 flex flex-col space-y-4 md:hidden animate-fade-in shadow-2xl">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Início</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Serviços</a>            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Sobre</a>            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Portfólio</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-brand-light">Contato</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-dark/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-light/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <span className="text-brand-light font-bold text-sm tracking-wide">INOVAÇÃO DIGITAL</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Sua Presença <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-blue-600">
                Digital Começa Aqui
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              Transformamos ideias em experiências digitais. Especialistas em sites de alta performance e cartões de visita digitais que convertem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button className="w-full sm:w-auto text-lg px-8">Iniciar Projeto</Button>
              </a>
              <a href="#portfolio">
                <Button variant="secondary" className="w-full sm:w-auto text-lg px-8">Ver Portfólio</Button>
              </a>
            </div>
          </div>

          <div className="relative hidden md:flex justify-center">
            {/* Abstract visual representation of "V" */}
             <div className="relative w-96 h-96">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark to-brand-light opacity-20 rounded-full blur-3xl animate-pulse"></div>
                <Logo className="w-full h-full drop-shadow-2xl filter" />
             </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#0b1120]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Nossas Soluções</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Tecnologia de ponta para destacar sua marca no mercado digital.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {[
               { icon: <Globe size={32} />, title: "Websites Completos", desc: "Sites institucionais e landing pages otimizadas para conversão e SEO." },
               { icon: <Zap size={32} />, title: "Cartões Digitais", desc: "Links na bio modernos e interativos. Compartilhe seu contato com um clique." },
               { icon: <Layers size={32} />, title: "Identidade Visual", desc: "Design consistente que transmite a essência e o profissionalismo da sua marca." }
             ].map((service, idx) => (
               <div key={idx} className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                 <div className="w-16 h-16 bg-brand-light/10 rounded-2xl flex items-center justify-center text-brand-light mb-6 group-hover:scale-110 transition-transform">
                   {service.icon}
                 </div>
                 <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                 <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-[#0b1120] to-[#0f172a] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-brand-light/10 rounded-full border border-brand-light/20">
                <span className="text-brand-light font-bold text-sm tracking-wide">SOBRE O DESENVOLVEDOR</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Transformando Ideias em 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-blue-600"> Realidade Digital</span>
              </h2>
              
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Olá! Sou <strong className="text-white font-bold">CEO e Desenvolvedor Full Stack</strong> da V Project, 
                  especializado em criar experiências web que combinam design moderno com alta performance.
                </p>
                <p>
                  Com expertise em <strong className="text-brand-light">React, TypeScript e arquiteturas escaláveis</strong>, 
                  transformo visões empresariais em soluções digitais que geram resultados reais.
                </p>
                <p>
                  Cada projeto é uma oportunidade de superar expectativas através de código limpo, 
                  SEO otimizado e interfaces que convertem visitantes em clientes.
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3 pt-4">
                {['React', 'TypeScript', 'Node.js', 'Vite', 'TailwindCSS', 'SEO', 'Performance'].map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:bg-brand-light/10 hover:border-brand-light/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-6">
                <a href="#contact">
                  <Button className="px-8">Vamos Conversar Sobre Seu Projeto</Button>
                </a>
              </div>
            </div>

            {/* Visual Side - Photo + Stats */}
            <div className="relative">
              {/* Profile Photo */}
              <div className="mb-8 lg:mb-12">
                <div className="relative w-full max-w-md mx-auto">
                  {/* Decorative background */}
                  <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-brand-light/20 to-brand-dark/20 rounded-3xl blur-2xl"></div>
                  
                  {/* Photo Container */}
                  <div className="relative glass-card p-2 rounded-3xl">
                    <div className="relative rounded-2xl overflow-hidden aspect-square">
                      {/* TODO: Adicione sua foto aqui */}
                      {/* <img src="/profile.jpg" alt="Desenvolvedor V Project" className="w-full h-full object-cover" /> */}
                      
                      {/* Placeholder enquanto não adiciona foto */}
                      <div className="w-full h-full bg-gradient-to-br from-brand-light/10 to-brand-dark/20 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-brand-light/20 flex items-center justify-center">
                            <Code size={64} className="text-brand-light" />
                          </div>
                          <p className="text-gray-400 text-sm">Sua foto aqui</p>
                          <p className="text-gray-500 text-xs mt-1">public/profile.jpg</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Badge overlay */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-brand-light rounded-full border-4 border-[#0f172a] shadow-2xl">
                    <p className="text-sm font-bold text-white whitespace-nowrap">CEO & Full Stack Developer</p>
                  </div>
                </div>
              </div>

              {/* Stats - Mobile e Desktop */}
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                <div className="glass-card p-4 rounded-xl text-center">
                  <p className="text-2xl md:text-3xl font-bold text-brand-light">50+</p>
                  <p className="text-xs text-gray-400 mt-1">Projetos</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center">
                  <p className="text-2xl md:text-3xl font-bold text-emerald-400">100%</p>
                  <p className="text-xs text-gray-400 mt-1">Satisfação</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center">
                  <p className="text-2xl md:text-3xl font-bold text-blue-400">5+</p>
                  <p className="text-xs text-gray-400 mt-1">Anos</p>
                </div>
              </div>
            </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Projetos Recentes</h2>
              <p className="text-gray-400">Veja o que estamos construindo para nossos parceiros.</p>
            </div>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-brand-light font-bold hover:underline">
              <Code size={20} className="mr-2" /> Ver mais códigos
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - SECURE FORM */}
      <section id="contact" className="py-24 bg-gradient-to-b from-[#0b1120] to-[#0f172a]">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-3xl p-10 md:p-20 text-center relative overflow-hidden">
             {/* Background decoration */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-light/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-dark/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

             <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Vamos criar algo incrível juntos?</h2>
                <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                  Entre em contato através do nosso formulário seguro ou canais diretos.
                </p>
                
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className="bg-white/5 p-8 rounded-2xl border border-white/5 text-left space-y-6">
                     <h3 className="text-2xl font-bold">Canais Diretos</h3>
                     <p className="text-gray-400 text-sm">Prefere uma conversa rápida? Chame nos canais oficiais.</p>
                     
                     <a 
                      href="https://wa.me/5537996704294" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={trackWhatsAppClick}
                      className="flex items-center p-4 bg-gray-900/50 rounded-xl hover:bg-gray-900 transition-colors border border-gray-800"
                    >
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-4 text-green-500">
                        <MessageCircle size={20} />
                      </div>
                      <div>
                        <p className="font-bold">WhatsApp Comercial</p>
                        <p className="text-xs text-gray-500">Resposta em até 1h</p>
                      </div>
                    </a>

                    <a 
                      href="mailto:contatovproject@gmail.com" 
                      className="flex items-center p-4 bg-gray-900/50 rounded-xl hover:bg-gray-900 transition-colors border border-gray-800"
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 text-blue-500">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="font-bold">Email Corporativo</p>
                        <p className="text-xs text-gray-500">contatovproject@gmail.com</p>
                      </div>
                    </a>
                  </div>

                  {/* Secure Form Component */}
                  <ContactForm />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#080c17] pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Logo className="h-8 w-8" />
                <span className="text-xl font-bold">V PROJECT</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-6">
                Elevando o padrão do desenvolvimento web com designs inovadores e tecnologia inteligente.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-light hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-light hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Links Rápidos</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#home" className="hover:text-brand-light transition-colors">Início</a></li>
                <li><a href="#services" className="hover:text-brand-light transition-colors">Sobre Nós</a></li>
                <li><a href="#portfolio" className="hover:text-brand-light transition-colors">Portfólio</a></li>
                <li><a href="#contact" className="hover:text-brand-light transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Contato</h4>
              <ul className="space-y-4 text-gray-400">
                <li>contatovproject@gmail.com</li>
                <li>+55 (37) 99670-4294</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} V Project. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;