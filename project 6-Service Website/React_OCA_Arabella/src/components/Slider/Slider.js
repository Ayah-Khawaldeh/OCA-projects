import React from 'react'
// import { Carousel } from "react-bootstrap";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const slideImages = [
    'https://lp-cms-production.imgix.net/features/2019/03/roman-ruins-amman-jordan-407d5b729ba7.jpg',
    'https://www.etbtoursegypt.com/storage/638/10_Day_Egypt_And_Jordan_Tours.jpg',
  ];
function Slider() {
    return (
<div className="slide-container" >
<Slide>
  <div className="each-slide" >
    <div style={{'backgroundImage': `url(${slideImages[0]})` ,height:"70vh", backgroundRepeat:"no-repeat",backgroundSize: "cover" }}>
      <span></span>
    </div>
  </div>
  <div className="each-slide">
    <div style={{'backgroundImage': `url(${slideImages[1]})` ,height:"70vh", backgroundRepeat:"no-repeat" ,backgroundSize: "cover"}}>
      <span></span>
    </div>
  </div>
  {/*<div className="each-slide">*/}
  {/*  <div style={{'backgroundImage': `url(${slideImages[2]})`,height:"70vh"  , backgroundRepeat:"no-repeat" ,backgroundSize: "cover"}}>*/}
  {/*    <span></span>*/}
  {/*  </div>*/}
  {/*</div>*/}
</Slide>
</div>
)
   
}

export default Slider
