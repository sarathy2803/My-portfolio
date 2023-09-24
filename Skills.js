import Aos from "aos";
import React, { useEffect } from "react";
export function Skills(){
    useEffect(()=>{
        Aos.init()
    },[])
    return(
        <>
        <div class="row">
    <div class="col-md-4">
        <div class="text-center">
            <i class="fas fa-code fa-3x"></i>
            <h3>Mongo DB</h3>
        </div>
        <p data-aos="zoom-in" data-delay-duration="1000" data-aos-duration="1000" className="text-light">I ave an one year experience of mongo DB developer </p>
    </div>
    <div class="col-md-4">
        <div class="text-center">
            <i class="fas fa-pencil-alt fa-3x"></i>
            <h3>React Js</h3>
        </div>
        <p data-aos="zoom-in" data-aos-duration="1000" data-delay-duration="1000" className="text-light">I know the React logical part and designing part</p>
    </div>
    <div class="col-md-4">
        <div class="text-center">
            <i class="fas fa-cogs fa-3x"></i>
            <h3>Mysql</h3>
        </div>
        <p data-aos="zoom-in" data-delay-duration="1000" data-aos-duration="1000" className="text-light">My sql is an database its used for to store the data..</p>
    </div>
</div>
        </>
    );
}