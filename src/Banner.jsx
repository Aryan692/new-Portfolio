import React, { useEffect, useRef, useState } from 'react';
import bannerImage from './assets/myProfile.jpg';
import bannerbackground from './assets/banner_wallpaper.svg';

import Typed from "typed.js";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";


const Banner = () =>{

    const el = useRef(null);

    
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Android Developer", "Java Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 100,
      loop:true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);


    const [banner , setBanner] = useState({

        heading:"Hi, I am",
        name:"Balram Tiwari",
        heading2:"And I am ",
        para:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores error esse pariatur dolorum minima maxime perspiciatis quo neque Delectus deleniti accusantium iste repellat praesentium",
        image:bannerImage,
    })

    return (<>

        <div style={
            { backgroundImage : `url(${bannerbackground})` ,
 
             backgroundSize : "cover",
 
            }
         }  className='flex justify-between  h-96 '>

        <div className=' w-full flex justify-center items-center px-16 '>
        <div className='space-y-2 text-white'>
        <h3 className='text-2xl font-semibold'>{banner.heading}</h3>
        <h1 className='text-4xl font-bold '>{banner.name}</h1>
        <h2 className='text-2xl font-light'>
        {banner.heading2}
        <span className='text-white font-bold' ref = {el}></span></h2>

        <p className='font-sans'>

        {banner.para}
       
        </p>


        <div className=' flex space-x-6 pb-3 pt-4'>

<a href='' className='h-10 w-10 rounded-full bg-black flex justify-center items-center'><span className='text-2xl cursor-pointer text-white'><FaXTwitter /></span></a>

<a href='' className='h-10 w-10 rounded-full bg-black flex justify-center items-center' ><span className='text-2xl cursor-pointer text-white'><IoLogoGithub /></span></a>

<a href='' className='h-10 w-10 rounded-full bg-black flex justify-center items-center'><span className='text-2xl cursor-pointer text-white'><FaLinkedin /></span></a>


<a href='' className='h-10 w-10 rounded-full bg-black flex justify-center items-center'><span className='text-2xl cursor-pointer text-white'><CgMail /></span></a>


<a href='' className='h-10 w-10 rounded-full bg-black flex justify-center items-center'>
<span className='text-2xl cursor-pointer text-white'><BsInstagram />
</span></a>


</div>

        <span className='block'>
<a href="/Contact" className='px-3 py-1 bg-orange-600 hover:bg-orange-500 rounded-lg cursor-pointer'>Contact me</a></span>


        

        </div>
        </div>

        <div className=' w-full flex justify-center items-center'>
       
        <img className='w-64 h-64 shadow-2xl  rounded-full' src={banner.image}  />
       
        </div>


        </div>
        
        
        </>
        )
}

export default Banner;
