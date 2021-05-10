import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className="b-nav">
            <div className="b-nav__image">
                image
            </div>
            <ul className="b-nav__menu">
                <Link className="b-nav__options"to='/about'><li className="b-nav__options">About</li></Link>
                {/* <li className="b-nav__options">Proyects</li> */}
                <Link className="b-nav__options"to='/contact'><li className="b-nav__options">Contact</li></Link>
                <Link className="b-nav__options"to='/cv'><li className="b-nav__options">CV</li></Link>
                <Link className="b-nav__options" to='/'><li >Home</li></Link>
            </ul>
            <div className="b-nav__finder">
                finder
            </div>
         
        </nav>
    )
}

export default NavBar;