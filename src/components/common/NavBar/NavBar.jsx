import { useState, useEffect } from 'react';
import './NavBar.scss';
import { NavLink } from 'react-router-dom';
import { HOME, CV, PROJECTS } from '../../../config/router/paths';

const NavBar = () => {
    const [color, setColor] = useState()

    const [seconds, setSeconds] = useState(null);
    const [minutes, setMinutes] = useState(null);
    const [hours, setHours] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            getTime();
        },1000)
    }, [seconds]);

    const getTime = () => {
        const date = new Date();
        const min = date.getMinutes();
        setMinutes(min < 10 ? `0${min}` : min );
        const hour = date.getHours();
        setHours(hour < 10 ? `0${hour}` : hour );
        const sec = date.getSeconds()
        setSeconds(sec < 10 ? `0${sec}` : sec );
    }

    const changeColor = (backGround) => {
        setColor(backGround);
    }

    return(
        <nav className="b-nav" style={{backgroundColor : `${color}`}}>
            <div className="b-nav__clock">
                {hours}:{minutes}:{seconds}
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