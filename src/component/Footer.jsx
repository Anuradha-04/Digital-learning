import React from 'react'
import { FaFacebookSquare , FaInstagramSquare , FaTwitterSquare ,FaGithubSquare } from "react-icons/fa";
function Footer() {
  return (
   
    <div className='max-w-[1240] bg-[grey] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white'>
        <div>
            <h1 className='w-full text-3xl font-bold text-black '> Digital Learning</h1>
            <p className='py-4'>One of the greatest benefits of digital learning is that it can help to enhance student
             accountability.</p>
           <div className='flex justify-between md:w[75%] my-6 sm:mx-16 mx-4'>
            <FaFacebookSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaTwitterSquare  size={30} />
            <FaGithubSquare size={30} />
           </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-4 '>
            <div>
                <h3 className=' font-semibold text-black'> Solutions </h3>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>
            <div>
                <h3 className='font-semibold text-black'> Support </h3>
                <ul>
                    <li className='p-2 text-sm'> Pricing </li>
                    <li className='p-2 text-sm'>Documentation</li>
                    <li className='p-2 text-sm'>Guides</li>
                    <li className='p-2 text-sm'>API Status</li>
                </ul>
            </div>
            <div>
                <h4 className='font-semibold text-black'> Company </h4>
                <ul>
                    <li className='p-2 text-sm'> About </li>
                    <li className='p-2 text-sm'> Blog </li>
                    <li className='p-2 text-sm'> Jobs </li>
                    <li className='p-2 text-sm'> Press </li>
                    <li className='p-2 text-sm'> Careers</li>
                </ul>
            </div>
            <div>
                <h5 className='font-semibold text-black'> Legal </h5>
                <ul>
                    <li className='p-2 text-sm'>Claim</li>
                    <li className='p-2 text-sm'>Policy</li>
                    <li className='p-2 text-sm'>Terms</li>
                </ul>
            </div>
        </div>
    </div>
   
  )
}

export default Footer