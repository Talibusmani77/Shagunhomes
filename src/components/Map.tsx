import { Maximize2, X } from 'lucide-react';
import { useState } from 'react';

const LayoutMapsGallery = () => {
  const [selectedMap, setSelectedMap] = useState(null);

  const maps = [
    {
      id: 1,
      title: "Greater Noida Map",
      description: "Master Plan Greater Noida – Detailed sector and infrastructure layout for strategic growth and investment.",
      image: "/greater-noida-master-plan-2021-map.jpg"
    },
    {
      id: 2,
      title: "Yamuna Expressway Map",
      description: "Master Plan of Yamuna Expressway - Comprehensive view of development zones and connectivity.",
      image: "/wmremove-transformed.webp"
    },
    {
      id: 3,
      title: "Noida Map",
      description: "Master Plan of Noida Extension - Strategic sectors showing residential, commercial and industrial areas.",
      image: "/Master Plan Noida Extension.jpg"
    }
  ];

  const openFullscreen = (map) => {
    setSelectedMap(map);
  };

  const closeFullscreen = () => {
    setSelectedMap(null);
  };

  return (
    <section className="py-16 md:py-24 bg-white text-black">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Our Layout Maps:
          </h2>
        </div>
        
        {/* Maps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {maps.map((map) => (
            <div 
              key={map.id} 
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
              onClick={() => openFullscreen(map)}
            >
              {/* Map Image */}
              <div className="relative h-64 bg-gray-800 overflow-hidden">
                <img 
                  src={map.image} 
                  alt={map.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={40} />
                </div>
              </div>
              
              {/* Map Title */}
              <div className="bg-green-300 text-black py-3 px-4 text-center font-semibold">
                {map.title}
              </div>
              
              {/* Description Overlay */}
              <div className="absolute bottom-16 left-0 right-0 bg-black bg-opacity-90 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-gray-200">{map.description}</p>
              </div>
            </div>
          ))}
        </div>

        
      </div>

      {/* Fullscreen Modal */}
      {selectedMap && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={closeFullscreen}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-green-400 transition-colors"
            onClick={closeFullscreen}
          >
            <X size={40} />
          </button>
          
          <div className="max-w-6xl max-h-screen flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-3xl font-bold mb-4 text-green-400">{selectedMap.title}</h2>
            <div className="relative max-h-[80vh] overflow-auto">
              <img 
                src={selectedMap.image} 
                alt={selectedMap.title}
                className="w-25 h-45 rounded-lg"
              />
            </div>
            <p className="mt-4 text-gray-300 text-center max-w-2xl">{selectedMap.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default LayoutMapsGallery;