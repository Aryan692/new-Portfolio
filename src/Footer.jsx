import React from 'react';



const Footer = () =>{

    return (<>
        
        <div className='main-container flex h-20 border mt-12 justify-around items-center bg-gray-100'>
        
        <div className='flex gap-4'>
        <p>@2024 Balram Tiwari</p>
        <span>All Rights Researved</span>
        </div>


        <div className='flex space-x-3'>

        <a className='hover:text-orange-500 cursor-pointer hover:underline' href="/about">About</a>
        <a className='hover:text-orange-500 cursor-pointer hover:underline' href="/privcy">Privacy policy</a>
        <a className='hover:text-orange-500 cursor-pointer hover:underline' href="/licensing">Licensing</a>
        <a className='hover:text-orange-500 cursor-pointer hover:underline' href="/contact">Contact</a>
        
        </div>
        
        </div>
        
        </>)
}

export default Footer;