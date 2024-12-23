import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPaw,faPhone, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <h1 style={{ color: 'green', fontSize: '1.5rem', textDecoration: 'none'  }}><FontAwesomeIcon icon={faPaw} />Rufito</h1>
          <p className='w-full md:w-2/3 text-gray-600'>
          Tienda especializada en articulos para tu mascota, ubicada a lo largo de todo chile</p>
        </div>

        <div>
          <p className='text-x1 font font-medium mb-5'>COMPAÑIA</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li><FontAwesomeIcon icon={faArrowRight} style={{ color: 'green', fontSize: '.9rem', textDecoration: 'none'  }}/> Inicio</li>
            <li><FontAwesomeIcon icon={faArrowRight} style={{ color: 'green', fontSize: '.9rem', textDecoration: 'none'  }}/> Sobre Nosotros</li>
            <li><FontAwesomeIcon icon={faArrowRight} style={{ color: 'green', fontSize: '.9rem', textDecoration: 'none'  }}/> Despachos</li>
            <li><FontAwesomeIcon icon={faArrowRight} style={{ color: 'green', fontSize: '.9rem', textDecoration: 'none'  }}/> Politica de privacidad</li>
          </ul>
        </div>

        <div>
          <p className='text-x1 font font-medium mb-5'>Contactanos</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li><FontAwesomeIcon icon={faPhone} style={{ color: 'green', fontSize: '.9rem', textDecoration: 'none'  }}/> +569-9988-7766</li>
            <li><FontAwesomeIcon icon={faEnvelope} style={{ color: 'green', fontSize: '.9rem', textDecoration: 'none'  }}/>  contacto@rufito.cl</li>
          </ul>
        </div>
      </div>
        <div>
          <hr />
          <p className='py-5 text-sm text-center'>Copyright 2024@ Ruffito.cl - Todos los derechos reservados</p>
        </div>
    </div>
  )
}
export default Footer