import React from 'react';
import './Mainpage.css';
import Maininfo from './Maininfo';
import Navbar from './Navbar';
import Footer from './Footer';


function Mainpage() {
  return (
    <div>
      <Navbar />
      <Maininfo />
      <Footer />
    </div>
  )
}

export default Mainpage
