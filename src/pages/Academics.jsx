import React from 'react'
import HeadHero from '../components/HeadHero'
import academics from '../assets/academics.png'
import AcademicSection from '../components/AcademicSection'
import AcademicFeatures from '../components/AcademicFeatures'
import ImageContainer from '../components/ImageContainer'
import FeaturedContainer from '../components/FeauturedContainer'
import classroom from '../assets/DIGITAL-CLASS.jpg'
const Academics = () => {
  return (
    <div className='py-12 px-6'>
      <HeadHero title="Academics" desc="Empowering Minds Through Excellence in Education" img={academics} />
      <div className='my-10'>
        <h2 className='text-4xl font-serif text-center py-6'>Curriculum Overview</h2>
        <p className='w-3/4 mx-auto text-center'>At Springdale Public School, we offer a comprehensive and well-structured curriculum tailored to provide a holistic education experience. Our curriculum is designed to nurture students' intellectual and personal growth across various stages of their academic journey. </p>
      </div>
      <AcademicSection/>
      <AcademicFeatures/>
      <div className='flex p-6 py-10 gap-y-10 flex-wrap justify-around items-center lg:my-10 md:my-7 my-6'>
        <div>
          <ImageContainer img={classroom}/>
        </div>
        <div>
          <FeaturedContainer title="Springdale Public School" description="Welcome to Springdale Public School, where we nurture young minds for a brighter future. Our dedicated faculty and comprehensive curriculum ensure that every student receives the support and education needed to excel. At Springdale, we believe in fostering a learning environment that promotes growth, creativity, and a love for learning. Together, we prepare students to become confident, responsible, and successful individuals."/>
        </div>
      </div>
    </div>
  )
}

export default Academics