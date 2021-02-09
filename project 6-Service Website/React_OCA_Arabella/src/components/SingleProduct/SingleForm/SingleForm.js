import React from 'react'
import './SingleForm.css'
const SingleForm = (props) => {
    return (

        <div className="col-md-6 col-sm-6 col-xs-6 ">
            <div className="booking-form">
                <div className="form-header">
                    <h3> Booking Request </h3>
                </div>
                <form onSubmit={(event)=>props.submitHandler(event)} id={props.id}>
                    <div className="form-group ">
                        <input onChange = {(event)=>props.changeHandler(event)} name = "phonenumber" className="form-control my-5" type="text" placeholder="Phone Number"   required/>
                        <span className="form-label">Phone Number</span>
                    </div>
                    <div className="form-group ">
                        <input onChange = {(event)=>props.changeHandler(event)} name = "groupsize" className="form-control my-5" type="number" placeholder="Group Size"min="1" required/>
                        <span className="form-label">Group Size</span>
                    </div>
                    <div className="form-group ">
                        <input onChange = {(event)=>props.changeHandler(event)} name = "date" className="form-control" type="date" required />
                        <span className="form-label">Date Requested </span>
                    </div>
                    <div class="form-group">
                        <label className ="text-white ml-4" for="exampleFormControlTextarea3">Comments</label>
                        <textarea onChange = {(event)=>props.changeHandler(event)} name = "comments" class="form-control" id="exampleFormControlTextarea3" rows="10" ></textarea>
                    </div>
                    <div className="form-btn">
                        <button type="submit"className="submit-btn">Book Now</button>
                    </div>


                </form>
            </div>
        </div>

    )
}
export default SingleForm 