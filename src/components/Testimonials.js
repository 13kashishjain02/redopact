import React from 'react';
import '../assets/styles.css';
import img1 from '../assets/images/three-boxes/img-4.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Testimonials = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items:1.5        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className="container-fluid">
<Carousel responsive={responsive} >
        
<div className="col-11" style={{backgroundColor:"white",padding:"40px",border:"0px solid", borderRadius:"10px", margin:"auto",textAlign:"center"}}>
            <div><h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum minus
                                            nulla
                                            reprehenderit? Nisi, fugit obcaecati?</h5></div>
        
        <div>
        <h6>Lorem, ipsum dolor.--1</h6>
        </div>

        </div>
<div className="col-11" style={{backgroundColor:"white",padding:"40px",border:"0px solid", borderRadius:"10px", margin:"auto",textAlign:"center"}}>
            <div><h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum minus
                                            nulla
                                            reprehenderit? Nisi, fugit obcaecati?</h5></div>
        
        <div>
        <h6>Lorem, ipsum dolor.--1</h6>
        </div>

        </div>
<div className="col-11" style={{backgroundColor:"white",padding:"40px",border:"0px solid", borderRadius:"10px", margin:"auto",textAlign:"center"}}>
            <div><h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum minus
                                            nulla
                                            reprehenderit? Nisi, fugit obcaecati?</h5></div>
        
        <div>
        <h6>Lorem, ipsum dolor.--1</h6>
        </div>

        </div>
<div className="col-11" style={{backgroundColor:"white",padding:"40px",border:"0px solid", borderRadius:"10px", margin:"auto",textAlign:"center"}}>
            <div><h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum minus
                                            nulla
                                            reprehenderit? Nisi, fugit obcaecati?</h5></div>
        
        <div>
        <h6>Lorem, ipsum dolor.--1</h6>
        </div>

        </div>

        
 
</Carousel>
</div>
    )
}

export default Testimonials