import { FiBook, FiTarget, FiUsers } from "react-icons/fi";
import Omar from "../assets/OMAR.jpg";
import Oumou from "../assets/Oumou.jpg";
import Ether from "../assets/Esther.jpg";
import Martial from "../assets/Martial1.jpg";
const About = () => {
  return (
    <section id="about" className="bg-green-100 py-16 ">
      <div className="container mx-auto px-4 mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black uppercase">
          À propos de nous
        </h2>

        <div className="md:flex md:space-x-10">
          <div className="md:w-1/2 mb-6 md:mb-0 p-6 bg-green-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
              <FiBook className="mr-3 text-green-700" size={24} /> Notre
              Histoire
            </h3>
            <p className="text-gray-700  text-xl break-words">
              Young Plant est né de la passion pour une agriculture durable et
              intelligente. Nous croyons en l&apos;innovation pour relever les
              défis agricoles modernes. Notre équipe est composée de
              visionnaires déterminés à transformer l&apos;agriculture avec des
              solutions technologiques.
            </p>
          </div>

          <div className="md:w-1/2 p-6 bg-green-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
              <FiTarget className="mr-3 text-green-700" size={24} /> Notre
              Mission
            </h3>
            <p className="text-gray-700 text-xl break-words">
              Aider les agriculteurs à maximiser leur rendement tout en
              respectant l&apos;environnement. Nous combinons la technologie et
              la simplicité pour des résultats impressionnants. Notre objectif
              est de rendre l&apos;agriculture plus efficace, durable et
              accessible à tous.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center text-black mb-8 uppercase">
            <FiUsers className="inline mr-3" size={30} /> Notre Équipe
          </h3>

          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8">
            {/* Membre 1 */}
            <div className="bg-green-200 p-6 rounded-lg shadow-xl text-center">
              <img
                src={Martial}
                alt="Membre 4"
                className="w-45 h-45 mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold">Martial De-Paul</h4>
              <p className="text-gray-600">
                CEO et Co-Fondateur et Responsable IT
              </p>
              <p className="text-gray-700 mt-2">
                Martial est responsable de la mise en œuvre des solutions
                techniques d&apos;irrigation intelligente dans les exploitations
                agricoles.
              </p>
            </div>

            <div className="bg-green-200 p-6 rounded-lg shadow-xl text-center">
              <img
                src={Oumou}
                alt="Membre 2"
                className="w-50 h-50 mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold">Oumou Coulibaly</h4>
              <p className="text-gray-600">Resposable Marketing</p>
              <p className="text-gray-700 mt-2">
                Oumou est responsable de la direction stratégique et du
                développement des campagnes marketing, tout en supervisant les
                opérations globales.
              </p>
            </div>

            <div className="bg-green-200 p-6 rounded-lg shadow-xl text-center">
              <img
                src={Omar}
                alt="Membre 1"
                className="w-50 h-50 mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold">Omar</h4>
              <p className="text-gray-600">CEO et Co-Fondateur</p>
              <p className="text-gray-700 mt-2">
                Omar est passionné par l&apos;IOT par les technologies durables
                et dirige YP avec une vision claire de l&apos;innovation
                agricole.
              </p>
            </div>

            <div className="bg-green-200 p-6 rounded-lg shadow-xl text-center">
              <img
                src={Ether}
                alt="Membre 3"
                className="w-50 h-50 mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold"> Yaouno Esther Togo </h4>
              <p className="text-gray-600">Chef de Produit</p>
              <p className="text-gray-700 mt-2">
                Yaouno est responsable de la direction stratégique et du
                développement des differentes campagnes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
