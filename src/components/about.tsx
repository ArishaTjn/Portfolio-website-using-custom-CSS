import Image from "next/image"
import "../style/hero.css"
import React from 'react'

function About  () {
  return (
    <div className="header-container">
      <div className="header-boxes-con">
        {/* left */}
        <div>
    <Image src={"/images/yellow img.webp" }
        width={200}
       height={200}
       className=" header-image"
       alt="Profile"/>
       
        </div>
        {/* right */}
        <div className="hero-right-div">
         <h1 className="title-hero">About Us</h1>
            
            <p className="des-hero"> Hi! Welcome to my portfolio at GIAIC, persuing a course in Artificial Intelligence, Web 3.0 and Metaverse. I specialized in areas like Programming, Web Development. I&apos;m eager to collaborate and learn from other passionate individuals. </p> <br />
            <p>Thank you for visiting!</p>

        
       </div>
      </div>
    </div>
  )
}

export default About
