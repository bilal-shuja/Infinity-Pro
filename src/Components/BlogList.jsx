import React,{useState} from "react";
import Data from './Data.js';
import{Container, Row, Col} from 'react-grid-system';
import {Link } from 'react-router-dom';



const BlogList = () => {
  const[showLength, setShowLength] = useState(5);
  const dataLength = Data.length;
  return (
    <div className="blog-section"  style={{marginBottom:"2em"}}>
      <h1 style={{marginTop:"125px", fontWeight:"600",color:" #2c4964"}} className="text-center"> Lorem, ipsum dolor. </h1>
      <div className="container">
       <Container>
          <Row>
  {
    Data.filter((items, index)=> index <= showLength).map((items)=>{
      return(
            <Col lg={4} className="mt-3" > 
            <div className="card blog-card" style={{width:"100%",borderRadius:"10px"}}>
              <img src={items.backgroungImage} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{items.Title}</h5>
                <div className="d-flex">
                  <div className="avatar me-50">
                    <img src={items.Image} className="img-fluid" alt="Avatar" width={24} height={24} />
                  </div>
                  <div className="author-info">
                    <small className="text-muted me-25">by</small>
                    <small><a href="#avatar" className="text-body">{items.Name}</a></small>
                    <span className="text-muted ms-50 me-25">|</span>
                    <small className="text-muted">{items.Date}</small>
                  </div>
                </div>
              <div className="my-2">
                <a href="#">
                  <span className="badge rounded-pill badge-light-info me-50">{items.CateOne}</span>
                </a>
                <a href="#">
                  <span className="badge rounded-pill badge-light-primary">{items.CateTwo}</span>
                </a>
            </div>
            <p className="card-text blog-content-truncate">
              {items.para}
            </p>
            <div className="d-flex justify-content-center">
              <hr />
            </div>
            <div className="d-flex justify-content-between align-items-center">
      
          <div className="d-flex align-items-center">
            {/* <i data-feather="message-square" className="font-medium-1 text-body me-50" />
            <span className="text-body fw-bold">76 Comments</span> */}
          </div>
      
        <Link to={`${process.env.PUBLIC_URL}/blogDetails`} className="fw-bold">Read More</Link>
        </div>
      </div>
              {/* end-card-body */}
            </div>
        </Col>
      )
    })}
   </Row>
      </Container>
    </div>
    
     {dataLength === showLength+1?null:
     <div className="d-grid mx-auto col-2 mt-3">
      <button className="btn btn-outline-primary" onClick={()=>setShowLength(showLength+3)}>Load More</button>
      </div>
      }
   

    </div>
  );
};

export default BlogList;
