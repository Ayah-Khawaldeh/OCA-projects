import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";
import './nav-style.css';
console.log(sessionStorage.getItem('loggedUser'));
export default class Navigation extends Component {
    handleLogout = () => {
        sessionStorage.clear();
        // return <Redirect to={'/'} />;
        window.location.reload();
    }
    render() {
        let buttons;
        let profile;

        if (!sessionStorage.getItem('loggedUser')) {
             buttons = (

                <ul className="nav-ul">
                    {/*<li className="nav-li">*/}
                    {/*    <Link to={'/login'} className="nav-links">Login</Link>*/}
                    {/*</li>*/}
                    <li className="nav-li">
                        <Link to={'/signup-signin'} className="nav-links"> Sign in | Sign Up </Link>
                    </li>
                </ul>
            )
            profile = '';
        } else {
            buttons = (
                <ul className="nav-ul">
                    <li className="nav-li">
                        <Link to={'/'} onClick={this.handleLogout} className="nav-links">Logout</Link>
                    </li>
                </ul>
            )
            profile = 'profile';
        }
        return (
            <div className={'nav-container'}>
                <nav className="sub-nav-container">
                    <div className={'main-nav'}>
                        <div className={'nav-logo'}>
                            <Link to={'/'} className=""><img src='/images/Arabella_logo_5.png' className='logo-image-nav' width='200rem' height='75rem' style={{
                                padding: '1.5rem',
                                marginTop: ' -2rem'
                            }} /></Link>
                        </div>
                        <div className={'nav-pages'}>
                            <Link to={'/'} className="nav-menu">Home</Link>
                            {/*<Link to={'/test'} className="nav-menu">test</Link>*/}
                            <Link to={'/services'} className="nav-menu">Services</Link>
                            {/*<Link to={'/ashraf'} className="nav-menu">ashraf</Link>*/}
                            <Link to={'/profile'} className="nav-menu">{profile}</Link>
                            {/*{ sessionStorage.getItem('loggedUser') ? <Link to={'/profile'} className="nav-menu">{profile}</Link> : <> </> }*/}
                            {/*<Link to={'/signup-signin'} className="">Sign in | Sign out</Link>*/}
                        </div>
                    </div>
                    <div className="nav-buttons">
                        {buttons}
                    </div>
                </nav>
            </div>
        );
    }
}
