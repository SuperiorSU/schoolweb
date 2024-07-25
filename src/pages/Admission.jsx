import React from 'react'
import HeadHero from '../components/HeadHero'
import admission from '../assets/admission-head.png'
import ToTop from '../components/ToTop'
import AdmissionSteps from '../components/AdmissionSteps'
import ImageContainer from '../components/ImageContainer'
import FeaturedContainer from '../components/FeauturedContainer'
import admissionS from '../assets/admission.jpg'
const Admission = () => {
  return (
    <div className='py-12 px-6'>
      <HeadHero title="Admission" desc="Empowering Minds Through Excellence in Education" img={admission} />
      <div className='flex flex-wrap justify-evenly py-12  items-center'>
        <div>
          <AdmissionSteps/>
        </div>
        <div>
          <ImageContainer img={admissionS} />
          <FeaturedContainer title="Admission Process at Springdale Public School" description="At Springdale Public School, we are committed to providing a nurturing and dynamic environment where every student can thrive. Our admission process is designed to be clear and straightforward, ensuring that you and your child have a smooth transition into our school community. Here’s a step-by-step guide to help you through our admission process:"/>
        </div>
      </div>
      <ToTop/>
    </div>
  )
}

export default Admission