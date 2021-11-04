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
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AddServices from './Pages/Dashboard/AddServices/AddServices';
import ManageAllServices from './Pages/Dashboard/Dashboard/ManageAllServices/ManageAllServices';
import AddBlogs from './Pages/Dashboard/AddBlogs/AddBlogs';
import ManageAllBlogs from './Pages/Dashboard/ManageAllBlogs/ManageAllBlogs';

function App() {
  const [services, setServices] = useState([])
  useEffect(()=>{
    fetch(`https://hidden-beach-44419.herokuapp.com/healthServices`)
    .then(res=>res.json())
    .then(data=>setServices(data));
  }, [services])

  const [maxBlog, setBlogs] = useState([]);
  useEffect(()=>{
      fetch(`https://hidden-beach-44419.herokuapp.com/blogs`)
      .then(res=>res.json())
      .then(data=>setBlogs(data))
  }, [maxBlog])
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
          <Blog
          maxBlog={maxBlog}
          ></Blog>
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
        <PrivetRoute exact path="/posts/:blogId">
          <ReadMorePosts></ReadMorePosts>
        </PrivetRoute>
        <PrivetRoute path="/manageallservices">
          <ManageAllServices
          services={services}
          ></ManageAllServices>
        </PrivetRoute>
        <PrivetRoute path="/manageallblogs">
          <ManageAllBlogs
          maxBlog={maxBlog}
          ></ManageAllBlogs>
        </PrivetRoute>
        <PrivetRoute path="/addservices">
         <AddServices></AddServices>
        </PrivetRoute>
        <PrivetRoute path="/addblogs">
         <AddBlogs></AddBlogs>
        </PrivetRoute>
        <PrivetRoute path="/dashboard">
         <Dashboard
         services={services}
         maxBlog={maxBlog}
         ></Dashboard>
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
