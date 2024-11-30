import { useState } from "react";
import { FiHome, FiInfo, FiTool, FiMail, FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-green-800 text-white shadow-lg sticky top-0 z-50 ">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center animate-fadeSlideIn">
        {/* Logo et Titre */}
        <div className="flex items-center">
          <a href="/">
            <h1 className="text-2xl font-bold flex items-center ">
              <img src={Logo} className="size-10" alt="logo" />{" "}
            </h1>
          </a>
        </div>

        {/* Navigation principale */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-green-400 flex items-center">
            <FiHome className="mr-2" size={20} /> Accueil
          </a>
          <a href="#about" className="hover:text-green-400 flex items-center">
            <FiInfo className="mr-2" size={20} /> À propos
          </a>
          <a
            href="#solution"
            className="hover:text-green-400 flex items-center"
          >
            <FiTool className="mr-2" size={20} /> Solution
          </a>
          <a href="#contact" className="hover:text-green-400 flex items-center">
            <FiMail className="mr-2" size={20} /> Contact
          </a>
        </div>

        {/* Menu mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>

          {isMenuOpen && (
            <div className="absolute top-full right-0 bg-green-700 w-full shadow-md">
              <div className="flex flex-col items-center py-4 space-y-4">
                <a
                  href=""
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-green-400 w-full text-center flex items-center justify-center"
                >
                  <FiHome className="mr-2" size={20} /> Accueil
                </a>
                <a
                  href="#about"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-green-400 w-full text-center flex items-center justify-center"
                >
                  <FiInfo className="mr-2" size={20} /> À propos
                </a>
                <a
                  href="#solution"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-green-400 w-full text-center flex items-center justify-center"
                >
                  <FiTool className="mr-2" size={20} /> Solution
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-green-400 w-full text-center flex items-center justify-center"
                >
                  <FiMail className="mr-2" size={20} /> Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
