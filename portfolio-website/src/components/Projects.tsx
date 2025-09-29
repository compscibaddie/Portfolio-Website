import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Student Management Hub",
      description: "Desktop application using C# and Windows Forms with CRUD functionality and 3-tier architecture. Applied object-oriented principles for robust data management.",
      tags: ["C#", "Windows Forms", "3-Tier Architecture", "OOP"],
      githubUrl: "https://github.com/Mosawenkosi7/StudentManagementHub",
      type: "Desktop App"
    },
    {
      title: "Community Portal Web App",
      description: "Dynamic web portal developed with Node.js, Express.js, and EJS. Implemented routing, templating, and UI components for community interaction.",
      tags: ["Node.js", "Express.js", "EJS", "JavaScript", "Git"],
      githubUrl: "https://github.com/compscibaddle/WPR381_Community_Portal_Website",
      type: "Web Application"
    },
    {
      title: "Australian Weather Prediction Model",
      description: "Machine learning pipeline in Python to predict rainfall and temperature classes with 80%+ accuracy using scikit-learn, pandas, and NumPy.",
      tags: ["Python", "scikit-learn", "pandas", "NumPy", "Machine Learning"],
      githubUrl: "https://github.com/DieMalEen/MLG382_AG_CYO_Project",
      type: "Data Science"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Projects & Professional Simulations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className={`h-48 flex items-center justify-center relative overflow-hidden ${
                project.type === "Professional Simulation" 
                  ? "bg-gradient-to-r from-blue-500 to-blue-700" 
                  : project.type === "Data Science"
                  ? "bg-gradient-to-r from-green-500 to-green-700"
                  : "bg-gradient-to-r from-accent to-orange-400"
              }`}>
                <span className="text-white text-5xl font-montserrat font-black opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {index + 1}
                </span>
                <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                  {project.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-bold text-xl mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:underline"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;