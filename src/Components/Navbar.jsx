import React from "react";
import {Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div id="topbar" className="fixed-top">
        <h4 className="text-center  mb-3">
          unique design-same expert service
        </h4>
      </div>

      {/* ======= Header ======= */}
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-5">
            <a href="index.html">Infinity</a>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <Link className="nav-link scrollto active" to="/">
                  Home
                </Link>
              </li>
              <li >
                {/* <a className="nav-link scrollto" href="#blogs">
                  About
                </a> */}
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#departments">
                  Departments
                </a>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/blogs"
                >
                  Blogs
                </Link>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Drop Down</span> <i className="bi bi-chevron-down" />
                </a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right" />
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
            
          </nav>
          {/* .navbar */}
          <div className="row ms-auto">
            <div className="col-lg-12 col-sm-12">
              <button className="btn btn-outline-primary btn-lg">Log In</button>
            </div>
          </div>
          <div className="row ms-1">
            <div className="col-lg-12 col-sm-12">
              <button className="btn btn-primary btn-lg sign-up">Sign Up</button>
            </div>
          </div>

        </div>
      </header>
  
    </div>
  );
};

export default Navbar;
