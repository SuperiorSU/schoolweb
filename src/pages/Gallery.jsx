import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import HeadHero from '../components/HeadHero';
import galleryImg from '../assets/GalleyHero.png'
import ToTop from '../components/ToTop';

const events = [
  {
    title: 'Sports',
    desc: 'Enjoy our exciting sports events including athletics, team games, and more.',
    bgImage: 'https://i.ibb.co/ZmtmLGK/a.jpg',
  },
  {
    title: 'Extra Curricular',
    desc: 'Explore a variety of extra-curricular activities that enhance learning and skills.',
    bgImage: 'https://i.ibb.co/pzGysVS/b.jpg',
  },
  {
    title: 'Annual Day',
    desc: 'Celebrate our annual day with performances, awards, and community gatherings.',
    bgImage: 'https://i.ibb.co/QMrtWT1/c.jpg',
  },
  {
    title: 'Festivals',
    desc: 'Participate in school festivals showcasing different cultures and traditions.',
    bgImage: 'https://i.ibb.co/DL5pvY6/bg-1-2.jpg',
  },
  {
    title: 'Marathon',
    desc: 'Join us for our annual marathon event, promoting fitness and health.',
    bgImage: 'https://i.ibb.co/FWV1BJG/bg-1.jpg',
  },
  {
    title: 'Academics',
    desc: 'Attend various academic events and workshops aimed at enhancing knowledge.',
    bgImage: 'https://i.ibb.co/ZXmWmSZ/14.jpg',
  },
  {
    title: 'Infrastructure',
    desc: 'Learn about our state-of-the-art infrastructure that supports quality education.',
    bgImage: 'https://i.ibb.co/hLcmWbT/15646.jpg',
  },
];



const Gallery = () => {
  const [selectedEvent, setSelectedEvent] = useState('All');

  return (
    <div className="container mx-auto px-4 py-8">
      <HeadHero title="Gallery" desc="Check out our latest events and activities" img={galleryImg} />
      <div className="flex justify-center mb-8 mt-16">
        <button
          className={`px-4 py-2 rounded-lg ${selectedEvent === 'All' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => setSelectedEvent('All')}
        >
          All
        </button>
        {events.map((event, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-2 rounded-lg ${selectedEvent === event.title ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setSelectedEvent(event.title)}
          >
            {event.title}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 place-items-center">
        {events
          .filter(event => selectedEvent === 'All' || event.title === selectedEvent)
          .map((event, index) => (
            <EventCard key={index} event={event} showText={true} />
          ))}
      </div>
      <ToTop/>
    </div>
  );
};

export default Gallery;
