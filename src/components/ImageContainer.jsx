import React from 'react'

const ImageContainer = (props) => {
    const img = props.img;
  return (
    <div>
        <div className='rounded-xl max-w-[580px] min-w-[260px] max-h-[700px] min-h-[280px] '>
            <img src={img} alt="" className='rounded-xl object-cover ' />
        </div>
    </div>
  )
}

export default ImageContainer