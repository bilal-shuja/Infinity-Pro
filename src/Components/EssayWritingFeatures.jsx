import React from 'react';
import colorScheme from '../Styling.js'
import file from '../Images/file.svg';
import chat from '../Images/Support.svg';
import anonymus from '../Images/AnonymityandPrivacy.svg';
import keyboard from '../Images/UnlimitedRevisions.svg';
import check from '../Images/check.svg';
import Top from '../Images/Top.svg';

const EssayWritingFeatures = () => {
  return (
    <>
    {/* ======= Departments Section ======= */}
<section id="departments" className="departments" style={{background:colorScheme.backgroundTwo}}>
  <div className="container">
    <div className="section-title">
      <h2 style={{color:"#111"}}>Our Essay Writing Service Features</h2>
    </div>

    <div className="row">
    <div className="col-lg-6 mt-5">
    
    <div className="row">
    <div className="col-lg-12">
    <div className="feature-right" style={{display:"flex",gap:"20px"}}>
     <img className="file-png"src={file} alt="" style={{width:"3em"}}/>
        <h3 className="d-flex align-items-center">Free Originality Report</h3><img src={Top} alt="" />
    </div>
        <h6 className="mt-2">A full report on originality can be attached to your essay writing order to ensure your paper's originality.</h6>
    </div>
    </div>
        {/*end-nested-row  */}

    <div className="row mt-5">
    <div className="col-lg-12">
    <div className="feature-right" style={{display:"flex",gap:"20px"}}>
     <img src={chat} alt="" style={{width:"3em"}} />
        <h3>24/7 Support</h3>
      </div>
        <h6 className="mt-2">You can contact us any time and ask to write essay for me; we'll always be happy to help you out.</h6>

    </div>
    </div>
            {/*end-nested-row  */}

    <div className="row mt-5">
    <div className="col-lg-12">
     <div className="feature-right" style={{display:"flex",gap:"20px"}}>
     <img src={anonymus} alt="" style={{width:"3em"}} />
        <h3>Anonymity</h3>
    </div>
        <h6 className="mt-2">We care about the privacy of our clients and when you pay for essay, we will never share your personal information with any third parties or even paper writers.y.</h6>
    </div>
    </div>
            {/*end-nested-row  */}
<div className="row mt-5">
    <div className="col-lg-12">
   <div className="feature-right" style={{display:"flex",gap:"17px"}}>
     <img src={keyboard} alt="" style={{width:"3em"}} />
        <h3>Unlimited Edits</h3>
    </div>
        <h6 className="mt-2">When you pay for essay writing, you have 30 days after the order was completed to ask our essay writers for free revisions, in case you need any.</h6>
    </div>
    </div>
            {/*end-nested-row  */}



</div>
{/* end-col-6 */}

    <div className="col-lg-6 col-md-4 col-sm-8">
    <div className="row">
   <div className="card outer-card">
    <div className="card card-2">
    <h3 className="text-center mt-5 mb-3" style={{fontSize:"24px",fontWeight:"800",color:"#111"}}>Price Includes</h3>
   <div className="d-flex justify-content-around" >
    
    <img src={check} alt="" className="img-fluid" style={{width:"2.5rem",height:"2.5rem"}}/>
 
       <h5 className="d-flex align-items-center mt-1"style={{fontSize:"18px",fontWeight:"800",color:colorScheme.mainColor}}>Originality Report</h5>
       <h4 className="d-flex align-items-center mt-1" style={{fontSize:"18px",color:colorScheme.lightGrey,fontWeight:"400"}}><del>$15.99</del></h4>
       <h4 className="d-flex align-items-center mt-1" style={{fontSize:"18px",color:" #fd8c04",fontWeight:"700"}}>Free</h4>
</div>
<div className="ms-3"style={{width:"33rem"}}>
<hr />
</div>

   <div className="d-flex justify-content-around" >
    
    <img src={check} alt="" className="img-fluid"  style={{width:"2.5rem",height:"2.5rem"}}/>
 
       <h5 className="d-flex align-items-center mt-1"style={{fontSize:"18px",fontWeight:"800",color:colorScheme.mainColor}}>The Best Writer</h5>
       <h4 className="d-flex align-items-center mt-1" style={{fontSize:"18px",color:colorScheme.lightGrey,fontWeight:"400",marginLeft:"12px"}}><del>$15.99</del></h4>
       <h4 className="d-flex align-items-center mt-1" style={{fontSize:"18px",color:" #fd8c04",fontWeight:"700"}}>Free</h4>
</div>
<div className="ms-3"style={{width:"33rem"}}>
<hr />
</div>

   <div className="d-flex justify-content-around" >
    
    <img src={check} alt="" className="img-fluid" style={{width:"2.5rem",height:"2.5rem",marginLeft:"2px"}}/>
 
       <h5 className="d-flex align-items-center mt-1"style={{fontSize:"18px",fontWeight:"800",color:colorScheme.mainColor}}>Formatting</h5>
       <h4 className="d-flex align-items-center mt-1" style={{fontSize:"18px",color:colorScheme.lightGrey,fontWeight:"400",marginLeft:"3em"}}><del>$15.99</del></h4>
       <h4 className="d-flex align-items-center mt-1" style={{fontSize:"18px",color:" #fd8c04",fontWeight:"700"}}>Free</h4>
</div>
<div className="ms-3"style={{width:"33rem"}}>
<hr />
</div>

   <div className="d-flex justify-content-around" >
    
    <img src={check} alt="" className="img-fluid" style={{width:"2.5rem",height:"2.5rem",marginLeft:"3px"}}/>
 
       <h5 className="d-flex align-items-center mt-1"style={{fontSize:"18px",fontWeight:"800",color:colorScheme.mainColor}}>Unlimited Edits</h5>
       <h4 className="d-flex align-items-center mt-1 ms-3" style={{fontSize:"18px",color:colorScheme.lightGrey,fontWeight:"400"}}><del>$15.99</del></h4>
       <h4 className="d-flex align-items-center mt-1" style={{fontSize:"18px",color:" #fd8c04",fontWeight:"700"}}>Free</h4>
</div>
<div className="ms-3"style={{width:"33rem"}}>
<hr />
</div>

   <div className="d-flex justify-content-around" >
    
    <img src={check} alt="" className="img-fluid ms-1" style={{width:"2.5rem",height:"2.5rem"}}/>
 
       <h5 className="d-flex align-items-center mt-1"style={{fontSize:"18px",fontWeight:"800",color:colorScheme.mainColor}}>Outline</h5>
       <h4 className="d-flex align-items-center mt-1" style={{fontSize:"18px",color:colorScheme.lightGrey,fontWeight:"400",marginLeft:"4.5rem"}}><del>$15.99</del></h4>
       <h4 className="d-flex align-items-center mt-1" style={{fontSize:"18px",color:" #fd8c04",fontWeight:"700"}}>Free</h4>
</div>
<div className="ms-3"style={{width:"33rem"}}>
<hr />
</div>

   <div className="d-flex justify-content-around" >
    
    <img src={check} alt=""className="img-fluid ms-2" style={{width:"2.5rem",height:"2.5rem"}}/>
 
       <h5 className="d-flex align-items-center mt-1"style={{fontSize:"18px",fontWeight:"800",color:colorScheme.mainColor}}>Title Page</h5>
       <h4 className="d-flex align-items-center mt-1" style={{fontSize:"18px",color:colorScheme.lightGrey,fontWeight:"400",marginLeft:"3.5rem"}}><del>$15.99</del></h4>
       <h4 className="d-flex align-items-center mt-1" style={{fontSize:"18px",color:" #fd8c04",fontWeight:"700"}}>Free</h4>
</div>

<div>
<p className="d-flex justify-content-center ms-2 mt-4" style={{fontSize:"24px", fontWeight:"700",color: "#0e101a"}}>Get all these features for  &nbsp; <span style={{color:"#92abc9",fontWeight:"400"}}><del>$65.77</del></span> &nbsp; <span style={{color:"#fd8c04",fontWeight:"700"}}>FREE</span></p>
</div>

<div className="row pb-5">
<div className="d-flex justify-content-center">
  <button className="btn btn-outline-light mt-0 w-50 p-3 btn-do-my-paper"style={{backgroundColor:colorScheme.mainColor,color:colorScheme.white}}>Do My Paper</button>

</div>
</div>

  
    </div>
    {/* end-card */}  
    </div>
    {/* background-card */}

    </div>
    {/* end-nested-col */}
    </div>
    {/* end-nested-row */}

    {/* end-col */}
    
    </div>
    {/* end-main-row */}
  
  </div>
</section>
{/* End Departments Section */}


    
    </>
  )
}

export default EssayWritingFeatures