import React from 'react'
import './ServiceCard.css'
import {ImLocation} from 'react-icons/im'
import { Link } from 'react-router-dom';
const ServiceCard = (props) => {

    return (

        <div className="card-serves">
            <div className="card__image-container">
            <Link to={`/single-product/${props.id}`}>
                <img src={props.img} alt='serviceImage' />
                </Link>
            </div>

            <div className="card__content">
                <p className="card__title text--medium">
                   {props.name} 
    </p>
                <div className="card__info">
                    <p className="text--medium"> <ImLocation  /> {props.location}</p>
                    {/*<p className="card__price text--medium">{props.tag}</p>*/}
                </div>
            </div>
        </div>

    )
}

export default ServiceCard
