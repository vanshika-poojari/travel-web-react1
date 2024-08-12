import React from 'react'

const About = () => {
  return (
    <div>
     

     <h1 className = "about">ABOUT</h1>




<div className="container">
        <div className="carousel">
          <div className="carousel-track">
            {/* First set of images */}
            <div className="carousel-item">
              <img className="img-c" src="./assets/travel/tr1.jpg" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="img-c" src="./assets/travel/tr2.jpg" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="img-c" src="./assets/travel/tr3.jpg" alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="img-c" src="./assets/travel/tr4.jpg" alt="Fourth slide" />
            </div>

            {/* Duplicate set of images */}
            <div className="carousel-item">
              <img className="img-c" src="./assets/travel/tr1.jpg" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="img-c" src="./assets/travel/tr2.jpg" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="img-c" src="./assets/travel/tr3.jpg" alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="img-c" src="./assets/travel/tr4.jpg" alt="Fourth slide" />
            </div>
          </div>
        </div>
      </div>

      <div>
        
      <img className = "img-travel" src = "./assets/tr6.jpg" alt = "img" />

<div className = "div-text">
      <h1 className = "about-text">OUR HISTORY</h1>
      <p className = "para-about">TRAVELweb is owned and managed by TRAVELweb. In Pvt. Ltd., a leading Travel agency. Our invincible expertise and rich experience has raised our spirit to reach ahead from our client's expectations. We have a commendable Success Rate and an appreciable Portfolio.</p>
    
    <h1 className = "about-text">OUR MISSION</h1>
    <p className = "para-about">We wanna Run , We wanna Fly , We wanna Fall Down as well , But we don't wanna Stop</p>

    <h1 className = "about-text">OUR VISION</h1>
    <p className = "para-about">We want to make a trip to every part of the world</p>
   
</div>
</div>
    </div>
  )
}

export default About
