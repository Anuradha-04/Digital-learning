import React from 'react'

function Plans() {
  return (
    <div className='sm:p-[100px] p-6'>
    <div className=' max-w-[1240px] mx-auto md:grid grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='shadow-xl shadow-black h-[500px] my-4 p-4 flex flex-col rounded-lg hover:scale-110 duration-100'>
            <h2 className='text-2xl font-bold text-center py-8'> Web Development</h2>
            <p className='text-center text-4xl font-bold'>$149</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>the building and maintenance of websites</p>
                <p className='py-2 border-b mx-8'> the tasks associated with creating, building</p>
                <p className='py-2 border-b mx-8'>web applications that run online on a browser</p>
            </div>
            <button className='bg-[#131347] text-white flex justify-center w-[200px] px-6 py-3 font-medium my-6 mx-auto rounded-md'>Start Trial</button>
            </div>
        <div className='shadow-xl shadow-black h-[500px]flex flex-col my-8 md:my-0 p-4 rounded-lg bg-[#dbd8d8] hover:scale-110 duration-100'>
            <h2 className='text-2xl font-bold text-center py-8'>Digital Marketing</h2>
            <p className='text-center text-4xl font-bold'>$149</p>
            <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Digital marketing, also called online marketing</p>
            <p className='py-2 border-b mx-8'> Instead of interrupting, work on attracting</p>
            <p className='py-2 border-b mx-8'>Great marketing makes the customer feel smart</p>
            </div>
            <button className='bg-black text-white flex justify-center w-[200px] px-6 py-3 font-medium my-6 mx-auto rounded-md'>Start Trial</button>
            </div>
        <div className='shadow-xl shadow-black h-[500px] flex flex-col my-4 p-4 rounded-lg hover:scale-110 duration-200'>
            <h2 className='text-2xl font-bold text-center py-8'> App Development</h2>
            <p className='text-center text-4xl font-bold'>$149</p>
            <div className='text-center font-medium'>
                <p className='text-center font-medium'>Mobile application development is the process of making </p>
                <p className='py-2 border-b mx-8'>software for smartphones, tablets and digital assistants</p>
                <p className='py-2 border-b mx-8'>most commonly for the Android and iOS operating systems </p>
            </div>
            <button className='bg-[#131347] text-white flex justify-center w-[200px] px-6 py-3 font-medium my-6 mx-auto rounded-md'>Start Trial</button>

            </div>
    </div>
    </div>
  )
}

export default Plans