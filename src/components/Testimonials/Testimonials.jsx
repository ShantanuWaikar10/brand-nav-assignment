import React from 'react'
import Ellipse175 from '../../assets/Ellipse175.png'
import Ellipse1751 from '../../assets/Ellipse1751.png'
import Ellipse1752 from '../../assets/Ellipse1752.png'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai'
import './Testimonials.css'

const Testimonials = () => {

    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left') {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    };

    return (
        <>
            <div className="testimonials__container" id='testimonials'>
                <div className="testimonials__text">
                    <h1>Trusted by Thousands of Happy Customer</h1>
                    <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
                </div>

                <div className="app__gallery-images">
                    <div className="app__gallery-images_container" ref={scrollRef}>

                        <div className="app__gallery-images_card">
                            <div className="img__name__location">
                                <img src={Ellipse175} alt="gallery_image" />
                                <div className="name__location">
                                    <h5>Viezh Robert</h5>
                                    <p>Warsaw, Poland</p>
                                </div>
                                <div className="rating">
                                    <p>4.5</p>
                                    <AiFillStar className='rating__icon' />
                                </div>
                            </div>
                            <p className='comment'>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
                        </div>

                        <div className="app__gallery-images_card">
                            <div className="img__name__location">
                                <img src={Ellipse1751} alt="gallery_image" />
                                <div className="name__location">
                                    <h5>Yessica Christy</h5>
                                    <p>Shanxi, China</p>
                                </div>
                                <div className="rating">
                                    <p>4.5</p>
                                    <AiFillStar className='rating__icon' />
                                </div>
                            </div>
                            <p className='comment'>“I like it because I like to travel far and still can connect with high speed.”.</p>
                        </div>

                        <div className="app__gallery-images_card">
                            <div className="img__name__location">
                                <img src={Ellipse1752} alt="gallery_image" />
                                <div className="name__location">
                                    <h5>Kim Young Jou</h5>
                                    <p>Seoul, South Korea</p>
                                </div>
                                <div className="rating">
                                    <p>4.5</p>
                                    <AiFillStar className='rating__icon' />
                                </div>
                            </div>
                            <p className='comment'>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</p>
                        </div>

                        <div className="app__gallery-images_card">
                            <div className="img__name__location">
                                <img src={Ellipse175} alt="gallery_image" />
                                <div className="name__location">
                                    <h5>Viezh Robert</h5>
                                    <p>Warsaw, Poland</p>
                                </div>
                                <div className="rating">
                                    <p>4.5</p>
                                    <AiFillStar className='rating__icon' />
                                </div>
                            </div>
                            <p className='comment'>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
                        </div>

                    </div>
                </div>
                <div className="left__right__buttons">
                    <BsArrowLeftShort className="gallery__arrow-left" onClick={() => scroll('left')} />
                    <BsArrowRightShort className="gallery__arrow-right" onClick={() => scroll('right')} />
                </div>
            </div>
        </>
    )
}

export default Testimonials