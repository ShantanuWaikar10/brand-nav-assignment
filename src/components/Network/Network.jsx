import React from 'react'
import HugeGlobal from '../../assets/HugeGlobal.svg'
import MaskGroup from '../../assets/MaskGroup.svg'
import MaskGroup1 from '../../assets/MaskGroup1.svg'
import MaskGroup2 from '../../assets/MaskGroup2.svg'
import MaskGroup3 from '../../assets/MaskGroup3.svg'
import MaskGroup4 from '../../assets/MaskGroup4.svg'
import './Network.css'

const Network = () => {
    return (
        <>
            <div className="network__container">
                <div className="network__text">
                    <h1>Huge Global Network of Fast VPN</h1>
                    <p>See LaslesVPN everywhere to make it easier for you when you move locations.</p>
                </div>
                <img className="network__container__img" src={HugeGlobal} alt="" />
                <div className="network__company">
                    <img src={MaskGroup} alt="" />
                    <img src={MaskGroup1} alt="" />
                    <img src={MaskGroup2} alt="" />
                    <img src={MaskGroup3} alt="" />
                    <img src={MaskGroup4} alt="" />
                </div>
            </div>
        </>
    )
}

export default Network