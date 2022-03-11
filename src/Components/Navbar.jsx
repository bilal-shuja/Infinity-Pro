import React from "react";
import MainLogo from '../Images/mainLogo.svg'
import {Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      {/* <div id="topbar" className="fixed-top">
        <h4 className="text-center  mb-3">
          unique design-same expert service
        </h4>
      </div> */}
      {/* ======= Header ======= */}
      <nav className="navbar navbar-expand-lg fixed-top navbar-light" style={{backgroundColor:"#fff"}}>
    <div className="container-fluid">
      <Link className="navbar-brand " to={`${process.env.PUBLIC_URL}/`}><img src={MainLogo} alt=""style={{width:"12em"}} /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
          <li className="nav-item">
            <a className="nav-link me-2" aria-current="page" href="#">Writers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link  me-2" href="#">How To Order</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle me-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Service</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>

            
            </ul>
          </li>
              <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle me-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Offers
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Offers</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>

          
            </ul>
          </li>

          <li className="nav-item">
            <Link className="nav-link me-2" to={`${process.env.PUBLIC_URL}/Faq`}>FAQ</Link>
          </li>

          <li className="nav-item">
            <a className="nav-link me-2" href="#">About</a>
          </li>

          <li className="nav-item " style={{marginRight:"8em"}}>
            <Link className="nav-link" to={`${process.env.PUBLIC_URL}/blogs`}>Blog</Link>
          </li>

        
        </ul>
  {/* */}
              <div className="nav-btns">
                  <button className="btn  me-2 btn-login">Log In</button>
                  <button className="btn btn-primary btn-SignUp">Sign Up</button>
          </div>
    
      </div>
  

    </div>

        
        
  </nav>

  {/* End of .container */}
  
    </div>
  );
};

export default Navbar;
