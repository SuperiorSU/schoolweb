import React from 'react';

const VisionMission = () => {
  return (
    <div className="p-7 flex gap-5 flex-wrap justify-around items-center">
      <div className="max-w-[580px] min-w-[260px] max-h-[600px] min-h-[300px] rounded-md bg-blue-900 text-white w-full transition-transform duration-500 ease-in transform hover:-translate-x-3 hover:-translate-y-20">
        <div className='my-auto p-12'>
            <h1 className="text-3xl text-center font-serif font-bold">Our Mission</h1>
            <p className="mt-4 text-center">
            Our goal is to cultivate students with vibrant and innovative thinking, a capacity for empathy and compassion towards others, and the determination to act upon their convictions. We emphasize the comprehensive growth of each child, addressing spiritual, moral, intellectual, social, emotional, and physical dimensions.
            </p>
        </div>
      </div>
      <div className="max-w-[580px] min-w-[260px] max-h-[600px] min-h-[300px] rounded-md bg-blue-900 text-white w-full transition-transform duration-500 ease-in transform hover:-translate-x-3 hover:-translate-y-20">
        <div className='my-auto p-12'>
            <h1 className="text-3xl text-center font-serif font-bold">Our Vision</h1>
            <p className="mt-4 text-center">
            Springdale Public School is committed to impart an integral education that is global and based on a strong foundation of Indian tradition, culture and values and dedicated in producing achievers in the future.
            </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
