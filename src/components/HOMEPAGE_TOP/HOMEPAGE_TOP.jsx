import React from 'react';
import { FaExclamationTriangle } from "react-icons/fa";

const HOMEPAGETOP = (props) => {
    return (
        <div className='homepage-top'>

            <div className="homepage-top-titles">
                <div className="a"></div>
                <div className="a">
                    <p>{props.homepageTop}</p>
                </div>
                <div className="a b">
                    <a href="/">Show all</a>
                </div>
            </div>

            <div className="no-product">
                <span>
                    <FaExclamationTriangle className='icon-span' />
                    <span>There are no product available.</span>
                </span>
            </div>
        </div>
    );
}

export default HOMEPAGETOP;
