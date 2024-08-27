// components/Navigation.js
import Image from 'next/image';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-black text-white py-4 px-6 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4 relative">
          {/* <Image
            src="/images/logo.png"
            alt="Projeto Desenvolve Logo"
            width={40}
            height={40}
          /> */}
          <h1 className="text-2xl font-bold">PROJETO DESENVOLVE</h1>
          {/* SVG Border */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none" className="w-full h-2">
              <path d="M0 5 L30 5 L35 2.5 L65 2.5 L70 5 L100 5" stroke="#D73F94" strokeWidth="1" fill="none"/>
            </svg>
          </div>
        </div>
        <div>
          <button>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
