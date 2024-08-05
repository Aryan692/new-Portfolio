import React from 'react';
import bannerbackground from './assets/banner_wallpaper.svg';


const Expertise = () =>{

    return (<>
        
        <div className='main-container mt-16 h-80'>
        <h1 className='text-center font-bold text-4xl underline'>My expertise</h1>

        <div style={{ backgroundImage : `url(${bannerbackground})` ,
 
            backgroundSize : "cover",

           }} className='flex h-72 mt-10'>
        <div className='w-full flex flex-col items-center justify-center'>

        <h1 className='text-white text-3xl font-semibold'>I love these Technologies</h1>
        <p className='font-serif text-white mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.ratione numquam minima </p>
        <span className='text-white font-serif mb-3'>Ullam nisi consequatur sint vel ad ndi Lorem ipsum  </span> 

        <button className='bg-orange-600 hover:bg-orange-500 shadow-lg px-4 py-1 cursor-pointer rounded-md text-center'>Hire me</button>
        
        </div>
        <div className='w-full space-x-2 flex flex-wrap justify-center items-center py-24 '>

        <span className='bg-gray-200 rounded-lg  w-fit  h-fit shadow-md px-3 py-1 cursor-pointer hover:bg-orange-500 '>JavaScript</span>
        <span className='bg-gray-200 rounded-lg h-fit w-fit shadow-md px-3 py-1 cursor-pointer hover:bg-orange-500 '>Typescript</span>
        <span className='bg-gray-200 rounded-lg h-fit w-fit shadow-md px-3 py-1 cursor-pointer hover:bg-orange-500 '>ReactJS</span>
        <span className='bg-gray-200 rounded-lg h-fit w-fit shadow-md px-3 py-1 cursor-pointer hover:bg-orange-500 '>Redux toolKit</span>
        <span className='bg-gray-200 rounded-lg h-fit w-fit shadow-md px-3 py-1 cursor-pointer hover:bg-orange-500 '>Tailwind css</span>
        <span className='bg-gray-200 rounded-lg h-fit w-fit shadow-md px-3 py-1 cursor-pointer hover:bg-orange-500 '>CSS</span>
        <span className='bg-gray-200 rounded-lg h-fit w-fit shadow-md px-3 py-1 cursor-pointer hover:bg-orange-500 '>Java</span>
        <span className='bg-gray-200 rounded-lg h-fit w-fit shadow-md px-3 py-1 cursor-pointer hover:bg-orange-500 '>Redux Saga</span>
        <span className='bg-gray-200 rounded-lg h-fit w-fit shadow-md px-3 py-1 cursor-pointer hover:bg-orange-500'>Linux</span>
    
        </div>
        </div>

        
        </div>
        
        </>)
}

export default Expertise;

