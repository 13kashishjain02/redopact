import React,{useEffect,useState} from 'react';
import '../assets/styles.css';
import img1 from '../assets/images/three-boxes/img-4.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
const WhatsTrending=() =>{

    const [dataR,setDataR]=useState([])
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API}/api/product-api/`,{
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res=>{
                        setDataR(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5.5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1.5
        }
      };

    return (
        <>
        
        <Carousel responsive={responsive}>
            {dataR?dataR.map(d=>{
                return (
                    <div id="rec" key={d.id} className="carousel-cell">
                    <a href="/">
                        <img src={`${process.env.REACT_APP_API}${d.image}`} alt=".." style={{width: "100%", height: "50%"}} />
                    </a>
                    <a style={{fontSize: "12px",fontWeight: "400"}} href="/">
                        <h3 style={{fontSize: "12px",fontWeight: "400"}}>{d.name}</h3>
                    </a>
                    <h2 style={{textAlign: "left", fontSize: "18px", paddingBottom: "0"}}>{d.price}</h2>
                    <div>
                        <button style={{fontSize: "12px"}} className="btn btn-outline-danger">
                            SHOP NOW
                        </button>
                    </div>
                </div>
                )
            }):""}
</Carousel>
        </>
    );
}

export default WhatsTrending;