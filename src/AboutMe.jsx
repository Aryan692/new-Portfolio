import React, { useState } from 'react';
import MyImage from './assets/dp.jpg'


const  AboutMe = () =>{


    const [About , setAbout ] = useState({
        image:MyImage,
        title:"Java developer & frontend developer",
        desc1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa omnis magni natus hic minus eos autem excepturi distinctio voluptatum, officia nostrum et accusantium cupiditate cumque sit quis mollitia! Fuga, illo.",
        desc2:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quidem libero expedita officia dicta consectetur voluptate nisi atque. Corporis, laborum.",

        actionBtn:{
            title:"Read more...",
            link:"/readmore"
        }

    })

    return (<>
        
        
        <div className='main-container py-16 bg-gray-50 shadow-xl'>

        <h1 className='text-center font-bold text-5xl underline'>About Me</h1>

        <div className='container flex py-20 items-center justify-center'>
        
        <div className='w-full flex items-center justify-center'>
        <img className='w-96 h-96 rounded-full shadow-2xl' src={About.image} alt="" /></div>
        <div className='w-full flex flex-col space-y-3'>

            <h1 className='text-4xl font-semi-bold'>{About.title}</h1>
            <p className='font-serif'>{About.desc1}</p>

            <p className='font-serif'>{About.desc2}</p>

            <a href={About.actionBtn.link} className=' text-center border  bg-orange-600 rounded-lg py-1 text-white cursor-pointer hover:bg-orange-500'>{About.actionBtn.title}</a>
        </div>
        
        </div>
        
        </div>
        
        </>)
}


export default  AboutMe;
