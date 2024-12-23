import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Categoria from './pages/Categoria'
import About from './pages/About'
import Contacto from './pages/Contacto'
import Product from './pages/Product'
import Carrito from './pages/Carrito'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Ordenes from './pages/Ordenes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  return (

    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9cw]'>

      <ToastContainer />
      <Navbar />
      <Searchbar />
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/categoria' element={<Categoria/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/carrito' element={<Carrito/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/orders' element={<Ordenes/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App