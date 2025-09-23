import React from "react";

const Header: React.FC = () => {
    return (
        <header className="py-10">
            <div className="conatiner mx-auto px-4 md:px-6">
                <div className="fles flex-col md:flex-row justify-between items center">
                    <div className="logo text-center md:text-left md-4 md:mb-0">
                        <h1 className="font-montserrat font-black text-4xl md:text-5xl uppercase">ITUMELENG KEKANA</h1>
                        <p className="font-space-grotesk text-lg relative inline-block mt-2">Hello World!
                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-width duration-300 group-hover:w-full"></span>
                        </p>
                    </div>
                    <nav className="flex flex-wrap justify-center gap-4 md:gap6">
                        <a href="#education" className="font-space-grotesk font-bold relative py-1 group">
                            Education
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-width duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#Skills" className="font-space-grotesk font-bold relative py-1 group">
                            Skills
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-width duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#Projects" className="font-space-grotesk font-bold relative py-1 group">
                            Projects
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-width duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="#Contact" className="font-space-grotesk font-bold relative py-1 group">
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-width duration-300 group-hover:w-full"></span>
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
};
export default Header;