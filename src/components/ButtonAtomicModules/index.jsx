import React from 'react'
import './style.css'
import { button } from '../../assets/modules'

const ButtonAtomicModules = ({children}) => (
    <button className={`${button} _utilities: bg-pink c-red`}>
        {children}        
    </button>
)

export default ButtonAtomicModules