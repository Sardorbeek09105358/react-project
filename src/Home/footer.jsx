import React from 'react'
import Logo from "../images/Logo.png"
export const Footer = () => {
  return (
   <div className='lg:w-full  flex items-center bg-white pl-10 pt-10'>
    <div className='w-[95%] flex justify-around items-center  flex-wrap md:flex-col sm:flex-wrap sm:justify-evenly sm:text-left sm:gap-7 md:gap-10'>
        <div>
            <img src={Logo} alt=""  className='mb-2'/>
            <p className='capitalize text-xl mb-2'><i className="fa-regular fa-envelope mr-2"></i>hello@skillbridge.com</p>
            <p className='capitalize text-xl mb-2'><i className="fa-solid fa-phone mr-2"></i>+91 91813 23 2309</p>
            <p className='capitalize text-xl mb-2'><i className="fa-solid fa-location-dot mr-2"></i>Somewhere in the World</p>
        </div>
        <div>
            <h2 className='capitalize text-2xl font-bold mb-2'>Home</h2>
            <p className='capitalize text-xl mb-2'>benefits</p>
            <p className='capitalize text-xl mb-2'>our coursec</p>
            <p className='capitalize text-xl mb-2'>our Testimonial</p>
            <p className='capitalize text-xl mb-2'>our FAQ</p>
        </div>
        <div>
            <h2 className='capitalize text-2xl font-bold mb-2'>About us</h2>
            <p className='capitalize text-xl mb-2'>Company</p>
            <p className='capitalize text-xl mb-2'>achievements</p>
            <p className='capitalize text-xl mb-2'>our goals</p>
        </div>
        <div>
            <h2 className='capitalize text-2xl font-bold mb-3'>social profiles</h2>
           <div className='flex gap-10'>
           <i class="fa-brands fa-facebook  text-[30px]"></i>
            <i class="fa-brands fa-twitter  text-[30px] "></i>
            <i class="fa-brands fa-linkedin text-[30px] "></i>
           </div>
        </div>
    </div>
    
   </div>
   
  )
}

export default Footer