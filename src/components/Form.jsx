import { useState } from "react";
import axios from "axios";

function Form({ setWeather }) {
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_KEY = "TA_CLE_API";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      alert("Erreur : Localisation introuvable");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Saisissez vos informations</h2>
      <label className="block mb-2">
        Localisation :
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded"
          placeholder="Ville ou région"
        />
      </label>
      <button
        type="submit"
        className="px-4 py-2 bg-green-600 text-white rounded mt-4"
      >
        Obtenir des recommandations
      </button>
    </form>
  );
}

export default Form;
