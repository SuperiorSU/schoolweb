import { Link } from "react-router-dom";

const EventCard = ({ event, showText }) => {
    return (
      <div
        className={`relative h-80 w-96 mx-auto mt-5 px-5 py-8 group rounded-3xl overflow-hidden shadow-xl bg-gray-200 transition-transform duration-300 transform hover:scale-105`}
        style={{ backgroundImage: `url(${event.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
         <Link to="/gallery">
        <div
          className={`absolute inset-0 w-full h-full rounded-3xl transition-all duration-300 ${showText ? 'bg-black bg-opacity-10   backdrop-blur' : 'bg-black bg-opacity-0'}`}
        ></div>
        <div className="absolute inset-x-5 text-white">
          <h2 className="text-3xl font-semibold mb-2">{event.title}</h2>
          <p className="text-sm font-medium uppercase tracking-wider mb-6">Gallery</p>
          {showText && (
            <p className="text-lg">{event.desc}</p>
          )}
        </div>
        {showText && (
           
                <button className="absolute inset-x-5 bottom-8 py-2 rounded-2xl font-semibold bg-white shadow-lg text-gray-800 transition duration-200 hover:bg-gray-300">
                    View Gallery
                </button>
        )}
        <div
          className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"
          ></div>
          </Link>
      </div>
    );
  };

  export default EventCard;