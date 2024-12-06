import { FiDroplet, FiMap, FiBarChart } from "react-icons/fi";

const Solution = () => {
  const solutions = [
    {
      icon: <FiDroplet size={50} />,
      title: "Capteurs intelligents",
      description:
        "Nos capteurs mesurent en temps réel l'humidité du sol, la température, et bien plus encore.",
    },
    {
      icon: <FiMap size={50} />,
      title: "Actionneurs connectés",
      description:
        "Automatisez l'irrigation et la fertilisation grâce à nos actionneurs intelligents.",
    },
    {
      icon: <FiBarChart size={50} />,
      title: "Tableaux de bord",
      description:
        "Gérez toutes vos données agricoles via une plateforme intuitive et facile à utiliser.",
    },
  ];

  return (
    <section id="solution" className="bg-green-100 py-16 ">
      <div className="container mx-auto px-4 pt-20 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Notre Solution
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg hover:bg-green-200"
            >
              <div className="flex justify-center mb-4 text-green-600">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
