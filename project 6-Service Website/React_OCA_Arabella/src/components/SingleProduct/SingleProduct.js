import React from 'react'
import { Component } from 'react'
import SingleCard from './SingleCard/SingleCard'
import SingleForm from './SingleForm/SingleForm'
import swal from 'sweetalert';

class SingleProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookForm: {
                phonenumber: "",
                groupsize: "",
                date: "",
                comments: ""
            },
            doesShow:false,

        };
    }

    //Fetch data from inputs &set State
    changeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let newbook = { ...this.state.bookForm };
        newbook[name] = value;
        this.setState({
            bookForm: newbook,
        })

}


  //Store data to local storage
  submitHandler = (event) => {

    event.preventDefault();
    let bookings = [];
    // unique number for every book
    let dataId = this.props.dataId ;
    let loggeduser =JSON.parse(sessionStorage.getItem("loggedUser"));
    let email = loggeduser['email'];
    let booking = { ...this.state.bookForm , dataId ,email };

    //set bookings in local storage if not set
    if (!localStorage.getItem("bookings")) {
      localStorage.setItem("bookings", JSON.stringify(bookings));
    }
    // Storing form data in LocalStorage
    let storedBookings = JSON.parse(localStorage.getItem("bookings"));
        const newBookings = [...storedBookings, booking  ];
        localStorage.setItem("bookings", JSON.stringify(newBookings));
      swal({
          title: "the process has been done successfully",
          text: "Welcome!",
          icon: "success",
          button: "ok ",
      });
    //Reseting form after submition
    document.getElementById("booking").reset();
}
//display booking form function
check =()=>{
    const isLog = sessionStorage.getItem("loggedUser");
    if(!isLog){
        //Alert 'please login '
        swal({
            title: "Please login to continue your booking",
            text: "Welcome!",
            icon: "error",
            button: "ok ",
        });
        console.log('please , login');
    }
    const doesShow = this.state.doesShow;
    this.setState( { doesShow: !doesShow } );
}

    render() {


   //hide or display booking form
   let Form = null ;
   const isLog = sessionStorage.getItem("loggedUser");
    if (isLog){
     if (this.state.doesShow){
    Form = (
        <SingleForm id ="booking"submitHandler={(event)=>this.submitHandler(event)}
                    changeHandler={(event)=>this.changeHandler(event)} />
    )}
    }
        return (


            <div style={{ margin: "4.7rem auto" }} className="container ">
                <div style={{ marginTop: "25px" }} className="row ">
                    <SingleCard check={this.check}
                                img={this.props.img}
                                name={this.props.name}
                                location={this.props.location}
                                price={this.props.price}
                                description={this.props.description}
                                duration={this.props.duration} />
                    {Form}

                </div>
            </div>

        )
    }
}
export default SingleProduct;