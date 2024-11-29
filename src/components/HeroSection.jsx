import { useState, useEffect } from "react";
import image6 from "../assets/Image6.jpg";
import image2 from "../assets/Image12.jpg";
import image4 from "../assets/Image8.jpg";

const HeroSection = () => {
  const images = [image6, image2, image4]; // Tableau d'images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Changement d'image automatique toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 5000ms = 5 secondes

    return () => clearInterval(interval); // Nettoyer l'intervalle à la fin
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative bg-green-900 py-20 h-screen overflow-hidden animate-fadeSlideIn"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`, // Image actuelle
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 0.7,
        transition: "background-image 1s ease-in-out", // Transition douce entre les images
      }}
    >
      {/* Overlay semi-transparent */}
      <div className="absolute inset-0 bg-black bg-opacity-50 -z-10"></div>

      {/* Contenu de la section Hero */}
      <div className="container mx-auto px-4 text-center relative z-10 mt-10">
        <h1 className="text-xl md:text-6xl font-bold mt-20 text-white uppercase">
          Optimisez l&apos;agriculture avec{" "}
          <span className="text-green-500">AgriSmart</span>
        </h1>
        <p className="text-xl md:text-3xl mb-6 text-white mt-10 font-bold">
          Une{" "}
          <span className="underline decoration-green-600 ">
            solution intelligente
          </span>{" "}
          pour les{" "}
          <span className="underline decoration-green-600 ">agriculteurs</span>{" "}
          : <span className="underline decoration-green-600 ">capteurs</span>,{" "}
          <span className="underline decoration-green-600 ">
            plateformes et bien plus.
          </span>{" "}
        </p>
        <div className="pt-12 opacity-100 relative z-10">
          <a
            href="#about"
            className="bg-green-900 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition relative z-10"
            style={{ opacity: 1 }}
          >
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
