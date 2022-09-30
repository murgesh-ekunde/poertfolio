import React from 'react'
import Header from './Components/Header/header'
import Nav from './Components/nav/nav'
import About from './Components/About/about'
import Experience from './Components/Experience/experience'
import Contact from './Components/Contact/contact'
import Projects from './Components/Projects/project'
import Footer from './Components/Footer/footer'

const app = () => {
  return (
   <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer/> 
    </>
   
  )
}

export default app