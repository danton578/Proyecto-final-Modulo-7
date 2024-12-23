import React, { useContext, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPaw, faBars, faSearch, faShoppingCart, faUser, faCaretDown ,faTrash } from '@fortawesome/free-solid-svg-icons'

import '../assets/Styles/main.css'
import { Link,NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Navbar = () => {

  const [visible,setVisible] = useState(false)
  const {setShowSearch, getCartCount} = useContext(CartContext)

 return (
    <div className='flex items-center justify-between py-5 font-medium'>

      <Link to= '/' style={{ color: 'green', fontSize: '3rem', textDecoration: 'none'  }}><FontAwesomeIcon icon={faPaw} />Rufito</Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>Inicio</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
        </NavLink>

         <NavLink to='/categoria' className='flex flex-col items-center gap-1'>
          <p>Categorias</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
        </NavLink>

         <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>Sobre Nosotros</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
        </NavLink>

         <NavLink to='/contacto' className='flex flex-col items-center gap-1'>
          <p>Contacto</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
        </NavLink>

      </ul>

      <div className='flex items-center gap-6'>
        <FontAwesomeIcon icon={faSearch} onClick={()=>setShowSearch(true)} className='w-5 cursor-pointer' />

        <div className='relative group'>
          <Link to='/login'><FontAwesomeIcon icon={faUser} className='w-5 cursor-pointer' /></Link>
          <div className='hidden group-hover:block absolute right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>Mi perfil</p>
              <p className='cursor-pointer hover:text-black'>Órdenes</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <Link to='/carrito' className='relative'>
          <FontAwesomeIcon icon={faShoppingCart} className='w-5 min-w-5' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>
        <FontAwesomeIcon onClick={()=>setVisible(true)} icon={faBars} className='w-5 cursor-pointer sm:hidden'/>
      </div>
        {/* menu lateral para pantallas pequeñas */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
          <div className='flex flex-col text-gray-600'>
            <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
              <FontAwesomeIcon icon={faCaretDown} className='h-4 rotate-180' />
              <p>Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>Inicio</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/categoria'>Categorias</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>Sobre Nosotros</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contacto'>Contacto</NavLink>
          </div>
        </div>
    </div>
  )
}

export default Navbar