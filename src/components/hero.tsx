import Image from "next/image"
import "../style/hero.css"
import React from 'react'

function hero  () {
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
         <h1 className="title-hero">I&apos;m Arisha Iqbal 
            Front-end
            <br /> Developer </h1>
            <p className="des-hero"> I&apos;m a Front-end developer,I&apos;ve honed my skills in HTML, CSS, JavaScript.My goal is to craft seamless user experiences that leave a lasting impression.</p>
            <button className="hero-button"> HIRE ME</button>
       </div>
      </div>
    </div>
  )
}

export default hero
