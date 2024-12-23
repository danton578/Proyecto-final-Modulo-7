import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Categoria = () => {
  const {products, search, showSearch} = useContext(CartContext)
  const [showFilter, setShowFilter] = useState(true);
  const [filterProducts,setFilterProducts] = useState([])
  const [category,setCategory] = useState([])
  const [subcategory,setSubCategory] = useState([])
  const [sortType,setSortType] = useState([])

  const toggleCategory = (e) =>{
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev=> [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) =>{
    if(subcategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev=> [...prev,e.target.value])
    }
  }

  const applyFilter = () =>{
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.nombre.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.categoria))
    }
    if(subcategory.length > 0){
      productsCopy = productsCopy.filter(item => subcategory.includes(item.subcategoria))
    }

    setFilterProducts(productsCopy)

  }

  const sortProduct = () => {
    let fpcopy = filterProducts.slice();

    switch (sortType){
      case 'low-high':
        setFilterProducts(fpcopy.sort((a,b)=>(a.precio - b.precio)));
        break;
      case 'high-low':
        setFilterProducts(fpcopy.sort((a,b)=>(b.precio - a.precio)));
        break
      default:
        applyFilter();
        break;
    }
  }


  useEffect(() => {
    setFilterProducts(products)
  },[])

  useEffect(() => {
    applyFilter()
  },[category,subcategory, search, showSearch])

  useEffect(() => {
    sortProduct()
  },[sortType])

sortType

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/*Opciones de filtro */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-x1 flex items-center cursor-pointer gap-2'>FILTROS
          < FontAwesomeIcon icon={faCaretDown} className={`h-3 sm:hidden ${showFilter ? 'rotate-90':''}`} />
        </p>
        {/*FILTRO DE CATEGORIA */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIAS</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Alimentacion Mascotas'} onChange={toggleCategory} /> Alimentacion
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Higiene Mascotas'} onChange={toggleCategory}/> Higiene Mascotas
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Entretencion Mascotas'} onChange={toggleCategory}/> Entretencion Mascotas
            </p>
          </div>
        </div>
        {/*SUBCATEGORIA FILTRO */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>ESPECIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Felinos'} onChange={toggleSubCategory}/> Felinos
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Canes'} onChange={toggleSubCategory}/> Canes
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Otros'} onChange={toggleSubCategory}/> Otros
            </p>
          </div>
        </div>
      </div>

      {/* LADO DERECHO*/}

      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'CATEGORIAS'} text2={' COMPLETAS'}/>
          {/*ORDEN DE PRODUCTOS */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Orden por: Relevancia</option>
            <option value="low-high">Ordenar por: Menos a Mas</option>
            <option value="high-low">Ordenar por: Mas a Menos</option>
          </select>
        </div>
        {/*MAPEO DE PRODUCTOS */}

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} nombre={item.nombre} id={item._id} precio={item.precio} imagen={item.imagen}/>
            ))
          }
        </div>

      </div>

    </div>
  )
}

export default Categoria