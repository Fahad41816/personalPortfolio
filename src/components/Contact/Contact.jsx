

const Contact = () => {
    return (
        <div className="container mx-auto text-center px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <div className="max-w-md mx-auto bg-white rounded p-8 shadow-md">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                type="text"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                type="email"
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded"
                id="message"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
};

export default Contact;