import React from "react";
export function Menu()
{
    return(
        <>
        <nav class="navbar navbar-expand-lg d-flex  flex-row-reverse  bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand bg-dark text-light" href="#Home">My Portfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse bg-dark  justify-content-end" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="Home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" href="About">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" href="Skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" href="Certification">Certification</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" href="Contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <Link to='/Hello'><a className="nav-link">Hello</a></Link>
        <Link to='/Congrats'><a className="nav-link">Congrats</a></Link>
        <Link to='/superover'><a className="nav-link">Superover</a></Link>
        <Link to='/socialbuttons'><a className="nav-link">Socialbuttons</a></Link>
        <Link to='/Notification'><a className="nav-link">Notification</a></Link>
        <Link to='/Technologies'><a className="nav-link">Technologies</a></Link>
        <Link to='/hooks'><a className="nav-link">Hooks</a></Link>
        <Link to='/FruitCount'><a className="nav-link">Fruit</a></Link>
        <Link to='/Feedback'><a className="nav-link">Feedback</a></Link>
        <Link to='/Feedbacktwo'><a className="nav-link">Thankyou</a></Link>
        <Link to='/Datefunction'><a className="nav-link">Datefunction</a></Link>
        <Link to='/Products'><a className="nav-link">json Api</a></Link>
        
        </ul>
    </div>
  </div>
</nav> */}
    </>
    );
}