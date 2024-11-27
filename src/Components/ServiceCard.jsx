import React from 'react'

export default function ServiceCard({ image, text }) {
  return (
    <div className="box w-64 ">
      <div className="img ">
        <img className='w-full h-60 rounded-lg' src={image} alt="" />
      </div>
      <div className="content">
        <p className='font-semibold my-3'>{text}</p>
      </div>
    </div>
  )
}
