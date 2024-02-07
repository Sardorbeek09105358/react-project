import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../images/Logo.png"

export const Navbar = () => {
  return (
    <div>
      <nav className='m-auto w-[90%] h-[40px] flex justify-between sm:flex-wrap items-center md:w-[90%]'>
        <div className='flex items-center gap-4'>
          <img src={logo} alt="" />
          <ul className='flex gap-5 capitalize max-[768px]:gap-3 flex-wrap'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/courses">Courses</NavLink></li>
            <li><NavLink to="/Coursesingle">Course  single</NavLink></li>
          </ul>
        </div>
        <div className='flex gap-6'>
          <NavLink to="/SignIn" className='capitalize text-xl w-[110px] h-[45px] rounded hover:text-slate-100  text-center pt-1 hover:bg-[#FF9500]  md:text-xl sm:text-[14px] animate__animate__animated__flash'>sign in</NavLink>
          <NavLink to="/SignUp" className='w-[110px] h-[45px] text-center pt-2 lg:pt-1 text-xl rounded bg-[#FF9500] hover:bg-slate-100 hover:text-black capitalize text-slate-100 md:w-[70px] md:text-xl  md:h-[30px] md:text[10px] md:pt-0  sm:-w-[50px] sm:text-[13px] sm:pt-0'>sing up</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
