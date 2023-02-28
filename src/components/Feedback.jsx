import React from 'react'
import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'

const Feedback = () => {
  return (
    <div className='w-[400px] h-fit bg-dark-blue p-[36px] flex flex-col gap-3 rounded-[30px] shadow-lg'>
        <div className="w-12 h-12 bg-medium-grey flex justify-center items-center rounded-full mb-4">
            <ReactSVG src='./src/assets/images/icon-star.svg' />
        </div>
        <h1 className='text-white text-2xl'>How did we do?</h1>
        <p className='text-light-grey text-[15px]'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className="flex mt-3 justify-between">
            <div className="w-12 h-12 bg-medium-grey flex justify-center items-center rounded-full text-light-grey cursor-pointer hover:bg-orange hover:text-white">
                1
            </div>
            <div className="w-12 h-12 bg-medium-grey flex justify-center items-center rounded-full text-light-grey cursor-pointer hover:bg-orange hover:text-white">
                2
            </div>
            <div className="w-12 h-12 bg-medium-grey flex justify-center items-center rounded-full text-light-grey cursor-pointer hover:bg-orange hover:text-white">
                3
            </div>
            <div className="w-12 h-12 bg-medium-grey flex justify-center items-center rounded-full text-light-grey cursor-pointer hover:bg-orange hover:text-white">
                4
            </div>
            <div className="w-12 h-12 bg-medium-grey flex justify-center items-center rounded-full text-light-grey cursor-pointer hover:bg-orange hover:text-white">
                5
            </div>
        </div>
        <Link to={'thankyou/'} className='grid bg-orange rounded-full text-white py-3 mt-5 hover:bg-white hover:text-orange'>
            <button className='tracking-widest'>SUBMIT</button>
        </Link>
    </div>
  )
}

export default Feedback