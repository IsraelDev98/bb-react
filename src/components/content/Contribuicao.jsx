import React from 'react'
import { useState } from 'react'

import Modal from '../modal/Modal';

import Person from '../img/person.webp'
import '../content/Contribuicao.css'

const Contribuicao = () => {
  //state hook para abrir ou fechar o modal 
  const [modal, setModal] = useState(false)

  return (
    <div className='plano'>
        <div className='top'>
            <h2>Gerenciar Contribuições</h2>
            <button className='btn' onClick={() => setModal(true)}>Nova Contribuição</button>
            {/* Envia o a função de mudança de state para fechar o modal quando o botão for clicado*/}
            {modal ? (
              <Modal onClose={() => setModal(false)}>
                <label>Valor da contribuição</label>
                <span>R$ 0,0</span>
              </Modal>
            ) : null}
        </div>
        <div className='bottom'>
            <img src={Person} alt="" />
            <h3>Você ainda não fez nenhuma contribuição.</h3>
            <button className='btn'>Fazer uma contribuição</button>
        </div>
    </div>
  )
}

export default Contribuicao