import React from 'react';
import Banner from '../Images/banner.jpg';
import Avatar from '../Images/avatar.jpg';
import AvatarFour from '../Images/avatarFour.jpg';

const BlogDetails = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-12">
            <h1 className="mt-5">Blog Details</h1>
            <div className="card blog-card">
            <img src={Banner} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
                <h5 className="card-title" style={{color:"#5e5873",fontWeight:"600"}}>The Best Features Coming to iOS and Web design</h5>
                <div className="d-flex">
                  <div className="avatar me-50">
                    <img src={Avatar}  className="img-fluid" alt="Avatar" width={24} height={24} />
                  </div>
                  <div className="author-info">
                    <small className="text-muted me-25">by</small>
                    <small><a href="#avatar" className="text-body">Ghani Pradita</a></small>
                    <span className="text-muted ms-50 me-25">|</span>
                    <small className="text-muted"> Jan 10, 2020</small>
                  </div>
                </div>
                <div className="my-2 mt-3 mb-3">
                <a href="#">
                  <span className="badge rounded-pill badge-light-info me-50">Gaming</span>
                </a>
                <a href="#">
                  <span className="badge rounded-pill badge-light-primary">Video</span>
                </a>
            </div>
            <p className="card-text blog-content-truncate mb-2" style={{color:"#5e5873",opacity:"0.7"}}>
            Before you get into the nitty-gritty of coming up with a perfect title, start with a rough draft: your working title. What is that, exactly? A lot of people confuse working titles with topics. Let's clear that Topics are very general and could yield several different blog posts. Think "raising healthy kids," or "kitchen storage." A writer might look at either of those topics and choose to take them in very, very different directions.A working title, on the other hand, is very specific and guides the creation of a single blog post. For example, from the topic "raising healthy kids," you could derive the following working title See how different and specific each of those is? That's what makes them working titles, instead of overarching topics.
            </p>
            <h5 className="mt-3"  style={{color:"#5e5873",fontWeight:"600",lineHeight:"1.2"}}>Unprecedented Challenge</h5>
            <ul className="p-0 mb-2" style={{color:"#5e5873",opacity:"0.7"}}>
            <li className="d-block">
                <span className="me-25">-</span>
                <span>Preliminary thinking systems</span>
            </li>
            <li className="d-block">
                <span className="me-25">-</span>
                <span>Bandwidth efficient</span>
            </li>
            <li className="d-block">
                <span className="me-25">-</span>
                <span>Green space</span>
            </li>
            <li className="d-block">
                <span className="me-25">-</span>
                <span>Social impact</span>
            </li>
            <li className="d-block">
                <span className="me-25">-</span>
                <span>Thought partnership</span>
            </li>
            <li className="d-block">
                <span className="me-25">-</span>
                <span>Fully ethical life</span>
            </li>
            </ul>
            <div className="d-flex align-items-start">
            <div className="avatar">
                <img src={AvatarFour} className="mt-4" width={60} height={60} alt="Avatar" />
            </div>
            <div className="author-info">
                <h6 className="fw-bolder-blog-details mt-4 ms-3">Willie Clark</h6>
                <p className="card-text mb-0 ms-3" style={{color:"#5e5873",opacity:"0.7"}}>
                Based in London, Uncode is a blog by Willie Clark. His posts explore modern design trends through photos
                and quotes by influential creatives and web designer around the world.
                </p>
            </div>
            </div>
            </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default BlogDetails