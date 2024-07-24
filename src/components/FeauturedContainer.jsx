import React from 'react'
import { Link } from 'react-router-dom';
const FeaturedContainer = (props) => {
    const title = props.title;
    const description = props.description;
  return (
    <div>
        <div className='max-w-[580px] min-w-[260px] max-h-[700px] min-h-[360px]'>
            <div>
                <h2 className='font-serif lg:text-[48px] md:text-[48px] font-[530]  sm:text-[32px] text-[32px] text-start'>{title}</h2>
            </div>
            <div>
                <br/>
                <p className='text-black/70 text-justify pe-3 pb-2'>{description}</p>
            </div>
            <div className='mt-3'>
                <Link to="/about">
                    <button className='px-6 py-4 bg-blue-950 font-medium  text-white rounded-md'>Know More</button>
                </Link>
            </div>
        </div>
    </div>
    
  )
}

export default FeaturedContainer