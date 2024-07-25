import React from 'react'
import HeadHero from '../components/HeadHero'
import faculty from '../assets/faculty-head.png'
import TeachersTeam from '../components/TeachersTeam'
import ImageContainer from '../components/ImageContainer'
import FeaturedContainer from '../components/FeauturedContainer'
import principal from '../assets/principal.jpg'
import vpricipal from '../assets/vice-principal.avif'
import ToTop from '../components/ToTop'
const Faculty = () => {
  return (
    <div className='px-6 py-12'>
      <HeadHero title="Faculty" desc="Empowering Minds Through Excellence in Education" img={faculty}  />
      <div className='flex p-6 py-10 gap-y-10 flex-wrap justify-around items-center lg:my-10 md:my-7 my-6'>
        <div>
          <ImageContainer img={principal}/>
        </div>
        <div>
          <FeaturedContainer title="John Doe" 
          subText="Principal, M.Ed, 20 years of experience in educational administration"
          description="Welcome to Springdale Public School, where we nurture young minds for a brighter future. Our dedicated faculty and comprehensive curriculum ensure that every student receives the support and education needed to excel."/>
        </div>
      </div>
      <div className='flex p-6 py-10 gap-y-10 flex-wrap justify-around items-center lg:my-10 md:my-7 my-6'>
        <div>
          <FeaturedContainer title="Jane Smith" 
          subText="Vice Principal, M.Sc. in Physics, 15 years of teaching experience."
          description="Welcome to Springdale Public School, where we nurture young minds for a brighter future. Our dedicated faculty and comprehensive curriculum ensure that every student receives the support and education needed to excel."/>
        </div>
        <div>
          <ImageContainer img={vpricipal}/>
        </div>
      </div>
      <div>
        <TeachersTeam/>
      </div>
      <ToTop/>
    </div>
  )
}

export default Faculty