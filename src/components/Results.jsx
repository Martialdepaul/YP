function Results({ weather, setWeather }) {
  const recommendations =
    weather.main.temp > 30
      ? "Il fait très chaud, arrosez tôt le matin ou tard le soir."
      : weather.weather[0].main === "Rain"
      ? "Il va pleuvoir, réduisez l'irrigation."
      : "Maintenez une irrigation modérée.";

  return (
    <div className="bg-white p-6 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-primary">Résultats</h2>
      <p>
        <strong>Localisation :</strong> {weather.name}
      </p>
      <p>
        <strong>Température :</strong> {weather.main.temp}°C
      </p>
      <p>
        <strong>Météo :</strong> {weather.weather[0].description}
      </p>
      <div className="bg-gray-100 p-4 mt-4 rounded">
        <strong>Recommandations :</strong>
        <p>{recommendations}</p>
      </div>
      <button
        onClick={() => setWeather(null)}
        className="mt-4 px-4 py-2 bg-accent text-white font-bold rounded hover:bg-primary transition"
      >
        Retour
      </button>
    </div>
  );
}

export default Results;
