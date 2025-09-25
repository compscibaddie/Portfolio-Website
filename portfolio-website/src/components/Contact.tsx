import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <span className="text-white text-xl">✉</span>
              </div>
              <div>
                <h3 className="font-montserrat font-bold">Email</h3>
                <p className="text-gray-600">kekanaitumeleng25@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <span className="text-white text-xl">📱</span>
              </div>
              <div>
                <h3 className="font-montserrat font-bold">Phone</h3>
                <p className="text-gray-600">+27 65 877 8917</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <span className="text-white text-xl">📍</span>
              </div>
              <div>
                <h3 className="font-montserrat font-bold">Location</h3>
                <p className="text-gray-600">Pretoria, Gauteng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;