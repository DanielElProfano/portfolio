import { useState } from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const [color, setColor] = useState()

    const changeColor = (backGround) => {
        setColor(backGround);
        props.color(color);
    }
    return(
        <nav className="b-nav" style={{backgroundColor : `${color}`}}>
            <div className="b-nav__image">
                {/* Imgae */}
            </div>
            <ul className="b-nav__menu" >

                <Link onClick={() => changeColor("#214161")} className="b-nav__options"to='/about'><li className="b-nav__options">About</li></Link>
                <Link onClick={() => changeColor("#c08a6a")} className="b-nav__options"to='/cv'><li className="b-nav__options">CV</li></Link>
                <Link onClick={() => changeColor("#3fd4af")} className="b-nav__options" to='/'><li >Home</li></Link>
                {/* <li className="b-nav__options">Proyects</li> */}
                {/* <Link className="b-nav__options"to='/contact'><li className="b-nav__options">Contact</li></Link> */}
            </ul>
            <div className="b-nav__finder">
                {/* finder */}
            </div>
         
        </nav>
    )
}

export default NavBar;