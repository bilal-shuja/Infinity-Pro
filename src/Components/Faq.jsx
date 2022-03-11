import React from 'react';
import faqGirl from '../Images/faq-illustrations.svg';
const Faq = () => {
  return (
    <div>
    {/* ======= Departments Section ======= */}
<section id="departments" className="departments bg-light">
  <div className="container">
    <div className="section-title">
          <div className="card mt-5 faq-card pb-5">
           
            <div className="card-body">
                <h4 className="card-title mt-5" style={{color:"#7367f0"}}>Let's answer some questions</h4>
                <p className="card-text" style={{color:"#6E6B7B"}}>or choose a category to quickly find the help you need</p>
                
                <div className="d-flex justify-content-center mt-4">
                  <div className="col-lg-7">
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text pb-3 pt-2" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="Search faq..." aria-label="Username" aria-describedby="basic-addon1" style={{color: "#6e6b7b"}}/>
              </div>
              </div>
              </div>
              {/* end-row */}
            </div>
            </div>

    </div>
    <div className="row gy-4">
      <div className="col-lg-3 col-md-4  col-sm-12">
        <ul className="nav nav-tabs flex-column mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link active show" aria-expanded="true" role="tab" aria-selected="true" data-bs-toggle="tab" href="#tab-1"><i className="fa-solid fa-credit-card me-2 ps-2"></i>Payment</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mt-2" data-bs-toggle="tab"  aria-expanded="false" role="tab" aria-selected="false" href="#tab-2"><i className="fa-solid fa-bag-shopping me-2 ps-2"></i>Delivery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mt-2" data-bs-toggle="tab" aria-expanded="false" role="tab" aria-selected="false" href="#tab-3"><i className="fa-solid fa-arrows-rotate me-2 ps-2"></i>Cancellation & Return</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mt-2" data-bs-toggle="tab" aria-expanded="false" role="tab" aria-selected="false" href="#tab-4"><i className="fa-solid fa-box-open me-2 ps-2"></i>My Orders</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mt-2" data-bs-toggle="tab" aria-expanded="false" role="tab" aria-selected="false" href="#tab-5"><i class="fa-solid fa-gear me-2 ps-2"></i>Product & Services</a>
          </li>
        </ul>
        <img src={faqGirl} alt="" className="img-fluid mt-4 " style={{height:"15em"}} />
      </div>
      
      <div className="col-lg-9 col-md-8 col-sm-12">
        <div className="tab-content">
          <div className="tab-pane active" id="tab-1">
            <div className="row gy-4">
              <div className="col-lg-12 details order-2 order-lg-1">
                  
                <div className="accordion" id="accordionExample">
                    <div className="card accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Does my subscription automatically renew?
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium voluptates assumenda rem obcaecati molestias nisi. Animi distinctio in molestiae numquam perferendis deserunt alias cum eius. Illo fugit totam magni?</p>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Can I store the item on an intranet so everyone has access?
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium voluptates assumenda rem obcaecati molestias nisi. Animi distinctio in molestiae numquam perferendis deserunt alias cum eius. Illo fugit totam magni?</p>
                            
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">        
                             What does non-exclusive mean?
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium voluptates assumenda rem obcaecati molestias nisi. Animi distinctio in molestiae numquam perferendis deserunt alias cum eius. Illo fugit totam magni?</p>
                            
                        </div>
                        </div>
                    </div>
                    
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">        
                        Is the Regular License the same thing as an editorial license?
                        </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium voluptates assumenda rem obcaecati molestias nisi. Animi distinctio in molestiae numquam perferendis deserunt alias cum eius. Illo fugit totam magni?</p>
                            
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">        
                        Which license do I need for an end product that is only accessible to paying users?
                        </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium voluptates assumenda rem obcaecati molestias nisi. Animi distinctio in molestiae numquam perferendis deserunt alias cum eius. Illo fugit totam magni?</p>
                            
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">        
                        Which license do I need to use an item in a commercial?
                        </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium voluptates assumenda rem obcaecati molestias nisi. Animi distinctio in molestiae numquam perferendis deserunt alias cum eius. Illo fugit totam magni?</p>
                            
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSeven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">         
                        Can I re-distribute an item? What about under an Extended License?
                        </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium voluptates assumenda rem obcaecati molestias nisi. Animi distinctio in molestiae numquam perferendis deserunt alias cum eius. Illo fugit totam magni?</p>
                            
                        </div>
                        </div>
                    </div>

                    </div>

              </div>
          
            </div>
          </div>
          <div className="tab-pane" id="tab-2">
            <div className="row gy-4">
              <div className="col-lg-12 details order-2 order-lg-1">
              <div className="accordion" id="accordionExample">
                    <div className="card accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Does my subscription automatically renew?
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium voluptates assumenda rem obcaecati molestias nisi. Animi distinctio in molestiae numquam perferendis deserunt alias cum eius. Illo fugit totam magni?</p>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Can I store the item on an intranet so everyone has access?
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium voluptates assumenda rem obcaecati molestias nisi. Animi distinctio in molestiae numquam perferendis deserunt alias cum eius. Illo fugit totam magni?</p>
                            
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">        
                             What does non-exclusive mean?
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium voluptates assumenda rem obcaecati molestias nisi. Animi distinctio in molestiae numquam perferendis deserunt alias cum eius. Illo fugit totam magni?</p>
                            
                        </div>
                        </div>
                    </div>
                    </div>


                </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-3">
            <div className="row gy-4">
              <div className="col-lg-12 details order-2 order-lg-1">
                <div className="accordion" id="accordionExample">
                    <div className="card accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Does my subscription automatically renew?
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium voluptates assumenda rem obcaecati molestias nisi. Animi distinctio in molestiae numquam perferendis deserunt alias cum eius. Illo fugit totam magni?</p>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Can I store the item on an intranet so everyone has access?
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium voluptates assumenda rem obcaecati molestias nisi. Animi distinctio in molestiae numquam perferendis deserunt alias cum eius. Illo fugit totam magni?</p>
                            
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">        
                             What does non-exclusive mean?
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium voluptates assumenda rem obcaecati molestias nisi. Animi distinctio in molestiae numquam perferendis deserunt alias cum eius. Illo fugit totam magni?</p>
                            
                        </div>
                        </div>
                    </div>
                    </div>


              </div>
          
            </div>
          </div>
          <div className="tab-pane" id="tab-4">
            <div className="row gy-4">
              <div className="col-lg-12 details order-2 order-lg-1">
              <div className="accordion" id="accordionExample">
                    <div className="card accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Does my subscription automatically renew?
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium voluptates assumenda rem obcaecati molestias nisi. Animi distinctio in molestiae numquam perferendis deserunt alias cum eius. Illo fugit totam magni?</p>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Can I store the item on an intranet so everyone has access?
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium voluptates assumenda rem obcaecati molestias nisi. Animi distinctio in molestiae numquam perferendis deserunt alias cum eius. Illo fugit totam magni?</p>
                            
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">        
                             What does non-exclusive mean?
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium voluptates assumenda rem obcaecati molestias nisi. Animi distinctio in molestiae numquam perferendis deserunt alias cum eius. Illo fugit totam magni?</p>
                            
                        </div>
                        </div>
                    </div>
                    </div>

              
              </div>
         
            </div>
          </div>
          <div className="tab-pane" id="tab-5">
            <div className="row gy-4">
              <div className="col-lg-12 details order-2 order-lg-1">
              <div className="accordion" id="accordionExample">
                    <div className="card accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Does my subscription automatically renew?
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium voluptates assumenda rem obcaecati molestias nisi. Animi distinctio in molestiae numquam perferendis deserunt alias cum eius. Illo fugit totam magni?</p>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Can I store the item on an intranet so everyone has access?
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium voluptates assumenda rem obcaecati molestias nisi. Animi distinctio in molestiae numquam perferendis deserunt alias cum eius. Illo fugit totam magni?</p>
                            
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">        
                             What does non-exclusive mean?
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium voluptates assumenda rem obcaecati molestias nisi. Animi distinctio in molestiae numquam perferendis deserunt alias cum eius. Illo fugit totam magni?</p>
                            
                        </div>
                        </div>
                    </div>
                    </div>

              
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="faq-contact">
      <div className="row mt-5">
        <div className="col-12 text-center">
          <h2 style={{color:"#6E6B7B",fontWeight:"500"}}>You still have a question?</h2>
          <p className="mb-3" style={{color:"#6E6B7B",fontWeight:"300"}}>
          If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!
            </p>
          </div>

          <div className="col-sm-6">
            <div className="card text-center faq-card-contact shadow-none py-1">
              <div className="accordion-body">
                <div className="avatar avatar-tag bg-light-primary mb-2 mx-auto mt-3">
                <i className="fa-solid fa-phone" style={{fontSize:"22px"}}></i>
                  </div>
                  <h4 className="mt-4" style={{color:"#5e5873", fontWeight:"400"}}>+ (810) 2548 2568</h4>
                  <span class="text-body text-center" style={{color:"#6E6B7B",fontWeight:"300"}}>We are always happy to help!</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 gy-2">
            <div className="card text-center faq-card-contact shadow-none py-1">
              <div className="accordion-body">
                <div className="avatar avatar-tag bg-light-primary mb-2 mx-auto mt-3">
                <i className="fa-solid fa-at" style={{fontSize:"22px"}}></i>
                  </div>
                  <h4 className="mt-4" style={{color:"#5e5873", fontWeight:"400"}}>hello@help.com</h4>
                  <span class="text-body text-center" style={{color:"#6E6B7B",fontWeight:"300"}}>Best way to get answer faster!</span>
                </div>
              </div>
            </div>

        </div>
      </section>
  </div>
</section>
{/* End Departments Section */}


    </div>
  )
}

export default Faq