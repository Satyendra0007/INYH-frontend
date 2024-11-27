import React from 'react'

export default function BookingCard({ image, text, link }) {
  return (
    <div className="swiper-slide">
      <div className="bg-red-700 rounded-2xl h-60 w-[28rem] flex justify-between items-center">
        <div className="content w-1/2 h-full flex justify-center items-center flex-col gap-5">
          <div className="text-2xl font-semibold text-white text-center ">Shine your Bathroom deserve </div>
          <button className='outline-none text-white py-2 px-4 font-semibold bg-white/10 rounded-md' >Book Now</button>
        </div>
        <div className="img h-full w-1/2">
          <img className='w-full h-full rounded-e-2xl' src="https://urbanserviceplaza.co.in/wp-content/uploads/2022/06/ac-min.png" alt="" />
        </div>
      </div>
    </div>
  )
}
