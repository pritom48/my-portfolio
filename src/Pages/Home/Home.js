import React from 'react';
import Banner from './Banner';
import Projects from './Projects';
import Services from './Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Projects></Projects>
        </div>
    );
};

export default Home;