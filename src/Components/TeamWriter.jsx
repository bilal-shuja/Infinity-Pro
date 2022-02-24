import React,{ useState, useEffect } from 'react';
import Image from '../Images/unsplash.jpg';
import writer from '../Images/writer.jpg';
const getWindowDimension =()=>{
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
const Team = () => {




const [windowDimensions, setWindowDimensions] = useState(getWindowDimension());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimension());
    }
     if(windowDimensions){
      console.log(windowDimensions.height);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

   
  }, []);






  const responsiveShit = ()=>{
    if(windowDimensions.height <= '1360' && windowDimensions.width <='750'){

     return(
      <>
      
          <div class="card card-1" style={{maxHeight:"80vh" ,width:"90em",minHeight:'40vh',borderRadius:'20px',alignItems:"center"}}>
            <div className="row">
            <div className="col-lg-12 col-md-10 col-sm-12">
            <div className="card mb-5 about-writer ms-2 mt-4"  style={{borderRadius: "13px",backgroundColor:"white",boxShadow:"10px 10px 5px 0px rgba(0,0,0,0.75)", maxWidth:"16em", minWidth:"10em", width:"16em"}}>
            <div className="card-body">
            <div className="row">
            <div className="col-lg-4">
            <img  src={writer} alt="" style={{width:"6em", borderRadius:"90px"}}/>
            </div>
            <div className="col-lg-8">
            <h5 className="card-title text-start mt-3 ms-4" style={{color:"#111",fontWeight:"800"}}>Susan M.</h5>
            <h5 className="card-title text-start ms-4" style={{fontFamily:"Times New Roman, Times, serif",fontWeight:"bolder", color:"#9e9e9e"}}>5.0
             <i className="fa fa-star rating-color writer-rating"></i>
               <i className="fa fa-star rating-color writer-rating"></i>
               <i className="fa fa-star rating-color writer-rating"></i>
              <i className="fa fa-star rating-color writer-rating"></i>
              <i className="fa fa-star rating-color writer-rating"></i>
            </h5>
            <h5 className="card-title text-end" style={{fontSize:"17px",fontFamily:"Times New Roman, Times, serif",fontWeight:"bolder", color:"#9e9e9e"}}>(1281 reviews)</h5>
            </div>
            </div>
          {/* end-row */}
          <div className="d-flex justify-content-center">
          <hr />
          </div>

          <div className="row">
          <div className="col-lg-6">
          <h6 className="card-title text-start" style={{fontSize:"17px",fontFamily:"Times New Roman, Times, serif",fontWeight:"bolder", color:"#92abc9"}}>Degree</h6>
          </div>
          <div className="col-lg-6">
           <h5 className="card-title text-start" style={{fontSize:"19px",fontFamily:"Tahoma",fontWeight:"900", color:"#1977cc"}}>Bachelor's</h5>
          </div>
          </div>
          {/* end-row */}

            <div className="row">
          <div className="col-lg-6">
          <h6 className="card-title text-start" style={{fontSize:"17px",fontFamily:"Times New Roman, Times, serif",fontWeight:"bolder", color:"#92abc9"}}>Total orders:</h6>
          </div>
          <div className="col-lg-6">
           <h5 className="card-title text-start" style={{fontSize:"19px",fontFamily:"Tahoma",fontWeight:"900", color:"#1977cc"}}>3667</h5>
          </div>
          </div>
            {/* end-row */}



           <div className="d-flex justify-content-center">
          <hr/>
          </div>

          <div className="row">
          <div className="col-lg-12">
          <h6 className="card-title text-start" style={{fontSize:"17px",fontFamily:"Times New Roman, Times, serif",fontWeight:"bolder", color:"#92abc9"}}>Competences:</h6>
          <h5 className="card-title text-start" style={{fontSize:"14px", color:"#212121", fontWeight:"600"}}>"Medicien and Health"</h5>
          <h5 className="card-title text-start" style={{fontSize:"14px", color:"#212121",fontWeight:"600"}}>"Business and Finance"</h5>
          </div>
         
          </div>
            {/* end-row */}
         
                 {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, vel.skjhdsdjkh</p> */}
            
            </div>
            </div>
            </div>
          </div>

            <div className="row">
            <div className="col-lg-12 col-md-10 col-sm-12">
            <div className="card-body" style={{maxWidth:"40em", minWidth:"20em", width:"40em",margin:"20px", justifyContent:"center",height:"60vh", minHeight:"30vh", maxHeight:"80vh"}}>
                <h3 className="card-title text-start" style={{color:"#111",fontWeight:"800"}}>Recent Review About this Writer</h3>
                  <p className="card-text text-start text-primary" style={{fontSize:"25px", fontFamily:"cursive"}}><img  src="https://img.icons8.com/wired/64/000000/motivation-daily-quotes.png" alt=""/>User ID: #231078</p>
                   <div className="d-flex justify-content-center">
                    <hr />
                 </div>

                 <h4 className="card-title text-start" style={{color:"#111",fontWeight:"800"}}>Critical Thinking/Review</h4>
                  <p className="card-title text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim assumenda accusantium a, accusamus fuga veritatis nemo mollitia quidem eius consectetur nobis unde adipisci, voluptatem magnam labore quis natus similique voluptatum?</p>
                        <div className="row">
                        <div className="col-lg-6">
                        <button className="btn btn-outline-light about-writer" style={{color:"#1977cc"}}>About Writer</button>
                        <button className="btn btn-primary ms-2">Hire Writer</button>

                          </div>
                        </div>
                     </div>
                  </div>
                </div>
             </div>


             {/* second */}
             
      </>
    )


    }
    else{
   return(
      <>
      <div class="card card-1" style={{flexDirection:"row",maxWidth:"60em",maxHeight:"80vh" ,minWidth:"50em",minHeight:'40vh' ,display:'flex',borderRadius:'20px'}}>
            <div className="row">
            <div className="col-lg-12 col-md-10 col-sm-12">
            <div className="card mb-5 about-writer ms-2 mt-4"  style={{borderRadius: "13px",backgroundColor:"white",boxShadow:"10px 10px 5px 0px rgba(0,0,0,0.75)", maxWidth:"16em", minWidth:"10em", width:"16em"}}>
            <div className="card-body">
            <div className="row">
            <div className="col-lg-4">
            <img  src={writer} alt="" style={{width:"6em", borderRadius:"90px"}}/>
            </div>
            <div className="col-lg-8">
            <h5 className="card-title text-start mt-3 ms-4" style={{color:"#111",fontWeight:"800"}}>Susan M.</h5>
            <h5 className="card-title text-start ms-4" style={{fontFamily:"Times New Roman, Times, serif",fontWeight:"bolder", color:"#9e9e9e"}}>5.0
             <i className="fa fa-star rating-color writer-rating"></i>
               <i className="fa fa-star rating-color writer-rating"></i>
               <i className="fa fa-star rating-color writer-rating"></i>
              <i className="fa fa-star rating-color writer-rating"></i>
              <i className="fa fa-star rating-color writer-rating"></i>
            </h5>
            <h5 className="card-title text-end" style={{fontSize:"17px",fontFamily:"Times New Roman, Times, serif",fontWeight:"bolder", color:"#9e9e9e"}}>(1281 reviews)</h5>
            </div>
            </div>
          {/* end-row */}
          <div className="d-flex justify-content-center">
          <hr />
          </div>

          <div className="row">
          <div className="col-lg-6">
          <h6 className="card-title text-start" style={{fontSize:"17px",fontFamily:"Times New Roman, Times, serif",fontWeight:"bolder", color:"#92abc9"}}>Degree</h6>
          </div>
          <div className="col-lg-6">
           <h5 className="card-title text-start" style={{fontSize:"19px",fontFamily:"Tahoma",fontWeight:"900", color:"#1977cc"}}>Bachelor's</h5>
          </div>
          </div>
          {/* end-row */}

            <div className="row">
          <div className="col-lg-6">
          <h6 className="card-title text-start" style={{fontSize:"17px",fontFamily:"Times New Roman, Times, serif",fontWeight:"bolder", color:"#92abc9"}}>Total orders:</h6>
          </div>
          <div className="col-lg-6">
           <h5 className="card-title text-start" style={{fontSize:"19px",fontFamily:"Tahoma",fontWeight:"900", color:"#1977cc"}}>3667</h5>
          </div>
          </div>
            {/* end-row */}



           <div className="d-flex justify-content-center">
          <hr/>
          </div>

          <div className="row">
          <div className="col-lg-12">
          <h6 className="card-title text-start" style={{fontSize:"17px",fontFamily:"Times New Roman, Times, serif",fontWeight:"bolder", color:"#92abc9"}}>Competences:</h6>
          <h5 className="card-title text-start" style={{fontSize:"14px", color:"#212121", fontWeight:"600"}}>"Medicien and Health"</h5>
          <h5 className="card-title text-start" style={{fontSize:"14px", color:"#212121",fontWeight:"600"}}>"Business and Finance"</h5>
          </div>
         
          </div>
            {/* end-row */}
         
                 {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, vel.skjhdsdjkh</p> */}
            
            </div>
            </div>
            </div>
          </div>

            <div className="row">
            <div className="col-lg-12 col-md-10 col-sm-12">
            <div className="card-body" style={{maxWidth:"40em", minWidth:"20em", width:"40em",margin:"20px", justifyContent:"center",height:"60vh", minHeight:"30vh", maxHeight:"80vh"}}>
                <h3 className="card-title text-start" style={{color:"#111",fontWeight:"800"}}>Recent Review About this Writer</h3>
                  <p className="card-text text-start text-primary" style={{fontSize:"25px", fontFamily:"cursive"}}><img  src="https://img.icons8.com/wired/64/000000/motivation-daily-quotes.png" alt=""/>User ID: #231078</p>
                   <div className="d-flex justify-content-center">
                    <hr />
                 </div>

                 <h4 className="card-title text-start" style={{color:"#111",fontWeight:"800"}}>Critical Thinking/Review</h4>
                  <p className="card-title text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim assumenda accusantium a, accusamus fuga veritatis nemo mollitia quidem eius consectetur nobis unde adipisci, voluptatem magnam labore quis natus similique voluptatum?</p>
                        <div className="row">
                        <div className="col-lg-6">
                        <button className="btn btn-outline-light about-writer" style={{color:"#1977cc"}}>About Writer</button>
                        <button className="btn btn-primary ms-2">Hire Writer</button>

                          </div>
                        </div>
                     </div>
                  </div>
                </div>
             </div>


             {/* second */}
             
      </>
    )
    }
 
  }

  
  return (
    <div>
     {/* ======= Services Section ======= */}
<section id="services" className="services">
  <div className="container">
    <div className="section-title">
      <h2 style={{color:"#000000",fontSize:"35px"}}>Team of Professional Essay Writers</h2>
      <p style={{color:"#000000",fontSize:"16px"}}>With our essay service, you'll find an essay writer for any task. Their rating is based on previous customer reviews and successful orders. Before you hire a writer, you can familiarize yourself with their track record in detail.</p>
    </div>
    <div className="row"> 
  <div className="col-lg-12 col-sm-8">
    <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">

            <div className="d-flex justify-content-center">
            <div className="">
              {responsiveShit()}
             {/* end-baba-card */}
          </div>
             
          </div>
          
        </div>
        {/* end-row */}
        
        </div>
        
        <div className="carousel-item">
          <div className="row">        
            
            <div className="d-flex justify-content-center">
            <div className="">
            {responsiveShit()}

             </div>
             
          </div>

            </div>
            {/* end-row */}
        </div>
      
      </div>
    </div>
  </div>
  <div className="row">
     <div className="col-lg-12 col-md-8 col-sm-10">
     <div className="d-flex justify-content-evenly mt-4">
    <a className="btn btn-outline-primary" href="#carouselExampleIndicators2" role="button" data-slide="prev" style={{fontSize:"26px" ,borderRadius:"25px"}}>
      <i className="fa fa-arrow-left" />
    </a>
    <a className="btn btn-outline-primary" href="#carouselExampleIndicators2" role="button" data-slide="next" style={{fontSize:"26px",borderRadius:"25px"}}>
      <i className="fa fa-arrow-right" />
    </a>
   </div>
  </div>
    </div>
    {/* end-row */}

    </div>
    {/* end-row */}

    <div className="row mt-5">
    <div className="col-lg-12">
    <div className="d-grid col-2 mx-auto">
    <button className="btn btn-outline-primary">View All Writers</button>
    </div>
    </div>
    </div>
  </div>
</section>{/* End Services Section */}
  <div className="d-flex justify-content-center">
  <hr />
  </div>
    </div>
  )
}

export default Team