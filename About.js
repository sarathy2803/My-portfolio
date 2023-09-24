import React, { useEffect } from "react";
import img from './Assests/My image.png'
import Aos from "aos";
export function About(){
    useEffect(()=>{
        Aos.init()
    },[])                     
    return(
        <>
          <section class="container mt-5">
        <div class="row">
            <div class="col-md-6" data-aos-duration="1000" data-aos="fade-right" >
                <h2>About Me</h2>
                <p className="text-light">Basically, I being a Bachelor of Computer Science graduate, with a more knowledge in HTML, I started developing my interest in Web developing field and acquired knowledge in few front end technologies, frameworks and libraries like HTML, CSS, JavaScript, Bootstrap, ReactJS and built up few responsive web pages and apps from the ground up.</p>

                <p className="text-light">To pursue my career in an  organization with performance oriented environment forachievement of personal advancement. Being ambitious and hardworking person.</p>
            </div>
            <div class="col-md-6">
                <img src={img} alt="My Profile Picture" data-aos-duration="1000"  data-aos="zoom-in" class="img-fluid position-absolute  start-80 rounded-circle"/>
            </div>
        </div>
    </section>
        </>
    );
}