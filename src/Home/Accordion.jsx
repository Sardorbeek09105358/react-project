import React from 'react'

export const Accordion = () => {
    return (
       <div className='bg-gray-100 w-full flex justify-center rounded border-2 pt-10 pb-12'>
         <div className='w-[80%] md:w-[90%]  bg-white lg:h-[80%] sm:h-[60%] md:h-[60%] rounded-2xl pt-10 grid'>
           <div>
           <div className='flex justify-around flex-wrap lg:justify-center md:justify-between  mb-[30px] sm:gap-4 sm:justify-center text-left'>
                <div>
                    <h1 className='capitalize font-bold text-4xl lg:tex-3xl  mb-4 md:text-2xl sm:text-[20px]'>Frequently Asked Questions</h1>
                    <p className='lg:mb-[100px] md:mb-[60px] sm:mb-[20px]'>Still you have any questions? Contact our <br /> Team via support@skillbridge.com</p>
                    <h3>See All FAQ's</h3>
                </div>
                <div className='rounded border-2 lg:flex md:flex-col lg:flex-col  gap-10 md:gap-5 p-11 lg:justify-center text-left md:w-[60%] md:m-auto md:h-[50%] lg:w-[50%] sm:w-[90%]'>
                    <div className='mb-2'>
                        <div className='flex gap-10 justify-center items-center mb-4 text-left sm:gap-8'>
                            <h1 className='capitalize  text-2xl lg:text-xl md:text-[14px] sm:text-[14px]'>enroll in multiple courses at once?</h1>
                            <i className='fa-solid fa-x cursor-pointer'></i>
                        </div>
                        <hr />
                    </div>

                    <div className='mb-2'>
                        <div className='flex gap-10 justify-center items-center mb-4 text-left sm:gap-8'>
                            <h1 className='capitalize text-2xl md:text-[14px] lg:text-xl sm:text-[14px]'>Enrollment Process for Different Courses</h1>
                            <i className='fa-solid fa-x cursor-pointer'></i>
                        </div>
                        <hr />
                    </div>

                    <div className='mb-2'>
                        <div className='flex gap-10 justify-center items-center mb-4 text-left  sm:gap-8'>
                            <h1 className='capitalize text-2xl md:text-[14px] lg:text-xl sm:text-[14px]'>Enrollment Process for Different Courses</h1>
                            <i className='fa-solid fa-x cursor-pointer'></i>
                        </div>
                        <hr />
                    </div>

                    <div className='mb-2'>
                        <div className='flex gap-10 justify-center items-center mb-4  text-left  sm:gap-8'>
                            <h1 className='capitalize text-2xl  lg:text-xl  md:text-[14px] sm:text-[14px]'>download the course for offline access?</h1>
                            <i className='fa-solid fa-x cursor-pointer'></i>
                        </div>
                        <hr />
                    </div>

                    <div className='mb-2'>
                        <div className='flex gap-10 justify-center items-center mb-4  text-left   sm:gap-8'>
                            <h1 className='capitalize text-2xl  lg:text-xl  md:text-[14px] sm:text-[14px]'>Are there any prerequisites for the courses?</h1>
                            <i className='fa-solid fa-x cursor-pointer'></i>
                        </div>
                        <hr />
                    </div>
                    <div className='mb-2'>
                        <div className='flex gap-10 justify-center items-center mb-4  text-left  sm:gap-8'>
                            <h1 className='capitalize text-2xl  md:text-[14px] sm:text-[14px]'> the course materials for offline access??</h1>
                            <i className='fa-solid fa-x cursor-pointer'></i>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
           </div>
        </div>
       </div>
    )
}

export default Accordion

