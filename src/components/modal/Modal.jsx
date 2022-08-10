import React from 'react'

import '../modal/Modal.css'

const Modal = ({onClose = () => {}, children}) => {
  return (
    <div className='background'>
      <div className='modal'>
        <div className='content'>{children}</div>
        <div className='btns'>
          <button className='send' onClick={onClose}>Enviar</button>
          <button className='close' onClick={onClose}>Fechar</button>
        </div>  
      </div>      
    </div>
  )
}

export default Modal