import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages';
import Profile_page from '../pages/profile';
import Services from '../pages/services';
import SignForm from '../pages/SignForm';
import SingleProd from "../pages/SingleProduct";
// import test_page from "../pages/test";




function App() {
  return (

    <Router>
      {/*<Navbar />*/}
      <Navigation />
      <Switch>
        <Route path='/' exact component={Home} />
        {/*<Route path='/test' exact component={test_page} />*/}
          <Route path='/Services' component={Services} />
        <Route path='/profile' component={Profile_page} />
        {/*<Route path='/contact-us' component={Contact} />*/}
        {/*<Route path='/sign-up/signin' component={SignUpSignIn} />*/}
          <Route path='/signup-signin' component={SignForm} />
          <Route path='/single-product/:id' component={SingleProd} />
      </Switch>
<Footer/>
    </Router>

  );
}

export default App;
