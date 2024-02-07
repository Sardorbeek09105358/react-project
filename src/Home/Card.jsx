import React from 'react'
import cardImage from "./Home image/Image-1.png"
import cardImage2 from "./Home image/Image-2.png"
import cardImage3 from "./Home image/Image-3.png"
import cardImage4 from "./Home image/Image-4.png"
import cardImage5 from "./Home image/Image-5.jpg"
import cardImage6 from "./Home image/Image-6.png"

export const Card = () => {


    return (
        <div className='pt-10 w-full  bg-gray-100  '>
            <div className='mt-[100px]'>
                <div className=' w-[85%] flex justify-between items-center mx-auto pl-4 pr-4'>
                    <div className='flex justify-between w-full mx-auto'>
                        <div className='flex justify-between w-full h-10 items-center mb-11  lg:flex-wrap lg:mb-[150px] md:flex-wrap md:mb-[200px]'>
                            <div>
                                <h1 className='capitalize text-5xl lg:text-4xl md:3xl sm:text-xl  mb-2 md:text-2xl'>our courses</h1>
                                <p className='mb-2 capitalize max-[768px]:text-[14px]'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum <br /> eget habitasse in velit fringilla feugiat senectus in.</p>
                            </div>
                            <button className='capitalize rounded border-2 w-[100px] h-10'>view all</button>
                        </div>
                    </div>
                </div>
                <div className='w-[90%] flex justify-center flex-wrap md:gap-2 gap-10 mx-auto mt-4 md:w-full'>
                    <div className='w-[45%] md:w-[90%] rounded border-2 border-[#888] pt-5 pl-5 pb-5 pr-5 bg-white sm:w-full transition duration-300 transform hover:shadow-lg'>
                        <div className='md:w-full'>
                            <img src={cardImage} alt="" className='w-full transition duration-300 transform hover:scale-105' />
                            <div className='w-full flex justify-between pl-5 pr-5 capitalize mb-5 mt-3 transition duration-300 transform hover:translate-y-[-10px]'>
                                <div className='flex gap-4'>
                                    <p>4 geeks</p>
                                    <p>beginner</p>
                                </div>
                                <h5>by john smith</h5>
                            </div>
                            <h3 className='text-[24px] capitalize mb-4 font-bold max-[768px]:text[20px] transition duration-300 transform hover:translate-y-[-10px]'>web design fundamentals</h3>
                            <p className='capitalize mb-3 transition duration-300 transform hover:translate-y-[-10px]'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                            <button className='w-full rounded h-10 bg-gray-200 capitalize transition duration-300 transform hover:translate-y-[-10px] hover:bg-[#FF9500]'>get it now</button>
                        </div>
                    </div>

                    <div className='w-[45%] max-[768px]:w-[100%] max-[1000px]:w-[100%]  max-[447px]:w-full rounded border-2 border-[#daabab] pt-5 pl-5 pb-5 pr-5 bg-white  sm:w-full  transition duration-300 transform hover:shadow-lg'>
                        <div className=''>
                            <img src={cardImage2} alt="" className='w-full  transition duration-300 transform hover:scale-105' />
                            <div className='w-full flex justify-between max-[447px]:flex-col  pl-5 pr-5 capitalize mb-5 mt-3 transition duration-300 transform hover:translate-y-[-10px]'>
                                <div className='flex gap-4'>
                                    <p>4 geeks</p>
                                    <p>beginner</p>
                                </div>
                                <h5>by john smith</h5>
                            </div>
                            <h3 className='text-[24px] capitalize mb-4 font-bold  transition duration-300 transform hover:translate-y-[-10px]'>UX/Ui design</h3>
                            <p className='capitalize mb-3 transform hover:translate-y-[-10px]'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                            <button className='w-full rounded h-10 bg-gray-200 capitalize transition duration-300 transform hover:translate-y-[-10px] hover:bg-[#FF9500]'>get it now</button>
                        </div>
                    </div>
                    <div className='w-[45%] max-[768px]:w-[100%] max-[1000px]:w-[100%] max-[447px]:w-full rounded border-2 border-[#daabab] pt-5 pl-5 pb-5 pr-5 bg-white  sm:w-full  transition duration-300 transform hover:shadow-lg'>
                        <div className=''>
                            <img src={cardImage3} alt="" className='w-full  transition duration-300 transform hover:scale-105' />
                            <div className='w-full flex justify-between  max-[447px]:flex-col pl-5 pr-5 capitalize mb-5 mt-3 transition duration-300 transform hover:translate-y-[-10px]'>
                                <div className='flex gap-4'>
                                    <p>4 geeks</p>
                                    <p>beginner</p>
                                </div>
                                <h5>By Michael Adams</h5>
                            </div>
                            <h3 className='text-[24px] capitalize mb-4 font-bold  transition duration-300 transform hover:translate-y-[-10px]'>mobile app Development</h3>
                            <p className='capitalize mb-3 transform hover:translate-y-[-10px]'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                            <button className='w-full rounded h-10 bg-gray-200 capitalize transition duration-300 transform hover:translate-y-[-10px] hover:bg-[#FF9500]'>get it now</button>
                        </div>
                    </div>
                    <div className='w-[45%] max-[768px]:w-[100%] max-[1000px]:w-[100%] max-[447px]:w-full   rounded border-2 border-[#888] pt-5 pl-5 pb-5 pr-5 bg-white  sm:w-full  transition duration-300 transform hover:shadow-lg'>
                        <div className=''>
                            <img src={cardImage4} alt="" className='w-full  transition duration-300 transform hover:scale-105' />
                            <div className='w-full flex justify-between  max-[447px]:flex-col  pl-5 pr-5 capitalize mb-5 mt-3 transition duration-300 transform hover:translate-y-[-10px]'>
                                <div className='flex gap-4'>
                                    <p>4 geeks</p>
                                    <p>beginner</p>
                                </div>
                                <h5>By Jennifer Wilson</h5>
                            </div>
                            <h3 className='text-[24px] capitalize mb-4 font-bold  transition duration-300 transform hover:translate-y-[-10px]'>Graphic Design for Beginners</h3>
                            <p className='capitalize mb-3 transform hover:translate-y-[-10px]'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                            <button className='w-full rounded h-10 bg-gray-200 capitalize transition duration-300 transform hover:translate-y-[-10px] hover:bg-[#FF9500]'>get it now</button>
                        </div>
                    </div>
                    <div className='w-[45%] max-[768px]:w-[100%] max-[447px]:w-full max-[1000px]:w-[100%]  rounded border-2 border-[#888] pt-5 pl-5 pb-5 pr-5 bg-white  sm:w-full  transition duration-300 transform hover:shadow-lg'>
                        <div className=''>
                            <img src={cardImage5} alt="" className='w-full  transition duration-300 transform hover:scale-105' />
                            <div className='w-full flex justify-between  max-[447px]:flex-col  pl-5 pr-5 capitalize mb-5 mt-3 transition duration-300 transform hover:translate-y-[-10px]'>
                                <div className='flex gap-4'>
                                    <p>4 geeks</p>
                                    <p>beginner</p>
                                </div>
                                <h5>by john smith</h5>
                            </div>
                            <h3 className='text-[24px] capitalize mb-4 font-bold  transition duration-300 transform hover:translate-y-[-10px]'>Front-End Web Development</h3>
                            <p className='capitalize mb-3 transform hover:translate-y-[-10px]'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                            <button className='w-full rounded h-10 bg-gray-200 capitalize transition duration-300 transform hover:translate-y-[-10px] hover:bg-[#FF9500]'>get it now</button>
                        </div>
                    </div>
                    <div className='w-[45%] max-[768px]:w-[100%] max-[447px]:w-full max-[1000px]:w-[100%] rounded border-2 border-[#888] pt-5 pl-5 pb-5 pr-5 bg-white  sm:w-full  transition duration-300 transform hover:shadow-lg'> 
                        <div className=''>
                            <img src={cardImage6} alt="" className='w-full  transition duration-300 transform hover:scale-105' />
                            <div className='w-full flex justify-between pl-5 pr-5  max-[447px]:flex-col  capitalize mb-5 mt-3 transition duration-300 transform hover:translate-y-[-10px]'>
                                <div className='flex gap-4'>
                                    <p>4 geeks</p>
                                    <p>beginner</p>
                                </div>
                                <h5>by john smith</h5>
                            </div>
                            <h3 className='text-[24px] capitalize mb-4 font-bold  transition duration-300 transform hover:translate-y-[-10px]'>advanced javascript</h3>
                            <p className='capitalize mb-3 transform hover:translate-y-[-10px]'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                            <button className='w-full rounded h-10 bg-gray-200 capitalize transition duration-300 transform hover:translate-y-[-10px] hover:bg-[#FF9500]'>get it now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card







