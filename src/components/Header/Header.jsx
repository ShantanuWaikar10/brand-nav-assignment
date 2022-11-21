import React from 'react'
import Navbar from '../Navbar/Navbar'
import Illustration from '../../assets/Illustration1.svg'
import Group1215 from '../../assets/Group1215.svg'
import Group1216 from '../../assets/Group1216.svg'
import Group1217 from '../../assets/Group1217.svg'

import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="app__header app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
          <h1 className="app__header-h1">Want anything to be easy with <span>LaslesVPN.</span></h1>
          <p>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us. </p>
          <button type="button" className="custom__button">Get Started</button>
        </div>

        <div className="app__wrapper_img">
          <img src={Illustration} alt="header_img" />
        </div>
      </div>
      <div className='header-foot'>
        <div className="header-foot-items">
          <div className='img_background'>
            <img src={Group1216} alt="" />
          </div>
          <div className="header-foot-item">
            <h2>90+</h2>
            <p>Users</p>
          </div>
        </div>

        <div className='verticle-line' />

        <div className="header-foot-items">
          <div className='img_background'>
            <img src={Group1215} alt="" />
          </div>
          <div className="header-foot-item">
            <h2>30+</h2>
            <p>Locations</p>
          </div>
        </div>

        <div className='verticle-line' />

        <div className="header-foot-items">
          <div className='img_background'>
            <img src={Group1217} alt="" />
          </div>
          <div className="header-foot-item">
            <h2>50+</h2>
            <p>Servers</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header