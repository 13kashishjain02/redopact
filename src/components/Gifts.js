import React from 'react';
import '../assets/styles.css';
import img1 from '../assets/images/gifts-section/corporate-gifts.jpg'
import img2 from '../assets/images/gifts-section/gift-for-kids.jpg'
import img3 from '../assets/images/gifts-section/gifts-for-her.jpg'
import img4 from '../assets/images/gifts-section/gifts-for-him.jpg'

const Gifts = () =>{
    return(
        <section id="gifts">

            <div className="container-fluid">
                <div className="row">
                <div class="gifts-header">
                    <h1 class="section-title">Gif<span>ts</span></h1>
                </div>
                    <div className="col-md-4 " >
                    <div class="gift-item">
                            <div class="card bg-dark text-white">
                                <img src={img1} style={{height:"600px"}} class="card-img" alt="..."/>
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <h5 class="card-text">This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                        <div class="middle">
                        <div class="top">
                            <div class="gift-item">
                                <div class="card bg-dark text-white">
                                    <img src={img2}  style={{height:"290px"}} class="card-img" alt="..."/>
                                    <div class="card-img-overlay">
                                        <h5 class="card-title">Card title</h5>
                                        <h5 class="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit longer.
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                            <div className="col-md-12" style={{marginTop:"20px"}}>
                            <div class="bottom">
                            <div class="gift-item">
                                <div class="card bg-dark text-white">
                                    <img src={img3} style={{height:"290px"}} class="card-img" alt="..."/>
                                    <div class="card-img-overlay">
                                        <h5 class="card-title">Card title</h5>
                                        <h5 class="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit longer.
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div class="gift-item">
                            <div class="card bg-dark text-white">
                                <img src={img4} style={{height:"600px"}} class="card-img" alt="..."/>
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <h5 class="card-text">This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gifts;