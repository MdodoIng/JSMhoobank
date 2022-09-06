import { clients } from '../constants/index'

const Clients = props => {
  return (
    <section className='flex flex-row mt-20 items-center justify-center'>
      <div className=' flex w-full justify-around items-center flex-wrap'>

        {clients.map((cli, index) => (
          <div key={cli.id} className='flex items-center m-5 min-w-[120px] cursor-pointer'>
            <img src={cli.logo} className='w-[100px]'/>
          </div>
          
        ))}

      </div>
    </section>
  )
}

export default Clients