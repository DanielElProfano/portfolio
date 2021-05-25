import { useState } from 'react';
import './NavBar.scss';
import { NavLink } from 'react-router-dom';
import { HOME, CV, PROJECTS } from '../../../config/router/paths';

const NavBar = () => {
    const [color, setColor] = useState()

    const changeColor = (backGround) => {
        setColor(backGround);
    }
    return(
        <nav className="b-nav" style={{backgroundColor : `${color}`}}>
            <div className="b-nav__image">
                {/* Imgae */}
            </div>
            <ul className="b-nav__menu" >
                <NavLink 
                    exact  
                    onClick={() => changeColor("#214161")} 
                    className="b-nav__options"
                    to={HOME}
                    activeClassName="b-nav__active">
                        <li className="b-nav__options">Home</li>
                    </NavLink>
                <NavLink    
                    exact activeClassName="b-nav__active" 
                    onClick={() => changeColor("#c08a6a")} 
                    className="b-nav__options"
                    to={CV}>
                        <li className="b-nav__options">CV</li>
                </NavLink>
                <NavLink 
                    exact 
                    activeClassName="b-nav__active" 
                    onClick={() => changeColor("#3fd4af")} 
                    className="b-nav__options" 
                    to={PROJECTS}>
                        <li >Projects</li>
                </NavLink>
            </ul>
            <div className="b-nav__finder">
                {/* finder */}
            </div>
         
        </nav>
    )
}

export default NavBar;