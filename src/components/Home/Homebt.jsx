import React from 'react'
import { Link } from 'react-router-dom'

const Homebt = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
      <Link className='text-[6.5vw] leading-[6vw] border-3 rounded-full p-1 px-5 uppercase pb-0'> Projects</Link>
      <Link className='text-[6.5vw] leading-[6vw] border-3 rounded-full p-1 px-5 uppercase pb-0'> Agency</Link>
    </div>
  )
}

export default Homebt