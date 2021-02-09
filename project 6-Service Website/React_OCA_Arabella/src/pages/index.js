import React from 'react';
import Video from '../components/VideoBackground/video.jsx';
import Youtube from '../components/Api/Youtube/Youtube.jsx'
import Testimonials from '../components/Testimonials/Testimonials'
import WebsiteDevelopers from '../components/WebsiteDevelopers/WebsiteDevelopers'
import LogoBanner from "../components/LogoBanner/LogoBanner";



const Home = () => {
  return (

<div className="container1" style={{

    backgroundColor:'#f7f0ed',

}} >
    <Video/>
    <LogoBanner />.
    <Youtube />
    <Testimonials/>
    <WebsiteDevelopers/>
</div>





  );
}

export default Home;
