import React from 'react';

const BlurCard = (props) => {
    const title = props.title;
    const description = props.description;
    const subText = props.subText;
    const img = props.img;
  return (
    <div className="relative h-96 max-w-sm mx-auto mt-20 px-5 py-8 group rounded-3xl bg-gray-200 overflow-hidden shadow-xl">
      <img 
        src={img} 
        alt="" 
        className="absolute w-full h-full inset-0 object-cover" 
      />
      <div
        className="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur"
      ></div>
      <div className="absolute inset-x-5 text-white">
        <h2 className="text-4xl font-semibold mb-2">{title}</h2>
        <p className="text-sm font-medium uppercase tracking-wider mb-6">{subText}</p>
        <p className="hidden group-hover:block">
          {description}
        </p>
      </div>
      <button className="absolute inset-x-5 bottom-8 py-3 rounded-2xl font-semibold bg-white shadow-lg hidden transition duration-200 hover:bg-gray-300 group-hover:block">
        Learn more
      </button>
    </div>
  );
};

export default BlurCard;
