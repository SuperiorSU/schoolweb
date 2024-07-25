import React from "react";
import HeadHero from "../components/HeadHero";
import about from "../assets/about-head.png";
import ToTop from "../components/ToTop";
import aboutH from "../assets/school-history.jpg";
import ImageContainer from "../components/ImageContainer";
import FeaturedContainer from "../components/FeauturedContainer";
const About = () => {
  return (
    <div className="py-12 px-6">
      <HeadHero
        img={about}
        title="About Us"
        desc="Empowering Minds Through Excellence in Education"
      />
      <div className="flex flex-wrap justify-evenly items-center py-12">
        <div>
          <ImageContainer img={aboutH} />
        </div>
        <div>
          <FeaturedContainer
            title="Our School History"
            description="Founded in 1985, Springdale Public School has been a beacon of educational excellence and holistic development for nearly four decades. Our journey began with a vision to create a nurturing environment where students could thrive academically, socially, and personally.
            From our humble beginnings, we have grown into a premier institution known for our commitment to quality education. Our founders were driven by the belief that education is not just about imparting knowledge but about shaping well-rounded individuals who are prepared for the challenges of the future."
          />
        </div>
      </div>
      <ToTop />
    </div>
  );
};

export default About;
