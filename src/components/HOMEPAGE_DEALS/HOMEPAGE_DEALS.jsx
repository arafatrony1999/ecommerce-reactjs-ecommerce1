import React from 'react';
import Slider from "react-slick";
import deal1 from './../../assets/images/deal1.jpg';
import deal2 from './../../assets/images/deal2.jpg';
import deal3 from './../../assets/images/deal3.jpg';
import deal4 from './../../assets/images/deal4.jpg';

const HOMEPAGEDEALS = () => {
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        appendDots: dots => (
          <div style={{ display : "none" }}></div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    };

    
    return (
        <>
            <div className="deals-container">
                <h4>Deals of the day</h4>

                <div className="deals-carousel">
                    <div>
                        <Slider {...settings}>
                            <a href='/'>
                                <img className='deal-images' src={deal1} alt="" />
                            </a>
                            <a href='/'>
                                <img className='deal-images' src={deal2} alt="" />
                            </a>
                            <a href='/'>
                                <img className='deal-images' src={deal3} alt="" />
                            </a>
                            <a href='/'>
                                <img className='deal-images' src={deal4} alt="" />
                            </a>
                            <div>
                                <img className='deal-images' src={deal4} alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>

                <div className="marquee">
                    <span>
                        * All prices are approximate. Products will be delivered at current store/body price & availability.
                        For any changes, you will get a call from 16469 before delivery.
                        Please place your complaints (if any) within 24hrs of receiving your delivery. 
                    </span>
                </div>

                <div className="divider"></div>

            </div>
        </>
    );
}

export default HOMEPAGEDEALS;
