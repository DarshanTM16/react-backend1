import React from 'react';
import Navbar from './Navbar';
import Section from './Section';
import data from './data.json';

const Hollywood = () => {
    return(
        <>
         <Navbar />
         <Section imgsrc="https://wallpapercave.com/wp/wp3081626.jpg" 
         title="Hollywood" data={data[2]} route="/hollydata"
         />
        </>
    )
};

export default Hollywood;