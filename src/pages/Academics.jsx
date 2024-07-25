import React from "react";
import HeadHero from "../components/HeadHero";
import academics from "../assets/academics.png";
import AcademicSection from "../components/AcademicSection";
import AcademicFeatures from "../components/AcademicFeatures";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import ImageContainer from "../components/ImageContainer";
import classroom from "../assets/DIGITAL-CLASS.jpg";
import ToTop from "../components/ToTop";
const Academics = () => {
  return (
    <div className="py-12 px-6">
      <HeadHero
        title="Academics"
        desc="Empowering Minds Through Excellence in Education"
        img={academics}
      />
      <div className="my-10">
        <h2 className="text-3xl font-semibold font-serif text-center py-6">
          Curriculum Overview
        </h2>
        <p className="w-3/4 mx-auto text-center">
          At Springdale Public School, we offer a comprehensive and
          well-structured curriculum tailored to provide a holistic education
          experience. Our curriculum is designed to nurture students'
          intellectual and personal growth across various stages of their
          academic journey.{" "}
        </p>
      </div>
      <AcademicSection />
      <AcademicFeatures />
      <div className="flex p-6 py-10 gap-y-10 flex-wrap justify-around items-center lg:my-10 md:my-7 my-6">
        <div>
          <ImageContainer img={classroom} />
        </div>
        <div className="lg:w-1/2">
          <div className="mx-auto grid max-w-2xl gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-1">
            <div className="col-span-2">
              <h2 className="text-lg font-serif font-semibold leading-8 tracking-tight text-blue-900">
                Our Innovative Approach
              </h2>
              <p className="mt-2 text-3xl font-serif font-bold tracking-tight text-gray-900 sm:text-4xl">
                Key Features
              </p>
              <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
                <div className="relative pl-9">
                  <dt className="font-semibold text-gray-900">
                    <CheckCircleIcon
                      className="absolute top-1 left-0 h-5 w-5 text-blue-900"
                      aria-hidden="true"
                    />
                    Digital Classrooms
                  </dt>
                  <dd className="mt-2">
                    Equipped with the latest technology to facilitate a modern
                    learning experience.
                  </dd>
                </div>

                <div className="relative pl-9">
                  <dt className="font-semibold text-gray-900">
                    <CheckCircleIcon
                      className="absolute top-1 left-0 h-5 w-5 text-blue-900"
                      aria-hidden="true"
                    />
                    Interactive Learning Modules
                  </dt>
                  <dd className="mt-2">
                    Engaging modules that make learning interactive and
                    enjoyable.
                  </dd>
                </div>

                <div className="relative pl-9">
                  <dt className="font-semibold text-gray-900">
                    <CheckCircleIcon
                      className="absolute top-1 left-0 h-5 w-5 text-blue-900"
                      aria-hidden="true"
                    />
                    Access to Online Educational Platforms
                  </dt>
                  <dd className="mt-2">
                    Providing students with resources from various online
                    educational platforms.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <ToTop/>
    </div>
  );
};

export default Academics;
