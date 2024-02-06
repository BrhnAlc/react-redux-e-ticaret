import React from 'react'
import { FaWindowClose } from "react-icons/fa";
import { useDispatch } from 'react-redux';

const Card = () => {
  const dispatch = useDispatch();

  return (
    <div className='w-1/3 h-full border fixed top-0 right-0 z-50 bg-white p-3'>
      <div className='flex items-center h-20 justify-between'>
        <h1 className='text-2xl '>SEPETİM</h1>
        <FaWindowClose size={25} className='cursor-pointer' onClick={()=>dispatch({type:'DRAWER' , payload:false})} />
      </div>
      </div>
  )
}

export default Card;