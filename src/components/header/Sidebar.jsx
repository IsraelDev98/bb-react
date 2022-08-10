import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../img/bb.png'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='container'>
            <a className='logo' href="/"><img src={Logo} alt="" /></a>
            <ul className='list-container'>
                <li className='item-container'>    
                   {/* Os links se conectam aos Routes */}
                    <Link to='/'>
                        <h3>Meu plano</h3>
                    </Link>
                </li>
                <li className='item-container'>       
                    <Link to='/contribuicao'>
                        <h3>Contribuição</h3>
                    </Link>
                </li>
                <li className='item-container'>       
                    <Link to='/previdencia'>
                        <h3>BB Previdência</h3>
                    </Link>
                </li>
                <li className='item-container'>       
                    <Link to='/utilidades'>
                        <h3>Utilidades</h3>
                    </Link>  
                </li>
            </ul>
            
        </div>
    )
}

export default Sidebar