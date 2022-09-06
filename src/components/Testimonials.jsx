import React from 'react'
import { feedback } from '../constants/index'
import { quotes } from '../assets'

const Testimonials = () => {
  return (
    <section className='mt-40 flex items-center justify-center flex-col'>
      
        <div className='
        flex
        lg:flex-row
        flex-col
        lg:justify-between
        items-center
        lg:text-left
        text-center
        justify-center
        w-full '>

          <h2 className='  sm:pb-0 pb-9
          text-white font-semibold text-center sm:text-left lg:leading-[76px] md:leading-[50px] text-4xl lg:text-5xl leading-[46.8px] mb-3   
          
          
          '>What people are <br className='lg:block hidden'/>
          saying about us</h2>

          <p className='lg:max-w-[450px] m-auto text-lg font-normal text-dimWhite leading-[32px]'>
          Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>

        </div>

        <div className='mt-10 flex sm:flex-row flex-col sm:justify-between justify-center items-center '>

            {feedback?.map((fed, index ) => (
              <div key={index} className='w-auto px-5 min-h-[395px] relative flex items-center justify-center rounded-xl md:rounded-2xl lg:rounded-3xl feature-card'>

                <div className='flex content-center justify-center items-start flex-col  gap-10 h-[320px] relative'>

                <img src={quotes} alt={fed.name} className='h-[23px]'/>

                <p className='max-w-[290px] font-normal text-lg leading-[32px]   text-white'>
                  {fed.content}
                  </p>

                <div className='flex justify-center items-center  bottom-0'>
                  <div>

                    <img src={fed.img} alt={fed.name} className='h-12 w-12 '/>
                  </div>

                  <div className='flex flex-col ml-4'>

                    <h2 className='  text-xl font-normal leading-[32px] text-white'>
                      {fed.name}
                    </h2 >

                    <p className='font-normal   text-base text-dimWhite'>{fed.title}</p>
                  </div>

                </div>

                </div>
              </div>
            ))}
        </div>
</section>
  )
}

export default Testimonials