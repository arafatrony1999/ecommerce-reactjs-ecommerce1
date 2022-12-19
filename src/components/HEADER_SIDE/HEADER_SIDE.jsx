import React from 'react';
import { FaAngleRight, FaAccessibleIcon, FaAdversal, FaAmazon, FaChromecast, FaBlackberry, FaJediOrder, FaLaravel, FaNeos } from "react-icons/fa";

const HEADERSIDE = () => {
    return (
        <div className='sidebar-left-top'>
            <div className="sidebar-left">
                <a href="/">
                    <div className="side-bar-link">
                        <FaAccessibleIcon className="custom-icon" />
                        <span>Great Savings</span>
                    </div>
                </a>
                <a href="/">
                    <div className="side-bar-link">
                        <FaAdversal className="custom-icon" />
                        <span>Half Price Offers</span>
                    </div>
                </a>
                <a href="/">
                    <div className="side-bar-link">
                        <FaAmazon className="custom-icon" />
                        <span>Buy1 Get1 Offers</span>
                    </div>
                </a>
                <a href="/">
                    <div className="side-bar-link">
                        <FaChromecast className="custom-icon" />
                        <span>Voucher Offers</span>
                    </div>
                </a>
                <a href="/">
                    <div className="side-bar-link">
                        <FaBlackberry className="custom-icon" />
                        <span>Our Own Products</span>
                    </div>
                </a>
                <a href="/">
                    <div className="side-bar-link">
                        <FaJediOrder className="custom-icon" />
                        <span>Fruits and Vegetables</span>
                        <span className="side-right-arrow">
                            <FaAngleRight className='side-right-arrow-icon' />
                        </span>
                    </div>
                </a>
                <a href="/">
                    <div className="side-bar-link">
                        <FaLaravel className="custom-icon" />
                        <span>Meat & Fish</span>
                        <span className="side-right-arrow">
                            <FaAngleRight className='side-right-arrow-icon' />
                        </span>
                    </div>
                </a>
                <a href="/">
                    <div className="side-bar-link">
                        <FaNeos className="custom-icon" />
                        <span>Great Savings</span>
                        <span className="side-right-arrow">
                            <FaAngleRight className='side-right-arrow-icon' />
                        </span>
                    </div>
                </a>
                <a href="/">
                    <div className="side-bar-link">
                        <FaAccessibleIcon className="custom-icon" />
                        <span>Great Savings</span>
                        <span className="side-right-arrow">
                            <FaAngleRight className='side-right-arrow-icon' />
                        </span>
                    </div>
                </a>
                <a href="/">
                    <div className="side-bar-link">
                        <FaAdversal className="custom-icon" />
                        <span>Half Price Offers</span>
                    </div>
                </a>
                <a href="/">
                    <div className="side-bar-link">
                        <FaAmazon className="custom-icon" />
                        <span>Buy1 Get1 Offers</span>
                    </div>
                </a>
                <a href="/">
                    <div className="side-bar-link">
                        <FaChromecast className="custom-icon" />
                        <span>Voucher Offers</span>
                    </div>
                </a>
                <a href="/">
                    <div className="side-bar-link">
                        <FaBlackberry className="custom-icon" />
                        <span>Our Own Products</span>
                        <span className="side-right-arrow">
                            <FaAngleRight className='side-right-arrow-icon' />
                        </span>
                    </div>
                </a>
                <a href="/">
                    <div className="side-bar-link">
                        <FaJediOrder className="custom-icon" />
                        <span>Fruits and Vegetables</span>
                        <span className="side-right-arrow">
                            <FaAngleRight className='side-right-arrow-icon' />
                        </span>
                    </div>
                </a>
                <a href="/">
                    <div className="side-bar-link">
                        <FaLaravel className="custom-icon" />
                        <span>Meat & Fish</span>
                        <span className="side-right-arrow">
                            <FaAngleRight className='side-right-arrow-icon' />
                        </span>
                    </div>
                </a>
                <a href="/">
                    <div className="side-bar-link">
                        <FaNeos className="custom-icon" />
                        <span>Great Savings</span>
                    </div>
                </a>
            </div>

            <div className="sidebar-left-bottom">
                <a href="/">
                    Coupons
                    <span>
                        <FaAngleRight className='side-right-arrow-icon' />
                    </span>
                </a>
                <a href="/">
                    Contact Us
                    <span>
                        <FaAngleRight className='side-right-arrow-icon' />
                    </span>
                </a>
                <a href="/">
                    Coupons
                    <span>
                        <FaAngleRight className='side-right-arrow-icon' />
                    </span>
                </a>
            </div>
        </div>
    );
}

export default HEADERSIDE;
