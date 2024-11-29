const Contact = () => {
  return (
    <section id="contact" className="bg-green-100 py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Contactez-nous
        </h2>
        <form className="max-w-4xl mx-auto bg-green-50 p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nom */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            ></textarea>
          </div>

          <button className="bg-green-800 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
