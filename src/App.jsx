import React from 'react'
import './components/style.css'
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from './components'

const App = () => (

  <div className=' App_Container '>

    <div className='App_nav_Container
    '>
      <div className="
      App_nav_base
      " >

        <Navbar />
      </div>
    </div>

    <div className='App_hero_Container '>
      <div className="
     App_hero_base">
        <Hero />
      </div>
    </div>

    <div className="App_Topic_Container
    ">
      <div className="App_Topic_base">

        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
      </div>
    </div>
    <div className='App_footer_Container'>
      <Footer />
    </div>

  </div>


)

export default App