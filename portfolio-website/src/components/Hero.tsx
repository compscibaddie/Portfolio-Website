import React from "react";

const Hero: React.FC = () => {
    return(
    <section className="min-h-screen flex items-center relative overflow-hidden py-20">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-montserrat font-black text-gray-100 text-40vw md:text-30vw lg:text-25vw pointer-events-none select-none">8</span>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h1 className="font-montserrat font-black text-6xl md:text-8xl lg:text-9xl uppercase leading-none mb-8">
          <span className="block">SOFTWARE</span>
          <span className="block text-accent text-right">ENGINEER</span>
        </h1>
        <p className="font-space-grotesk text-xl md:text-2xl max-w-md ml-auto text-right">
          Bridging technology and design with innovative solutions
        </p>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-900 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-900 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
    );
};
export default Hero;