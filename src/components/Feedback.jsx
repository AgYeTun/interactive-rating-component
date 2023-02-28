import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Feedback = () => {
    const [rate, setRate] = useState('')

    const navigate = useNavigate()

    const [active, setActive] = useState(false)

    const handleSubmit = () => {
        setActive(!active)
        setTimeout(() => navigate(`thankyou/${rate}`), 500)
    }

  return (
    <div className={`w-[400px] h-fit bg-dark-blue p-[36px] mx-5 flex flex-col gap-3 rounded-[30px] shadow-lg ${active && 'animate__animated animate__zoomOut'}`}>
        <div className="w-12 h-12 bg-medium-grey flex justify-center items-center rounded-full mb-4">
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>
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
        <button onClick={() => rate !== '' && (handleSubmit())} className='grid bg-orange rounded-full text-white py-3 mt-5 hover:bg-white hover:text-orange tracking-widest'>SUBMIT</button>
    </div>
  )
}

export default Feedback