import React from 'react';
import {
    FooterContainer
} from './FooterElements_style';


function Footer() {
    return (
        <FooterContainer className='main-footer'>
            <div className='footer-middle'>
            <div className='container-fluid'>
                <div className='row'>
                    {/*start of column1*/}
                    <div className='col-md-3 col-sm-6'>
                        <h4 className='font-weight-bold footer-title'> About Us</h4>
                        <ul className='list-unstyled'>
                            <li><a href='/'>Story</a></li>
                            <li><a  href='/'>Clients</a></li>
                            <li><a  href='/'>Testimonials </a></li>
                        </ul>
                    </div>
                    {/*start of column2*/}
                    <div className='col-md-3 col-sm-6'>
                        <h4 className='font-weight-bold footer-title'> Services</h4>
                        <ul className='list-unstyled'>
                            <li ><a href='/'>Marketing</a></li>
                            <li><a  href='/'>Consulting </a></li>
                            <li><a  href='/'>Development </a></li>
                            <li><a  href='/'>Design </a></li>
                        </ul>
                    </div>
                    {/*start of column3*/}
                    <div className='col-md-3 col-sm-6'>
                        <h4 className='font-weight-bold footer-title'>Contact Us</h4>
                        <ul className='list-unstyled'>
                            <li><a href='/'>Amman </a></li>
                            <li><a  href='/'>Irbid </a></li>
                            <li><a  href='/'>Jaresh</a></li>
                            <li><a  href='/'>Support</a></li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h4 className='font-weight-bold footer-title'> Follow us </h4>
                        {/*<div className='row'>*/}
                        <ul className='list-unstyled d-flex ' >
                            <li><a  href='/' ><i className="fa fa-facebook mr-5"></i></a></li>
                            <li><a  href='/' ><i className="fab fa-instagram mr-5"></i></a></li>
                            <li><a  href='/' ><i className="fab fa-youtube mr-5"></i></a></li>
                            <li><a  href='/' ><i className="fab fa-twitter mr-5"></i></a></li>
                        </ul>
                        {/*</div>*/}
                    </div>
                </div>
                {/*<div className='footer-bottom'>*/}
                {/*    /!* <div className="fab fa-facebook-f"></div> *!/*/}
                {/*    <p className='text-xs-center'>*/}
                {/*        &copy{new Date().getFullYear()} All Rights Reserved*/}
                {/*    </p>*/}

                {/*</div>*/}
            </div>
            </div>
        </ FooterContainer>
    );
};

export default Footer;

// const FooterContainer = styled.footer`
// .footer-middle {
//     background: red;
// }
// `;