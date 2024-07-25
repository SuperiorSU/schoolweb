import React from 'react';

const StudentCard = ({ imageSrc, name, profession }) => {
  return (
    <div className="relative w-72 h-80 mx-4 mb-6 overflow-hidden bg-gray-800 rounded-lg shadow-lg">
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={name}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative flex flex-col items-center justify-end h-full p-4 text-white">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm">{profession}</p>
      </div>
    </div>
  );
};

export default StudentCard;
