
import React from 'react';
import { Code2, Cpu, Database, Layout } from 'lucide-react';

interface Props {
  tools: string[];
}

const TechStack: React.FC<Props> = ({ tools }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
          <Layout className="w-10 h-10 mx-auto text-blue-400" />
          <h4 className="font-bold">Frontend</h4>
        </div>
        <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
          <Database className="w-10 h-10 mx-auto text-emerald-400" />
          <h4 className="font-bold">Backend/DB</h4>
        </div>
        <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
          <Cpu className="w-10 h-10 mx-auto text-purple-400" />
          <h4 className="font-bold">Logic</h4>
        </div>
        <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
          <Code2 className="w-10 h-10 mx-auto text-orange-400" />
          <h4 className="font-bold">Frameworks</h4>
        </div>
      </div>
      
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {tools.map(tool => (
          <span key={tool} className="px-5 py-2.5 bg-white/10 rounded-xl text-lg font-medium backdrop-blur-sm hover:bg-blue-600 transition-all cursor-default">
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
