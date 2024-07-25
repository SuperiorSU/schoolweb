import React from 'react';
import school from "../assets/school-history.jpg";
import TeamCard from "./TeamCard";
import president from "../assets/president.jpg";
import vpresident from "../assets/vpresident.webp";
import secretary from "../assets/secretart.jpg";

const teamMembers = [
  {
    name: "Lisa Wong",
    imageSrc: vpresident,
    profession: "Vice President, Grade-11. \"Leading with vision.\"",
  },
  {
    imageSrc: president,
    name: "Amy Parker",
    profession: "President, Grade-12. \"Striving for excellence.\"",
  },
  {
    imageSrc: secretary,
    name: "Rajiv Mehta",
    profession: "Secretary, Grade-10. \"Committed to service.\"",
  },
];

const Council = () => {
  return (
    <div className="py-12">
        <h4 className=' font-bold text-xl text-center'>Meet Our </h4>
        <h2 className='font-serif font-bold text-5xl py-6 text-center'>Student Council</h2>
      <div className="relative bg-black p-7">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${school})`,
            opacity: 0.5,
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black" style={{ opacity: 0.5 }} />
        <div className="relative -mx-4 flex flex-wrap justify-center py-16">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              imageSrc={member.imageSrc}
              name={member.name}
              profession={member.profession}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Council;
