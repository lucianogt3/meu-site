
import React, { useState } from 'react';
import { PortfolioData, Experience, Education, Project } from '../types';
import { motion } from 'framer-motion';
import { X, Save, Plus, Trash2, Globe, FileText, Layout, Briefcase, User, GraduationCap, Settings } from 'lucide-react';

interface Props {
  data: PortfolioData;
  onSave: (data: PortfolioData) => void;
  onClose: () => void;
}

const AdminPanel: React.FC<Props> = ({ data, onSave, onClose }) => {
  const [formData, setFormData] = useState<PortfolioData>(data);
  const [activeTab, setActiveTab] = useState<'basic' | 'experience' | 'skills' | 'projects'>('basic');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      role: "Novo Cargo",
      company: "Instituição",
      period: "2024 - Atual",
      location: "Goiânia",
      description: ["Nova responsabilidade"]
    };
    setFormData(prev => ({ ...prev, experiences: [newExp, ...prev.experiences] }));
  };

  const addProject = () => {
    const newProj: Project = {
      id: Date.now().toString(),
      name: "Novo Projeto",
      description: "Descrição do projeto",
      highlights: ["Destaque 1"],
      stack: ["React"],
      status: "Em desenvolvimento"
    };
    setFormData(prev => ({ ...prev, projects: [newProj, ...prev.projects] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-slate-900/60 dark:bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
    >
      <motion.div 
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-white dark:bg-[#111] w-full max-w-5xl h-[90vh] rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-white/10 flex flex-col overflow-hidden"
      >
        <div className="p-8 border-b border-slate-100 dark:border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white">
              <Settings className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Executive Dashboard</h2>
              <p className="text-sm text-slate-500 dark:text-neutral-500 font-medium">Gestão de Identidade Profissional</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-all">
            <X className="w-6 h-6 text-slate-400" />
          </button>
        </div>

        <div className="flex flex-grow overflow-hidden">
          <div className="w-64 border-r border-slate-100 dark:border-white/5 p-6 space-y-2 bg-slate-50 dark:bg-transparent">
            {[
              { id: 'basic', label: 'Dados Básicos', icon: User },
              { id: 'experience', label: 'Trajetória', icon: Briefcase },
              { id: 'projects', label: 'Projetos Tech', icon: Layout },
              { id: 'skills', label: 'Domínios', icon: GraduationCap }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-bold transition-all ${activeTab === tab.id ? 'bg-emerald-500 text-white shadow-xl shadow-emerald-500/20' : 'text-slate-500 dark:text-neutral-500 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/5'}`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex-grow overflow-y-auto p-10 space-y-10 custom-scrollbar">
            {activeTab === 'basic' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-neutral-500 px-1">Nome</label>
                    <input name="name" value={formData.name} onChange={handleChange} className="w-full p-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl focus:border-emerald-500 outline-none transition-all dark:text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-neutral-500 px-1">Headline</label>
                    <input name="headline" value={formData.headline} onChange={handleChange} className="w-full p-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl focus:border-emerald-500 outline-none transition-all dark:text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-neutral-500 px-1">Hero Pitch</label>
                  <textarea name="heroPitch" value={formData.heroPitch} onChange={handleChange} rows={3} className="w-full p-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl focus:border-emerald-500 outline-none transition-all resize-none dark:text-white" />
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-neutral-500 px-1">E-mail</label>
                    <input name="email" value={formData.email} onChange={handleChange} className="w-full p-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl focus:border-emerald-500 outline-none transition-all dark:text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-neutral-500 px-1">Localização</label>
                    <input name="location" value={formData.location} onChange={handleChange} className="w-full p-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl focus:border-emerald-500 outline-none transition-all dark:text-white" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Experiências</h3>
                  <button type="button" onClick={addExperience} className="px-4 py-2 bg-emerald-500 text-white rounded-xl text-xs font-black uppercase tracking-widest">Adicionar</button>
                </div>
                <div className="space-y-6">
                  {formData.experiences.map((exp, idx) => (
                    <div key={exp.id} className="p-6 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl relative">
                      <button type="button" onClick={() => setFormData(prev => ({ ...prev, experiences: prev.experiences.filter(e => e.id !== exp.id) }))} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <input value={exp.role} placeholder="Cargo" onChange={(e) => {
                          const newExps = [...formData.experiences];
                          newExps[idx].role = e.target.value;
                          setFormData({...formData, experiences: newExps});
                        }} className="p-3 bg-white dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-xl text-sm dark:text-white" />
                        <input value={exp.company} placeholder="Empresa" onChange={(e) => {
                          const newExps = [...formData.experiences];
                          newExps[idx].company = e.target.value;
                          setFormData({...formData, experiences: newExps});
                        }} className="p-3 bg-white dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-xl text-sm dark:text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Projetos Digitais</h3>
                  <button type="button" onClick={addProject} className="px-4 py-2 bg-emerald-500 text-white rounded-xl text-xs font-black uppercase tracking-widest">Novo Projeto</button>
                </div>
                <div className="grid gap-6">
                  {formData.projects.map((proj, idx) => (
                    <div key={proj.id} className="p-6 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl relative">
                       <button type="button" onClick={() => setFormData(prev => ({ ...prev, projects: prev.projects.filter(p => p.id !== proj.id) }))} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <input value={proj.name} placeholder="Nome do Projeto" onChange={(e) => {
                        const newProjs = [...formData.projects];
                        newProjs[idx].name = e.target.value;
                        setFormData({...formData, projects: newProjs});
                      }} className="w-full p-3 bg-white dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-xl text-sm font-bold mb-3 dark:text-white" />
                      <textarea value={proj.description} placeholder="Descrição curta" onChange={(e) => {
                        const newProjs = [...formData.projects];
                        newProjs[idx].description = e.target.value;
                        setFormData({...formData, projects: newProjs});
                      }} className="w-full p-3 bg-white dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-xl text-sm resize-none dark:text-white" rows={2} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-neutral-500 px-1">Skills Saúde (vírgula)</label>
                  <textarea value={formData.healthSkills.join(', ')} onChange={(e) => setFormData({...formData, healthSkills: e.target.value.split(',').map(s => s.trim())})} className="w-full p-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl min-h-[100px] dark:text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-neutral-500 px-1">Skills Gestão (vírgula)</label>
                  <textarea value={formData.gestaoSkills.join(', ')} onChange={(e) => setFormData({...formData, gestaoSkills: e.target.value.split(',').map(s => s.trim())})} className="w-full p-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl min-h-[100px] dark:text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-neutral-500 px-1">Skills Tech (vírgula)</label>
                  <textarea value={formData.techSkills.join(', ')} onChange={(e) => setFormData({...formData, techSkills: e.target.value.split(',').map(s => s.trim())})} className="w-full p-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl min-h-[100px] dark:text-white" />
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="p-8 border-t border-slate-100 dark:border-white/5 flex justify-end gap-4 bg-slate-50 dark:bg-transparent">
          <button onClick={onClose} className="px-8 py-3 text-slate-500 font-bold hover:text-slate-900 dark:hover:text-white transition-all">Descartar</button>
          <button onClick={handleSubmit} className="px-10 py-3 bg-emerald-500 text-white font-black rounded-2xl shadow-xl shadow-emerald-500/20 hover:scale-[1.02] active:scale-95 transition-all">
            Salvar Portfólio
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AdminPanel;
