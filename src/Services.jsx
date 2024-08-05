import React from 'react';
import { FaAws } from "react-icons/fa6";
import { RiJavaLine } from "react-icons/ri";
import { MdOutlineWebhook } from "react-icons/md";


const Services = () =>{
    return(<>


        <div className='main-container mt-16 py-3'>

        <h1 className='text-center text-4xl font-bold underline'>Services</h1>

        <div className='flex space-x-4 mt-10'>

        <div className='border-2 shadow-lg h-80 w-full rounded-lg flex flex-col space-y-3 text-center items-center  bg-gray-50'>

        <span className='mt-5 text-5xl'><FaAws /></span>

        <h1 className='font-bold text-2xl'>Web Developer</h1>
        <p className='font-serif '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sunt, delectus incidunt voluptatibus commodi recusandae corporis facere beatae excepturi, officia perferendis possimus molestiae labore nihil totam, quo atque.</p>

        <button className='bg-orange-600 hover:bg-orange-500 w-32 py-2 rounded-lg'>Check</button>
        
        </div>
        <div className='border-2 shadow-lg h-80 w-full rounded-lg flex flex-col space-y-2 items-center text-center bg-gray-50'>

        <span className='mt-5 text-5xl'><RiJavaLine />
        </span>
        <h1 className='font-bold text-2xl'>Java developer</h1>
        <p className='font-serif '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam atque quisquam blanditiis a nobis cum, modi accusamus quod odio itaque molestias labore, pariatur dolorem sequi eius quo voluptatum sapiente velit ipsam minima. Eius, fugiat nesciunt?</p>

        <button className='bg-orange-600 hover:bg-orange-500 w-32 py-2 rounded-lg'>Check</button>
        </div>
        <div className='border-2 shadow-lg h-80 w-full rounded-lg flex flex-col space-y-2 text-center  items-center bg-gray-50'>

        <span className='mt-5 text-5xl'><MdOutlineWebhook /></span>
        <h1 className='font-bold text-2xl'>Full stack Developer</h1>
        <p className='font-serif'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga eveniet consectetur odio reprehenderit doloremque vero, dolor possimus facere autem veritatis laudantium voluptate expedita inventore esse cum soluta magnam! Lorem ipsum  praesentium.</p>

        <button className='bg-orange-600 hover:bg-orange-500 w-32 py-2 rounded-lg'>Check</button>
        </div>
        
        </div>
        
        </div>
        
        
        </>)
}

export default Services;
