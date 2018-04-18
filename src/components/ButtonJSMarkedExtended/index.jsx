import React from 'react'
import './style.css'
import { button } from '../../assets/modules-js-marked'

const ButtonJSMarkedExtended = ({children}) => (
    <button className={`${button} _utilities: m-bg-pink m-c-red m-pa-2`}>
        {children}        
    </button>
)

export default ButtonJSMarkedExtended