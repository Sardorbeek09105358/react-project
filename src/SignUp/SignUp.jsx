import React from "react"
import Navbar from "../Home/Navbar"
import Test_image3 from "../images/Pricing Section-4.png"
import SignForm from "./SignForm"
import Footer from '../Home/footer'

export const SignUp = () => {
  return (
    <div className="pt-4">
      <div className='w-[95%] h-[50px] mb-5 bg-[#FF9500] m-auto flex justify-center items-center flex-wrap rounded animate__animated animate__fadeIn'>
        <h1 className='text-center capitalize text-xl text-slate-100 sm:text-[14px]'><span>free coursec🌟 sale ends soon get it now</span><i className="fa-solid fa-arrow-right-long ml-2"></i></h1>
      </div>
      <Navbar />
      <div>
        <div className='flex w-[90%] justify-between h-[100vh] items-center m-auto gap-10 lg:mt-[100px]  md:pt-14 lg:pt-14  lg:flex-col lg:md-[300px]  md:flex-col md:items-center animate__animated animate__fadeIn'>
          <div className='w-[50%] md:w-[90%] m-auto sm:w-[90%] lg:w-[90%]'>
            <h1 className='text-5xl lg:text-4xl md:text-3xl sm:text-xl mb-4 capitalize'>students testimonials</h1>
            <p className='capitalize mb-3'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
            <div>
              <div className='w-[100%] h-[200px] md:w-[100%] lg:w-[100%] bg-white flex flex-col  justify-around items-center rounded border-2 sm:w-[100%] animate__animated animate__fadeIn'>
                <p className='mb-3 ml-3 capitalize sm:text-[14px]'>The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
                <hr className='w-full h-[2px] bg-gray-300' />
                <div className='flex w-[90%] justify-between max-[500px]:items-center animate__animated animate__fadeIn'>
                  <span className='flex items-center gap-5 capitalize sm:items-center sm:text-[15px] sm:justify-center'><img src={Test_image3} alt="" />micheal k</span>
                  <button className='w-[200px]  max-[500px]:w-[120px] max-[500px]:h-[40px] max-[500px]:text-[13px] h-11 bg-slate-100 capitalize text-black'>read more</button>
                </div>
              </div>
              <div className='flex gap-4 mt-3 justify-end animate__animated animate__fadeIn'>
                <div className='w-14 h-11 border rounded bg-white flex justify-center pt-3'>
                  <i className="fa-solid fa-arrow-left"></i>
                </div>
                <div className='w-14 h-11 border rounded bg-white flex justify-center pt-3'>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </div>
              </div>
            </div>
          </div>
          <SignForm />
        </div>
        <Footer />
      </div>
    </div>

  )
}


export default SignUp