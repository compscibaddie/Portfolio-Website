import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="skill-card">
            <h3 className="skill-title">
              <span className="text-accent">■</span> Technical Skills
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
          
          <div className="skill-card">
            <h3 className="skill-title">
              <span className="text-accent">■</span> Development Tools
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
          
          <div className="skill-card">
            <h3 className="skill-title">
              <span className="text-accent">■</span> Soft Skills & Languages
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
        
        <h3 className="section-title">Software & Technologies</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {['Python', 'JavaScript', 'Java', 'C#', 'Node.js', 'React', 'MySQL', 'MongoDB', 'Git', 'Express.js', 'VS Code', 'IntelliJ'].map((skill) => (
            <div key={skill} className="bg-gray-50 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl text-accent mb-3">■</div>
              <h4 className="font-montserrat font-bold">{skill}</h4>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-20 right-0 opacity-5 font-montserrat font-black text-8xl uppercase rotate-12 pointer-events-none select-none">
        Develop
      </div>
    </section>
  );
};

export default Skills;