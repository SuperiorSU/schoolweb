import React from 'react';

const ArticleCard = (props) => {
    const image = props.image;
    const name = props.name;
    const event = props.event;
    const description = props.description;
  return (
    <div className="relative max-w-xs mx-auto bg-white border  rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="relative p-4 text-black">
        <h3 className="text-lg font-semibold">{name}</h3>
        <h4 className="text-md font-medium">{event}</h4>
        <p className="mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
