import React from 'react';
import Navbar from './Navbar';
import Section from './Section';
import data from './data.json';

const Travel = () => {
    return(
        <>
         <Navbar />
         <Section imgsrc="https://wallpapercave.com/wp/wp8347099.jpg" 
         title="Travel" data={data[5]} route="/traveldata"
         />
        </>
    )
};

export default Travel;