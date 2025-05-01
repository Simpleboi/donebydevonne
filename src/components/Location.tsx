export const Location = () => {
  return (
    <section id="location" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-5xl font-bold">
          Our{" "}
          <span className="text-5xl font-bold  bg-gradient-to-r from-pink-400 to-purple-500 pb-2 transition-all duration-300 drop-shadow-sm text-gradient bg-clip-text text-transparent">
            Location
          </span>
        </h2>
        <p className="text-gray-600 mb-8">
          Come visit at our work, appointments are available by booking above!
        </p>
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-purple-500" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.903876801157!2d-95.37029122466687!3d29.75149497507231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf3dde8f46a7%3A0xaffafb388149f735!2sHouston%20House%20Apartments%2C%201617%20Fannin%20St%2C%20Houston%2C%20TX%2077002!5e0!3m2!1sen!2sus!4v1746058604998!5m2!1sen!2sus"
            className="w-full aspect-[4/3] rounded-b-2xl border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};
