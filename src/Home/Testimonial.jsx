import React from 'react'
import Test_image from "../images/Pricing Section-2.png"
import Test_image2 from "../images/Pricing Section-3.png"
import Test_image3 from "../images/Pricing Section-4.png"
import Test_image4 from "../images/Pro.png"


export const Testimonial = () => {
    return (
        <div className='bg-gray-100 w-full flex items-center  pt-11 pb-10'>
            <div className='w-full max-[768px]:mt-[150px]'>
                <div className='w-[90%] m-auto flex justify-around  max-[900px]:flex-col max-[768px]:gap-[30px] flex-wrap max-[768px]:text-left'>
                    <div>
                        <h1 className='capitalize text-3xl md:text2-xl mb-2 font-bold'>our Testimonials</h1>
                        <p className='mdtext-[10px]'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum <br /> eget habitasse in velit fringilla feugiat senectus in.</p>
                    </div>
                    <button className='w-[140px] h-11 max-[768px]:h-14 rounded bg-gray-200 capitalize'>view all</button>
                </div>
                <div className='w-[100%] flex gap-7  md:w-full justify-center items-center pt-10 flex-wrap md:flex-wrap sm:flex-col'>
                    <div className='w-[40%] h-[200px] md:w-[90%] lg:w-[70%] bg-white flex flex-col justify-around items-center rounded border-2 sm:w-[80%] transition duration-300 transform hover:shadow-lg'>
                        <p className='mb-3 ml-3 capitalize max-[500px]:text-[14px] max-[768px]:text[16px] transition duration-300 transform hover:translate-y-[-5px]'>The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
                        <hr className='w-full h-[2px] bg-gray-300' />
                        <div className='flex w-[90%] justify-between max-[500px]:items-center transition duration-300 transform hover:translate-y-[-5px]'>
                            <span className='flex items-center gap-5 capitalize sm:text-[15px]  sm:justify-center'><img src={Test_image4} alt="" className='w-[60px] h-[60px]' />sarah L</span>
                            <button className='w-[200px]  max-[500px]:w-[120px] max-[500px]:h-[40px] max-[500px]:text-[13px]  h-11 bg-slate-100 capitalize text-black'>read full story</button>
                        </div>
                    </div>

                    <div className='w-[40%] h-[200px] md:w-[90%] lg:w-[70%] bg-white flex flex-col justify-around items-center rounded border-2 sm:w-[80%]  transition duration-300 transform hover:shadow-lg'>
                        <p className='mb-3 ml-3 capitalize max-[500px]:text-[14px] transition duration-300 transform hover:translate-y-[-5px]'>The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
                        <hr className='w-full h-[2px] bg-gray-300' />
                        <div className='flex w-[90%] justify-between max-[500px]:items-center transition duration-300 transform hover:translate-y-[-5px]'>
                            <span className='flex items-center gap-5 capitalize sm:text-[15px] sm:justify-center'><img src={Test_image} alt="" />jason m</span>
                            <button className='w-[200px] max-[500px]:w-[120px] max-[500px]:h-[40px] max-[500px]:text-[13px] h-11 bg-slate-100 capitalize text-black'>read full story</button>
                        </div>
                    </div>
                    <div className='w-[40%] h-[200px] md:w-[90%] lg:w-[70%] bg-white flex flex-col justify-around items-center rounded border-2 sm:w-[80%]  transition duration-300 transform hover:shadow-lg'>
                        <p className='mb-3 ml-3 capitalize max-[500px]:text-[14px] transition duration-300 transform hover:translate-y-[-5px]'>The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
                        <hr className='w-full h-[2px] bg-gray-300' />
                        <div className='flex w-[90%] justify-between max-[500px]:items-center transition duration-300 transform hover:translate-y-[-5px]'>
                            <span className='flex items-center gap-5 capitalize sm:text-[15px] sm:justify-center'><img src={Test_image2} alt="" />emily r</span>
                            <button className='w-[200px] h-11  max-[500px]:w-[120px] max-[500px]:h-[40px] max-[500px]:text-[13px] bg-slate-100 capitalize text-black'>read full story</button>
                        </div>
                    </div>
                    <div className='w-[40%] h-[200px] md:w-[90%] lg:w-[70%] bg-white flex flex-col justify-around items-center rounded border-2 sm:w-[80%]  transition duration-300 transform hover:shadow-lg'>
                        <p className='mb-3 ml-3 capitalize max-[500px]:text-[14px] transition duration-300 transform hover:translate-y-[-5px]'>The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
                        <hr className='w-full h-[2px] bg-gray-300' />
                        <div className='flex w-[90%] justify-between max-[500px]:items-center transition duration-300 transform hover:translate-y-[-5px]'>
                            <span className='flex items-center gap-5 capitalize sm:items-center sm:text-[15px] sm:justify-center'><img src={Test_image3} alt="" />micheal k</span>
                            <button className='w-[200px]  max-[500px]:w-[120px] max-[500px]:h-[40px] max-[500px]:text-[13px] h-11 bg-slate-100 capitalize text-black'>read full story</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
