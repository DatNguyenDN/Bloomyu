import React from 'react'
import home_banner_right_img from '../assets/home_banner_right.png'
import Company from '../components/HomePage/Companies'
import WhatsNew from '../components/HomePage/WhatsNew'
const Home = () => {
  return (

    <>
      <div id='home__banner'
      className='flex flex-row p-[5%]'
      >
        <div id='home__banner_left'
        className='p-[3%] w-[50%] font-Inter max-sm:w-full max-xl:w-full max-xl:justify-center max-xl:items-center max-sm:px-5  '>
         
            <h1 className='font-Inter w-[80%] text-35 font-[900] max-sm:text-20 max-xl:text-[25px]  '>
              Bloomyu is an extensive IT jobs platform with the best dataset
            </h1>
            <h2 className='w-[471px] h-[53px] flex-shrink-0 font-Inter text-[#F6EEEC] max-sm:w-full max-sm:text-14'>Explore the huge network of candidates and opportunities</h2>
         
    
          <div
          id='banner__btn'
          className='flex space-x-5'
          >
            <button className='w-[247px] h-[57px] flex-shrink-1 rounded-[15px] bg-gray-500 text-[#FFB800] font-semibold text-center text-16  
            hover:border-solid hover:border-4 border-sky-500   transition duration-300' >
              Hire Talent
            </button>
            <button className='w-[247px] h-[57px] flex-shrink-1 rounded-[15px] bg-[#FFB800] text-black font-semibold text-center text-16
            hover:border-solid hover:border-4 border-sky-500  transition duration-300' >
              Find A Job
            </button>
          </div>
    
          <button className=' p-[1%] gap-2 flex items-center  mt-5 w-[520px] h-[94px] flex-shrink-0 rounded-[15px] border-spacing-1 bg-gray-500 hover:border-solid hover:border-4 border-sky-500  transition duration-300 max-sm:w-full'>
            <img
            className='object-contain   overflow-clip  max-w-full max-h-full'
            src='https://bloomyu.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhire_imgs.71ac91b5.png&w=750&q=75'
            alt='small_img'
            />
    
            <h2 className='font-roboto text-14'>Explore the huge network of candidates and opportunities</h2>
          </button>
       </div>
  
        <div id='home__banner__right'
          className='w-[50%] flex '
        >
          <img
          className='block object-contain  max-h-full w-[800px] h-[575px] max-xl:hidden'
          src={home_banner_right_img}
          alt='banner_right_img'
          />
        </div>
  
  
      </div>
      <Company/>
      <WhatsNew/>
    </>

  )
}

export default Home
