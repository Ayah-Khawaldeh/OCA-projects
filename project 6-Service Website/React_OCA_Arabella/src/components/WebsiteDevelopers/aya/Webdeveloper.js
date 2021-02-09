import React from 'react'

function WebDeveloper (props) {
    return (
<div>
<figure class="snip1515">
<div class="profile-image"><img src ={props.img}  alt="sample47" /></div>
  <figcaption>
  <h2>{props.name}</h2>
  <h5>{props.position}</h5>
  <p>{props.description} </p>
      <div class="icons"><a href="#"><i class="ion-social-reddit"></i></a>
    <a href={props.facebook} target="blank" ><i class="fab fa-facebook-f"></i></a>
        <a href={props.linkedin} target="blank" ><i class="fab fa-linkedin"></i></a>
        <a href={props.github}   target="blank" ><i class="fab fa-github"></i></a>
        </div>
  </figcaption>
</figure>
</div>


    )
}

export default WebDeveloper ;
