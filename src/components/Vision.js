import React from 'react';
import img2 from '../assets/images/vision-logos/commuinty.png'
import img4 from '../assets/images/vision-logos/eco-friendly.png'
import img1 from '../assets/images/vision-logos/fair-trade.png'
import img3 from '../assets/images/vision-logos/made-in-india.png'
import img5 from '../assets/images/vision-logos/verified.png'
import img6 from '../assets/images/vision-logos/vision-image.jpg'
import s1 from '../assets/images/social-media-icons/facebook.png'
import s2 from '../assets/images/social-media-icons/instagram.png'
import s3 from '../assets/images/social-media-icons/twitter.png'
import s4 from '../assets/images/social-media-icons/youtube.png'
const Vision = () =>{
    return(
        <div className="container-fluid">
        <section id="vision">
            <div class="vision ">
                <div class="vision-header">
                    <h1 class="section-title"><span>Our</span> Vision</h1>
                </div>
                <div class="all-visions">
                    <div class="vision-item">
                        <div class="icon">
                            <img src={img1} />
                        </div>
                        <div class="icon-content">
                            <h5>Fair Trade</h5>
                        </div>
                    </div>

                    <div class="vision-item">
                        <div class="icon">
                            <img src={img2} />
                        </div>
                        <div class="icon-content">
                            <h5>Build A Community Of Envirocitizens</h5>
                        </div>
                    </div>

                    <div class="vision-item">
                        <div class="icon">
                            <img src={img3} />
                        </div>
                        <div class="icon-content">
                            <h5>Made in India</h5>
                        </div>
                    </div>

                    <div class="vision-item">
                        <div class="icon">
                            <img src={img4} />
                        </div>
                        <div class="icon-content">
                            <h5>Eco-friendly and Sustainable</h5>
                        </div>
                    </div>

                    <div class="vision-item">
                        <div class="icon">
                            <img src={img5} />
                        </div>
                        <div class="icon-content">
                            <h5>Verified Products And Sellers</h5>
                        </div>
                    </div>
                </div>
                <div class="vision-description">
                    <div class="description">
                        <div class="para">
                            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto cupiditate, voluptatum
                                dolor
                                voluptates fuga
                                nihil reiciendis consectetur ad dicta non recusandae. Sunt, voluptas officia! Vel harum
                                rerum accusamus fugit ratione.</h5>
                            <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus facilis expedita
                                porro
                                quibusdam modi natus dolorem
                                incidunt, quas quo voluptatem? Nam iusto voluptas odit molestiae aperiam sapiente labore
                                id
                                aliquam eveniet commodi, consectetur
                                voluptates dolores magnam quis autem consequatur? Voluptatibus vero corrupti cumque
                                incidunt
                                excepturi sint hic laborum rem adipisci
                                aut. Repellat aut magni suscipit consequatur? Numquam dignissimos asperiores eaque?</h5>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, odit. Pariatur aut
                                dignissimos deserunt quibusdam obcaecati,
                                sunt molestias quae assumenda tenetur enim, cumque libero magni suscipit voluptatem
                                architecto hic facilis.</h5>

                        </div>
                        <div class="join-us">
                            <div class="join-us-content">
                                <h6>Join over 10,000+ customers
                                    who receive our awesome newsletter and marketing emails.</h6>
                            </div>
                            <div class="social-icons">
                                <div class="social-item">
                                    <a href="/"><img src={s1}/></a>
                                </div>
                                <div class="social-item">
                                    <a href="/"><img src={s2}/></a>
                                </div>
                                <div class="social-item">
                                    <a href="/"><img src={s3}/></a>
                                </div>
                                <div class="social-item">
                                    <a href="/"><img src={s4}/></a>
                                </div>

                            </div>

                            <div class="join-us-form">
                                <form class="join-us-form">
                                    <div class="email">
                                        <input class="user-email" type="text" placeholder="Enter your Email address"/>
                                    </div>
                                    <div class="recaptcha">
                                        <input type="checkbox" class="recaptcha-checkbox" id="check"/>
                                        <label for="check">
                                            <h6>I,m not a robot</h6>
                                        </label>
                                    </div>
                                    <div class="button">
                                        <a href="/" type="button" class="btn">Submit</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="vision-image">
                        <img src={img6} alt="img" />
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Vision;