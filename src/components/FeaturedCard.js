import React from 'react';
import '../assets/styles.css';
import img1 from '../assets/images/featured-section/featured-collection-img-1.jpg'
import img2 from '../assets/images/featured-section/featured-collection-img-2.jpg'
import img3 from '../assets/images/featured-section/featured-collection-img-3.jpg'
import img4 from '../assets/images/featured-section/featured-collection-img-4.jpg'
import img5 from '../assets/images/featured-section/featured-collection-img-5.jpg'
import img6 from '../assets/images/featured-section/featured-collection-img-6.jpg'

const FeaturedCard = () => {
    return(
        <section id="featured">
        <div class="featured">
            <div class="featured-header">
                <h1 class="section-title">Featured <span>Collection</span></h1>
            </div>
            <div class="all-features">
                <div class="collection">
                    <div class="feature-top">
                        <div class="feature-left">
                            <div class="feature-item">
                                <div class="feature-name">
                                    <h2>Eco-cook and Serve</h2>
                                </div>
                                <div class="feature-img">
                                    <a href="/"><img src={img1}
                                            alt="img" /></a>
                                </div>
                            </div>

                            <div class="feature-item">
                                <div class="feature-name">
                                    <h2>Sustainable Wardrobe</h2>
                                </div>
                                <div class="feature-img">
                                    <a href="/"><img src={img2}
                                            alt="img" /></a>
                                </div>
                            </div>
                        </div>
                        <div class="feature-right">
                            <div class="feature-item">
                                <div class="feature-name">
                                    <h2>I'm Compost-able</h2>
                                </div>
                                <div class="feature-img">
                                    <a href="/"> <img src={img3}
                                            alt="img" /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="feature-bottom">
                        <div class="feature-left">
                            <div class="feature-item">
                                <div class="feature-name">
                                    <h2>Green Home Decor</h2>
                                </div>
                                <div class="feature-img">
                                    <a href="/"> <img src={img4}
                                            alt="img" /> </a>
                                </div>
                            </div>

                            <div class="feature-item">
                                <div class="feature-name">
                                    <h2>Recycle Paper-Mache it up!</h2>
                                </div>
                                <div class="feature-img">
                                    <a href="/"><img src={img5}
                                            alt="img"/></a>
                                </div>
                            </div>
                        </div>

                        <div class="feature-right">
                            <div class="feature-item">
                                <div class="feature-name">
                                    <h2>Day and Night Essentials</h2>
                                </div>
                                <div class="feature-img">
                                    <a href="/"><img src={img6}
                                            alt="img"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default FeaturedCard;