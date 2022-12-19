import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-top">
                    <ul>
                        <li>
                            <a href="/">Our Outlets</a>
                        </li>

                        <li>
                            <a href="/">Terms & Conditions</a>
                        </li>

                        <li>
                            <a href="/">About Us</a>
                        </li>

                        <li>
                            <a href="/">Help</a>
                        </li>

                        <li>
                            <a href="/">Career</a>
                        </li>

                        <li>
                            <a href="/">Sitemap</a>
                        </li>

                        <li>
                            <a href="/">Become an Investor</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-middle">
                    <h6>POPULAR SEARCHES</h6>
                    <div className="popular-search">
                        <ul>
                            <li><a href="/">Our Own Products</a><span>|</span></li>
                            <li><a href="/">Cooking Essentials</a><span>|</span></li>
                            <li><a href="/">Rice</a><span>|</span></li>
                            <li><a href="/">Oil</a><span>|</span></li>
                            <li><a href="/">Flour</a><span>|</span></li>
                            <li><a href="/">Vegetables</a><span>|</span></li>
                            <li><a href="/">Fruites</a><span>|</span></li>
                            <li><a href="/">Meal</a><span>|</span></li>
                            <li><a href="/">Candu</a><span>|</span></li>
                            <li><a href="/">Our Own Products</a><span>|</span></li>
                            <li><a href="/">Cooking Essentials</a><span>|</span></li>
                            <li><a href="/">Rice</a><span>|</span></li>
                            <li><a href="/">Oil</a><span>|</span></li>
                            <li><a href="/">Flour</a><span>|</span></li>
                            <li><a href="/">Vegetables</a><span>|</span></li>
                            <li><a href="/">Fruites</a><span>|</span></li>
                            <li><a href="/">Meal</a><span>|</span></li>
                            <li><a href="/">Candu</a><span>|</span></li>
                            <li><a href="/">Our Own Products</a><span>|</span></li>
                            <li><a href="/">Cooking Essentials</a><span>|</span></li>
                            <li><a href="/">Rice</a><span>|</span></li>
                            <li><a href="/">Oil</a><span>|</span></li>
                            <li><a href="/">Flour</a><span>|</span></li>
                            <li><a href="/">Vegetables</a><span>|</span></li>
                            <li><a href="/">Fruites</a><span>|</span></li>
                            <li><a href="/">Meal</a><span>|</span></li>
                            <li><a href="/">Candu</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        © shwapno.com 2020 All Rights Reserved
                    </div>
                    <div className="footer-social">
                        <label htmlFor="Follow Us">Follow Us : </label>
                        <a href="/" className='link-fa'>
                            <FaFacebookF style={{color: "white"}} />
                        </a>
                        <a href="/" className='link-in'>
                            <FaInstagram style={{color: "white"}} />
                        </a>
                        <a href="/" className='link-yo'>
                            <FaYoutube style={{color: "white"}} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
