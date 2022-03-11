import React from 'react';
import colorScheme from '../Styling.js';
import sitejabber from '../Images/Sitejabber.svg';
import Reseller from '../Images/ResellerRatinglogo.svg';
import Review from '../Images/review4.svg';
const LatestFeedback = () => {
  return (
    <>
{/* ======= Doctors Section ======= */}
<section id="doctors" className="doctors">
  <div className="container">
    <div className="section-title">
      <h2 className="text-center feedback-heading" style={{color:colorScheme.black}}>Latest Feedback From Our Customers</h2>
      <p className="feedback-heading-para" style={{color:colorScheme.black}}>Choose needed criteria and filter the reviews to see feedback from your peers.</p>
    </div>
    <div className="row">
        <div className="col-lg-12">
    <div className="d-flex justify-content-evenly">
         
            <div className="card" style={{borderRadius:"10px" ,borderColor:colorScheme.mainColor,cursor:"pointer"}}>
            <div className="card-body">
        <div className="d-flex justify-content-around">
            <div className="mt-1"style={{fontSize:"14px",color:colorScheme.mainColor,fontWeight:"600"}}>Reviews</div>
            <img src={sitejabber} alt="" className="img-fluid"/>
            </div>
                {/* end-card-body */}
            </div>
            {/* end-card */}

        </div>
            <div className="card feedback-card-2" style={{borderRadius:"10px" ,cursor:"pointer"}}>
            <div className="card-body">
        <div className="d-flex justify-content-around">
            <div className="mt-1"style={{fontSize:"14px",color:"#92ABC9"}}>Reviews</div>
            <img src={sitejabber} alt="" className="img-fluid"/>
            </div>
                {/* end-card-body */}
            </div>
            {/* end-card */}
        </div>
            
            <div className="card feedback-card-2" style={{borderRadius:"10px",cursor:"pointer"}}>
            <div className="card-body">
        <div className="d-flex justify-content-around">
            <div className="mt-1"style={{fontSize:"14px",color:"#92ABC9"}}>Reviews</div>&nbsp;
            <img src={Reseller} alt="" className="img-fluid" style={{width:"8em", marginTop:"1px"}}/>
            </div>
                {/* end-card-body */}
            </div>
            {/* end-card */}
        </div>
            </div>
            {/* end-col */}
        </div>
        {/* end-flex-box */}
    </div>
    {/* end-row */}
    

<div className="row mt-4">
  <div className="col-lg-12 p-3">
    <div id="carouselOne" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active p-3">
          <div className="row">
          
            <div className="col-md-4">
              <div className="card feedback-slider-card-1">
                <div className="card-body" style={{height:"380px"}}>
                  <div className="text-center cutomers mt-3" style={{fontSize:"18px",color:"#92abc9",fontFamily:"Roboto, sans-serif"}}> Customer ID: #726220</div>
                    <div style={{width:"23em"}}>
                    <hr />
                    </div>
                    <div className="text-center">
                    <img src={Review} alt="" />
                    </div>
                   <div className="writer text-center mt-2" style={{fontSize:"18px",color:colorScheme.lightGrey}}>
                   Writer: <span style={{color:colorScheme.mainColor,fontWeight:"700"}}>Samuel P.</span>
                   </div>

                   <div className="topic" style={{fontSize:"18px",fontWeight:"700",color:colorScheme.black,lineHeight:"48px"}}>Essay1</div>
                    <div className="review-text" style={{fontSize:"16px",color:colorScheme.black}}>
                    Amazing work as usual! delivers always before my due date and very well written papers. Deff always hiring her!!
                    </div>
                    <div className="review-date text-center"  style={{fontSize:"17px",color:colorScheme.lightGrey,lineHeight:"98px"}}>2/18/2022</div>
                </div>
              </div>
            </div>
            {/* end-col */}

           <div className="col-md-4">
              <div className="card feedback-slider-card-1">
                <div className="card-body" style={{height:"380px"}}>
                  <div className="text-center cutomers mt-3" style={{fontSize:"18px",color:colorScheme.lightGrey,fontFamily:"Roboto, sans-serif"}}> Customer ID: #726220</div>
                    <div style={{width:"23em"}}>
                    <hr />
                    </div>
                    <div className="text-center">
                    <img src={Review} alt="" />
                    </div>
                   <div className="writer text-center mt-2" style={{fontSize:"18px",color:colorScheme.lightGrey}}>
                   Writer: <span style={{color:colorScheme.mainColor,fontWeight:"700"}}>Samuel P.</span>
                   </div>

                   <div className="topic" style={{fontSize:"18px",fontWeight:"700",color:colorScheme.black,lineHeight:"48px"}}>Essay2</div>
                    <div className="review-text" style={{fontSize:"16px",color:colorScheme.black}}>
                    Amazing work as usual! delivers always before my due date and very well written papers. Deff always hiring her!
                    
                    </div>
                    <div className="review-date text-center mt-5"  style={{fontSize:"17px",color:colorScheme.lightGrey}}>2/18/2022</div>
                </div>
              </div>
            </div>

            {/* end-col */}

             <div className="col-md-4">
              <div className="card feedback-slider-card-1">
                <div className="card-body" style={{height:"380px"}}>
                  <div className="text-center cutomers mt-3" style={{fontSize:"18px",color:colorScheme.lightGrey,fontFamily:"Roboto, sans-serif"}}> Customer ID: #726220</div>
                    <div style={{width:"23em"}}>
                    <hr />
                    </div>
                    <div className="text-center">
                    <img src={Review} alt="" />
                    </div>
                   <div className="writer text-center mt-2" style={{fontSize:"18px",color:colorScheme.lightGrey}}>
                   Writer: <span style={{color:colorScheme.mainColor,fontWeight:"700"}}>Samuel P.</span>
                   </div>

                   <div className="topic" style={{fontSize:"18px",fontWeight:"700",color:colorScheme.black,lineHeight:"48px"}}>Essay3</div>
                    <div className="review-text" style={{fontSize:"16px",color:colorScheme.black}}>
                    Lorem, ipsum dolor.
                    {/* Amazing work as usual! delivers always before my due date and very well written papers. Deff always hiring her!! */}
                    </div>
                    <div className="review-date text-center mt-5"  style={{fontSize:"17px",color:colorScheme.lightGrey}}>2/18/2022</div>
                </div>
              </div>
            </div>
            {/* end-col */}
          </div>
          {/* end-row */}        
        </div>
        {/* carousel-item */}

        <div className="carousel-item p-3">
          <div className="row">
                <div className="col-md-4">
              <div className="card feedback-slider-card-1">
                <div className="card-body" style={{height:"380px"}}>
                  <div className="text-center cutomers mt-3" style={{fontSize:"18px",color:"#92abc9",fontFamily:"Roboto, sans-serif"}}> Customer ID: #726220</div>
                    <div style={{width:"23em"}}>
                    <hr />
                    </div>
                    <div className="text-center">
                    <img src={Review} alt="" />
                    </div>
                   <div className="writer text-center mt-2" style={{fontSize:"18px",color:"#92abc9"}}>
                   Writer: <span style={{color:"#367fd3",fontWeight:"700"}}>Samuel P.</span>
                   </div>

                   <div className="topic" style={{fontSize:"18px",fontWeight:"700",color:"#0e101a",lineHeight:"48px"}}>Essay</div>
                    <div className="review-text" style={{fontSize:"16px",color:"#0e101a"}}>
                    Amazing work as usual! delivers always before my due date and very well written papers. Deff always hiring her!!
                    </div>
                    <div className="review-date text-center"  style={{fontSize:"17px",color:"#92abc9",lineHeight:"98px"}}>2/18/2022</div>
                </div>
              </div>
            </div>
            {/* end-col */}

                <div className="col-md-4">
              <div className="card feedback-slider-card-1">
                <div className="card-body" style={{height:"380px"}}>
                  <div className="text-center cutomers mt-3" style={{fontSize:"18px",color:"#92abc9",fontFamily:"Roboto, sans-serif"}}> Customer ID: #726220</div>
                    <div style={{width:"23em"}}>
                    <hr />
                    </div>
                    <div className="text-center">
                    <img src={Review} alt="" />
                    </div>
                   <div className="writer text-center mt-2" style={{fontSize:"18px",color:"#92abc9"}}>
                   Writer: <span style={{color:"#367fd3",fontWeight:"700"}}>Samuel P.</span>
                   </div>

                   <div className="topic" style={{fontSize:"18px",fontWeight:"700",color:"#0e101a",lineHeight:"48px"}}>Essay</div>
                    <div className="review-text" style={{fontSize:"16px",color:"#0e101a"}}>
                    Amazing work as usual! delivers always before my due date and very well written papers. Deff always hiring her!!
                    </div>
                    <div className="review-date text-center"  style={{fontSize:"17px",color:"#92abc9",lineHeight:"98px"}}>2/18/2022</div>
                </div>
              </div>
            </div>
            {/* end-col */}

         <div className="col-md-4">
              <div className="card feedback-slider-card-1">
                <div className="card-body" style={{height:"380px"}}>
                  <div className="text-center cutomers mt-3" style={{fontSize:"18px",color:"#92abc9",fontFamily:"Roboto, sans-serif"}}> Customer ID: #726220</div>
                    <div style={{width:"23em"}}>
                    <hr />
                    </div>
                    <div className="text-center">
                    <img src={Review} alt="" />
                    </div>
                   <div className="writer text-center mt-2" style={{fontSize:"18px",color:"#92abc9"}}>
                   Writer: <span style={{color:"#367fd3",fontWeight:"700"}}>Samuel P.</span>
                   </div>

                   <div className="topic" style={{fontSize:"18px",fontWeight:"700",color:"#0e101a",lineHeight:"48px"}}>Essay</div>
                    <div className="review-text" style={{fontSize:"16px",color:"#0e101a"}}>
                    Amazing work as usual! delivers always before my due date and very well written papers. Deff always hiring her!!
                    </div>
                    <div className="review-date text-center"  style={{fontSize:"17px",color:"#92abc9",lineHeight:"98px"}}>2/18/2022</div>
                </div>
              </div>
            </div>
            {/* end-col */}

          </div>
          {/* end-row */}
        </div>
   
      </div>
    </div>

    </div>
    {/* end-main-col */}
    
    </div>
    {/* end-row */}

      <div className="row">
     <div className="d-flex justify-content-evenly">
    <a className="btn btn-outline-light btn-left"href="#carouselOne" role="button" data-slide="prev" style={{fontSize:"26px" ,borderRadius:"25px",backgroundColor:colorScheme.mainColor}}>
      <i className="fa fa-arrow-left" style={{color:colorScheme.white}} />
    </a>
    <a className="btn btn-outline-light btn-right" href="#carouselOne" role="button" data-slide="next" style={{fontSize:"26px",borderRadius:"25px",backgroundColor:colorScheme.mainColor}}>
      <i className="fa fa-arrow-right" style={{color:colorScheme.white}} />
    </a>
   </div>
  
    </div>
    {/* end-row */}

    <div className="d-flex justify-content-center mt-5">
    <button className="btn btn-outline-light check-all-review-btn" style={{backgroundColor:colorScheme.mainColor,color:colorScheme.white,padding:"17px 20px",borderRadius:"6px",width:"240px"}}>Check All Reviews</button>
    </div>
<div style={{width:"90em" ,marginTop:"7em", color:colorScheme.lightGrey}}>
<hr />
</div>
  </div>
</section>{/* End Doctors Section */}

    </>
  )
}

export default LatestFeedback