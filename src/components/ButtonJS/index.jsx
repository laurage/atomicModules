import React from 'react'
import './style.css'
import { button } from '../../assets/modules-js'

const ButtonJS = ({children}) => (
    <button className={`${button} j-bg-pink j-c-red`}>
        {children}        
    </button>
)

export default ButtonJS