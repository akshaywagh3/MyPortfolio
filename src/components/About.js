import React from 'react'
import Header from './Header';
import './About.css'
import myImage from './DSC_4149-02-01-01-01.jpeg';
import Akshay from './AkshayWagh_.pdf';
const About = () => {

 
  return (
    <div className='full'>
      <span>
        <h1>ABOUT ME</h1>
        <h4>SOFTWARE ENGINEER BASED IN INDIA.</h4>
      </span>
      

      <div className='about'>
         <img src={myImage} alt=''/>
        <div className='myself'>
          <h2>I'm Akshay Wagh</h2>
          <h3>A Web Developer based in India</h3>

          <p>I love to design and Develop stylish,modern,responsive and interactive websites.<br/>My passion is to design and develop user interfaces through bold interfaces and meaningful interactions.Check out my portfolio.</p>
          <div className='details'>
              <div className='col'>
                  <div className='media'>
                      <label>Birthday :</label>
                      <label>6 June 2001</label>
                  </div>
                  <div className='media'>
                      <label>Age :</label>
                      <label>22 Years</label>
                  </div>
                  <div className='media'>
                      <label>Residance :</label>
                      <label>India</label>
                  </div>
              </div>
              
              <div className='col2'>
                <div className='media'>
                      <label>Email :</label>
                      <label>akshayw3121@gmail.com</label>
                </div>
                <div className='media'>
                      <label>phone :</label>
                      <label>7774868664</label>
                </div>
                <div className='media'>
                      <label>Address :</label>
                      <label>Pune,India</label>
                </div>
              </div>
          </div>
          <a href={Akshay} download="Akshay_Wagh_Resume" target='_blank'>
                  <button className='hire'>Download Resume</button></a>
        </div>
      </div>
      
      
    </div>
    
  )
}

export default About