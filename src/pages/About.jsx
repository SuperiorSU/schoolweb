import React from "react";
import HeadHero from "../components/HeadHero";
import about from "../assets/about-head.png";
import ToTop from "../components/ToTop";
import aboutH from "../assets/school-history.jpg";
import school from "../assets/school-history.jpg";
import principal from "../assets/principal.jpg";
import ImageContainer from "../components/ImageContainer";
import FeaturedContainer from "../components/FeauturedContainer";
import VisionMission from "../components/VissionMission";
import InfraGid from "../components/InfraGid";

const About = () => {
  return (
    <div >
      <div className="py-12 px-6">
      <HeadHero
        img={about}
        title="About Us"
        desc="Empowering Minds Through Excellence in Education"
      />
      </div>
      <div className="flex p-7 gap-y-7 flex-wrap-reverse justify-evenly items-center py-12">
        <div>
          <FeaturedContainer
            title="Our School History"
            description="Founded in 1985, Springdale Public School has been a beacon of educational excellence and holistic development for nearly four decades. Our journey began with a vision to create a nurturing environment where students could thrive academically, socially, and personally.
            From our humble beginnings, we have grown into a premier institution known for our commitment to quality education. Our founders were driven by the belief that education is not just about imparting knowledge but about shaping well-rounded individuals who are prepared for the challenges of the future."
          />
        </div>
            <div>
              <ImageContainer img={aboutH} />
            </div>
      </div>
      <div className="py-16">
          <VisionMission/>
      </div>
      <div className="relative bg-black p-7">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${school})`,
            opacity: 0.5,
            backgroundAttachment: "fixed",
          }}
        />
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: 0.5 }}
        />
        <div className='relative flex flex-wrap justify-around items-center py-16'>
          <div>
            <ImageContainer img={principal} />
          </div>
          <div className="lg:w-1/3">
            {/* A message from principal */}
            <h2 className="text-3xl text-white font-serif font-semibold py-8">A Message from Principal</h2>
            <p className="text-white text-lg">
              As the principal of Springdale Public School, I am proud to lead a dedicated team of educators who are committed to providing a nurturing and enriching learning environment for our students. Our goal is to empower young minds and prepare them for success in the ever-changing world.
            </p>
          </div>
        </div>
      </div>
      <div>
        <InfraGid/>
      </div>
      <ToTop />
    </div>
  );
};

export default About;
