import React, { useState ,useEffect} from 'react'
import { MdOutlineLightbulb } from "react-icons/md";
import { FaShoppingBasket } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { useDispatch } from 'react-redux';


const Navbar = () => {

  const [darkMode, setDarkMode] = useState(false);
  const dispatch =useDispatch()  
  useEffect(() => {
    const root =document.getElementById('root');
    if(darkMode){
      root.style.backgroundColor="black";
      root.style.color="gray";
    }else{
      root.style.backgroundColor="white";
      root.style.color="black";
    }
    
  }, [darkMode])
  
  return (
    <div className='flex justify-between items-center px-3 h-32'>
        <div className='text-2xl font-bold tracking-wider'>LOGO</div>    
        <div className='flex justify-between items-center space-x-4'>
           <input type="text"  placeholder='serach' className='border p-3 outline-none rounded-lg'/>
           <div onClick={()=>setDarkMode(!darkMode)}>
           {
          darkMode ? <FaMoon /> :<MdOutlineLightbulb size={25} className='cursor-pointer'/>
           }
           </div>
           
       <div className='relative' onClick={()=>dispatch({type:'DRAWER',payload:true})}>
       <FaShoppingBasket size={25} className='cursor-pointer' />
       <span className='absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-sm'>3</span>
       </div>
        </div>
    </div>
  )
}

export default Navbar;