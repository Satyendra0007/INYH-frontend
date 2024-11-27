import React from 'react'
import ladies from '../images/ladies.png'
import img1 from '../images/1.jpeg'
import img2 from '../images/2.jpeg'
import img3 from '../images/3.jpeg'
import img4 from '../images/4.jpeg'
import { CiStar } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import ServiceCard from '../Components/ServiceCard'
import BookingCard from '../Components/BookingCard'
import SmallCard from '../Components/SmallCard'

export default function Home() {
  return (
    <div>
      <section className="top h-screen py-4 flex justify-between container max-w-6xl mx-auto">
        <div className="left w-2/5 flex flex-col justify-evenly h-full">
          <div className="heading font-semibold text-[2.4rem]">
            <h1>Beauty services at your doorstep</h1>
          </div>
          <div className="services py-5 px-3 border border-gray-400 rounded-md">
            <div className="cont">
              <div className="heading font-semibold text-lg text-gray-700 ml-9 my-5">What are you looking for ?</div>
              <div className="items pb-6 flex gap-4 flex-wrap justify-center ">
                <SmallCard image={"https://img.icons8.com/color/48/haircut.png"} text={"Salon for Women"} />
                <SmallCard image={"https://img.icons8.com/fluency/48/air-conditioner.png"} text={"Ac & Applience Repair"} />
                <SmallCard image={"https://img.icons8.com/parakeet/48/vacuum-cleaner.png"} text={"Cleaning and Pest Control"} />
                <SmallCard image={"https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-electrical-service-electrician-flaticons-lineal-color-flat-icons-5.png"} text={"Electrision, Plumber & Carpanter "} />
                <SmallCard image={"https://img.icons8.com/color/48/water-heater.png"} text={"Native Water Purifier"} />
                <SmallCard image={"https://img.icons8.com/color/48/painting-a-wall.png"} text={"Rooms Wall Painting"} />
              </div>
            </div>
          </div>
          <div className="rating flex justify-evenly"  >
            <div className="rate flex gap-5">
              <div className="icon text-[2.5rem]">
                <CiStar />
              </div>
              <div className="count">
                <div className="num text-xl font-semibold ">4.8</div>
                <div className="title text-xs">Service Rating </div>
              </div>
            </div>
            <div className="rate flex gap-5">
              <div className="icon text-[2.5rem]">
                <BsPeople />
              </div>
              <div className="count">
                <div className="num text-xl font-semibold ">12M +</div>
                <div className="title text-xs">Customer Globally</div>
              </div>
            </div>
            <div className="follow"></div>
          </div>

        </div>
        <div className="right w-1/2 flex mt-10 justify-end items-center ">
          <div className="boxes flex  gap-2">
            <div className="left space-y-2">
              <div className="box ">
                <img className='w-80 h-80 rounded-md ' src={img1} alt="" />
              </div>
              <div className="box ">
                <img className='w-80 h-60 rounded-md ' src={img2} alt="" />
              </div>
            </div>
            <div className="right space-y-2">
              <div className="box ">
                <img className='w-80 h-60 rounded-md ' src={img4} alt="" />
              </div>
              <div className="box ">
                <img className='w-80 h-80 rounded-md ' src={img3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Booking pt-5">
        <div className="w-full container max-w-6xl mx-auto">
          <div className="swiper multiple-slide-carousel swiper-container overflow-auto ">
            <div className="swiper-wrapper flex gap-5  mb-16 ">
              <div className="swiper-slide">
                <div className="bg-red-700 rounded-2xl p-2 h-52 w-[25rem] flex justify-between items-center">
                  <div className="content w-1/2 h-full flex justify-center items-center flex-col gap-5">
                    <div className="text-xl font-semibold text-white text-center ">Shine your Bathroom deserve </div>
                    <button className='outline-none text-white py-2 px-4 font-semibold bg-white/10 rounded-md' >Book Now</button>
                  </div>
                  <div className="img h-full w-1/2">
                    <img className='w-full h-full rounded-e-2xl' src="https://urbanserviceplaza.co.in/wp-content/uploads/2022/06/ac-min.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="bg-green-700 rounded-2xl p-2 h-52 w-[25rem] flex justify-between items-center">
                  <div className="content w-1/2 h-full flex justify-center items-center flex-col gap-5">
                    <div className="text-2xl font-semibold text-white text-center ">Shine your Bathroom deserve </div>
                    <button className='outline-none text-white py-2 px-4 font-semibold bg-white/10 rounded-md' >Book Now</button>
                  </div>
                  <div className="img h-full w-1/2">
                    <img className='w-full h-full rounded-e-2xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Fur4mZFO4sN3Wrk2K57m8nI6-tIqsfzMow&s" alt="" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="bg-rose-700 rounded-2xl p-2 h-52 w-[25rem] flex justify-between items-center">
                  <div className="content w-1/2 h-full flex justify-center items-center flex-col gap-5">
                    <div className="text-2xl font-semibold text-white text-center ">Shine your Bathroom deserve </div>
                    <button className='outline-none text-white py-2 px-4 font-semibold bg-white/10 rounded-md' >Book Now</button>
                  </div>
                  <div className="img h-full w-1/2">
                    <img className='w-full h-full rounded-e-2xl' src="https://e7.pngegg.com/pngimages/152/56/png-clipart-graphics-air-conditioning-hvac-air-conditioning-technician-cartoon-character-repair.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="bg-orange-700 rounded-2xl p-2 h-52 w-[25rem] flex justify-between items-center">
                  <div className="content w-1/2 h-full flex justify-center items-center flex-col gap-5">
                    <div className="text-2xl font-semibold text-white text-center ">Shine your Bathroom deserve </div>
                    <button className='outline-none text-white py-2 px-4 font-semibold bg-white/10 rounded-md' >Book Now</button>
                  </div>
                  <div className="img h-full w-1/2">
                    <img className='w-full h-full rounded-e-2xl' src="https://i.pinimg.com/736x/c4/c8/28/c4c828ae11213a85b5e91ba1b5619b57.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="bg-indigo-700 rounded-2xl p-2 h-52 w-[25rem] flex justify-between items-center">
                  <div className="content w-1/2 h-full flex justify-center items-center flex-col gap-5">
                    <div className="text-2xl font-semibold text-white text-center ">Shine your Bathroom deserve </div>
                    <button className='outline-none text-white py-2 px-4 font-semibold bg-white/10 rounded-md' >Book Now</button>
                  </div>
                  <div className="img h-full w-1/2">
                    <img className='w-full h-full rounded-e-2xl' src="https://png.pngtree.com/template/20191014/ourmid/pngtree-home-renovation-logo-design-template-with-green-leaf-image_317632.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service  py-5">
        <div className="w-full container max-w-6xl mx-auto">
          <h1 className='font-semibold text-3xl my-4 '>New and noteworthy</h1>
          <div className="swiper multiple-slide-carousel swiper-container overflow-auto ">
            <div className="swiper-wrapper flex gap-5  mb-16 ">
              <ServiceCard image={"https://media.istockphoto.com/id/1226023669/photo/its-a-pleasure-doing-business-with-you.jpg?s=612x612&w=0&k=20&c=JPlOlUHjm-qMT8uym_df7vRlEpy8oHKdkNQ43ofzCT4="} text={"wall panels "} />
              <ServiceCard image={"https://www.shutterstock.com/image-photo/technician-service-removing-air-filter-600nw-1498805078.jpg"} text={"services "} />
              <ServiceCard image={"https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/dl0hw3kpgkvuhx3asbrf"} text={"services "} />
              <ServiceCard image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPeQF1wUR-s2DobAJCIg_RSp4QmVMjnElbXA&s"} text={"services "} />
              <ServiceCard image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc0Ig1kdXSs5N-wy6_96mO7CLDUXH7h9nn-A&s"} text={"services "} />
            </div>
          </div>
        </div>
      </section>
    </div >
  )
}
