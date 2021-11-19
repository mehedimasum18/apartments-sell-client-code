import React from 'react';
import About from '../../Component/Home/About/About';
import Banner from '../../Component/Home/Banner/Banner';
import Review from '../../Component/Home/Review/Review';
import Services from '../../Component/Home/Services/Services';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Home = () => {
    return (
        <>
        <Navigation></Navigation>
         <Banner/>
         <Services/>
            <About />
            <Review></Review>
         <Footer/> 
        </>
    );
};

export default Home;