import React from 'react';
import BasicServices from '../BasicServices/BasicServices';
import HomePageServices from '../HomePageServices/HomePageServices';
import HomePageWalcome from '../HomePageWalcome/HomePageWalcome';
import OurHospital from '../OurHospitalSection/OurHospital/OurHospital';
import Pricing from '../Pricing/Pricing';
import Slider from '../Slider/Slider';

const Home = (props) => {
    const {services} = props;
    
    return (
        <div>
            <Slider></Slider>
            <HomePageWalcome></HomePageWalcome>
            <HomePageServices
            services={services}
            ></HomePageServices>
            <Pricing></Pricing>
            <OurHospital></OurHospital>
            <BasicServices></BasicServices> 
        </div>
    );
};

export default Home;