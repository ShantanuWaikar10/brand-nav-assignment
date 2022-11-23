import React from 'react'
import {BsCheck} from 'react-icons/bs'
import Free from '../../assets/Free.svg'
import './Pricing.css'

const Pricing = () => {
    return (
        <>
            <div className="pricing__container" id='pricing'>
                <div className="pricing__text">
                    <h1>Choose Your Plan</h1>
                    <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
                </div>
                <div className="pricing__card">
                    <div className="pricing__card__item pricing__card__item__one">
                        <img src={Free} alt="" />
                        <h2>Free Plan</h2>
                        <div className="pricing__card__item__text">
                            <BsCheck className='pricing__card__check'/>
                            <p>Unlimited Bandwitch</p>
                        </div>
                        <div className="pricing__card__item__text">
                            <BsCheck className='pricing__card__check'/>
                            <p>Encrypted Connection</p>
                        </div>
                        <div className="pricing__card__item__text">
                            <BsCheck className='pricing__card__check'/>
                            <p>No Traffic Logs</p>
                        </div>
                        <div className="pricing__card__item__text">
                            <BsCheck className='pricing__card__check'/>
                            <p>Works on All Devices</p>
                        </div>
                        <h1>Free</h1>
                        <button>Select</button>
                    </div>

                    <div className="pricing__card__item pricing__card__item__two">
                        <img src={Free} alt="" />
                        <h2>Standard Plan</h2>
                        <div className="pricing__card__item__text">
                            <BsCheck className='pricing__card__check'/>
                            <p>Unlimited Bandwitch</p>
                        </div>
                        <div className="pricing__card__item__text">
                            <BsCheck className='pricing__card__check'/>
                            <p>Encrypted Connection</p>
                        </div>
                        <div className="pricing__card__item__text">
                            <BsCheck className='pricing__card__check'/>
                            <p>Yes Traffic Logs</p>
                        </div>
                        <div className="pricing__card__item__text">
                            <BsCheck className='pricing__card__check'/>
                            <p>Works on All Devices</p>
                        </div>
                        <div className="pricing__card__item__text">
                            <BsCheck className='pricing__card__check'/>
                            <p>Connect Anyware</p>
                        </div>
                        <h1>$9 / mo</h1>
                        <button>Select</button>
                    </div>

                    <div className="pricing__card__item pricing__card__item__three">
                        <img src={Free} alt="" />
                        <h2>Premium Plan</h2>
                        <div className="pricing__card__item__text">
                            <BsCheck className='pricing__card__check'/>
                            <p>Unlimited Bandwitch</p>
                        </div>
                        <div className="pricing__card__item__text">
                            <BsCheck className='pricing__card__check'/>
                            <p>Encrypted Connection</p>
                        </div>
                        <div className="pricing__card__item__text">
                            <BsCheck className='pricing__card__check'/>
                            <p>Yes Traffic Logs</p>
                        </div>
                        <div className="pricing__card__item__text">
                            <BsCheck className='pricing__card__check'/>
                            <p>Works on All Devices</p>
                        </div>
                        <div className="pricing__card__item__text">
                            <BsCheck className='pricing__card__check'/>
                            <p>Connect Anyware</p>
                        </div>
                        <div className="pricing__card__item__text">
                            <BsCheck className='pricing__card__check'/>
                            <p>Get New Features</p>
                        </div>
                        <h1>$12 / mo</h1>
                        <button>Select</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing