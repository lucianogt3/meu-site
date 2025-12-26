
import React from 'react';
import { PortfolioData } from '../types';
import { Download, ChevronRight, Github, Linkedin, Mail } from 'lucide-react';

interface Props {
  data: PortfolioData;
}

const Hero: React.FC<Props> = ({ data }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-100/50 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-emerald-100/30 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Gestão Hospitalar & Tecnologia
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Onde o Cuidado <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
                Encontra a Tecnologia.
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
              {data.title}
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href={data.resumeUrl}
                download
                className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
              <a 
                href="#experience"
                className="flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-800 rounded-2xl font-bold hover:border-blue-400 transition-all hover:scale-105"
              >
                Minha Trajetória
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-12 flex justify-center md:justify-start gap-6 text-slate-400">
              <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="hover:text-slate-900 transition-colors"><Github className="w-6 h-6" /></a>
              <a href={`mailto:${data.email}`} className="hover:text-red-500 transition-colors"><Mail className="w-6 h-6" /></a>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative z-10 w-72 h-72 lg:w-[450px] lg:h-[450px] mx-auto overflow-hidden rounded-[2rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src={data.profileImage} 
                alt={data.name} 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Background elements for image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-slate-200 rounded-[3rem] -rotate-6 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
