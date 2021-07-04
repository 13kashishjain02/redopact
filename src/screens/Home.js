import React, {} from 'react'
import Slider from '../components/Slider';
import Card1 from '../components/Card1';
import FeaturedCard from '../components/FeaturedCard';
import Recommendation from '../components/Recommendation';
import WhatsTrending from '../components/WhatsTrending';
import History from '../components/History';
import Blog from '../components/Blog';
import Vision from '../components/Vision';
import Gifts from '../components/Gifts';
import Testimonials from '../components/Testimonials';
import Bamboo from '../components/Bamboo';
import img1 from '../assets/images/three-boxes/img-4.jpg'
import img2 from '../assets/images/three-boxes/img-2.jpg'
import img3 from '../assets/images/three-boxes/img-3.jpg'

const Home=()=>{
    return (
        <>
        <Slider/>
        <div className="Container" style={{marginTop:"-40px"}}>
            
                <div className="col-10 offset-1" >
                    <div className="row">
                        <div className="col-4">
                        <Card1 image={img1} title="Card title"/>
                        </div>
                        <div className="col-4">
                        <Card1 image={img2} title="Card title"/>
                        </div>
                        <div className="col-4">
                        <Card1 image={img3} title="Card title"/>
                        </div>
                    </div>
                </div>
           
        </div>
        <FeaturedCard/>
        <h1 style={{paddingTop: "20px", paddingBottom: "20px" ,paddingLeft: "30px", fontSize:"30px", fontWeight:"700"}} className="section-title">Browsing 
            <span> History</span></h1>
        <History/>
        <Bamboo/>
        <h1 style={{paddingTop: "20px", paddingBottom: "20px" ,paddingLeft: "30px", fontSize:"30px", fontWeight:"700"}} className="section-title">RECOMME 
            <span>NDATION</span></h1>
        <Recommendation/>
        <h1 style={{paddingTop: "20px", paddingBottom: "20px" ,paddingLeft: "30px", fontSize:"30px", fontWeight:"700"}} className="section-title">WHAT'S 
            <span> TRENDING</span></h1>
        <WhatsTrending/>

        <Gifts/>
        <h1 style={{paddingTop: "20px", paddingBottom: "20px" ,paddingLeft: "30px", fontSize:"30px", fontWeight:"700"}} className="section-title">BLO 
            <span>GS</span></h1>
        <Blog/>
        <Vision/>
        <h1 style={{paddingTop: "20px", paddingBottom: "20px" ,paddingLeft: "30px", fontSize:"30px", fontWeight:"700"}} className="section-title">OUR 
            <span> VISION</span></h1>
        <Testimonials/>

       
        <div style={{height: '400px'}}></div>
        
        </>
    )
}

export default Home;