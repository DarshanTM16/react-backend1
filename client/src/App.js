import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Bollywood from './Bollywood';
import Travel from './Travel';
import Hollywood from './Hollywood';
import Technology from './Technology';
import Fitness from './Fitness';
import Blogdata from './Blogdata';
import Bollywoodata from './Bollywoodata';
import Techdata from './Techdata';
import Hollydata from './Hollydata';
import Fitdata from './Fitdata';
import Traveldata from './Traveldata';

const App = () => {
  return(
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bollywood" element={<Bollywood />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
        <Route path="/Hollywood" element={<Hollywood />}></Route>
        <Route path="/fitness" element={<Fitness />}></Route>
        <Route path="/travel" element={<Travel />}></Route>
        <Route path="/Blogdata" element={<Blogdata />}></Route>
        <Route path="/Bollywoodata" element={<Bollywoodata />}></Route>
        <Route path="/Techdata" element={<Techdata />}></Route>
        <Route path="/Hollydata" element={<Hollydata />}></Route>
        <Route path="/Fitdata" element={<Fitdata />}></Route>
        <Route path="/Traveldata" element={<Traveldata />}></Route>
      </Routes>
     </BrowserRouter>
    </>
    
  )
}


export default App;
