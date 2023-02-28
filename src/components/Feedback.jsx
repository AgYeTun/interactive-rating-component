import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'

const Feedback = () => {
    const [rate, setRate] = useState('')

    console.log(rate);
  return (
    <div className='w-[400px] h-fit bg-dark-blue p-[36px] flex flex-col gap-3 rounded-[30px] shadow-lg'>
        <div className="w-12 h-12 bg-medium-grey flex justify-center items-center rounded-full mb-4">
            <ReactSVG src='./src/assets/images/icon-star.svg' />
        </div>
        <h1 className='text-white text-2xl'>How did we do?</h1>
        <p className='text-light-grey text-[15px]'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className="flex mt-3 justify-between">
            <div onClick={(e) => setRate(e.target.innerText)} className={`w-12 h-12 ${ rate === '1' ? ('bg-light-grey text-white') : ('bg-medium-grey text-light-grey')} flex justify-center items-center rounded-full cursor-pointer hover:bg-orange hover:text-white`}>
                1
            </div>
            <div onClick={(e) => setRate(e.target.innerText)}  className={`w-12 h-12 ${ rate === '2' ? ('bg-light-grey text-white') : ('bg-medium-grey text-light-grey')} flex justify-center items-center rounded-full cursor-pointer hover:bg-orange hover:text-white`}>
                2
            </div>
            <div onClick={(e) => setRate(e.target.innerText)}  className={`w-12 h-12 ${ rate === '3' ? ('bg-light-grey text-white') : ('bg-medium-grey text-light-grey')} flex justify-center items-center rounded-full cursor-pointer hover:bg-orange hover:text-white`}>
                3
            </div>
            <div onClick={(e) => setRate(e.target.innerText)}  className={`w-12 h-12 ${ rate === '4' ? ('bg-light-grey text-white') : ('bg-medium-grey text-light-grey')} flex justify-center items-center rounded-full cursor-pointer hover:bg-orange hover:text-white`}>
                4
            </div>
            <div onClick={(e) => setRate(e.target.innerText)}  className={`w-12 h-12 ${ rate === '5' ? ('bg-light-grey text-white') : ('bg-medium-grey text-light-grey')} flex justify-center items-center rounded-full cursor-pointer hover:bg-orange hover:text-white`}>
                5
            </div>
        </div>
        <Link to={`thankyou/${rate}`} className='grid bg-orange rounded-full text-white py-3 mt-5 hover:bg-white hover:text-orange'>
            <button className='tracking-widest'>SUBMIT</button>
        </Link>
    </div>
  )
}

export default Feedback