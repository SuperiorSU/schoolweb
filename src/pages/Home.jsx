import React from 'react'
import HeroSlider from '../components/HeroSlider'
import ToTop from '../components/ToTop'
import ImageContainer from '../components/ImageContainer'
import FeaturedContainer from '../components/FeauturedContainer'
import featured1 from '../assets/featured1.jpg'
import VisionMission from '../components/VissionMission'
const Home = () => {
  return (
    <div>
      <HeroSlider/>
      <div className='flex p-6 py-10 gap-y-10 flex-wrap justify-around items-center lg:my-10 md:my-7 my-6'>
        <div>
          <ImageContainer img={featured1}/>
        </div>
        <div>
          <FeaturedContainer title="Springdale Public School" description="Welcome to Springdale Public School, where we nurture young minds for a brighter future. Our dedicated faculty and comprehensive curriculum ensure that every student receives the support and education needed to excel. At Springdale, we believe in fostering a learning environment that promotes growth, creativity, and a love for learning. Together, we prepare students to become confident, responsible, and successful individuals."/>
        </div>
      </div>
      <div>
        <VisionMission/>
      </div>
      <ToTop/>
    </div>
  )
}

export default Home