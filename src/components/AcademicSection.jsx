import React, { useState } from 'react';
import CourseCard from './CourseCard';

const AcademicSection = () => {
  const [selectedGrade, setSelectedGrade] = useState('All Courses');

  const courses = [
    {
      title: "Primary Curriculum",
      description: "English, Mathematics, Science, Social Studies, Art, Physical Education",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
      grade: "Primary (Grades 1-5)"
    },
    {
      title: "Secondary Curriculum",
      description: "English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
      grade: "Secondary (Grades 6-10)"
    },
    {
      title: "Science Stream",
      description: "Physics, Chemistry, Biology, Mathematics, Computer Science, English",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
      grade: "Senior Secondary (Science Stream)"
    },
    {
      title: "Commerce Stream",
      description: "Accountancy, Business Studies, Economics, Mathematics, English",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
      grade: "Senior Secondary (Commerce Stream)"
    }
  ];

  const grades = ['All Courses', 'Primary (Grades 1-5)', 'Secondary (Grades 6-10)', 'Senior Secondary (Science Stream)', 'Senior Secondary (Commerce Stream)'];

  const filteredCourses = selectedGrade === 'All Courses' ? courses : courses.filter(course => course.grade === selectedGrade);

  return (
    <div className='p-8'>
      <div className='mb-6 flex flex-wrap gap-2 justify-center'>
        {grades.map((grade, index) => (
          <button 
            key={index} 
            className={`p-2 rounded mr-2 transition-colors duration-300 ${selectedGrade === grade ? 'bg-blue-900 text-white' : 'bg-gray-500 text-gray-200'}`} 
            onClick={() => setSelectedGrade(grade)}
          >
            {grade}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4'>
        {filteredCourses.map((course, index) => (
          <CourseCard 
            key={index}
            title={course.title}
            description={course.description}
            image={course.image}
          />
        ))}
      </div>
    </div>
  );
};

export default AcademicSection;
