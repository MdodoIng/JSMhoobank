import React from 'react'
import { features } from '../constants/index'

const Business = () => {
  return (
    <section id='' className='bens_container'>

      <div className='bens_leftM'>
        <div className='bens_left-inline'>


          <h2>
            You do the business,<br/>
            we’ll handle the money.
          </h2>


          <p className='text-dimWhite'>
            With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
          </p>

          <button className='bg-blue-gradient'>Get Started</button>
        </div>
      </div>




      <div className='

      flex
      lg:items-end
      md:items-start
      lg:flex-col
      sm:flex-row
      flex-col
      '>

        {features?.map((fe, index) => (


          <div key={index} className={`
          flex
          lg:flex-col
          justify-between
            items-center
            hover:bg-gradient-to-b
            to-[#ffffff00]
            from-[#14101D]
            sm:rounded-[20px]
            rounded-2xl

              ${index !== features.length - 1 ? "mb-6" : 'mb-0'}`}>

            <div className='
              text-center
              lg:flex-left
              flex
              flex-col
              items-center
              lg:flex-row
              sm:p-6 p-4
              w-full'>

              <div className='bg-[#09977C1A]
              flex items-center justify-center rounded-[50%] sm:h-16 sm:w-16 h-12 w-12 '>

                <img src={fe.icon} alt={fe.id} className=' w-[50%] ' />
              </div>

              <div className='flex flex-col sm:px-3 sm:py-0 gap-2 py-4 '>
                <h4 className='text-white   sm:text-lg text-base font-semibold'>
                  {fe.title}
                </h4>
                <p className='text-white   sm:text-base text-sm font-normal max-w-[366px]'>
                  {fe.content}
                </p>
              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Business