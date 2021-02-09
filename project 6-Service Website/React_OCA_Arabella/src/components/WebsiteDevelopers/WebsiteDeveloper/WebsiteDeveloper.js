import React from 'react'

function WebsiteDeveloper (props) {
    return (
        <div className="container1">
            <div  className="row">

                <div class="profile-image"  ><img src ={props.img}  alt="sample47"  /></div>
                <figcaption className="card" >
                    <h2 style={{
                        marginTop:"68px",
                    }}>{props.name}</h2>

                </figcaption>
            </div>
        </div>


    )
}

export default WebsiteDeveloper ;










