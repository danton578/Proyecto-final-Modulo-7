import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/img'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2x1 text-center pt-8 border-t'>
        < Title text1={'SOBRE'} text2={' NOSOTROS'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.perritos_jugando} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore quo quidem ipsam dolores architecto? Laboriosam libero quas odit veniam porro explicabo sed eveniet! Dolores, reiciendis. Ad eum repellat tempore!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, repudiandae pariatur minus deleniti perspiciatis numquam placeat alias beatae voluptatibus quo excepturi asperiores ducimus iure ipsum nemo voluptate amet iste ipsa!</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About