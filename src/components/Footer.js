import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';



const Footer = () => {
  return (
    <div className='footer'>
        <div className='copyright'>
            <h1>Akshay<span style={{'color':'red'}}>.</span></h1>
            <p>Copyright © all rights reserved at Akshay.</p>

        </div>
        
        <div className='address'>
        <section>
          <FontAwesomeIcon icon={faLocationDot} size='xl'style={{margin:'20px 20px'  }}/>
          <span>
          
          <h3>Nandanvan Scociety,Near Akurdi Railway Station,Akurdi,Pune</h3>
          </span>
        </section>
        <section>
          <FontAwesomeIcon icon={faMobile} size='xl'style={{margin:'20px 20px'  }}/>
          <span>
          
          <h3>+917774868664</h3>
          </span>
        </section>
        <section>
          <FontAwesomeIcon icon={faEnvelope} size='xl'style={{margin:'20px 20px'  }}/>
          <span>
            <h3>akshayw3121@gmail.com</h3>
          </span>
          
        </section>
      </div>
      <div className='social'>
            <span>My Social media handles</span>
            <div className='icons'>
                <FontAwesomeIcon icon="fa-brands fa-facebook" style={{color: "#558dec",}} />
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
            </div>
            
            {/* <FontAwesomeIcon icon="fa-brands fa-twitter" />
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
            <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
      </div>
    </div>
  )
}

export default Footer