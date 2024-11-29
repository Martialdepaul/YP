export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
        <div>
          <h4 className="text-xl font-bold mb-4">AgriHumidity</h4>
          <p>
            Solutions innovantes pour la gestion de l&apos;humidité agricole en
            Tunisie
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Contact</h4>
          <p>Email: contact@YP.io</p>
          <p>Téléphone: +216 58 249 411</p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Réseaux Sociaux</h4>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/martial-de-paul/">Linkedlin</a>
          </div>
        </div>
        <div>
          <a
            href="#"
            className="fixed right-4 bottom-4 bg-green-800 p-2 rounded-full shadow-lg hover:bg-green-700 transition"
            aria-label="Retour en haut"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-green-700 pt-4">
        © 2024 YP. Tous droits réservés.
      </div>
    </footer>
  );
}
