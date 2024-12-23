import React from 'react'
import { NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCirclePlus, faFileAlt} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

        <NavLink to='/add' className={'flex items-center border border-gray-300 border-r-0 px-3 py-2 rounded-l'}>
          <p><FontAwesomeIcon icon={faCirclePlus} className='w-5 h-5 text-green-600 font-thin'/> Agregar items </p>
        </NavLink>
        
        <NavLink to='/list' className={'flex items-center border border-gray-300 border-r-0 px-3 py-2 rounded-l'}>
          <p><FontAwesomeIcon icon={faFileAlt} className='w-5 h-5 text-green-600 font-thin'/> List Items </p>
        </NavLink>

        <NavLink to='/orders' className={'flex items-center border border-gray-300 border-r-0 px-3 py-2 rounded-l'}>
          <p><FontAwesomeIcon icon={faFileAlt} className='w-5 h-5 text-green-600 font-thin'/> Orders </p>
        </NavLink>

      </div>
    </div>
  )
}

export default Sidebar