import { useEffect, useState } from "react";

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Complete loading after 3 seconds
    const loadTimer = setTimeout(() => {
      setLoading(false);
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(loadTimer);
    };
  }, [onComplete]);

  if (!loading) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 bg-white flex items-center justify-center z-50 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center px-4">
        {/* Logo Container with Animation */}
        <div className="relative inline-block mb-8">
          {/* Spinning Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 border-4 border-transparent border-t-green-500 rounded-full animate-spin"></div>
          </div>
          
          {/* Logo Image with Zoom Animation */}
          <div className="relative z-10 animate-pulse">
            <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
              <img 
                src="/Shagunlogo.png" 
                alt="ShagunHomes Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Tagline with Animation */}
        <div className="mb-4">
          <p className="text-gray-600 text-lg md:text-xl font-medium animate-pulse">
            Finding Your Dream Home
          </p>
        </div>

        {/* Loading Bar */}
        <div className="w-64 md:w-80 mx-auto bg-gray-200 rounded-full h-2 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-red-500 to-green-500 rounded-full animate-loading"></div>
        </div>

        {/* Loading Text */}
        <p className="text-gray-500 text-xs md:text-sm mt-4 animate-pulse">
          Loading amazing properties...
        </p>
      </div>

      <style>{`
        @keyframes loading {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        .animate-loading {
          animation: loading 2.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};