import React from "react";
import colorScheme from '../Styling.js';

const Header = () => {
  return (
    <>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="mt-3" style={{background:colorScheme.background}}>
      <div className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-sm-12">
              <h5 className="mt-4">
                <b style={{ color:colorScheme.mainColor }}>WRITING SERVICE</b> AT YOUR
                CONVENIENCE
              </h5>
              <h1>Hire Your Personal Essay Writer Today</h1>
              <h2>
                We are team of talented designers making websites with Bootstrap
              </h2>
              <button
                href="#about"
                className="btn btn-outline-light btn-get-started scrollto"
                style={{backgroundColor:colorScheme.mainColor}}
              >
                Write my paper
              </button>
              <div className="row mt-5">
                <h3>
                  Trusted by <b style={{ color: colorScheme.mainColor }}>1M+</b> happy
                  customers
                </h3>

                <div className="col-lg-3 col-sm-4">
                  <div className="card" style={{borderRadius: "10px", height: "4em"}}>
                    <div className="card-body">
                      <i className="fab fa-accusoft" style={{ fontSize: "15px",color:"#e65100" }}>
                        Sitejabbar
                      </i>
                      <p className="text-start" style={{fontSize:"12px"}}>
                        <b>4.7</b> 
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-4">
                  <div
                    className="card"
                    style={{ borderRadius: "10px", height: "4em" }}
                  >
                    <div className="card-body">
                      <i
                        className="fab fa-accusoft"
                        style={{ fontSize: "15px",color:"#e65100" }}
                      >
                        Sitejabbar
                      </i>
                      <p className="text-start" style={{fontSize:"12px"}}>
                        <b>4.7</b> <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star"></i>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-4">
                  <div
                    className="card"
                    style={{ borderRadius: "10px", height: "4em" }}
                  >
                    <div className="card-body">
                      <i
                        className="fab fa-accusoft"
                        style={{ fontSize: "15px", color:"#e65100" }}
                      >
                        Sitejabbar
                      </i>
                      <p className="text-start" style={{fontSize:"12px"}}>
                        {" "}
                        <b>4.7</b> 
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

            {/* col-end */}


             {/* col-start  */}
            <div className="col-lg-4 col-md-6 col-sm-8 mt-3">
            {/*  */}
            {/* width: "23rem" */}
              <div className="card" style={{ borderRadius: "13px", backgroundColor:"transparent",borderColor:colorScheme.borderColor}}>
              <div className="card"style={{borderRadius: "13px",marginLeft:"1em", marginTop:"1em" ,boxShadow:"10px 10px 5px 0px rgba(0,0,0,0.75)"}}>
                
                <div className="card-body">
                  <h2 className="card-title">
                    <b>Calculate the price</b>
                  </h2>
                  <div className="text-center mt-3">
                    <div
                      className="btn-group d-flex"
                      role="group"
                      aria-label="Basic radio toggle button group"
                    >
                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio1"
                        autoComplete="off"
                        defaultChecked
                      />
                      <label
                        className="btn btn-outline-light"
                        htmlFor="btnradio1"
                        style={{ backgroundColor: colorScheme.mainColor, color:colorScheme.white}}
                      >
                        Radio 1
                      </label>
                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio2"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-light"
                        htmlFor="btnradio2"
                        style={{ backgroundColor: colorScheme.mainColor, color:colorScheme.white}}
                      >
                        Radio 2
                      </label>
                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio3"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-light"
                        htmlFor="btnradio3"
                          style={{ backgroundColor: colorScheme.mainColor, color:colorScheme.white}}
                      >
                        Radio 3
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Essay (any type)</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>

                  <div className="row mt-3">
                    <div className="col-lg-6">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>College</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                    <div className="col-lg-6">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>2 Weeks</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                  </div>
                {/* end-row */}
                  <div className="mt-3">
                    <select
                      className="form-select text-center"
                      style={{ fontSize: "15px" }}
                      aria-label="Default select example"
                    >
                      <option selected>1 page/ 275 words</option>
                      <option value={1}>1 page/ 275 words</option>
                      <option value={2}>1 page/ 275 words</option>
                      <option value={3}>1 page/ 275 words</option>
                    </select>
                  </div>

                  <div className="row mt-3">
                    <div className="col-lg-6">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          defaultValue="option1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio1"
                        >
                          Double spaces
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          defaultValue="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio2"
                        >
                          Single spaces
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* end-row */}

                  <div className="text-end">
                  <p className="me-4 mt-4" style={{fontSize:"20px",color:"black"}}><b>$ 5.7</b><i className="fas fa-fire" style={{color:"red"}}></i></p>
                  </div>

                  <div className="d-grid mb-3">
                  <button className="btn btn-outline-outline btn-calculator"style={{ backgroundColor:colorScheme.mainColor, color:colorScheme.white}}>Write My Paper</button>
                  </div>
                </div>
              </div>
              </div>
              {/* card-end */}
            </div>
            {/* col-end */}
          
          </div>
        </div>
        </div>
      </section>
      
      {/* End Hero */}
      <div className="d-flex justify-content-center">
      <hr />
      </div>

    </>
  );
};

export default Header;
