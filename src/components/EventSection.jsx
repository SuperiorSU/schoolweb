import React from 'react'
import ArticleCard from './ArticleCard'
import john from '../assets/john.jpg'
import sarah from '../assets/sarah.jpg'
import tech from '../assets/tech-club.jpg'
const eventData = [
    {
      image: john,
      name: "John Smith",
      event: "National Level Math Olympiad Winner",
      description: "Achieved first place in the National Level Math Olympiad, showcasing exceptional mathematical skills."
    },
    {
      image: sarah,
      name: "Sarah Lee",
      event: "Gold Medalist in State Swimming Championship",
      description: "Secured the gold medal at the State Swimming Championship with outstanding performance."
    },
    {
      image: tech, 
      name: "Tech Innovators Club",
      event: "Winners of Inter-School Robotics Competition",
      description: "Won the Inter-School Robotics Competition, demonstrating innovation and technical prowess in robotics."
    }
  ];
const EventSection = () => {
  return (
    <div>
        <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Event Highlights</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {eventData.map((event, index) => (
            <ArticleCard
              key={index}
              image={event.image}
              name={event.name}
              event={event.event}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default EventSection