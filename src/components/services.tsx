import "../style/services.css"
import { FaLaptopCode } from "react-icons/fa";
import { SiAltiumdesigner } from "react-icons/si";
import { MdKeyboardVoice } from "react-icons/md";
import { BsCameraFill } from "react-icons/bs";
import { GiPublicSpeaker } from "react-icons/gi";
import React from 'react'

function Services  ()  {
  return (
   <main className="main">
    <div className="ser-container">
        {/*top div */}
        <div className="top-div-ser">
            <h2 className="title-ser">My Services</h2>
            <p className="des-ser">Offering complete web solutions from development to design and optimization. Whether it&apos;s a stunning website, seamless user experience, or quick troubleshooting, I provide reliable services to meet your digital need.</p>
        </div>
        {/*bottom div */}
        <div className="boxes-con">
            <div className="box">
              <FaLaptopCode className="ser-icon"/>
              <h3>Web Development</h3> <br />
              <span>Blog, E-Commerce</span>
            </div>
            <div className="box">
              <SiAltiumdesigner className="ser-icon2"/>
              <h3>UI/UX Design</h3> <br/>
              <span> Website Design</span>
            </div>
            <div className="box">
              <MdKeyboardVoice className="ser-icon3"/>
              <h3>Sound Design</h3> <br/>
              <span>Voice Over, Best Making</span>
            </div>
            
            <div className="box">
              < BsCameraFill className="ser-icon5"/>
              <h3>Photography</h3> <br />
              <span>  Product Photography</span>

            </div>
            <div className="box">
              < GiPublicSpeaker  className="ser-icon6"/>
              <h3>Advertising</h3> <br />
              <span>Reach your audience on the go</span>
            </div>
            </div>


    </div>
   </main>
  )
}

export default Services
