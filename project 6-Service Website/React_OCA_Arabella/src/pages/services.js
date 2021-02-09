
import ServicesCards from '../components/ServicesCards/ServicesCards';
import React from 'react';
import '../components/ServicesCards/ServiceCard/ServiceCard.css';
import Slider from '../components/Slider/Slider';
import { Container, Row,Col } from 'react-bootstrap';
const Services =()=> {
  
  
      return (
          <div style={{
              backgroundColor:'#f7f0ed',
          }} >
              <div className='slider-big' style={{paddingTop: '5rem'}}>
              <Container>
                  <Row>
                      <Col xs={12} sm={12} md={12}>
                          <Slider/>
                      </Col>
                  </Row>
              </Container>
              </div>
              <div className='six-services'>
              <h1 className='six m-5 text-center '>Our Adventures </h1>
              </div>
              <main>

                  <section className="cards">
                      <ServicesCards />
                  </section>
              </main>
          </div>
      )
  }



export default Services;
