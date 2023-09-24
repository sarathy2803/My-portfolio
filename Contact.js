import Aos from "aos";
import React, { useEffect } from "react";
export function Contact(){
    useEffect(()=>{
        Aos.init()
    },[])
    return(
        <>
        <div class="container" data-aos="zoom-in" data-aos-duration="1000" >
        <div class="row">
            <div class="col-md-8 offset-md-2 contact-container">
                <h1 className="fw-bold">Contact Me</h1>
            <p>Enter The Details For Contact Me..</p>
                <form>
  <div class="form-group">
  <label className="fw-bold" for="name">Name</label>
  <input type="text" class="form-control" id="name" placeholder="eg.Joe Peter"/>
  </div>
  <div class="form-group">
  <label className="fw-bold" for="email">Email</label>
  <input type="email" class="form-control" id="email" placeholder="eg. joepeter123@gmail.com"/>
  </div>
  <div class="form-group">
  <label className="fw-bold" for="message">Message</label>
  <textarea class="form-control" id="message" rows="4" placeholder="Your Message...."></textarea>
  </div>
     <button type="submit" class="mt-3 position-absolute start-50 btn btn-dark text-light rounded">Submit</button>
 </form>
 </div>
</div>
</div>
        </>
    );
}