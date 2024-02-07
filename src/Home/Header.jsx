import React from 'react'
import card from "../images/Card-1.png"
import card2 from "../images/Card-2.png"
import card3 from "../images/Card-3.png"
import card4 from "../images/Card-4.png"
import card5 from "../images/Card-5.png"
import card6 from "../images/Card-6.png"
import card7 from "../images/Card-7.png"
import content from "../images/Container-imag.png"
import Navbar from './Navbar'

 const Header = () => {
  return (
    <div >
     <header className='pt-3 font-Be Vietnam Pro md:w-full sm:w-[90%] md:90% md:m-auto bg-gray-100'>
    <div className='w-[95%] h-[50px] mb-5 bg-[#FF9500] m-auto flex justify-center items-center flex-wrap rounded animate__animated animate__fadeInDown'>
        <h1 className='text-center capitalize text-2xl lg:text-xl text-slate-100 sm:text-[14px]'>
            <span>free coursec🌟 sale ends soon get it now</span>
            <i className="fa-solid fa-arrow-right-long ml-2"></i>
        </h1>
    </div>
    <Navbar/>
    <div className='w-full h-[700px] flex justify-center items-center animate__animated animate__fadeIn'>
        <div className=''>  
            <h1 className='text-[#FF9500] lg:text-[55px] text-[55px] capitalize text-center md:text-[32px] sm:text-[20px] animate__animated animate__bounceInLeft'>
                unlock<span className='text-black lg:text-[55px] ml-2 capitalize md:text-[27px] sm:text-[20px]'>your creative potential</span>
            </h1>
            <h2 className='text-center capitalize text-[38px] md:text-[30px] animate__animated animate__bounceInRight'>
                with Online Design and Development Courses.
            </h2>
            <p className='text-center capitalize animate__animated animate__bounceInDown'>
                Learn from Industry Experts and Enhance Your Skills.
            </p>
            <div className='w-full flex justify-center pt-4'>
                <div className='mt-4 flex gap-5 animate__animated animate__bounceInUp'>
                    <button className='capitalize w-[150px] h-[40px] bg-[#FF9500] rounded text-slate-100'>explore coursec</button>
                    <button className='capitalize'>view pricing</button>
                </div>
            </div>
        </div>
    </div>
    <div className='flex flex-wrap justify-center gap-3 md:gap-8 lg:gap-12 mb-10 sm:gap-4 sm:mt-3 animate__animated animate__bounceIn'>
        <img className='w-[200px] md:w-40 lg:w-48' src={card} alt="" />
        <img className='w-[200px] md:w-40 lg:w-48' src={card2} alt="" />
        <img className='w-[200px] md:w-40 lg:w-48' src={card3} alt="" />
        <img className='w-[200px] md:w-40 lg:w-48' src={card4} alt="" />
        <img className='w-[200px] md:w-40 lg:w-48' src={card5} alt="" />
        <img className='w-[200px] md:w-40 lg:w-48' src={card6} alt="" />
        <img className='w-[200px] md:w-40 lg:w-48' src={card7} alt="" />
    </div>
    <div className='flex justify-center animate__animated animate__fadeIn'>
        <img src={content} alt="" className=' animate__animated animate__fadeIn'/>
    </div>
</header>

    </div>
  )
}

export default Header