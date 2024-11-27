import React from 'react'

export default function SmallCard({ image, text }) {
  return (
    <div className="itms w-32 space-y-1 ">
      <div className="img bg-slate-200 py-2 rounded-md flex  justify-center ">
        <img width="48" height="48" src={image} alt="haircut" />
      </div>
      <div className="title text-[12px] text-center">{text}</div>
    </div>
  )
}
