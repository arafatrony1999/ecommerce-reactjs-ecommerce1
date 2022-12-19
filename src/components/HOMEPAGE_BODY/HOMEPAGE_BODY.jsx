import React from 'react';
import HOMEPAGECAROUSEL from '../HOMEPAGE_CAROUSEL/HOMEPAGE_CAROUSEL';
import HOMEPAGECATAGORIES from '../HOMEPAGE_CATAGORIES/HOMEPAGE_CATAGORIES';
import HOMEPAGEDEALS from '../HOMEPAGE_DEALS/HOMEPAGE_DEALS';
import HOMEPAGETOP from '../HOMEPAGE_TOP/HOMEPAGE_TOP';

import catagory1 from './../../assets/images/catagory1.jpg';
import catagory2 from './../../assets/images/catagory2.jpg';
import catagory3 from './../../assets/images/catagory3.jpg';
import catagory4 from './../../assets/images/catagory4.jpg';
import catagory5 from './../../assets/images/catagory5.jpg';
import catagory6 from './../../assets/images/catagory6.jpg';
import catagory7 from './../../assets/images/catagory7.jpg';

import top1 from './../../assets/images/top1.jpg';
import top2 from './../../assets/images/top2.jpg';
import top3 from './../../assets/images/top3.jpg';
import top4 from './../../assets/images/top4.jpg';
import top5 from './../../assets/images/top5.jpg';
import top6 from './../../assets/images/top6.jpg';
import top7 from './../../assets/images/top7.jpg';

import banner1 from './../../assets/images/banner1.jpg';
import banner2 from './../../assets/images/banner2.jpg';
import banner3 from './../../assets/images/banner3.jpg';
import banner4 from './../../assets/images/banner4.jpg';
import banner5 from './../../assets/images/banner5.jpg';
import banner6 from './../../assets/images/banner6.jpg';
import banner7 from './../../assets/images/banner7.jpg';
import banner8 from './../../assets/images/banner8.jpg';
import Footer from '../../layouts/Footer';

const HOMEPAGEBODY = () => {
    const topItems = [
        {
            img : top1,
            title: "Vegetable"
        },
        {
            img : top2,
            title: "Fruites"
        },
        {
            img : top3,
            title: "Fish"
        },
        {
            img : top4,
            title: "Meat"
        },
        {
            img : top5,
            title: "Edible Oil"
        },
        {
            img : top6,
            title: "Milk"
        },
        {
            img : top7,
            title: "Personal Care"
        }
    ];
    
    const catagoryItems = [
        {
            img : catagory1,
            title: "Vegetable"
        },
        {
            img : catagory2,
            title: "Fruites"
        },
        {
            img : catagory3,
            title: "Fish"
        },
        {
            img : catagory4,
            title: "Meat"
        },
        {
            img : catagory5,
            title: "Edible Oil"
        },
        {
            img : catagory6,
            title: "Milk"
        },
        {
            img : catagory7,
            title: "Personal Care"
        }
    ];
    
    const banners1 = [banner1, banner2, banner3, banner4, banner5, banner6];
    const banners2 = [banner7, banner8]

    
    return (
        <div className='homepage-main-container'>
            <div className='homepage-container'>
                <HOMEPAGETOP homepageTop="Popular Items" />
                <HOMEPAGECAROUSEL items={banners1} />
                <HOMEPAGEDEALS />
                <HOMEPAGECATAGORIES title="Browse all catagories" items={catagoryItems} />
                <HOMEPAGECAROUSEL items={banners2} />
                <HOMEPAGECATAGORIES title="Top Picks" items={topItems} />
                <HOMEPAGETOP homepageTop="Trendings" />
            </div>

            <Footer />
        </div>
    );
}

export default HOMEPAGEBODY;