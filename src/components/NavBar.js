import React from 'react'
import { srcSelectorByTheme } from '../constants/constants'
const NavBar = ({lightTheme}) =>{

    return(
        <div className="nav-bar">
            <div className="title-page">
                Where in the world?
            </div>
            <div className="theme-box">
                <img alt="" src={srcSelectorByTheme(lightTheme,'mode')}/> 
                Dark Mode
            </div>
        </div>
    )
}

export default NavBar