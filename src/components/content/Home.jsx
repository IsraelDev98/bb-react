import React from 'react'

import './Home.css'

const Home = () => {
  return (
    <>
      <div className='container-home'>

        <div className='title-home'>
          <p>📃</p>
          <h3>Dados de Contribuição</h3>
        </div>

        <section className='left-home title'>
          <label>Participante</label>
          <h2>Ronaldo Nazário</h2>
          <p>Plano</p>
          <h3>ApexPrev</h3>
        </section>

        <section className='center-home title'>
          <label>Contribuição do Participante</label>
          <h2>R$ 750,00</h2>
          <p>Percentual normal: <span>5%</span></p>
        </section>

        <section className='right-home title'>
          <label>Contribuição da Patrocinadora</label>
          <h2>R$ 750,00</h2>
        </section>

      </div>     

      <div className='container-home'>

        <div className='title-home'>
          <img src="" alt="" />
          <h3>Alteração de Percentual</h3>
        </div>
        
      </div>     
    </>
  )
}

export default Home