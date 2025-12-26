
import React from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
  icon?: React.ReactNode;
}

const Section: React.FC<Props> = ({ title, children, id, className = "bg-slate-50", icon }) => {
  return (
    <section id={id} className={`py-24 px-6 ${className}`}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          {icon && <div className="mb-4">{icon}</div>}
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center tracking-tight">
            {title}
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mt-4"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
