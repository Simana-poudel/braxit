import Image from 'next/image';
import React from 'react';

const Social = () => {
  return (
    <div className="text-center p-12 mb-12 bg-[#FFF7F5] xl:mt-16 md:mt-40">
      <h2 className="text-2xl font-bold  mb-4 text-blue">Let`&quot;` Get Social</h2>
      <div className="flex justify-center space-x-6 my-8">
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/youtube.png"  // Replace with the actual path to your YouTube icon
            alt="YouTube"
            className="w-8 h-8 hover:opacity-75 transition-opacity"
          />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/facebook.png"  // Replace with the actual path to your Facebook icon
            alt="Facebook"
            className="w-8 h-8 hover:opacity-75 transition-opacity"
          />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/linkedin.png"  // Replace with the actual path to your LinkedIn icon
            alt="LinkedIn"
            className="w-8 h-8 hover:opacity-75 transition-opacity"
          />
        </a>
      </div>
      <p className="text-gray-600">Follow us on social media for updates and more!</p>
    </div>
  );
};

export default Social;
