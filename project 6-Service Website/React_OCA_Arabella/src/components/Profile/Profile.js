import React from 'react';
import './profile.css';

import { Component } from 'react'
import servicesData from '../ServicesCards/servicesData'
import Weather from '../Api/Weather/WeatherRun'
class Profile extends Component {



    render() {

        // fetch user's data from session 
        let loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));

        let bookingtable = null;
        if (localStorage.getItem('bookings')) {

            /*  fetch booking data from local storage */
            let bookings = JSON.parse(localStorage.getItem('bookings'));


            bookingtable = (
                <div>
                    {bookings.map((booking, index) => {
                        
                        return (
                            <div className="row">
                                <table className="table">


                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Duration</th>
                                            <th scope="col">Group Size</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/*fetch trip's data from (services Data)
                                              Bookings : array of objects*/}
                                        <tr>
                                            <td >{(servicesData.find(trip => trip.id === booking.dataId)).name}</td>
                                            <td>{booking.date}</td>
                                            <td>{(servicesData.find(trip => trip.id === booking.dataId)).duration}</td>
                                            <td>{booking.groupsize}</td>
                                        </tr>



                                    </tbody>
                                </table>
                            </div>
                        )

                    })}
                </div>
            )
        }

        return (

            <div>
                <div className="row py-5 px-4">
                    <div className="col-md-5 mx-auto">
                        {/* Profile widget */}
                        <div className="bg-white shadow rounded overflow-hidden">
                            <div className="px-4 pt-0 pb-4 cover">
                                <div className="media align-items-middle  profile-head">
                                    <div className="profile mr-3"><img src="https://us.123rf.com/450wm/jemastock/jemastock1708/jemastock170810943/84164152-stock-vector-man-avatar-icon-image-vector-illustration-design-black-and-white.jpg?ver=6" alt="..." width={130} className="rounded mb-2 img-thumbnail" />{/* <a href="#" className="btn btn-outline-dark btn-sm btn-block">Edit profile</a> */}</div>
                                    <div className="media-body mb-5 text-white mt-5 "
                                        style={{ textAlign: 'center' }}>
                                        <Weather />

                                    </div>
                                </div>
                            </div>
                            <div className="bg-light p-4 d-flex justify-content-end text-center">

                            </div>
                            <div className="px-4 py-3">
                                <h5 className="mb-0">User Profile</h5>
                                <div className="p-4 rounded shadow-sm bg-light">
                                    <p className="font-italic mb-0">{loggedUser.fullname}</p>
                                    <p className="font-italic mb-0">{loggedUser.email}</p>

                                </div>
                            </div>
                            <div className="py-4 px-4">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h5 className="mb-0">Your Bookings </h5>
                                </div>


                                {bookingtable}

                            </div>
                        </div>
                    </div>
                </div>




            </div>

        )
    }
}

export default Profile
