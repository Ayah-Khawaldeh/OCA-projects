import React from 'react';
import SingleProduct from "../components/SingleProduct/SingleProduct";
import { Route } from "react-router-dom";
import data from '../components/ServicesCards/servicesData'

const SingleProd = ({ match }) => {
    const cardData = data.find((p) => p.id === match.params.id);
    
    console.log(cardData.img);
    return (

        <div >
            <SingleProduct dataId={cardData.id} img = {`/${cardData.img}`} name={cardData.name} location={cardData.location} price={cardData.price} description={cardData.description} duration ={cardData.duration} />
        </div>





    );
};

export default SingleProd;
