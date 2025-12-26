
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INITIAL_DATA } from './constants';
import { PortfolioData } from './types';
import { 
  Settings, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Download,
  Check,
  CheckCircle2,
  Moon,
  Sun,
  Activity
} from 'lucide-react';
import AdminPanel from './components/AdminPanel';

// --- Subcomponents ---

const Badge: React.FC<{ text: string }> = ({ text }) => (
  <span className="inline-flex items-center rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 px-3 py-1 text-sm font-medium text-slate-700 dark:text-neutral-200">
    {text}
  </span>
);

const Card: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => (
  <div className={`rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm dark:shadow-2xl p-6 transition-all hover:shadow-md dark:hover:bg-white/[0.07] ${className}`}>
    {children}
  </div>
);

const Section: React.FC<{ id: string, title: string, subtitle?: string, children: React.ReactNode }> = ({ id, title, subtitle, children }) => (
  <section id={id} className="scroll-mt-24 py-16 md:py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="mb-12">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-slate-500 dark:text-neutral-400 leading-relaxed max-w-3xl text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      {children}
    </div>
  </section>
);

// --- Main App ---

const App: React.FC = () => {
  const [data, setData] = useState<PortfolioData>(INITIAL_DATA);
  const [showAdmin, setShowAdmin] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('luciano_portfolio_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setData({ ...INITIAL_DATA, ...parsed });
      } catch (e) {
        console.error("Failed to parse saved data", e);
      }
    }
    
    // Check system preference
    const isDarkMode = document.documentElement.classList.contains('dark') || 
                      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(isDarkMode);
    if (isDarkMode) document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  const handleUpdateData = (newData: PortfolioData) => {
    setData(newData);
    localStorage.setItem('luciano_portfolio_data', JSON.stringify(newData));
    setShowAdmin(false);
  };

  const toggleAdmin = () => setShowAdmin(!showAdmin);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-neutral-200 selection:bg-emerald-500/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-extrabold text-xl tracking-tighter text-slate-900 dark:text-white">
            <Activity className="w-6 h-6 text-emerald-500" />
            <span>Vitae<span className="text-emerald-500">.</span></span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-neutral-400">
            <a href="#sobre" className="hover:text-emerald-500 dark:hover:text-white transition-colors">Sobre</a>
            <a href="#dominios" className="hover:text-emerald-500 dark:hover:text-white transition-colors">Domínios</a>
            <a href="#projetos" className="hover:text-emerald-500 dark:hover:text-white transition-colors">Projetos</a>
            <a href="#experiencia" className="hover:text-emerald-500 dark:hover:text-white transition-colors">Experiência</a>
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5 text-emerald-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
              </button>
              <a href="#contato" className="px-5 py-2 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-all font-bold">Falar comigo</a>
            </div>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <button onClick={toggleTheme} className="p-2 text-slate-600 dark:text-neutral-400">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={toggleAdmin} className="p-2 text-slate-600 dark:text-neutral-400">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Gestão Hospitalar & Tech
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8">
              {data.name}
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-neutral-300 font-medium mb-6 leading-relaxed">
              {data.headline}
            </p>
            <p className="text-lg text-slate-500 dark:text-neutral-400 leading-relaxed max-w-2xl mb-10">
              {data.heroPitch}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={data.resumeUrl} download className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-all">
                <Download className="w-5 h-5" /> Download CV
              </a>
              <a href="#projetos" className="px-8 py-4 bg-white dark:bg-neutral-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-neutral-800 transition-all">
                Ver Projetos <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden aspect-square shadow-2xl border border-white/10 group">
              <img src={data.profileImage} alt={data.name} className="w-full h-full object-cover dark:grayscale dark:group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-500/20 blur-[100px] rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <Section id="sobre" title="Sobre" subtitle="Convergindo vivência assistencial, liderança estratégica e inovação digital.">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7 space-y-6 text-lg text-slate-600 dark:text-neutral-400 leading-relaxed">
            {data.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="md:col-span-5">
            <Card className="h-full">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Áreas de Foco</h3>
              <ul className="space-y-4">
                {data.focusAreas.map((area, i) => (
                  <li key={i} className="flex gap-3 text-slate-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="dominios" title="Domínios e Competências">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Assistencial</h3>
            <div className="flex flex-wrap gap-2">
              {data.healthSkills.map(s => <Badge key={s} text={s} />)}
            </div>
          </Card>
          <Card>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Gestão</h3>
            <div className="flex flex-wrap gap-2">
              {data.gestaoSkills.map(s => <Badge key={s} text={s} />)}
            </div>
          </Card>
          <Card>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Tecnologia</h3>
            <div className="flex flex-wrap gap-2">
              {data.techSkills.map(s => <Badge key={s} text={s} />)}
            </div>
          </Card>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projetos" title="Projetos em Saúde Digital">
        <div className="grid md:grid-cols-2 gap-8">
          {data.projects.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-slate-200 dark:border-emerald-500/10 hover:border-emerald-500/30">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{p.name}</h3>
                  {p.status && <Badge text={p.status} />}
                </div>
                <p className="text-slate-500 dark:text-neutral-400 mb-6">{p.description}</p>
                <ul className="space-y-3 mb-8">
                  {p.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-neutral-300">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map(s => (
                    <span key={s} className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400/80 px-2 py-1 bg-emerald-500/5 rounded-md border border-emerald-500/10">
                      {s}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experiencia" title="Experiência Profissional">
        <div className="space-y-6">
          {data.experiences.map((exp) => (
            <Card key={exp.id}>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-semibold">{exp.company} • {exp.location}</p>
                </div>
                <span className="text-slate-400 dark:text-neutral-500 font-medium">{exp.period}</span>
              </div>
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-4 text-slate-600 dark:text-neutral-400 leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2.5"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contato" title="Contato">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <Card className="p-10">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Vamos conversar?</h3>
              <p className="text-slate-500 dark:text-neutral-400 mb-10 text-lg">
                Se você busca liderança em alta complexidade ou desenvolvimento de soluções digitais para gestão em saúde, entre em contato.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-slate-700 dark:text-neutral-300">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-white/5 rounded-2xl flex items-center justify-center text-emerald-500 dark:text-emerald-400"><Mail className="w-6 h-6" /></div>
                    <div>
                      <p className="text-xs text-slate-400 dark:text-neutral-500 font-bold uppercase tracking-widest">E-mail</p>
                      <a href={`mailto:${data.email}`} className="font-bold hover:text-emerald-500 dark:hover:text-white transition-colors">{data.email}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-slate-700 dark:text-neutral-300">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-white/5 rounded-2xl flex items-center justify-center text-emerald-500 dark:text-emerald-400"><Phone className="w-6 h-6" /></div>
                    <div>
                      <p className="text-xs text-slate-400 dark:text-neutral-500 font-bold uppercase tracking-widest">Telefone</p>
                      <p className="font-bold">{data.phone}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-slate-700 dark:text-neutral-300">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-white/5 rounded-2xl flex items-center justify-center text-emerald-500 dark:text-emerald-400"><MapPin className="w-6 h-6" /></div>
                    <div>
                      <p className="text-xs text-slate-400 dark:text-neutral-500 font-bold uppercase tracking-widest">Local</p>
                      <p className="font-bold">{data.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 bg-slate-100 dark:bg-white/5 rounded-2xl flex items-center justify-center text-slate-400 hover:text-emerald-500 transition-all"><Linkedin className="w-5 h-5" /></a>
                    <a href="#" className="w-12 h-12 bg-slate-100 dark:bg-white/5 rounded-2xl flex items-center justify-center text-slate-400 hover:text-emerald-500 transition-all"><Github className="w-5 h-5" /></a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="lg:col-span-4 space-y-6">
            <Card>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Referências</h4>
              <p className="text-sm text-slate-400 dark:text-neutral-500 italic mb-4">Disponíveis sob solicitação.</p>
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5">
                  <p className="text-sm font-bold text-slate-800 dark:text-neutral-200">Maria Eduarda</p>
                  <p className="text-xs text-slate-400 dark:text-neutral-500">Gerente de Enfermagem</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5">
                  <p className="text-sm font-bold text-slate-800 dark:text-neutral-200">Jeiza</p>
                  <p className="text-xs text-slate-400 dark:text-neutral-500">Enfermeira</p>
                </div>
              </div>
            </Card>
            <a href={data.resumeUrl} download className="block w-full py-6 bg-emerald-500 text-white text-center font-black rounded-3xl shadow-xl shadow-emerald-500/20 hover:scale-[1.02] transition-all">
              DOWNLOAD CURRÍCULO PDF
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 dark:border-white/10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 dark:text-neutral-500 text-sm font-medium">
          <p>© {new Date().getFullYear()} {data.name}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <button onClick={toggleAdmin} className="hover:text-emerald-500 dark:hover:text-white transition-colors flex items-center gap-2">
              <Settings className="w-4 h-4" /> Admin
            </button>
            <p>Built with React + Tailwind</p>
          </div>
        </div>
      </footer>

      {/* Admin Button */}
      <button 
        onClick={toggleAdmin}
        className="fixed bottom-8 left-8 z-[60] w-14 h-14 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all group border border-white/20"
      >
        <Settings className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
      </button>

      {/* Admin Panel Overlay */}
      <AnimatePresence>
        {showAdmin && (
          <AdminPanel 
            data={data} 
            onSave={handleUpdateData} 
            onClose={() => setShowAdmin(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
