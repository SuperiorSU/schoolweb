import React from 'react'
import ToTop from '../components/ToTop'
import HeadHero from '../components/HeadHero'
import students from '../assets/student-head.png'
import banner from '../assets/banne.png'
import ImageContainer from '../components/ImageContainer'
import FeaturedContainer from '../components/FeauturedContainer'
import extrac from '../assets/extrac.jpg'
import clubs from '../assets/clubs.webp'
import CouncilSection from '../components/CouncilSection'
const Students = () => {
  return (
    <div>
      <div className='px-6 py-12'>
        <HeadHero title="Students" desc="Empowering Minds Through Excellence in Education" img={students} />
      </div>
        
        <div className="flex p-7 gap-y-7 flex-wrap-reverse justify-evenly items-center py-12">
        <div>
          <FeaturedContainer
            title="Extracurricular Activities"
            description="At Springdale Public School, we believe that education is not just about academics. We are committed to providing a holistic learning experience that nurtures the mind, body, and spirit of our students. Our extracurricular activities are designed to help students discover their passions, develop new skills, and build lasting friendships. From sports to music, drama to debate, there is something for everyone at Springdale."
          />
        </div>
            <div>
              <ImageContainer img= {extrac}/>
            </div>
      </div>
        <div className="flex p-7 gap-y-7 flex-wrap-reverse justify-evenly items-center py-12">
            <div>
              <ImageContainer img={clubs}/>
            </div>
        <div>
          <FeaturedContainer
            title="Clubs and Societies"
            description="Our clubs and societies provide students with the opportunity to explore their interests, develop their talents, and connect with like-minded peers. Whether you are passionate about science, art, literature, or community service, there is a club for you at Springdale. Joining a club is a great way to make new friends, learn new skills, and make a positive impact on your school and community."
          />
        </div>
      </div>
      <div className='py-12'>
          <img src={banner} alt="students" />
        </div>
        <CouncilSection/>
        <ToTop/>
    </div>
  )
}

export default Students