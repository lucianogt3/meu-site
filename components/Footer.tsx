
import React from 'react';
import { PortfolioData } from '../types';
import { Mail, Phone, MapPin, Shield } from 'lucide-react';

interface Props {
  data: PortfolioData;
  onAdminClick: () => void;
}

const Footer: React.FC<Props> = ({ data, onAdminClick }) => {
  return (
    <footer id="contact" className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-black mb-6 tracking-tight text-slate-900">
              Vamos construir o <br />
              <span className="text-blue-600">futuro da saúde juntos?</span>
            </h3>
            <p className="text-slate-500 max-w-sm mb-8">
              Interessado em soluções digitais para enfermagem ou gestão hospitalar de alta performance? Entre em contato.
            </p>
            <div className="flex gap-4">
              <button onClick={onAdminClick} className="flex items-center gap-2 text-xs text-slate-300 hover:text-slate-600 transition-colors">
                <Shield className="w-3 h-3" /> Area Administrativa
              </button>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Contato Direto</h4>
            <div className="space-y-4">
              <a href={`mailto:${data.email}`} className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center"><Mail className="w-4 h-4" /></div>
                {data.email}
              </a>
              <a href={`tel:${data.phone}`} className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center"><Phone className="w-4 h-4" /></div>
                {data.phone}
              </a>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center"><MapPin className="w-4 h-4" /></div>
                {data.location}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Atalhos</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-500 hover:text-blue-600">Sobre Mim</a></li>
              <li><a href="#experience" className="text-slate-500 hover:text-blue-600">Experiência</a></li>
              <li><a href="#skills" className="text-slate-500 hover:text-blue-600">Competências</a></li>
              <li><a href={data.resumeUrl} className="text-slate-500 hover:text-blue-600 font-bold">Download CV</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Luciano Lino Pereira. Todos os direitos reservados.</p>
          <p>Desenvolvido com foco em Excelência Assistencial & Tecnologia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
