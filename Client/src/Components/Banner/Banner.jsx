import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Banner.css'


import React from 'react'

export default function Banner() {
  return (
    <Carousel autoPlay showThumbs={false} interval={3000}infiniteLoop showStatus = {false} showIndicators={false}  >  
    <div className="banner-container">
        <img src="/Images/50O3UN2AYABA09_1.webp" alt="banner" width={300}  />
    </div>
    <div className="banner-container">
        <img src="/Images/xyz.jpg" alt="banner" />
    </div>
    <div className="banner-container">
        <img src="/Images/banner2.jpeg" alt="banner" />
    </div>
    <div className="banner-container">
        <img src="/Images/banner3.avif" alt="banner" />
    </div>

    </Carousel>
  )
}