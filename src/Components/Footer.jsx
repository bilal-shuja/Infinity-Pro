import React from 'react';
import MainLogo from '../Images/mainLogo.svg';


const Footer = () => {
  return (
    <>
     {/* Footer */}
  <footer className="text-center text-lg-start text-white" style={{backgroundColor: '#2e394e'}}>
    {/* Grid container */}
    <div className="pb-0">
      {/* Section: Links */}
      <section className="section-one">
        {/*Grid row*/}
        <div className="row">
          
          {/* Grid column */}
          <div className="col-md-5 col-lg-5 col-xl-5 col-sm-3">
            <h6 className="text-uppercase mb-4 font-weight-bold d-flex justify-content-center">
              <img className="img-fluid"src={MainLogo} alt="" style={{width:"13rem"}}/>
            </h6>
      {/* start-accordian */}

      <div className="col-5 mx-auto">
   
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:"#4d596e"}}>
              Global 
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
            <div className="pb-0" >
                <ul className="" aria-labelledby="dropdownMenuButton2" style={{listStyle:"none"}}>
                    <li style={{marginLeft:"-32px",backgroundColor:"#4d596e"}}><a className="dropdown-item text-start text-white" href="#" >Canada</a></li>
                    <li style={{marginLeft:"-32px",backgroundColor:"#4d596e"}}><a className="dropdown-item text-start text-white" href="#">United Kingdom</a></li>
                    <li style={{marginLeft:"-32px",backgroundColor:"#4d596e"}}><a className="dropdown-item text-start text-white" href="#">UAE</a></li>
                  </ul>

            </div>
          </div>
        </div>
        </div>
      {/* end-accordian */}
     
      </div>
      
      
          </div>
          {/* Grid column */}


          <hr className="w-100 clearfix d-md-none" />


          {/* Grid column */}
          <div className="col-md-7 col-lg-7">
      <div className="row mt-2">

        <div className="col-lg-3">
          <div className="dropdown">
            <button className="btn btn-outline-light dropdown-toggle p-3 pe-2"  type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown"  aria-expanded="false">
              Other Services:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
            <ul className="dropdown-menu dropdown-menu-light dp-menu-footer" aria-labelledby="dropdownMenuButton2">
              <li><a className="dropdown-item  footer-drop-link" href="#">Action</a></li>
              <li><a className="dropdown-item footer-drop-link" href="#">Another action</a></li>
              <li><a className="dropdown-item footer-drop-link" href="#">Something else here</a></li>
             
            </ul>
          </div>
          </div>
          &nbsp;
          <div className="col-lg-3">
          <div className="dropdown">
            <button className="btn btn-outline-light dropdown-toggle p-3 pe-2"  type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown"  aria-expanded="false">
              Best Offers:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
            <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton3">
              <li><a className="dropdown-item " href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
             
            </ul>
          </div>
        </div>
        </div>

            <h6 className="footer-title mb-4 font-weight-bold mt-4">How Our Service is Used:</h6>
              <div className="footer-para">Our expert's notes are NOT intended to be forwarded as finalized projects, as it is only strictly meant to be used for research and study purposes. We do not endorse or condone any type of plagiarism.</div>
         </div>
          {/* Grid column */}



        </div>
        {/*Grid row*/}
      </section>
      {/* Section: Links */}
      <div className="d-flex justify-content-center">
            <hr />   
     </div>

          {/* Section: Links */}
      <section className="section-one">
        {/*Grid row*/}
        <div className="row">
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4  footer-headings">
              Legal
            </h6>
            <p>
              <a className="footer-text text-white">Terms & Conditions</a>
            </p>
            <p>
              <a className="footer-text text-white">Refund Policy</a>
            </p>
            <p>
              <a className="footer-text text-white">Privacy Policy</a>
            </p>
            <p>
              <a className="footer-text text-white">Academic Integrity</a>
            </p>
          </div>
          {/* Grid column */}
          <hr className="w-100 clearfix d-md-none" />
          {/* Grid column */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
           <h6 className="text-uppercase mb-4 footer-headings">Other</h6>
            <p>
              <a className="footer-text text-white">Essay Topic Generator</a>
            </p>
            <p>
              <a className="footer-text text-white">Service Guarantees</a>
            </p>
            <p>
              <a className="footer-text text-white">Academic Integrity</a>
            </p>
            <p>
              <a className="footer-text text-white">Authors</a>
            </p>
          </div>
          {/* Grid column */}
          <hr className="w-100 clearfix d-md-none" />
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4  footer-headings">Info Pages</h6>
            <p>
              <a className="footer-text text-white">Become an Expert</a>
            </p>
            <p>
              <a className="footer-text text-white">Contact Us</a>
            </p>
            <p>
              <a className="footer-text text-white">FAQ</a>
            </p>
            <p>
              <a className="footer-text text-white">Honor Code</a>
            </p>
          </div>
          {/* Grid column */}
          <hr className="w-100 clearfix d-md-none" />
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4  footer-headings">Contact</h6>
            <p><i className="fas fa-home mr-3" /> New York, NY 10012, US</p>
            <p><i className="fas fa-envelope mr-3" /> info@gmail.com</p>
            <p><i className="fas fa-phone mr-3" /> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-3" /> + 01 234 567 89</p>
          </div>
          {/* Grid column */}
        </div>
        {/*Grid row*/}
      </section>
      {/* Section: Links */}
      <div className="d-flex justify-content-center">
            <hr />   
     </div>
      {/* Section: Copyright */}
      <section className="section-two">
        <div className="d-flex justify-content-evenly">
         {/* Grid column */}
          {/* <div className=""> */}
            {/* Facebook */}
            <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-facebook-f" /></a>
            {/* Twitter */}
            <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-twitter" /></a>
            {/* Google */}
            <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-google" /></a>
            {/* Instagram */}
            <a className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-instagram" /></a>
          {/* </div> */}
          {/* Grid column */}

       
        </div>
       
         
      </section>
       {/* Copyright */}
            
       <div className="text-center">
              © 2022 Copyright&nbsp;
              <a className="footer-text text-white" href="@">essayondemand. All rights reserved.</a>
            </div>
            {/* Copyright */}
      {/* Section: Copyright */}
    </div>
    {/* Grid container */}
  </footer>
  {/* Footer */}
    
    </>
  )
}

export default Footer