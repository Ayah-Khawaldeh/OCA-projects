import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import  './Testimonials.css';




class Testimonials  extends  Component  {
    constructor(props) {
        super(props);
        this.state = {
            quotes : [
                {
                    id: '4',
                    image: 'https://media-exp1.licdn.com/dms/image/C4E35AQGm7KBSy-A7rA/profile-framedphoto-shrink_800_800/0/1612032732684?e=1612771200&v=beta&t=CEWdC7BokyldBSJBELRAch0C-RDmcObYDzs-cVKNyAM' ,
                    name : 'Ahamad Abu Rumman' ,
                    quote : 'Lorem Ipsum is simply dummy text of the printing and typeset' +
                        'ting industry. Lorem Ipsum has been the industry\'s standard dummy tex' +
                        't ever since the 1500s, when an unknown printer took a galley of type and scram' +
                        'bled it to make a type specimen book. It has survived not only five centuries, but ' +
                        'also the leap into electronic typesetting, ' ,
                },
                    {
                        id: '1',
                        image: 'https://media-exp1.licdn.com/dms/image/C4D03AQHdbVjKN24aOA/profile-displayphoto-shrink_400_400/0/1600866731777?e=1617840000&v=beta&t=8T8KbS85crNT3NSuEuiuSW2FRtyQgHt_YBXczpXH7DU' ,
                        name : 'Hamzeh Obaidat' ,
                        quote : 'mariaaa   Lorem Ipsum is simply dummy text of the printing and typeset' +
                            'ting industry. Lorem Ipsum has been the industry\'s standard dummy tex' +
                            't ever since the 1500s, when an unknown printer took a galley of type and scram' +
                            'bled it to make a type specimen book. It has survived not only five centuries, but ' +
                            'also the leap into electronic typesetting, ' ,
                    },
                    {
                        id: '2',
                        image: 'https://media-exp1.licdn.com/dms/image/C4E35AQGM4v6_QR-t1g/profile-framedphoto-shrink_400_400/0/1612030392132?e=1612702800&v=beta&t=ar9AV5vAmBEDN50Zkhe-NDGvgWshKxxYLX_6hyxpkNs' ,
                        name : 'Dania Abu Tair' ,
                        quote : 'Lorem Ipsum is simply dummy text of the printing and typeset' +
                            'ting industry. Lorem Ipsum has been the industry\'s standard dummy tex' +
                            't ever since the 1500s, when an unknown printer took a galley of type and scram' +
                            'bled it to make a type specimen book. It has survived not only five centuries, but ' +
                            'also the leap into electronic typesetting, ' ,
                    },
                    {
                        id: '3',
                        image: 'https://media-exp1.licdn.com/dms/image/C4E03AQFivRZGiqQABg/profile-displayphoto-shrink_400_400/0/1600874534239?e=1617840000&v=beta&t=j9YHzR43bUDpzqaLbfoBM_P4z1SRyFIwK3ZKiZKOIvI' ,
                        name : 'Mohammad Yacoub' ,
                        quote : 'Lorem Ipsum is simply dummy text of the printing and typeset' +
                            'ting industry. Lorem Ipsum has been the industry\'s standard dummy tex' +
                            't ever since the 1500s, when an unknown printer took a galley of type and scram' +
                            'bled it to make a type specimen book. It has survived not only five centuries, but ' +
                            'also the leap into electronic typesetting, ' ,
                    },

            ]}}
    render(){
    return (
        <div className='testimonials-container'>
        <div className="testimonials">
            <div className="six-testimonial">
                <h1>OUR CLIENTS
                    <span>some quotation of our loyalty clients</span>
                </h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12" data-wow-delay="0.2s">
                        <div className="carousel slide" data-ride="carousel" id="quote-carousel">
                            {/* <!-- Bottom Carousel Indicators --> */}
                            <ol className="carousel-indicators">
                                <li data-target="#quote-carousel" data-slide-to="0" className="active ">
                                    <img className="img-responsive " src={this.state.quotes[0].image} alt="testimonial"/>
                                </li>
                                <li data-target="#quote-carousel" data-slide-to="0" className="">
                                    <img className="img-responsive " src={this.state.quotes[1].image} alt="testimonial"/>
                                </li>
                                <li data-target="#quote-carousel" data-slide-to="0" className="">
                                    <img className="img-responsive " src={this.state.quotes[2].image} alt="testimonial"/>
                                </li>
                                <li data-target="#quote-carousel" data-slide-to="0" className="">
                                    <img className="img-responsive " src={this.state.quotes[3].image} alt="testimonial"/>
                                </li>
                            </ol>

                            {/* <!-- Carousel Slides / Quotes --> */}
                            <div className="carousel-inner text-center">

                                {/* <!-- Quote 1 --> */}
                                <div className="item active">
                                    <blockquote>
                                        <div className="row">
                                            <div className="col-sm-8 col-sm-offset-2 ">

                                                <p className='quoteColor' >{this.state.quotes[0].quote}</p>
                                                <small className='quoteColor'>{this.state.quotes[0].name}</small>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                                {/* <!-- Quote 2 --> */}
                                <div className="item">
                                    <blockquote>
                                        <div className="row">
                                            <div className="col-sm-8 col-sm-offset-2">

                                                <p className='quoteColor' >{this.state.quotes[1].quote}</p>
                                                <small className='quoteColor'>{this.state.quotes[1].name}</small>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                                {/* <!-- Quote 3 --> */}
                                <div className="item">
                                    <blockquote>
                                        <div className="row">
                                            <div className="col-sm-8 col-sm-offset-2">

                                                <p className='quoteColor' >{this.state.quotes[2].quote}</p>
                                                <small className='quoteColor'>{this.state.quotes[2].name}</small>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                                <div className="item">
                                    <blockquote>
                                        <div className="row">
                                            <div className="col-sm-8 col-sm-offset-2">

                                                <p className='quoteColor' >{this.state.quotes[3].quote}</p>
                                                <small className='quoteColor'>{this.state.quotes[3].name}</small>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>

                            {/* <!-- Carousel Buttons Next/Prev --> */}
                            <a data-slide="prev" href="#quote-carousel" className="left carousel-control"><i className="fa fa-chevron-left"></i></a>
                            <a data-slide="next" href="#quote-carousel" className="right carousel-control"><i className="fa fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
} }

export default Testimonials;
