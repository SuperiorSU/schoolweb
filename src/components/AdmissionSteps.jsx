import React from 'react';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

const steps = [
  {
    title: "Application Submission",
    description: "Submit your application form along with the required documents online or at the school's admission office.",
    icon: <FaArrowRight className="text-blue-900" />
  },
  {
    title: "Entrance Test",
    description: "Attend the entrance test scheduled by the school to assess your eligibility for the desired grade.",
    icon: <FaArrowRight className="text-blue-900" />
  },
  {
    title: "Interview",
    description: "Participate in an interview with the admission committee to discuss your child's academic and extracurricular interests.",
    icon: <FaArrowRight className="text-blue-900" />
  },
  {
    title: "Admission Confirmation",
    description: "Receive the admission confirmation letter and complete the enrollment process by paying the required fees.",
    icon: <FaCheck className="text-blue-900" />
  }
];

const AdmissionSteps = () => {
  return (
    <div className="p-4 max-w-xl mx-auto bg-white">
      <h2 className="font-heading text-black mb-8 text-3xl font-bold lg:text-4xl">
        Admission Process at Springdale Public School
      </h2>
      {steps.map((step, index) => (
        <div className="flex mb-8" key={index}>
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                  index === steps.length - 1
                    ? "border-blue-900 bg-blue-900"
                    : "border-blue-900"
                }`}
              >
                {step.icon}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="h-full w-px bg-gray-300"></div>
            )}
          </div>
          <div className="pt-1 pb-8">
            <p className="mb-2 text-xl font-bold text-black">
              {step.title}
            </p>
            <p className="text-gray-600">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdmissionSteps;
