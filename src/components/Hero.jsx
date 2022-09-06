import { robot, arrowUp, discount } from '../assets'


const GetStarted = () =>
(
  <div className='hero_getStated_stroke bg-blue-gradient'>


    <div className='hero_getStated_inside'>

      <div className='hero_getStated_content'>

        <p>
          <span className='text-gradient'>Get
          </span>
        </p>

        <img src={arrowUp} alt="more" />
      </div>

      <p>
        <span className='text-gradient'> Started
        </span></p>


    </div>
  </div>
)
const Hero = () => {

  return (

    <section id='Home' className='
    hero_container
    '>
      <div className='
     hero_base
    '>


        <div className='
      hero_left_container
      '>

          <div className='hero_discount_box'>

            <img src={discount} alt="" />

            <p >20% <span className='text-dimWhite'>DISCOUNT FOR{''}
            </span> 1 MONTH
              <span className='text-dimWhite '>ACCOUNT</span>
            </p>
          </div>

          <div className='hero_content'>

            <h1 className='h1'>
              The Next<br />
              <span className='text-gradient'>
                Generation<br />
              </span>
            </h1>
            <div className='hero_getStated '>

              <GetStarted />
            </div>
          </div>
          <div className='hero_content_last'>

            <h1>Payment Method.</h1>
            <p className='text-dimWhite'>
              Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.<br />
              We examine annual percentage rates, annual fees.
            </p>
          </div>
        </div>




        <div className='hero_right_container'>



          <img src={robot} alt='' />

          <div className=" pink__gradient"
            style={{ position: 'absolute', zIndex: '0', width: "40%", height: "35%", top: 'o' }} />
          <div className="white__gradient"
            style={{ position: 'absolute', zIndex: '1', width: "80%", height: '80%', bottom: '160px', borderRadius: '50%' }} />
          <div className="blue__gradient"
            style={{ position: 'absolute', zIndex: '0', width: "50%", height: '50%', bottom: '80px', right: "80px" }} />
        </div>
        <div style={{
          position: 'absolute',
          zIndex: '0',
          width: "195px",
          height: '195px',
          top: '252px',
          left: '65px',
          filter: 'blur(450px)',
          backgroundColor: '#fff',
        }} />

      </div>
    </section>
  )
}

export default Hero