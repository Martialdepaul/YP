import { useState, useEffect } from "react";
import image6 from "../assets/Image6.jpg";
import image2 from "../assets/Image12.jpg";
import image4 from "../assets/Image8.jpg";

const HeroSection = () => {
  const images = [image6, image2, image4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10 flex flex-col justify-center items-center h-full">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight uppercase">
          Optimisez l&apos;agriculture avec <br />
          <span className="text-green-500">Young Plant</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Une{" "}
          <span className="text-green-400 font-semibold underline decoration-green-600">
            solution intelligente
          </span>{" "}
          pour les{" "}
          <span className="text-green-400 font-semibold underline decoration-green-600">
            agriculteurs
          </span>{" "}
          :{" "}
          <span className="text-green-400 font-semibold underline decoration-green-600">
            capteurs
          </span>
          ,{" "}
          <span className="text-green-400 font-semibold underline decoration-green-600">
            plateformes
          </span>{" "}
          et bien plus.
        </p>
        <div className="mt-10">
          <a
            href="#about"
            className="bg-green-700 hover:bg-green-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-lg sm:text-xl shadow-md transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            En savoir plus <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
