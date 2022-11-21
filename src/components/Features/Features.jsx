import React from 'react'
import Illustration2 from '../../assets/Illustration2.svg'
import Group1120 from '../../assets/Group1120.svg'
import './Features.css'

const Features = () => {
  return (
    <div className='features__container' id='features'>
      <div className="features__container__img">
        <img src={Illustration2} alt="" />
      </div>
      <div className="features__texts">
        <h2>We Provide Many Features You Can Use</h2>
        <p className='features__texts__p'>You can explore the features that we provide with fun and have their own functions each feature.</p>
        <div className="icon__text">
          <img src={Group1120} alt="" />
          <p>Powerfull online protection.</p>
        </div>
        <div className="icon__text">
          <img src={Group1120} alt="" />
          <p>Internet without borders.</p>
        </div>
        <div className="icon__text">
          <img src={Group1120} alt="" />
          <p>Supercharged VPN</p>
        </div>
        <div className="icon__text">
          <img src={Group1120} alt="" />
          <p>No specific time limits.</p>
        </div>
      </div>
    </div>
  )
}

export default Features