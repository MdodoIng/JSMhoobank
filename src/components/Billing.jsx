import React from 'react'
import { bill, apple, google } from '../assets'

const Billing = () => {
  return (
    <section className='flex sm:flex-row items-center flex-col-reverse sm:mt-20 mt-10 justify-between z-10 '>

      <div className='flex-1 flex sm:justify-start
      items-center justify-center sm:pt-0 pt-3'>
        <img src={bill} alt={bill} className='max-h-[455px] h-[100%]'/>

      </div>

      <div className="absolute z-[0] w-[482px] h-[615px] -left-[127px] top-[1380px] rounded-full bloom-Gradient" />

      <div className="absolute z-[0]  top-[1892px] w-[405px] left-[43px] h-[471px] rounded-full white__gradient" />

      <div className="absolute z-[0] w-[345px] h-[514px] left-[69px] top-[2231px] bottom-0 rounded-full pink__gradient" />


      <div className='flex-1 flex justify-center flex-col flex-wrap content-end'>


        <div className='flex
        flex-col
        sm:items-start
        items-center

        '>
        <h2 className='  
        text-center sm:text-left
        font-semibold 
        text-white
        lg:leading-[76px] md:leading-[50px] text-4xl lg:text-5xl leading-[46.8px]  
        '>
        Easily control your <br/>
        billing & invoicing.
        </h2>

        <p className='text-center
        font-normal
      text-dimWhite
        text-[18px]
        leading-[30.8px]
        max-w-[470px]
        mt-5 sm:pb-0 pb-9
        sm:text-left'>

       Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className='flex sm:pb-0 pb-3 sm:gap-6 gap-3 sm:mt-6 mt-3 flex-wrap flex-row w-auto justify-around' >
          <a href={apple}>
            <img src={apple} alt='app store' />
          </a>
          <a href={apple}>
            <img src={google} alt='play store' />
          </a>
        
        </div>
        </div>
      </div>
    </section>
  )
}
export default Billing