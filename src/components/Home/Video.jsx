import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full overflow-hidden rounded-2xl'>
      <video
        autoPlay
        loop
        muted
        playsInline
        className='h-full w-full object-cover'
      >
        <source src="/Video/vidd.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Video
