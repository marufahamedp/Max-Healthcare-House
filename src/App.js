import './App.css';
import React, { useEffect, useState } from "react";
import {   BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainHeader from './Pages/Shared/Header/MainHeader/MainHeader';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import AuthProvider from './context/AuthProvider';
import Services from './Pages/Services/Services';

import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import ReadMoreService from './Pages/ReadMoreService/ReadMoreService';
import PrivetRoute from './PrivetRoute/PrivetRoute';
import Footer from './Pages/Shared/Footer.js/Footer';
import Blog from './Pages/Blogs/Blogs';
import ReadMorePosts from './Pages/ReadMorePosts/ReadMorePosts';

function App() {
  const [services, setServices] = useState([])
  useEffect(()=>{
    fetch(`./services.json`)
    .then(res=>res.json())
    .then(data=>setServices(data));
  }, [])
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <MainHeader></MainHeader>
        <Switch>
        <Route exact path="/">
          <Home 
          services={services}
          ></Home>
        </Route>
        <Route path="/home">
        <Home
        services={services}
        ></Home>
        </Route>
        <PrivetRoute path="/services">
          <Services
          services={services}
          ></Services>
        </PrivetRoute>
        <Route path="/blog">
          <Blog></Blog>
        </Route>
        <Route path="/about">
        <About></About>
        </Route>
        <Route path="/contact">
        <Contact></Contact>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <PrivetRoute path="/service/:serviceID">
        <ReadMoreService></ReadMoreService>
        </PrivetRoute>
        <PrivetRoute path="/posts/:blogId">
          <ReadMorePosts></ReadMorePosts>
        </PrivetRoute>
        <Route path="*">
          <PageNotFound></PageNotFound>
        </Route>
        </Switch>
        <Footer
        services={services}
        ></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
