import React from 'react'
import { act } from 'react-dom/test-utils'

export default function NewLetter() {
  return (
    <div className='w-full bg-[grey] p-4'>
        <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>
        <div className='m-2'>
            <h1 className='text-[20px] md:text-[40px] font-bold text-white'> want to learn latest I.T Skills? </h1>
            <span className='text-white'> 
            sign up to our newsletter and stay up to date 
            </span>
        </div>
        <div className='m-2'>
             <input type='text' className=' rounded mb-2 p-3 mr-2' placeholder='Email'/>
             <button className='bg-black text-white p-3 rounded'> Notify me</button>
    
    <p className='text-white'>
        We care about the protection of your data. Read our <br/>  <a href= " " className='text-black'> Privacy Policy </a> 
    </p> 
        </div>
        </div>
    </div>
  )
} 

