import React from 'react';
import { FaRegCompass, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";

const HOMEPAGECATAGORIES = (props) => {

    var settings = {
        infinite: false,
        speed: 500,
        arrows: true,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
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
    }



    return (
        <div>
            <div className="catagories-title">
                <h3>
                    <span>
                        <FaRegCompass />
                    </span>
                    <span>{props.title}</span>
                    <span>
                        <FaAngleRight />
                    </span>
                </h3>
            </div>

            <div className="catagories-carousel">
                <div>
                    <Slider {...settings}>
                        {
                            props.items.map((item) => {
                                return(
                                    <a href='/' className='catagories-items'>
                                        <div className="catagories-card">
                                            <div className="catagories-image">
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className="catagories-name">
                                                <span>{item.title}</span>
                                            </div>
                                        </div>
                                    </a>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>

            <div className="divider"></div>

        </div>
    );
}

export default HOMEPAGECATAGORIES;
