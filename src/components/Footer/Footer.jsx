import React from 'react'
import './Footer.css'
import Logo from '../../assets/Logo.svg'
import Twitter from '../../assets/Twitter.svg'
import Facebook from '../../assets/Facebook.svg'
import Instagram from '../../assets/Instagram.svg'

const Footer = () => {
  return (
    <>
        <div className="footer__container">
            <div className="footer__container__left">
                <img src={Logo} alt="" />
                <p>LaslesVPN is a private virtual network that has unique features and has high security.</p>
                <div className="footer__container__left__socials">
                  <img src={Facebook} alt="" />
                  <img src={Twitter} alt="" />
                  <img src={Instagram} alt="" />
                </div>
                <p>&copy;2020LaslesVPN</p>
            </div>
            <div className="footer__container__right">
              <div className="footer__container__right__product footer__container__right__all">
                <h3>Product</h3>
                <p>Download</p>
                <p>Pricing</p>
                <p>Locations</p>
                <p>Server</p>
                <p>Countries</p>
                <p>Blog</p>
              </div>
              <div className="footer__container__right__Engage footer__container__right__all">
                <h3>Engage?</h3>
                <p>LaslesVPN ?</p>
                <p>FAQ</p>
                <p>Tutorials</p>
                <p>About Us</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Blog</p>
              </div>
              <div className="footer__container__right__EarnMoney footer__container__right__all">
                <h3>Earn Money</h3>
                <p>Affiliate</p>
                <p>Become Partner</p>
              </div>
            </div>
        </div>
    </>
  )
}

export default Footer