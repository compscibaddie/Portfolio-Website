import React from 'react';

// Simple Icons for technologies
const TechIcons = {
  Python: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
    </svg>
  ),
  JavaScript: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
    </svg>
  ),
  Java: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
    </svg>
  ),
  'C#': () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <text x="12" y="16" textAnchor="middle" fontSize="12" fontWeight="bold">C#</text>
    </svg>
  ),
  'Node.js': () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <circle cx="12" cy="12" r="10" fill="green"/>
    </svg>
  ),
  React: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="12" cy="12" r="3" fill="currentColor"/>
    </svg>
  ),
  MySQL: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
    </svg>
  ),
  MongoDB: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
    </svg>
  ),
  Git: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
    </svg>
  ),
  'Express.js': () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
    </svg>
  ),
  'VS Code': () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
    </svg>
  ),
  IntelliJ: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <circle cx="12" cy="12" r="10" fill="red"/>
    </svg>
  )
};

const Skills: React.FC = () => {
  const technologyLogos = [
    { name: 'Python', color: 'from-blue-500 to-blue-700', icon: TechIcons.Python },
    { name: 'JavaScript', color: 'from-yellow-400 to-yellow-600', icon: TechIcons.JavaScript },
    { name: 'Java', color: 'from-red-500 to-red-700', icon: TechIcons.Java },
    { name: 'C#', color: 'from-purple-500 to-purple-700', icon: TechIcons['C#'] },
    { name: 'Node.js', color: 'from-green-500 to-green-700', icon: TechIcons['Node.js'] },
    { name: 'React', color: 'from-cyan-500 to-cyan-700', icon: TechIcons.React },
    { name: 'MySQL', color: 'from-blue-400 to-blue-600', icon: TechIcons.MySQL },
    { name: 'MongoDB', color: 'from-green-400 to-green-600', icon: TechIcons.MongoDB },
    { name: 'Git', color: 'from-orange-500 to-orange-700', icon: TechIcons.Git },
    { name: 'Express.js', color: 'from-gray-500 to-gray-700', icon: TechIcons['Express.js'] },
    { name: 'VS Code', color: 'from-blue-400 to-blue-600', icon: TechIcons['VS Code'] },
    { name: 'IntelliJ', color: 'from-red-400 to-red-600', icon: TechIcons.IntelliJ },
  ];

  return (
    <section id="skills" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="skill-card hover:transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="skill-title">
              <span className="text-accent">💻</span> Technical Skills
            </h3>
            <ul className="skill-list">
              <li>Full-Stack Development</li>
              <li>Python, JavaScript, Java, C#</li>
              <li>Node.js, Express.js, REST APIs</li>
              <li>MySQL, PostgreSQL, MongoDB</li>
              <li>Object-Oriented Programming</li>
              <li>Agile Methodologies (Scrum)</li>
              <li>Cloud-Native Architecture</li>
              <li>Application Integration</li>
            </ul>
          </div>
          
          <div className="skill-card hover:transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="skill-title">
              <span className="text-accent">🛠️</span> Development Tools
            </h3>
            <ul className="skill-list">
              <li>Git, GitHub Version Control</li>
              <li>Visual Studio, VS Code</li>
              <li>IntelliJ, NetBeans</li>
              <li>Windows Forms</li>
              <li>MVC Architecture</li>
              <li>3-Tier Application Design</li>
              <li>Machine Learning Pipelines</li>
              <li>CI/CD Practices</li>
            </ul>
          </div>
          
          <div className="skill-card hover:transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="skill-title">
              <span className="text-accent">🌟</span> Soft Skills & Languages
            </h3>
            <ul className="skill-list">
              <li>Problem-Solving & Debugging</li>
              <li>Team Collaboration</li>
              <li>Time Management</li>
              <li>Creative Thinking</li>
              <li>Client-Centric Design</li>
              <li>Growth Mindset</li>
              <li>English - Fluent</li>
            </ul>
          </div>
        </div>
        
        <h3 className="section-title">Technologies & Tools</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {technologyLogos.map((tech) => {
            const IconComponent = tech.icon;
            return (
              <div 
                key={tech.name} 
                className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:transform hover:-translate-y-2"
              >
                <div className={`w-20 h-20 mx-auto rounded-xl bg-gradient-to-r ${tech.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent />
                </div>
                <h4 className="font-montserrat font-bold text-center text-gray-800 group-hover:text-accent transition-colors duration-300">
                  {tech.name}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="absolute top-20 right-0 opacity-5 font-montserrat font-black text-8xl uppercase rotate-12 pointer-events-none select-none">
        Develop
      </div>
    </section>
  );
};

export default Skills;