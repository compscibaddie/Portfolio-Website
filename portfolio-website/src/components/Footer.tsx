import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-montserrat font-black text-2xl">Itumeleng Kekana</h3>
            <p className="font-space-grotesk">Software Engineer</p>
          </div>
          
          <div className="flex gap-4">
            {['github', 'linkedin', 'dribbble', 'behance'].map((platform) => (
              <a 
                key={platform} 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent transition-colors duration-300"
              >
                <span className="text-white">{platform[0].toUpperCase()}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© 2025 Itumeleng Kekana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;