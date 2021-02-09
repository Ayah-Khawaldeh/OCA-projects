import Arabella from "./Welcome.mp4";
import React from "react";
import './style.css';

const Video = () => {
    return (
        <div className="homecon">
            {/* Start header*/}
            <div className="headvideo hero-video">
                <video autoPlay loop muted>
                    <source src={Arabella} type="video/mp4"/>
                </video>
                <div className='text-hero-vid'>
                    <h1>LIFE IS SHORT <br/> AND <br/> THE WORLD IS WIDE!</h1>
                    {/*<p> slug  </p>*/}
                    <button className="btn-hover color-2">Read more</button>
                </div>
            </div>
        </div>

    );
};

export default Video;