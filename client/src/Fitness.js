import React from 'react';
import Navbar from './Navbar';
import Section from './Section';
import data from './data.json';

const Fitness = () => {
    return(
        <>
         <Navbar />
         <Section imgsrc="https://wallpapercave.com/wp/wp8916448.jpg" 
         title="Fitness" data={data[3]} route="/fitdata"
         />
        </>
    )
};

export default Fitness;