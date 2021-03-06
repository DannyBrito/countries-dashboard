import React from 'react'
import { srcSelectorByTheme } from '../constants/constants'
import {useHistory} from 'react-router-dom'
const NavBar = ({setLightTheme,lightTheme}) =>{

    const History = useHistory()
    
    const redirectHome = () => History.push('/')
    return(
        <div className="nav-bar">
            <div onClick={redirectHome} className="title-page">
                Where in the world?
            </div>
            <div onClick={()=>setLightTheme(prev=>!prev)} className="theme-box">
                <img className="icon" alt="" src={srcSelectorByTheme(lightTheme,'mode')}/> 
                Dark Mode
            </div>
        </div>
    )
}

export default NavBar