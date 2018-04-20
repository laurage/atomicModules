import React from 'react'
import './style.css'
import { button } from '../../assets/modules-js-marked-extended'

const ButtonJSMarkedExtended = ({children}) => (
    <button className={`${button} _utilities: e-bg-pink e-c-red`}>
        {children}        
    </button>
)

export default ButtonJSMarkedExtended