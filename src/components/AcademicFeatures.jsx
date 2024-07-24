import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/20/solid'; // Import React Icons

const AcademicFeatures = () => {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-4 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          <div>
            <h2 className='text-lg font-semibold leading-8 tracking-tight text-indigo-600'>Springdale Public School</h2>
            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Nurturing Future Leaders</p>
            <p className='mt-6 text-base leading-7 text-justify text-gray-600'>
              At Springdale Public School, we use a blend of traditional and modern teaching techniques to cater to different learning styles. Our commitment is to provide a comprehensive educational experience that prepares students for success.
            </p>
            <p className='mt-6 text-base leading-7 text-gray-600'>
              <strong>Teaching Methodologies:</strong> "We use a blend of traditional and modern teaching techniques to cater to different learning styles."
            </p>
          </div>
          <dl className='col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16'>
            
            <div className='relative pl-9'>
              <dt className='font-semibold text-gray-900'>
                <CheckCircleIcon className='absolute top-1 left-0 h-5 w-5 text-indigo-500' aria-hidden='true' />
                Interactive Lectures
              </dt>
              <dd className='mt-2'>Combining lectures with interactive elements to engage students actively.</dd>
            </div>
            
            <div className='relative pl-9'>
              <dt className='font-semibold text-gray-900'>
                <CheckCircleIcon className='absolute top-1 left-0 h-5 w-5 text-indigo-500' aria-hidden='true' />
                Group Discussions
              </dt>
              <dd className='mt-2'>Facilitating group discussions to promote collaborative learning and critical thinking.</dd>
            </div>
            
            <div className='relative pl-9'>
              <dt className='font-semibold text-gray-900'>
                <CheckCircleIcon className='absolute top-1 left-0 h-5 w-5 text-indigo-500' aria-hidden='true' />
                Hands-on Activities
              </dt>
              <dd className='mt-2'>Incorporating practical exercises and projects to apply theoretical concepts.</dd>
            </div>
            
            <div className='relative pl-9'>
              <dt className='font-semibold text-gray-900'>
                <CheckCircleIcon className='absolute top-1 left-0 h-5 w-5 text-indigo-500' aria-hidden='true' />
                Technology Integration
              </dt>
              <dd className='mt-2'>Utilizing digital tools and resources to enhance the learning experience.</dd>
            </div>
            
            <div className='relative pl-9'>
              <dt className='font-semibold text-gray-900'>
                <CheckCircleIcon className='absolute top-1 left-0 h-5 w-5 text-indigo-500' aria-hidden='true' />
                Personalized Learning
              </dt>
              <dd className='mt-2'>Adapting teaching methods to individual learning styles and needs.</dd>
            </div>
            
          </dl>
        </div>
      </div>
    </div>
  );
};

export default AcademicFeatures;