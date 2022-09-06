import React from 'react'
import { stats } from '../constants/index'
import line from '../assets/Line 2.png'

const Stats = () => (

  <section className='stats_container'>

    {stats?.map((sta, index) => (

      <div key={sta.id} className='stats_base'>
        <ul className='stats_listing' >

          <h2 className='stats_listing-h2'>{sta.value}</h2>
          {' '} <span className='stats_listing-span text-gradient'> {sta.title}</span>

          <img src={line} alt='' className={`
            ${index === stats.length - 1 ? 'hidden ' : 'ld:inline-flex hidden'} ml-3 `} />
        </ul>

      </div>
    ))}
  </section>
)
export default Stats