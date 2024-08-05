import React, { useState } from 'react'

function Navbar() {


    const [brandName , setbrandName] = useState("Balram Tiwari");



  return (
    <div className='flex h-16 justify-between border items-center bg-gray-100 shadow-md'>

    <div className='mx-3 text-2xl font-bold'>{brandName}</div>
    <div className='flex space-x-3'>

    <a className='cursor-pointer hover:text-orange-600' href='/'>Home</a>
    <a className='cursor-pointer hover:text-orange-600' href='/About'>About</a>
    <a className='cursor-pointer hover:text-orange-600' href='/Contact'>Contact</a>
    <a className='cursor-pointer hover:text-orange-600' href='/Skill'>Skill</a>
    <a className='cursor-pointer hover:text-orange-600' href='/portfolio'>portfolio</a>

    
    </div>

    <div><button className='mx-2 bg-orange-600 rounded-md cursor-pointer hover:bg-orange-500 px-2 py-1'>hire me</button></div>

      
    </div>
  )
}

export default Navbar
