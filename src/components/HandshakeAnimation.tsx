import { useEffect, useState } from 'react';
import HandShakeSvg from '../assets/HandShake.svg';

const HandshakeAnimation = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-64 h-48 flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Background circle */}
        <div className="absolute w-32 h-32 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full blur-xl"></div>
        
        {/* Custom SVG Handshake Animation */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative group">
            {/* Main handshake SVG */}
            <img 
              src={HandShakeSvg}
              alt="Handshake"
              className={`w-48 h-48 transition-all duration-1000 ${
                isLoaded ? 'animate-handshake-bounce' : 'opacity-0'
              }`}
            />
            
            {/* Glow effect */}
            <div className="absolute inset-0 w-48 h-48 bg-red-500/20 rounded-full blur-md animate-pulse"></div>
            
            {/* Sparkle effects */}
            <div className="absolute -top-2 -left-2 w-3 h-3 border border-red-400 transform rotate-45 animate-sparkle-1 bg-red-500/20"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 border border-gray-600 transform rotate-45 animate-sparkle-2 bg-gray-600/20"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 border border-red-400 transform rotate-45 animate-sparkle-3 bg-red-500/20"></div>
            
            {/* Dashed lines */}
            <div className="absolute -bottom-3 -left-3 w-6 h-0.5 bg-gradient-to-r from-red-500 to-transparent border-dashed border-red-500 animate-dash-1"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-0.5 bg-gradient-to-r from-gray-600 to-transparent border-dashed border-gray-600 animate-dash-2"></div>
            <div className="absolute -top-2 -right-2 w-3 h-0.5 bg-gradient-to-r from-red-500 to-transparent border-dashed border-red-500 animate-dash-3"></div>
            
            {/* Additional pulse dots */}
            <div className="absolute top-1 left-1 w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1 right-1 w-1 h-1 bg-gray-500 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandshakeAnimation; 