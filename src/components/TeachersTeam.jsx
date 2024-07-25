import React from "react";
import TeamCard from "./TeamCard";
const TeachersTeam = () => {
  return (
    <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Meet Our Awesome
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2]  text-blue-900 sm:text-4xl md:text-[40px]">
                Faculty Members
              </h2>
              
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <TeamCard
            name="Emily Johnson"
            profession="English Teacher, M.A. in English, 10 years of teaching
experience"
            imageSrc="https://i.ibb.co/T1J9LD4/image-03-2.jpg"
          />
          <TeamCard
            name="Michael Brown"
            profession="Mathematics Teacher, M.Sc. in Mathematics, 8 years of
teaching experience."
            imageSrc="https://i.ibb.co/8P6cvVy/image-01-1.jpg"
          />
          <TeamCard
            name="Sophia Davis"
            profession=" Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience."
            imageSrc="https://i.ibb.co/30tGtjP/image-04.jpg"
          />
          <TeamCard
            name="David Wilson"
            profession="Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience."
            imageSrc="https://i.ibb.co/yVVT0Dp/image-02-2.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default TeachersTeam;


