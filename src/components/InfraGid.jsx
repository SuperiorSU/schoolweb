import React from 'react'
import CourseCard from './CourseCard';
import ground from '../assets/ground.jpg'
import classroom from '../assets/classroom.jpg'
import library from '../assets/library.jpg'
import labs from '../assets/labs.jpg'
const features = [
    {
      title: "Science and Computer labs",
      description: "Our labs are equipped with the latest technology to provide hands-on learning experiences.",
      image: labs // Replace with actual image URL
    },
    {
      title: "Well-equipped classrooms",
      description: "Classrooms designed for optimal learning with modern amenities and comfortable seating.",
      image: classroom // Replace with actual image URL
    },
    {
      title: "Library",
      description: "Our library offers a wide range of books and online resources to support student learning.",
      image: library // Replace with actual image URL
    },
    {
      title: "Sports facilities",
      description: "Including a playground, gymnasium, and swimming pool facilities designed to support a healthy lifestyle and encourage physical activity.",
      image: ground 
    }
  ];
const InfraGid = () => {
  return (
    <div>
        <div className="px-6 py-12">
      <div className="grid gap-6 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        {features.map((feature, index) => (
          <CourseCard
            key={index}
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        ))}
      </div>
    </div>
    </div>
  )
}

export default InfraGid