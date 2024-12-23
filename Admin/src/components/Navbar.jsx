import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPaw} from '@fortawesome/free-solid-svg-icons'

const Navbar = ({setToken}) => {

  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <h1 style={{ color: 'green', fontSize: '3rem', textDecoration: 'none'  }}><FontAwesomeIcon icon={faPaw} />Rufito</h1>
      <button onClick={()=>setToken('')} className='bg-green-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>logout</button>
    </div>
  )
}

export default Navbar