import React from 'react'

const CTA = () => {
  return (
    <section className='flex
    sm:flex-row
    flex-col
    sm:mt-20 mt-10
    lg:rounded-[10px]
    md:rounded-[8px]
    rounded-[6px]
    md:justify-between
    justify-center
    items-center
    w-full
    black-gradient
     md:p-9 p-4'>
      <div className='flex flex-col sm:items-start items-center justify-center '>

        <h2 className=' text-center sm:text-left  font-semibold text-white 
       lg:leading-[76px] md:leading-[50px] text-4xl lg:text-5xl leading-[46.8px] 
       
       '> 
        Let’s try our service now!
        </h2>

        <p className='max-w-[445px] sm:text-start text-center
        text-lg   text-dimWhite mt-4 font-normal '>
          Everything you need to accept card payments and grow your business anywhere on the planet.</p>

      </div>
        <button className='
        bg-blue-gradient md:text-lg text-base md:px-6 px-5 py-3 md:py-4 font-medium text-primary md:rounded-[10px] rounded-[8px] outline-none bg-blue-gradient sm:ml-5 mt-5'>
         
          Get Started
        </button>
    </section>
  )
}

export default CTA