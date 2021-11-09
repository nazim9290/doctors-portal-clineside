import React from 'react';
import Navbar from '../../../Sheared/Navigation/Navbar';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Exception from '../Exception/Exception';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Services/>
           <Exception/>
           <AppointmentBanner/>
        </div>
    );
};

export default Home;