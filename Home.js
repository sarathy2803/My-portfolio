import Typewriter  from "typewriter-effect";
import React, { useEffect } from "react";
import img from './My image.png'
import Aos from "aos";
export function Home(){
    useEffect(()=>{
        Aos.init()
    },[])
    return(
        <>
     <section id="home">
                <div className="container col-lg-6">
                    <h1 class="hero-text text-left fw-bolder m-5" data-aos-duration="1000" data-aos="fade-left">
                        <Typewriter
                            options={{
                                strings: ["Hello Everyone","I'm Partha Sarathi"],
                                autoStart: true,
                                loop: true,
                                 delay:140
                                }} />  
                    </h1>

                    <h1 class="hero-text text-left fw-bolder m-5" data-aos-duration="1000" data-aos="fade-right">
                        <Typewriter
                            options={{
                                strings: ["My portfolio","Aspiring Full stack Developer"],
                                autoStart: true,
                                loop: true,
                                 delay:60
                                }} />  
                    </h1>
                    <div className="col-lg-6"><img src={img} alt="My Profile Picture" data-aos-duration="1000"  data-aos="zoom-in" class="img-fluid position-absolute  start-80 rounded-circle"/></div>
                    <button data-aos-duration="1000" data-aos="fade-down" className="btn btn-dark text-light position-absolute start-50 btn-sm rounded">Download CV</button>
                </div>
            </section>
        
        </>
    );
}