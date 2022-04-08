import React from 'react';
import Navbar from './Navbar';
import Section from './Section';
import data from './data.json';

const Technology = () => {
    return(
        <>
         <Navbar />
         <Section imgsrc="https://wallpapercave.com/wp/wp2823522.jpg" 
         title="Technology" data={data[4]} route="/techdata"
         />
        </>
    )
};

export default Technology;