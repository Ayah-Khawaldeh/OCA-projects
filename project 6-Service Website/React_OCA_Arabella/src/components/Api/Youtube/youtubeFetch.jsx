import React from 'react';
import './Youtube.css';



const YoutubeFetch = ({ video }) => {
    const videoID = video.contentDetails.videoId;
    return (
        <div className="VideoContainerAll ">
            <div
                className="VideoContainer ">
                <iframe style={{
                    margin:"20px",
                }}
                    title='batata'
                    className="VideoFrame"
                    src={'https://www.youtube.com/embed/ELP1a0dj4ts'}
                    frameborder='0'
                    allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen
                ></iframe>
                <iframe style={{
                    margin:"20px",
                }}
                    title='batata'
                    className="VideoFrame"
                    src={'https://www.youtube.com/embed/sJU1abeeA6s'}
                    frameBorder='0'
                    allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                ></iframe>
                <iframe style={{
                    margin:"20px",
                }}
                    title='batata'
                    className="VideoFrame"
                    src={'https://www.youtube.com/embed/O0Ia13SmGf0'}
                    frameBorder='0'
                    allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                ></iframe>
                <iframe style={{
                    margin:"20px",
                }}
                    title='batata'
                    className="VideoFrame"
                    src={'https://www.youtube.com/embed/A3MYJ8nbZLw'}
                    frameBorder='0'
                    allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                ></iframe>
                <iframe style={{
                    margin:"20px",
                }}
                    title='batata'
                    className="VideoFrame"
                    src={'https://www.youtube.com/embed/96hy6CFb1Ks'}
                    frameBorder='0'
                    allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                ></iframe>
                <iframe style={{
                    margin:"20px",
                }}
                    title='batata'
                    className="VideoFrame"
                    src={'https://www.youtube.com/embed/7VnhVN4o2uc'}
                    frameBorder='0'
                    allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                ></iframe>
                <iframe style={{
                    margin:"20px",
                }}
                        title='batata'
                        className="VideoFrame"
                        src={'https://www.youtube.com/embed/GKqBLc_xgEs'}
                        frameBorder='0'
                        allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                ></iframe>
                <iframe style={{
                    margin:"20px",
                }}
                        title='batata'
                        className="VideoFrame"
                        src={'https://www.youtube.com/embed/X0olR8uxzHU'}
                        frameBorder='0'
                        allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};
export default YoutubeFetch;