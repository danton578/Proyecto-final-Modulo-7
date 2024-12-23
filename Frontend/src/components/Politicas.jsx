import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faExchange, faCertificate , faHandsHelping } from '@fortawesome/free-solid-svg-icons'
<FontAwesomeIcon icon={faHandsHelping} />
const Politicas = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

      <div>
       <FontAwesomeIcon icon={faExchange} className='w-12 m-auto mb-5' />
       <p>Garantia</p>
       <p className='text-gray-400'>Ofrecemos garantia extendida a nuestros productos</p>
      </div>

      <div>
       <FontAwesomeIcon icon={faCertificate} className='w-12 m-auto mb-5' />
       <p>Calidad Certificada</p>
       <p className='text-gray-400'>productos certificados por autoridades locales</p>
      </div>

      <div>
       <FontAwesomeIcon icon={faHandsHelping} className='w-12 m-auto mb-5' />
       <p>Soporte al Cliente</p>
       <p className='text-gray-400'>contamos con personal calificado para apoyarlo</p>
      </div>

    </div>
  )
}

export default Politicas