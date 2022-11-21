import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import Logo from '../../assets/Logo.svg'
import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={Logo} alt="app__logo" />
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans"><a href="#about">About</a></li>
          <li className="p__opensans"><a href="#features">Features</a></li>
          <li className="p__opensans"><a href="#pricing">Pricing</a></li>
          <li className="p__opensans"><a href="#testimonials">Testimonials</a></li>
          <li className="p__opensans"><a href="#help">Help</a></li>
        </ul>
        <div className="app__navbar-login">
          <a href="#login" className="p__opensans">Sign In</a>
          <button>Sign Up</button>
        </div>
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu color="gray" fontSize={27} onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <GrClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
              <ul className="app__navbar-smallscreen_links">
                <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                <li><a href="#features" onClick={() => setToggleMenu(false)}>Features</a></li>
                <li><a href="#pricing" onClick={() => setToggleMenu(false)}>Pricing</a></li>
                <li><a href="#testimonials" onClick={() => setToggleMenu(false)}>Testimonials</a></li>
                <li><a href="#help" onClick={() => setToggleMenu(false)}>Help</a></li>
                <li><a href="#" onClick={() => setToggleMenu(false)} className="SignIn">Sign In</a></li>
                <li><button className='app__navbar-button'>Sign Up</button></li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    );
  };
  
  export default Navbar;