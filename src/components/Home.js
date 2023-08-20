import React from 'react'
import './Home.css'
import photo from './DSC_4149-02-01-01-01.jpeg';
import SectionFirst from './SectionFirst';
import SectionSecond from './SectionSecond';
const Home = () => {
  return (
    <div>
          <div className='sections'>
  
            <section className='s1'>
              <SectionFirst/>   
              
            </section>
            <section className='s2'>
                    <img src={photo} alt=''/>
            </section>
            
          </div>
    </div>
    

  )
}

export default Home