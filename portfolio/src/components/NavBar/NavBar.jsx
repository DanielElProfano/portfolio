import './NavBar.scss';

const NavBar = () => {
    return(
        <nav className="b-nav">
            <div className="b-nav__image">
                image
            </div>
            <ul className="b-nav__menu">
                <li className="b-nav__options">About</li>
                <li className="b-nav__options">Proyects</li>
                <li className="b-nav__options">Contact</li>
                <li className="b-nav__options">CV</li>
                <li className="b-nav__options">Home</li>
            </ul>
            <div className="b-nav__finder">
                finder
            </div>
         
        </nav>
    )
}

export default NavBar;