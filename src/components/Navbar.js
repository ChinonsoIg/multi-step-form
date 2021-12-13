import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { navLinks } from "../utils/data";

const Navbar = ({ width }) => {

  const [showLinks, setShowLinks] = useState(false);


  if (width <= 576) {
    return (
      <div className='mobile-nav'>
        <div className='mobile-header'>
          <h3 className='mobile-swed-header swed-header'>Swedbank</h3>
          <FaBars 
            className='bars-mobile'
            onClick={() => setShowLinks(!showLinks)} 
          />
        </div>
        <div className={showLinks ? 'links-container show-container' : 'links-container'}>
          <ul className='links'>
            {
              navLinks.map((navLink) => {
                const { id, url, text } = navLink;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }

  return (
    <section className='desktop-nav-container'>
      <h1 className='swed-header'>Swedbank</h1>
      <nav className='desktop-nav'>
        <a href='/#'>{/*Nil*/}</a>
        <a href='/#'>Home</a>
        <a href='/#'>About</a>
        <a href='/#'>Loan</a>
        <a href='/#'>Insurance</a>
        <a href='/#'>Pension</a>
        <a href='/#'>{/*Nil*/}</a>
      </nav>
    </section>
  )
}



export default Navbar
