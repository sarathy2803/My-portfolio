import Aos from "aos";
import 'aos/dist/aos.css'
import React, { useEffect } from "react";
export function Certification(){
  useEffect(()=>{
    Aos.init();
  },[])
    return(
        <>
        <div class="row row-cols-1 position-absolute justify-content-center row-cols-md-2 g-5">
  <div class="col">
    <div class="card">
      <img src="https://blog.loopcv.pro/content/images/2022/10/coursera-certificate-copy.jpg" data-aos-delay="400" data-aos-duration="1000" data-aos="zoom-in" class="card-img-top image-fluid" alt="..."/>
      </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://blog.loopcv.pro/content/images/2022/10/coursera-certificate-copy.jpg" data-aos-delay="400" data-aos="zoom-in" data-aos-duration="1000" class="card-img-top image-fluid" alt="..."/>
    </div>
  </div>
</div>
  </>
    );
}