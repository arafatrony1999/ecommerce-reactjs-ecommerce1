import React from 'react';
import HOMEPAGEBODY from '../components/HOMEPAGE_BODY/HOMEPAGE_BODY';
import Header from '../layouts/Header';
import HEADERSIDE from './../components/HEADER_SIDE/HEADER_SIDE';

const HomePage = () => {
    return (
        <>
            <Header />

            <div className="main-body">
                <HEADERSIDE />
                <HOMEPAGEBODY />
            </div>
        </>
    );
}

export default HomePage;
