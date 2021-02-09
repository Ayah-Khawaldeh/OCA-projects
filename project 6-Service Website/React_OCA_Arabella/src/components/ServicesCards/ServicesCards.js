
import './ServiceCard/ServiceCard.css'
import ServiceCard from './ServiceCard/ServiceCard';
import './ServiceCard/ServiceCard.css'
import React from 'react'
import data from './servicesData'

const ServicesCards =(props)=> {
    
    return data.map((card , index) =>{
        
        return(
        
        <ServiceCard id ={card.id} name ={card.name} location={card.location} tag={card.tag} img={card.img} />)
       
    })
    
    
    
    
  
}

/* class ServicesCards extends Component {
    render() {
        return (
            <main>
           <section className="cards">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </section>
            </main>
        )
    }
} */
export default ServicesCards