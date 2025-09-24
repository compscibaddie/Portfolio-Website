import React from 'react';

const Statement: React.FC = () => {
  return (
    <section className="py-20 bg-accent text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <p className="text-2xl md:text-3xl max-w-4xl mx-auto text-center font-space-grotesk">
          "Motivated software engineering student passionate about building scalable, cloud-native applications 
          and solving complex problems through modern technologies like Python, JavaScript, and cloud architecture. 
          Eager to contribute to innovative projects in software engineering, DevOps, or application integration."
        </p>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-montserrat font-black text-white text-20vw opacity-10 pointer-events-none select-none">“</span>
      </div>
    </section>
  );
};

export default Statement;