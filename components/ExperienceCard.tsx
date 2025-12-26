
import React from 'react';
import { Experience } from '../types';
import { Calendar, Building2, CheckCircle2 } from 'lucide-react';

interface Props {
  experience: Experience;
}

const ExperienceCard: React.FC<Props> = ({ experience }) => {
  return (
    <div className="relative pl-8 md:pl-12 border-l-2 border-slate-100 pb-12 last:pb-0">
      {/* Timeline Bullet */}
      <div className="absolute top-0 left-0 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-600 shadow-sm"></div>
      
      <div className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              {experience.role}
            </h3>
            <div className="flex items-center gap-4 mt-2 text-slate-500 font-medium">
              <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4" /> {experience.company}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {experience.period}</span>
            </div>
          </div>
        </div>

        <ul className="grid gap-3">
          {experience.description.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-600">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
