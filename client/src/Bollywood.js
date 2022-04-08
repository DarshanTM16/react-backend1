import React from 'react';
import Navbar from './Navbar';
import Section from './Section';
import './bolywood.css';
import data from './data.json';

const Bollywood = () => {
    return(
        <>
         <Navbar />
         <Section imgsrc="https://wallpapercave.com/wp/wp7874491.jpg" 
         title="Bollywood" data={data[1]} route="/bollywoodata"
         />
        </>
    )
}

export default Bollywood;