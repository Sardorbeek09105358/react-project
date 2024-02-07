import React from 'react'
import Footer from '../Home/footer'
import Navbar from '../Home/Navbar'
import Container from "./images/Container.jpg"

export const CourseSingle = () => {
  return (
    <div className='pt-4 bg-gray-100'>
      <div>
        <div className='w-[95%] h-[50px] mb-5 bg-[#FF9500] m-auto flex justify-center items-center flex-wrap rounded'>
          <h1 className='text-center capitalize text-xl sm:[30px] md:text-[22px] sm:w-full md:w-full text-slate-100 max-[768px]:w-[90%] sm:text-[14px] md:text-gray-100'><span>free coursec🌟 sale ends soon get it now</span><i className="fa-solid fa-arrow-right-long ml-2"></i></h1>
        </div>
        <Navbar />
      </div>

      <div className='mt-16 flex flex-col items-center justify-center h-[100vh] sm:h-[70vh] md:h-[70vh]'>
        <div className='flex justify-center pr-10 pl-10 w-[90%] items-center m-auto lg:flex-col lg:m-0 lg:mb-3 md:mb-3 md:w-[95%] sm:w-full'>
          <h1 className='w-[50%] text-4xl lg:text-3xl md:text-2xl font-bold capitalize sm:text-xl lg:w-[95%] lg:mb-3 md:mb-3 md:w-full'>UI/UX design course</h1>
          <p className='w-[50%] lg:w-[95%] lg:mb-3 md:mb-3 md:w-full sm:text-[14px]'>Welcome to our UI/UX Design course! This comprehensive program will equip you with the knowledge and skills to create exceptional user interfaces (UI) and enhance user experiences (UX). Dive into the world of design thinking, wireframing, prototyping, and usability testing. Below is an overview of the curriculum</p>
        </div>
        <div className='lg:w-[95%] md:w-[95%]'>
          <img src={Container} alt="" />
        </div>
      </div>
      <div className='w-[80%] flex gap-4 flex-wrap mb-5  justify-between items-center mt-10 mx-auto lg:w-[90%] lg:justify-around lg:flex-wrap md:flex-col sm:flex-col'>
        <div className=' w-[40%] h-full  bg-white pb-14  pl-3 pr-3 flex flex-col gap-10 lg:w-[80%] lg:gap-7 md:gap-5 sm:gap-3 md:w-[70%] sm:w-[80%]  transition-transform hover:scale-105'>
          <h1 className='text-6xl text-right mr-4 font-bold lg:text-4xl md:text-3xl sm:text-xl'>01</h1>
          <h1 className='ml-3 capitalize text-3xl font-bold lg:text-2xl md:text-xl sm:text-[15px]'>Introduction to UI/UX Design</h1>
          <div className='flex justify-between items-center pr-3 pl-3 mt-[30px] md:flex-col md:justify-center md:items-center  sm:flex-wrap'>
            <div className='text'>
              <h4 className='capitalize text-xl md:text-[17px] sm:text-[16px]'>Understanding UI/UX Design Principles</h4>
              <p className='capitalize text-[16px] text-[#555]'>lesson 1</p>
            </div>
            <span className='flex items-center capitalize rounded border-2 sm:text-[13px]'><i class="fa-regular fa-clock mr-3"></i>45 minutes</span>
          </div>
          <div className='flex justify-between items-center pr-3 pl-3 mt-[30px] rounded border-2 border-red-300'>
            <div className='text'>
              <h4 className='capitalize text-xl sm:text-[16px]'>Importance of User-Centered Design</h4>
              <p className='capitalize text-[16px] text-[#555]'>lesson 1</p>
            </div>
            <span className='flex items-center capitalize rounded border-2'><i class="fa-regular fa-clock mr-3"></i>minutes</span>
          </div>
          <span className=' capitalize mt-3 block'><i class="fa-regular fa-clock mr-3"></i>minutes</span>
        </div>

        <div className='w-[40%] h-full bg-white pb-6 pl-3 pr-3 flex flex-col gap-10 lg:w-[80%] lg:gap-7 md:gap-5 sm:gap-3 md:w-[70%] sm:w-[80%] transition-transform hover:scale-105'>
          <h1 className='text-6xl text-right mr-4 font-bold lg:text-4xl md:text-3xl sm:text-xl transition-transform hover:scale-110'>02</h1>
          <h1 className='ml-3 capitalize text-3xl font-bold lg:text-2xl md:text-xl sm:text-[16px] transition-transform hover:scale-110'>User Research and Analysis</h1>
          <div className='flex justify-between items-center pr-3 pl-3 mt-[30px] md:flex-col sm:flex-col'>
            <div className='text'>
              <h4 className='capitalize text-xl sm:text-[16px] transition-transform hover:scale-105'>Conducting User Research and Interviews</h4>
              <p className='capitalize text-[16px] text-[#555] transition-transform hover:scale-105'>lesson 1</p>
            </div>
            <span className='flex items-center capitalize rounded border-2 transition-transform hover:scale-105'><i class="fa-regular fa-clock mr-3"></i>1 hour</span>
          </div>
          <div className='flex justify-between items-center pr-3 pl-3 mt-[30px] md:flex-col sm:flex-col'>
            <div className='text'>
              <h4 className='capitalize text-xl sm:text-[16px] transition-transform hover:scale-105'>Analyzing User Needs and Behavior</h4>
              <p className='capitalize text-[16px] text-[#555] transition-transform hover:scale-105'>lesson 1</p>
            </div>
            <span className='flex items-center capitalize rounded border-2 transition-transform hover:scale-105'><i class="fa-regular fa-clock mr-3"></i>1 hour</span>
          </div>
          <div className='flex justify-between items-center pr-3 pl-3 mt-[30px] md:flex-col sm:flex-col'>
            <div className='text'>
              <h4 className='capitalize text-xl sm:text-[16px] transition-transform hover:scale-105'>Creating User Personas and Scenarios</h4>
              <p className='capitalize text-[16px] text-[#555] transition-transform hover:scale-105'>lesson 1</p>
            </div>
            <span className='flex items-center capitalize rounded border-2 transition-transform hover:scale-105'><i class="fa-regular fa-clock mr-3"></i>45 minutes</span>
          </div>
        </div>

        <div className=' w-[40%] h-full  bg-white pb-6 pl-3 pr-3 flex flex-col gap-10 lg:w-[80%] lg:gap-7 md:gap-5 sm:gap-3  md:w-[70%] sm:w-[80%] transition-transform hover:scale-105'>
          <h1 className='text-6xl text-right mr-4 font-bold lg:text-4xl md:text-3xl sm:text-xl'>03</h1>
          <h1 className='ml-3 capitalize text-3xl font-bold lg:text-2xl md:text-xl sm:text-[16px]'>Wireframing and Prototyping</h1>
          <div className='flex justify-between items-center pr-3 pl-3 mt-[30px] md:flex-col'>
            <div className='text'>
              <h4 className='capitalize text-xl sm:text-[16px]'>Introduction to Wireframing Tools and Techniques</h4>
              <p className='capitalize text-[16px] text-[#555]'>lesson 1</p>
            </div>
            <span className='flex items-center capitalize rounded border-2'><i class="fa-regular fa-clock mr-3"></i>1 hour</span>
          </div>
          <div className='flex justify-between items-center pr-3 pl-3 mt-[30px] md:flex-col sm:flex-col'>
            <div className='text'>
              <h4 className='capitalize text-xl sm:text-[16px]'>Analyzing User Needs and Behavior</h4>
              <p className='capitalize text-[16px] text-[#555]'>lesson 1</p>
            </div>
            <span className='flex items-center capitalize rounded border-2'><i class="fa-regular fa-clock mr-3"></i>1 hour</span>
          </div>
          <div className='flex justify-between items-center pr-3 pl-3 mt-[30px]  md:flex-col sm:flex-col'>
            <div className='text'>
              <h4 className='capitalize text-xl sm:text-[16px]'>Creating User Personas and Scenarios</h4>
              <p className='capitalize text-[16px] text-[#555]'>lesson 1</p>
            </div>
            <span className='flex items-center capitalize rounded border-2'><i class="fa-regular fa-clock mr-3"></i>45 minutes</span>
          </div>
        </div>
        <div className=' w-[40%] h-full  bg-white pb-6 pl-3 pr-3 flex flex-col gap-10 lg:w-[80%] lg:gap-7 md:gap-5 sm:gap-3  md:w-[70%] sm:w-[80%]  transition-transform hover:scale-105'>
          <h1 className='text-6xl text-right mr-4 font-bold lg:text-4xl md:text-3xl sm:text-xl'>04</h1>
          <h1 className='ml-3 capitalize text-3xl font-bold lg:text-2xl md:text-xl sm:text-[16px]'>Visual Design and Branding</h1>
          <div className='flex justify-between items-center pr-3 pl-3 mt-[30px] md:flex-col'>
            <div className='text'>
              <h4 className='capitalize text-xl sm:text-[16px]'>Conducting User Research and Interviews</h4>
              <p className='capitalize text-[16px] text-[#555]'>lesson 1</p>
            </div>
            <span className='flex items-center capitalize rounded border-2'><i class="fa-regular fa-clock mr-3"></i>1 hour</span>
          </div>
          <div className='flex justify-between items-center pr-3 pl-3 mt-[30px] md:flex-col sm:flex-col'>
            <div className='text'>
              <h4 className='capitalize text-xl sm:text-[16px]'>Analyzing User Needs and Behavior</h4>
              <p className='capitalize text-[16px] text-[#555]'>lesson 1</p>
            </div>
            <span className='flex items-center capitalize rounded border-2'><i class="fa-regular fa-clock mr-3"></i>1 hour</span>
          </div>
          <div className='flex justify-between items-center pr-3 pl-3 mt-[30px]  md:flex-col sm:flex-col'>
            <div className='text'>
              <h4 className='capitalize text-xl sm:text-[16px]'>Creating User Personas and Scenarios</h4>
              <p className='capitalize text-[16px] text-[#555]'>lesson 1</p>
            </div>
            <span className='flex items-center capitalize rounded border-2'><i class="fa-regular fa-clock mr-3"></i>45 minutes</span>
          </div>
        </div>
        <div className=' w-[40%] h-full  bg-white pb-6 pl-3 pr-3 flex flex-col gap-10 lg:w-[80%] lg:gap-7 md:gap-5 sm:gap-3  md:w-[70%] sm:w-[80%]  transition-transform hover:scale-105'>
          <h1 className='text-6xl text-right mr-4 font-bold lg:text-4xl md:text-3xl sm:text-xl'>05</h1>
          <h1 className='ml-3 capitalize text-3xl font-bold lg:text-2xl md:text-xl sm:text-[16px]'>Usability Testing and Iteration</h1>
          <div className='flex justify-between items-center pr-3 pl-3 mt-[30px] md:flex-col'>
            <div className='text'>
              <h4 className='capitalize text-xl sm:text-[16px]'>Conducting User Research and Interviews</h4>
              <p className='capitalize text-[16px] text-[#555]'>lesson 1</p>
            </div>
            <span className='flex items-center capitalize rounded border-2'><i class="fa-regular fa-clock mr-3"></i>1 hour</span>
          </div>
          <div className='flex justify-between items-center pr-3 pl-3 mt-[30px] md:flex-col sm:flex-col'>
            <div className='text'>
              <h4 className='capitalize text-xl sm:text-[16px]'>Analyzing User Needs and Behavior</h4>
              <p className='capitalize text-[16px] text-[#555]'>lesson 1</p>
            </div>
            <span className='flex items-center capitalize rounded border-2'><i class="fa-regular fa-clock mr-3"></i>1 hour</span>
          </div>
          <div className='flex justify-between items-center pr-3 pl-3 mt-[30px]  md:flex-col sm:flex-col'>
            <div className='text'>
              <h4 className='capitalize text-xl sm:text-[16px]'>Creating User Personas and Scenarios</h4>
              <p className='capitalize text-[16px] text-[#555]'>lesson 1</p>
            </div>
            <span className='flex items-center capitalize rounded border-2'><i class="fa-regular fa-clock mr-3"></i>45 minutes</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CourseSingle


