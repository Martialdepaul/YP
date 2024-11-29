import { FiDroplet, FiMap, FiUser } from "react-icons/fi";

// Services Section Component
export default function ServicesSection() {
  const services = [
    {
      icon: <FiDroplet size={50} />,
      title: "Détection d'Humidité",
      description: "Mesure précise de l'humidité de l'eau pour vos cultures",
    },
    {
      icon: <FiMap size={50} />,
      title: "Couverture Régionale",
      description: "Services dans Tunis, Béja et Sousse",
    },
    {
      icon: <FiUser size={50} />,
      title: "Support Agriculteur",
      description: "Accompagnement technique personnalisé",
    },
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            <div className="flex justify-center mb-4 text-green-600">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
