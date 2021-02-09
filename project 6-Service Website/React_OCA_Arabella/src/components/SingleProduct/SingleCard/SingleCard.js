import React from 'react'
import './SingleCard.css'
import {FaMoneyBillAlt} from 'react-icons/fa'
import {ImLocation} from 'react-icons/im'

const SingleCard = (props) => {
    return (

    <div className="col-md-6">
      <div className="blog-card blog-card-blog">
        <div className="blog-card-image">
          <a href="#"> <img className="img" style ={{width:'515px',height:'300px'}} src={props.img} /> </a>
          <div className="ripple-cont" />
        </div>
        <div className="blog-table">
          
          <h6 className="blog-category blog-text-success fw-bolder svg1" > <FaMoneyBillAlt /> {props.price}<span style={{float: 'right'}}><button onClick ={props.check} type="submit"className="btn btn-warning">Book Now</button></span></h6>
          <h4 className="blog-card-caption">
            <a href="#">{props.name}</a>
          </h4>
          <p className="blog-card-description">{props.description}</p>
          <div className="ftr">
            <div className="author">
            <ImLocation /> {props.location}
            </div>
            <div className="stats"> <i className="far fa-clock" /> {props.duration} </div>
            
          </div>
        </div>
      </div>
    </div>
  

    )
}
export default SingleCard;