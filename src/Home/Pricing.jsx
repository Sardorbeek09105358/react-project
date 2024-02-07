import React from 'react'

export const Pricing = () => {
    return (
        <div className='w-full bg-gray-100 pt-[100px] sm:pt-11 lg:mt-[100px] md:mt-[50px] pb-5'>
            <div>
                <div className='w-[80%] h-11 lg:flex flex justify-between  items-center mb-14 lg:items-center m-auto md:flex-col md:mb-[200px] sm:mb-[300px]'>
                    <div className='sm:mt-[30px] mb-5'>
                        <h1 className='capitalize mb-2  text-3xl font-bold'>our pricing</h1>
                        <p className='max-[1200px]:text-[13px] max-[380px]:mb-4'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. <br />  Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                    </div>
                    <div className='flex gap-8 max-[380px]:mb-[20px]'>
                        <button className='w-[120px] h-11 rounded bg-[#FF9500] capitalize text-xl text-slate-100'>monthly</button>
                        <button className='w-[120px] h-11 rounded border-2 capitalize text-xl hover:bg-[#ff9500] hover:text-slate-100'>yearly</button>
                    </div>
                </div>
                <div className='w-full flex justify-around items-center  lg:flex lg:items-center lg:justify-center lg:gap-14 md:flex-wrap lg:flex-wrap sm:justify-center'>
                    <div className='lg:w-[60%] md:w-[40%] sm:w-[90%] w-[30%] rounded border-2 flex items-center bg-white pt-10 flex-col pb-10 lg:pb-5 md:pb-3 sm-pb-2 transition duration-300 hover:shadow-lg'>
                        <h1 className='w-[90%] h-10 capitalize text-3xl mb-10 bg-[#FFEACC] text-center'>pro plan</h1>
                        <h1 className='capitalize text-2xl mb-10 font-bold'>$0<sub>/months</sub></h1>
                        <p className='capitalize font-bold text-xl mb-3'>available features</p>
                        <div className='flex flex-col gap-4 md:gap-2 sm:gap-1 sm:pl-5'>
                            <span className='block text-left md:text-[13px]'><i className="fa-solid fa-check mr-3 mb-4"></i>Access to selected free courses.</span>
                            <span className='block text-left md:text-[13px]'><i className="fa-solid fa-check mr-3 mb-4"></i>Limited course materials and resources.</span>
                            <span className='block text-left md:text-[13px]'><i className="fa-solid fa-check mr-3 mb-4"></i>Basic community support.</span>
                            <span className='block text-left md:text-[13px]'><i className="fa-solid fa-check mr-3 mb-4"></i>Ad-supported platform.</span>
                            <span className='block text-left md:text-[13px]'><i className="fa-solid fa-check mr-3 mb-4"></i>Access to exclusive Pro Plan community forums.</span>
                            <span className='block text-left md:text-[13px]'><i className="fa-solid fa-x mr-3 mb-4"></i>Early access to new courses and updates.</span>
                            <span className='block text-left md:text-[13px]'><i className="fa-solid fa-x mr-3 mb-4"></i>Access to selected free courses.</span>
                        </div>
                        <button className='w-[90%] h-11 bg-[#ff9500] rounded capitalize text-xl hover:bg-yellow-500 text-slate-100 transition duration-300'>get started</button>
                    </div>

                    <div className='lg:w-[60%] w-[30%] md:w-[40%] sm:w-[90%] rounded border-2 items-center  flex bg-white  pt-10  flex-col pb-10 lg:pb-5 md:pb-3 sm-pb-2  transition duration-300 hover:shadow-lg'>
                        <h1 className='w-[90%] h-10 capitalize text-3xl mb-10  bg-[#FFEACC] text-center'>free plan</h1>
                        <h1 className='capitalize text-2xl mb-10 font-bold'>$79<sub>/months</sub></h1>
                        <p className='capitalize font-bold text-xl mb-3'>available features</p>
                        <div className='flex flex-col gap-4  md:gap-2 sm:gap-1 sm:pl-5'>
                            <span className='block text-left max-[600px]:text-[13px]'><i className="fa-solid fa-check mr-3 mb-4"></i>Access to selected free courses.</span>
                            <span className='block text-left max-[600px]:text-[13px]'><i className="fa-solid fa-check mr-3 mb-4"></i>Unlimited access to all courses..</span>
                            <span className='block text-left max-[600px]:text-[13px]'><i className="fa-solid fa-check mr-3 mb-4"></i>Priority support from instructors.</span>
                            <span className='block text-left max-[600px]:text-[13px]'><i className="fa-solid fa-check mr-3 mb-4"></i>Course completion certificates.</span>
                            <span className='block text-left max-[600px]:text-[13px]'><i className="fa-solid fa-check mr-3 mb-4"></i>Ad-free experience.</span>
                            <span className='block text-left max-[600px]:text-[13px]'><i className="fa-solid fa-check mr-3 mb-4"></i>Access to exclusive Pro Plan community forums..</span>
                            <span className='block text-left max-[600px]:text-[13px]'><i className="fa-solid fa-check mr-3 mb-4"></i>Early access to new courses and updates.</span>
                        </div>
                        <button className='w-[90%] h-11 bg-[#ff9500] rounded capitalize text-xl hover:bg-yellow-500  text-slate-100'>get started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing



