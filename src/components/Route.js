import { Outlet } from "react-router-dom";
import Header from "./Header";
import React from 'react'
import Footer from "./Footer";
const Route = () => {
  return (
    <>
        <Header/>
        
        {/* <Home/>
        <About/>
        <Projects/>
        <Contact/> */}
        <main><Outlet/></main>
        <Footer/>
    
    </>
    
  )
}

export default Route