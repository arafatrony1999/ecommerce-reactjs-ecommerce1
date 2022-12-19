import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HOMEPAGECAROUSEL = (props) => {
    return (
        <>
            <div className="homepage-carousel">
                <Carousel>
                    {
                        props.items.map((item) => {
                            return(
                                <Carousel.Item>
                                    <img className="d-block w-100" src={item} alt="First slide" />
                                </Carousel.Item>)
                        })
                    }
                </Carousel>
            </div>

            <div className="divider"></div>
        </>
    );
}

export default HOMEPAGECAROUSEL;
