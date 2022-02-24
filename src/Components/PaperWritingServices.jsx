import React,{useState} from 'react';
import pencil from '../Images/pencil.png';
import check from '../Images/send.png';
import colorScheme from '../Styling.js';


const PaperWritingServices = () => {

  const [indexOne, setIndexOne] = useState(1);

const returnList = ()=>{
if(indexOne === 1){
  return(
  <>
    <div className="col-lg-4">
       <div className="d-flex text-start mt-5" style={{lineHeight:"40px"}}>
      <div>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Essay</p>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Case Study</p>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Report</p>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Research Paper</p>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Presentation or Speech</p>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Annotated Bibliography</p>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Article Review</p>
        </div>
      </div>
       
       </div>
      {/* end-col */}

          <div className="col-lg-4">
       <div className="d-flex text-start mt-5" style={{lineHeight:"40px"}}>
      <div>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Literature Review</p>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Business Plan</p>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Research Proposal</p>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Book / Movie Review</p>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Editing and proofreading</p>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Reflective Writing</p>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Thesis / Dissertation</p>
        </div>
      </div>
       
       </div>
      {/* end-col */}
       <div className="col-lg-4">
       <div className="d-flex text-start mt-5" style={{lineHeight:"40px"}}>
      <div>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Admission Essay</p>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Creative Writing</p>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Critical Thinking / Review</p>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Book Reviews</p>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Term Paper</p>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Other</p>
        </div>
      </div>
       
       </div>
      {/* end-col */}
  </>
  )
}
else if(indexOne === 2){
  return(<>
  <div className="col-lg-4">
       <div className="d-flex text-start mt-5" style={{lineHeight:"40px"}}>
      <div>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Homework Assignment</p>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Statistics Assignment</p>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Physics Assignment</p>
       
        </div>
      </div>
       
       </div>
      {/* end-col */}

          <div className="col-lg-4">
       <div className="d-flex text-start mt-5" style={{lineHeight:"40px"}}>
      <div>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Engineering Assignment</p>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Biology Assignment</p>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Chemistry Assignment</p>
       
        </div>
      </div>
       
       </div>
      {/* end-col */}
       <div className="col-lg-4">
       <div className="d-flex text-start mt-5" style={{lineHeight:"40px"}}>
      <div>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Math Assignment</p>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Geography Assignment</p>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Other</p>
        
        </div>
      </div>
       
       </div>
      {/* end-col */}
  
  </>)
}
else if(indexOne === 3){
  return(<>
  <div className="col-lg-4">
       <div className="d-flex text-start mt-5" style={{lineHeight:"40px"}}>
      <div>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Multiple Choice Questions</p>
        </div>
      </div>
       
       </div>
      {/* end-col */}

          <div className="col-lg-4">
       <div className="d-flex text-start mt-5" style={{lineHeight:"40px"}}>
      <div>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Short Answer Questions</p>
        </div>
      </div>
       
       </div>
      {/* end-col */}
       <div className="col-lg-4">
       <div className="d-flex text-start mt-5" style={{lineHeight:"40px"}}>
      <div>
        <p style={{color:colorScheme.black}}><img src={check} alt="" style={{width:"1em"}}/>&nbsp;Word Problems</p>
        </div>
      </div>
       
       </div>
      {/* end-col */}
  
  </>)

}

}


  return (
    <>
    <section id="doctors" className="doctors">
      <h2 className="text-center feedback-heading" style={{color:colorScheme.black}}>The Best Paper Writing Service</h2>
      <p className="text-center feedback-heading-para mb-5" style={{color:colorScheme.black}}>Our essay writers will gladly help you with</p>

    <div className="container" style={{background:'#f3e5f5', borderRadius:"30px"}}>
    <div className="section-title">
   
    
      <div className="row">
      <div className="col-lg-12">
      
      <div className="row">
        <div className="col-lg-4 col-md-8">
        <div className="card paper-writing-card" style={{backgroundColor:colorScheme.white, borderRadius:"25px",marginTop:"-2em"}}>
        <div className="card-body">
        <div className="img-fluid">
        <img src={pencil} alt="" style={{width:"7em"}}/>
        </div>

        <div className="d-grid gap-2 mx-auto pt-5 pb-4">
        <button className="paper-writing-btn btn btn-outline-light p-3" type="button" onClick={()=>{setIndexOne(1)}} style={{backgroundColor:colorScheme.mainColor,color:colorScheme.white, borderRadius:"25px"}}>Paper Work</button>
   
        <button className="paper-writing-btn btn btn-outline-light p-3" type="button" onClick={()=>{setIndexOne(2)}} style={{backgroundColor:colorScheme.mainColor,color:colorScheme.white, borderRadius:"25px"}}>Coursework/Homework</button>
     
        <button className="paper-writing-btn btn btn-outline-light p-3" type="button" onClick={()=>{setIndexOne(3)}} style={{backgroundColor:colorScheme.mainColor,color:colorScheme.white,borderRadius:"25px" ,}}>other Assignments</button>
        </div>

        </div>
        </div>
        </div>
        <div className="col-lg-8 mt-3">
      <div className="row">
        {returnList()}
       </div>
      {/* end-row */}

    </div>
    {/* end-col */}
      </div>

      </div>
      {/* end-main-col */}
      </div>
      {/* end-main-row */}


         
    </div>

    </div>
         <div className="d-grid col-lg-3 col-sm-6  m-auto mt-5">
            <button className="btn btn-outline-light paper-writing-card p-3 writer-button" type="button" style={{backgroundColor:colorScheme.mainColor,color:colorScheme.white}}>Find Your Writer</button>
        </div>
    </section>
    </>
  )
}

export default PaperWritingServices