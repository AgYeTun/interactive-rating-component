import React from 'react'
import { useParams } from 'react-router-dom'

const Thankyou = () => {
    const {rate} = useParams()
    console.log(rate);
  return (
    <div className='text-white'>{rate}</div>
  )
}

export default Thankyou