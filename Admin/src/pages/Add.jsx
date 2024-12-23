import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendURL } from '../App'


const Add = (token) => {

  const [imagen, setImagen] = useState(false)
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [precio, setPrecio] = useState('')
  const [categoria, setCategoria] = useState("Alemntacion Mascota")
  const [subcategoria, setSubcategoria] = useState("Felino")
  const [top_five, setTop_five] = useState(false)

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try{
      const formData = new FormData()

      formData.append("nombre",nombre)
      formData.append("descripcion",descripcion)
      formData.append("precio",precio)
      formData.append("categoria",categoria)
      formData.append("subcategoria",subcategoria)
      formData.append("nombre",nombre)
      formData.append("top_five",top_five)

      imagen && formData.append("imagen",imagen)

      const response = await axios.post(backendURL + '/api/product/add', formData,{headers:{token}})

      console.log(response.data)
    }catch(error){
      console.log(error)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2'>Subir Imagen</p>
        <div className='flex gap-2'>
          <label htmlFor="imagen">
            <img className='w-20' src={!imagen ? assets.upload_area : URL.createObjectURL(imagen)} alt=''/>
            <input onChange={(e)=>setImagen(e.target.files[0])} type='file' id="imagen" hidden/>
          </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Nombre Producto</p>
        <input onChange={(e)=>setNombre(e.target.value)} value={nombre} className='w-full max-w-[500px] ox-3 py-2' type='text' placeholder='ingrese nombre producto' required />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Descripcion del producto</p>
        <textarea onChange={(e)=>setDescripcion(e.target.value)} value={descripcion} className='w-full max-w-[500px] ox-3 py-2' type='text' placeholder='Descripcion del producto' required />
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

        <div>
          <p>Categoria Producto</p>
          <select onChange={(e)=>setCategoria(e.target.value)} className='w-full px-3 py-2'>
            <option value={"Alimentacion Mascota"}>Alimentacion Mascota</option>
            <option value={"Entretencion Mascota"}>Entretencion Mascota</option>
            <option value={"Higiene Mascota"}>Higiene Mascota</option>
          </select>
        </div>

        <div>
          <p>Subcategoria Producto</p>
          <select onChange={(e)=>setSubcategoria(e.target.value)} className='w-full px-3 py-2'>
            <option value={"Felinos"}>Felinos</option>
            <option value={"Canes"}>Canes</option>
            <option value={"Otros"}>Otros</option>
          </select>
        </div>

        <div>
          <p className='mb-2' >Precio Producto</p>
          <input onChange={(e)=>setPrecio(e.target.value)} value={precio} className='w-full px-3 sm:w-[120px]' type="Number" placeholder="ingrese valor del producto" required/>
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input onChange={()=> setTop_five(prev => !prev)} checked={top_five} type="checkbox" id='top_five'/>
        <label className='cursor-pointer' htmlFor='top_five'>Agregar a Top</label>
      </div>

      <button type='submit' className='w-28 py-3 mt-4 bg-green-600 text-white'>Agregar</button>
    </form>
  )
}
export default Add