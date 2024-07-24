import React from 'react'

const HeadHero = (props) => {
    const img = props.img
    const title = props.title
    const desc = props.desc
    const subDesc = props.subDesc
  return (
    <div>
        <div className="text-center">
          <p className="font-medium text-[#014d84]">{title}</p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
            {desc}
          </h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            {subDesc}
          </p>
        </div>

        <img
          className="object-cover w-full lg:h-full md:h-full sm:h-full h-full mt-12 rounded-lg"
          src={img}
          alt="Contact"
        />
    </div>
  )
}

export default HeadHero