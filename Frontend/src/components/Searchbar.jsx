import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch,faXmark } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom'

const Searchbar = () => {

  const {search, setSearch, showSearch, setShowSearch} = useContext(CartContext)
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(()=>{
    //console.log(location.pathname)
    if (location.pathname.includes('categoria')){
      setVisible(true)
    }else {
      setVisible(false)
    }
  },[location])

  return showSearch && visible ?(
    <div className='borter-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-4 rounded-full w-3/4 sm:w-1/2'>
      <input value={search} onChange={(e) => setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type='text' placeholder='Busqueda' />
      <FontAwesomeIcon icon={faSearch} className='w-4 cursor-pointer'/>
      </div>
      <FontAwesomeIcon onClick={()=>setShowSearch(false)} icon={faXmark} className='inline w-3 cursor-pointer'/>
    </div>
  ):null
}

export default Searchbar