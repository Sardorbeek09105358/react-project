import React from 'react'
import Navbar from '../Home/Navbar'
import image from "./Course_image/image-1.jpg"
import image2 from "./Course_image/image-2.jpg"
import image3 from "./Course_image/image-3.jpg"
import Design1 from "./Course_image/Design-1.jpg"
import Design2 from "./Course_image/Design-2.jpg"
import Design3 from "./Course_image/Design-3.jpg"
import Mobile1 from "./Course_image/Mobile-1.jpg"
import Mobile2 from "./Course_image/Mobile-2.jpg"
import Mobile3 from "./Course_image/Mobile-3.jpg"
import Beginner1 from "./Course_image/Beginner-1.jpg"
import Beginner2 from "./Course_image/Beginner-2.jpg"
import Beginner3 from "./Course_image/Beginner-3.jpg"
import web from "./Course_image/Web-1.jpg"
import web2 from "./Course_image/Web-2.jpg"
import web3 from "./Course_image/Web-3.jpg"
import Footer from '../Home/footer'

export const Courses = () => {
  return (
    <div className='pt-3 bg-gray-100'>
      <div className='w-[95%] lg:w-[95%] h-[50px] mb-5 bg-[#FF9500] m-auto flex justify-center items-center  rounded'>
        <h1 className='text-center capitalize text-2xl  lg:text-xl sm:text-[14px] md:text-xl text-slate-100 md:w-[90%] md:text-[14px] md:text-gray-100'>
          <span>Free courses 🌟 Sale ends soon. Get it now</span>
          <i className="fa-solid fa-arrow-right-long ml-2"></i>
        </h1>
      </div>
      <Navbar />

      <div>
        <div className='w-full h-[400px] flex justify-center items-center'>
          <div className='w-[90%] flex justify-between lg:flex-col sm:justify-center sm:w-[95%] lg:gap-7 sm:gap-4'>
            <div className='w-full lg:w-[80%] md:w-[80%] sm:w-[85%] capitalize text-5xl lg:text-[30px] font-bold mb-6 lg:mb-0 md:text-3xl sm:text-xl transform transition-transform hover:translate-x-2 hover:translate-y-2'>
              Online Courses on Design and Development
            </div>
            <div className='w-full lg:w-[80%] md:w-[80%] sm:w-[85%] text-xl lg:text-[20px] sm:text-[14px] transform transition-transform hover:translate-x-2 hover:translate-y-2'>
              Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.
            </div>
          </div>

        </div>
        <hr className='h-2 mb-10' />
      </div>
      <div className='w-full pt-7 lg:pt-6 md:pt-5 flex flex-col gap-10 mb-10'>
        <div className='w-[90%] m-auto rounded pl-2 pr-2 pt-3 sm:pb-[200px] md:pb-[150px] lg:pb-[100px]  flex flex-col bg-white lg:w-[90%]  md:pt-14 md:w-[90%] sm:w-[95%]  animate__animated animate__fadeIn'>
          <div className='w-[92%]  m-auto h-16 flex justify-around items-center lg:items-center lg:flex-col lg:mb-5 md:flex-coll'>
            <div>
              <h1 className='capitalize text-3xl mb-3 lg:text-2xl lg:m-2  md:text-2xl sm:text-xl sm:mb-1'>Web Design Fundamentals</h1>
              <p className='capitalize text-[#59595A]'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
            </div>
            <button className='rounded border-2 w-[120px] h-[40px] capitalize md:h-[30px] md:w-[140px] lg:text-[13px]'>View Course</button>
          </div>
          <div class='w-full  flex gap-14 justify-center mt-14 md:flex-col md:justify-center md:items-center  md:mt-10 md:gap-5 md-md:flex-wrap sm:flex-wrap sm:mb-4'>
            <img src={image} alt="" class='w-[25%] md:w-[60%] sm:w-[80%] ' />
            <img src={image2} alt="" class='w-[25%] md:w-[60%] sm:w-[80%]' />
            <img src={image3} alt="" class='w-[25%] md:w-[60%] sm:w-[80%]' />
          </div>
          <div className='flex h-[100px] w-[80%] justify-between items-center flex-wrap m-auto lg:flex-wrap  md:flex-wrap sm:flex-col'>
            <div className='flex gap-4 md:gap-2 sm:gap-1'>
              <h2 className='rounded border-2 w-[100px] text-center'>4 weeks</h2>
              <h2 className='rounded border-2 w-[100px] text-center'>beginner</h2>
            </div>
            <h2 className='capitalize'>by John Smith</h2>
          </div>
          <div className='rounded w-[92%] h-[250px] m-auto pl-2 pr-2'>
            <h1 className='mb-5 mt-2 capitalize text-[30px] font-bold lg:text-[20px] md:text-[15px]'>Curriculum</h1>
            <hr />
            <div className='flex justify-around items-center gap-7 pt-6 md:flex-wrap md:gap-4  sm:flex-col sm:gap-5 sm:justify-center sm:text-center'>
              <div className=''>
                <h1 className='text-[45px] font-bold lg:text-[25px] md:text-[30px] sm:text-[20px]'>01</h1>
                <h3 className='capitalize text-xl font-semibold md:text-[16px] sm:text-[14px]'>Introduction to HTML</h3>
              </div>
              <div className=''>
                <h1 className='text-[45px] font-bold md:text-[30px] lg:text-[25px] sm:text-[20px]'>02</h1>
                <h3 className='capitalize text-xl font-semibold md:text-[16px] sm:text-[14px]'>Style with CSS</h3>
              </div>
              <div className=''>
                <h1 className='text-[45px] font-bold md:text-[30px] sm:text-[20px] lg:text-[25px] '>03</h1>
                <h3 className='capitalize text-xl font-semibold md:text-[16px] sm:text-[14px]'>Introduction to Responsive Design</h3>
              </div>
              <div className=''>
                <h1 className='text-[45px] font-bold md:text-[30px] sm:text-[20px] lg:text-[25px]'>04</h1>
                <h3 className='capitalize text-xl font-semibold md:text-[16px] sm:text-[14px]'>Design Principles for Web</h3>
              </div>
              <div className=''>
                <h1 className='text-[45px] font-bold md:text-[30px] sm:text-[20px] lg:text-[25px]'>05</h1>
                <h3 className='capitalize text-xl font-semibold md:text-[16px] sm:text-[14px]'>Building a Basic Website</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[90%] m-auto rounded pl-2 pr-2 pt-3 sm:pb-[200px] md:pb-[150px] lg:pb-[100px]  flex flex-col bg-white lg:w-[90%]  md:pt-14 md:w-[90%] sm:w-[95%]  animate__animated animate__fadeIn'>
          <div className='w-[92%] m-auto h-16 flex justify-around items-center lg:items-center lg:flex-col lg:mb-5 md:flex-coll'>
            <div>
              <h1 className='capitalize text-3xl mb-3 lg:text-2xl lg:m-2  md:text-2xl sm:text-xl sm:mb-1'>UX/UI design</h1>
              <p className='capitalize text-[#59595A]'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
            </div>
            <button className='rounded border-2 w-[120px] h-[40px] capitalize md:h-[30px] md:w-[140px] lg:text-[13px]'>View Course</button>
          </div>
          <div class='w-full  flex gap-14 justify-center mt-14 md:flex-col md:justify-center md:items-center  md:mt-10 md:gap-5 md-md:flex-wrap sm:flex-wrap sm:mb-4'>
            <img src={Design1} alt="" class='w-[25%] md:w-[60%] sm:w-[80%] ' />
            <img src={Design2} alt="" class='w-[25%] md:w-[60%] sm:w-[80%]' />
            <img src={Design3} alt="" class='w-[25%] md:w-[60%] sm:w-[80%]' />
          </div>

          <div className='flex h-[100px] w-[80%] justify-between items-center flex-wrap m-auto lg:flex-wrap  md:flex-wrap sm:flex-col'>
            <div className='flex gap-4 md:gap-2 sm:gap-1'>
              <h2 className='rounded border-2 w-[100px] text-center'>4 weeks</h2>
              <h2 className='rounded border-2 w-[100px] text-center'>beginner</h2>
            </div>
            <h2 className='capitalize'>by John Smith</h2>
          </div>
          <div className='rounded w-[92%] h-[250px] m-auto pl-2 pr-2'>
            <h1 className='mb-5 mt-2 capitalize text-[30px] font-bold lg:text-[20px] md:text-[15px]'>Curriculum</h1>
            <hr />
            <div className='flex justify-around items-center gap-7 pt-6 md:flex-wrap md:gap-4  sm:flex-col sm:gap-5 sm:justify-center sm:text-center'>
              <div className=''>
                <h1 className='text-[45px] font-bold lg:text-[25px] md:text-[30px] sm:text-[20px]'>01</h1>
                <h3 className='capitalize text-xl font-semibold md:text-[16px] sm:text-[14px]'>Introduction to HTML</h3>
              </div>
              <div className=''>
                <h1 className='text-[45px] font-bold md:text-[30px] lg:text-[25px] sm:text-[20px]'>02</h1>
                <h3 className='capitalize text-xl font-semibold md:text-[16px] sm:text-[14px]'>Style with CSS</h3>
              </div>
              <div className=''>
                <h1 className='text-[45px] font-bold md:text-[30px] sm:text-[20px] lg:text-[25px] '>03</h1>
                <h3 className='capitalize text-xl font-semibold md:text-[16px] sm:text-[14px]'>Introduction to Responsive Design</h3>
              </div>
              <div className=''>
                <h1 className='text-[45px] font-bold md:text-[30px] sm:text-[20px] lg:text-[25px]'>04</h1>
                <h3 className='capitalize text-xl font-semibold md:text-[16px] sm:text-[14px]'>Design Principles for Web</h3>
              </div>
              <div className=''>
                <h1 className='text-[45px] font-bold md:text-[30px] sm:text-[20px] lg:text-[25px]'>05</h1>
                <h3 className='capitalize text-xl font-semibold md:text-[16px] sm:text-[14px]'>Building a Basic Website</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[90%] m-auto rounded pl-2 pr-2 pt-3 sm:pb-[200px] md:pb-[150px] lg:pb-[100px]  flex flex-col bg-white lg:w-[90%]  md:pt-14 md:w-[90%] sm:w-[95%]  animate__animated animate__fadeIn'>
          <div className='w-[92%]  m-auto h-16 flex justify-around items-center lg:items-center lg:flex-col lg:mb-5 md:flex-coll'>
            <div>
              <h1 className='capitalize text-3xl mb-3 lg:text-2xl lg:m-2  md:text-2xl sm:text-xl sm:mb-1'>Mobile app development</h1>
              <p className='capitalize text-[#59595A]'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
            </div>
            <button className='rounded border-2 w-[120px] h-[40px] capitalize md:h-[30px] md:w-[140px] lg:text-[13px]'>View Course</button>
          </div>
          <div class='w-full  flex gap-14 justify-center mt-14 md:flex-col md:justify-center md:items-center  md:mt-10 md:gap-5 md-md:flex-wrap sm:flex-wrap sm:mb-4'>
            <img src={Mobile1} alt="" class='w-[25%] md:w-[60%] sm:w-[80%] ' />
            <img src={Mobile2} alt="" class='w-[25%] md:w-[60%] sm:w-[80%]' />
            <img src={Mobile3} alt="" class='w-[25%] md:w-[60%] sm:w-[80%]' />
          </div>

          <div className='flex h-[100px] w-[80%] justify-between items-center flex-wrap m-auto lg:flex-wrap  md:flex-wrap sm:flex-col'>
            <div className='flex gap-4 md:gap-2 sm:gap-1'>
              <h2 className='rounded border-2 w-[100px] text-center'>4 weeks</h2>
              <h2 className='rounded border-2 w-[100px] text-center'>beginner</h2>
            </div>
            <h2 className='capitalize'>by John Smith</h2>
          </div>
          <div className='rounded w-[92%] h-[250px] m-auto pl-2 pr-2'>
            <h1 className='mb-5 mt-2 capitalize text-[30px] font-bold lg:text-[20px] md:text-[15px]'>Curriculum</h1>
            <hr />
            <div className='flex justify-around items-center gap-7 pt-6 md:flex-wrap md:gap-4  sm:flex-col sm:gap-5 sm:justify-center sm:text-center'>
              <div className=''>
                <h1 className='text-[45px] font-bold lg:text-[25px] md:text-[30px] sm:text-[20px]'>01</h1>
                <h3 className='capitalize text-xl font-semibold md:text-[16px] sm:text-[14px]'>Introduction to HTML</h3>
              </div>
              <div className=''>
                <h1 className='text-[45px] font-bold md:text-[30px] lg:text-[25px] sm:text-[20px]'>02</h1>
                <h3 className='capitalize text-xl font-semibold md:text-[16px] sm:text-[14px]'>Style with CSS</h3>
              </div>
              <div className=''>
                <h1 className='text-[45px] font-bold md:text-[30px] sm:text-[20px] lg:text-[25px] '>03</h1>
                <h3 className='capitalize text-xl font-semibold md:text-[16px] sm:text-[14px]'>Introduction to Responsive Design</h3>
              </div>
              <div className=''>
                <h1 className='text-[45px] font-bold md:text-[30px] sm:text-[20px] lg:text-[25px]'>04</h1>
                <h3 className='capitalize text-xl font-semibold md:text-[16px] sm:text-[14px]'>Design Principles for Web</h3>
              </div>
              <div className=''>
                <h1 className='text-[45px] font-bold md:text-[30px] sm:text-[20px] lg:text-[25px]'>05</h1>
                <h3 className='capitalize text-xl font-semibold md:text-[16px] sm:text-[14px]'>Building a Basic Website</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[90%] m-auto rounded pl-2 pr-2 pt-3 sm:pb-[200px] md:pb-[150px] lg:pb-[100px]  flex flex-col bg-white lg:w-[90%]  md:pt-14 md:w-[90%] sm:w-[95%]  animate__animated animate__fadeIn'>
          <div className='w-[92%]  m-auto h-16 flex justify-around items-center lg:items-center lg:flex-col lg:mb-5 md:flex-coll'>
            <div>
              <h1 className='capitalize text-3xl mb-3 lg:text-2xl lg:m-2  md:text-2xl sm:text-xl sm:mb-1'>Graphic desgin for beginners</h1>
              <p className='capitalize text-[#59595A]'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
            </div>
            <button className='rounded border-2 w-[120px] h-[40px] capitalize md:h-[30px] md:w-[140px] lg:text-[13px]'>View Course</button>
          </div>
          <div class='w-full  flex gap-14 justify-center mt-14 md:flex-col md:justify-center md:items-center  md:mt-10 md:gap-5 md-md:flex-wrap sm:flex-wrap sm:mb-4'>
            <img src={Beginner1} alt="" class='w-[25%] md:w-[60%] sm:w-[80%] ' />
            <img src={Beginner2} alt="" class='w-[25%] md:w-[60%] sm:w-[80%]' />
            <img src={Beginner3} alt="" class='w-[25%] md:w-[60%] sm:w-[80%]' />
          </div>

          <div className='flex h-[100px] w-[80%] justify-between items-center flex-wrap m-auto lg:flex-wrap  md:flex-wrap sm:flex-col'>
            <div className='flex gap-4 md:gap-2 sm:gap-1'>
              <h2 className='rounded border-2 w-[100px] text-center'>4 weeks</h2>
              <h2 className='rounded border-2 w-[100px] text-center'>beginner</h2>
            </div>
            <h2 className='capitalize'>by John Smith</h2>
          </div>
          <div className='rounded w-[92%] h-[250px] m-auto pl-2 pr-2'>
            <h1 className='mb-5 mt-2 capitalize text-[30px] font-bold lg:text-[20px] md:text-[15px]'>Curriculum</h1>
            <hr />
            <div className='flex justify-around items-center gap-7 pt-6 md:flex-wrap md:gap-4  sm:flex-col sm:gap-5 sm:justify-center sm:text-center'>
              <div className=''>
                <h1 className='text-[45px] font-bold lg:text-[25px] md:text-[30px] sm:text-[20px]'>01</h1>
                <h3 className='capitalize text-xl font-semibold md:text-[16px] sm:text-[14px]'>Introduction to HTML</h3>
              </div>
              <div className=''>
                <h1 className='text-[45px] font-bold md:text-[30px] lg:text-[25px] sm:text-[20px]'>02</h1>
                <h3 className='capitalize text-xl font-semibold md:text-[16px] sm:text-[14px]'>Style with CSS</h3>
              </div>
              <div className=''>
                <h1 className='text-[45px] font-bold md:text-[30px] sm:text-[20px] lg:text-[25px] '>03</h1>
                <h3 className='capitalize text-xl font-semibold md:text-[16px] sm:text-[14px]'>Introduction to Responsive Design</h3>
              </div>
              <div className=''>
                <h1 className='text-[45px] font-bold md:text-[30px] sm:text-[20px] lg:text-[25px]'>04</h1>
                <h3 className='capitalize text-xl font-semibold md:text-[16px] sm:text-[14px]'>Design Principles for Web</h3>
              </div>
              <div className=''>
                <h1 className='text-[45px] font-bold md:text-[30px] sm:text-[20px] lg:text-[25px]'>05</h1>
                <h3 className='capitalize text-xl font-semibold md:text-[16px] sm:text-[14px]'>Building a Basic Website</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[90%] m-auto rounded pl-2 pr-2 pt-3 sm:pb-[200px] md:pb-[150px] lg:pb-[100px]  flex flex-col bg-white lg:w-[90%]  md:pt-14 md:w-[90%] sm:w-[95%]  animate__animated animate__fadeIn'>
          <div className='w-[92%]  m-auto h-16 flex justify-around items-center lg:items-center lg:flex-col lg:mb-5 md:flex-coll'>
            <div>
              <h1 className='capitalize text-3xl mb-3 lg:text-2xl lg:m-2  md:text-2xl sm:text-xl sm:mb-1'>front-End Web development</h1>
              <p className='capitalize text-[#59595A]'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
            </div>
            <button className='rounded border-2 w-[120px] h-[40px] capitalize md:h-[30px] md:w-[140px] lg:text-[13px]'>View Course</button>
          </div>
          <div class='w-full  flex gap-14 justify-center mt-14 md:flex-col md:justify-center md:items-center  md:mt-10 md:gap-5 md-md:flex-wrap sm:flex-wrap sm:mb-4'>
            <img src={web} alt="" class='w-[25%] md:w-[60%] sm:w-[80%] ' />
            <img src={web2} alt="" class='w-[25%] md:w-[60%] sm:w-[80%]' />
            <img src={web3} alt="" class='w-[25%] md:w-[60%] sm:w-[80%]' />
          </div>

          <div className='flex h-[100px] w-[80%] justify-between items-center flex-wrap m-auto lg:flex-wrap  md:flex-wrap sm:flex-col'>
            <div className='flex gap-4 md:gap-2 sm:gap-1'>
              <h2 className='rounded border-2 w-[100px] text-center'>4 weeks</h2>
              <h2 className='rounded border-2 w-[100px] text-center'>beginner</h2>
            </div>
            <h2 className='capitalize'>by John Smith</h2>
          </div>
          <div className='rounded w-[92%] h-[250px] m-auto pl-2 pr-2'>
            <h1 className='mb-5 mt-2 capitalize text-[30px] font-bold lg:text-[20px] md:text-[15px]'>Curriculum</h1>
            <hr />
            <div className='flex justify-around items-center gap-7 pt-6 md:flex-wrap md:gap-4  sm:flex-col sm:gap-5 sm:justify-center sm:text-center'>
              <div className=''>
                <h1 className='text-[45px] font-bold lg:text-[25px] md:text-[30px] sm:text-[20px]'>01</h1>
                <h3 className='capitalize text-xl font-semibold md:text-[16px] sm:text-[14px]'>Introduction to HTML</h3>
              </div>
              <div className=''>
                <h1 className='text-[45px] font-bold md:text-[30px] lg:text-[25px] sm:text-[20px]'>02</h1>
                <h3 className='capitalize text-xl font-semibold md:text-[16px] sm:text-[14px]'>Style with CSS</h3>
              </div>
              <div className=''>
                <h1 className='text-[45px] font-bold md:text-[30px] sm:text-[20px] lg:text-[25px] '>03</h1>
                <h3 className='capitalize text-xl font-semibold md:text-[16px] sm:text-[14px]'>Introduction to Responsive Design</h3>
              </div>
              <div className=''>
                <h1 className='text-[45px] font-bold md:text-[30px] sm:text-[20px] lg:text-[25px]'>04</h1>
                <h3 className='capitalize text-xl font-semibold md:text-[16px] sm:text-[14px]'>Design Principles for Web</h3>
              </div>
              <div className=''>
                <h1 className='text-[45px] font-bold md:text-[30px] sm:text-[20px] lg:text-[25px]'>05</h1>
                <h3 className='capitalize text-xl font-semibold md:text-[16px] sm:text-[14px]'>Building a Basic Website</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Courses








