import React from 'react';

import Logo from './../../assets/images/shwapno-logo.jpg';
import Cart from './../../assets/images/cart-icon.webp';
import Profile from './../../assets/images/profile.jpg';

import { FaBars } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const HEADERBOTTOM = () => {
    return (
        <section>
            <div className="header-bottom">
                <div className="header-left">
                    <div className="header-left-bar">
                        <FaBars className="bar-icon" />
                    </div>
                    <div className="header-left-logo">
                        <img src={Logo} alt="" />
                    </div>
                </div>

                <div className="header-middle">
                    <input type="text" placeholder='Search' />
                    <button>
                        <FaSearch className='search-btn' />
                    </button>
                </div>

                <div className="header-right">
                    <img className='cart-img' src={Cart} alt="" />
                    <label htmlFor="" className="cart-item-count">0</label>
                    <span>Orders</span>
                    <div className="a-stick"></div>
                    <FaAngleRight className='right-angle' />
                    <img className='profile-img' src={Profile} alt="" />
                </div>
            </div>
        </section>
    );
}

export default HEADERBOTTOM;
