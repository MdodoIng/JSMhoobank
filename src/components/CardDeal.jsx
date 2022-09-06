import React from 'react'
import { card } from '../assets'

const CardDeal = () => {
  return (
    <section className='flex flex-col sm:flex-row sm:justify-between justify-center sm:mt-20 mt-10'>

      <div className='
      flex
      flex-col
      justify-center
      sm:items-start
      items-center
      sm:pb-0
      pb-9'>
        <h2 className='
        text-white
        font-semibold
        text-center
        sm:text-left
         lg:leading-[76px] md:leading-[50px] text-4xl lg:text-5xl leading-[46.8px]   '>
          Find a better card deal<br className='sm:block hidden' />
          in few easy steps.
        </h2>
        <p className='max-w-[470px]   font-normal text-dimWhite text-left leading-[30px] mt-5'>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <button className='   bg-blue-gradient   
        md:text-lg text-base md:px-6 px-5 py-3 md:py-4 font-medium text-primary md:rounded-[10px] rounded-[8px] outline-none bg-blue-gradient mt-10'>
          Get Started
        </button>
      </div>
      <div className=' flex flex-row justify-center'>
        <img src={card} alt={card} className='max-h-[455px] object-contain' />
      </div>
    </section>
  )
}

export default CardDeal