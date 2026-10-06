import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font2] pt-5 text-center overflow-hidden'> 
      {/* Each line wrapped to prevent overflow */}
      <div className='text-[9vw] flex justify-center items-center uppercase leading-[8vw] flex-wrap'>
        Battle
      </div>

      <div className='text-[9vw] flex justify-center items-center uppercase leading-[8vw] flex-wrap'>
        of
        <div className='h-[8vw] w-[28vw] rounded-full overflow-hidden border-2 border-white mx-2'>
          <Video />
        </div>
        the
      </div>

      <div className='text-[9vw] flex justify-center items-center uppercase leading-[8vw] flex-wrap'>
        sovereign
      </div>
    </div>
  )
}

export default HomeHeroText
