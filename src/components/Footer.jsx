import { footerLinks, socialMedia } from '../constants/index'
import { logo }from '../assets'

const Footer = () => {
  return (
    <section className='
    md:p-10 p-3
    mt-20
    flex items-center justify-center
    flex-col 
    w-full' 
    
    style={{background: 'rgba(11, 10, 12, 0.6)'}}
    >


      <div className='flex flex-col w-full md:flex-row justify-between items-center'>

      <div className='flex sm:justify-center md:items-start  items-center text-center md:text-left flex-col md:w-2/5'>
          <img src={logo} alt="logo" className='md:h-[72px] h-12  object-contain'/>
          

          <p className='  text-lg font-normal text-[#ffffff70] sm:leading-[32px] py-5'>
          A new way to make the payments<br className='md:block hidden'/> easy, reliable and secure.
          </p>
      </div>

      <div className='flex flex-row  items-start justify-evenly w-full flex-wrap md:w-full'> 
        {footerLinks.map((com, index) =>(
          <div key={com.title} className='flex flex-col sm:justify-start  min-w-[150px] '>

          <h2 className='text-white font-semibold text-lg leading-[27px] '>
            {com.title}
          </h2>

          <ul className='list-none text-dimWhite mt-2 '>
            {com.links.map((l) => (
                <li key={l.link} className='py-1 hover:text-teal-50'>
              <a href={l}>
                  {l.name}
                </a> </li> ))} </ul> 

          </div>
        ))}
      </div>
      </div>

      <div className='w-full sm:my-6 my-3 border h-0 border-[#3F3E45]' />
      <div className='flex sm:flex-row flex-col items-center  w-full justify-between sm:px-10 px-0'>
        <div>
          <p className='  text-dimWhite text-xs sm:text-lg mb-3 sm:mb-0'>
            Copyright Ⓒ 2022 HooBank. All Rights Reserved.</p>
        </div>
        <div className='flex flex-row justify-between items-center gap-4 ' >
              {socialMedia.map((media, index) => (
              <a key={index} href={media.link}>
                  <img src={media.icon} alt={media.id} className='sm:w-5 w-3 object-contain'/></a>
              )) }
        </div>
      </div>
    </section>
  )
}

export default Footer