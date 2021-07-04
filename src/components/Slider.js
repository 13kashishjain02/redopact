import React, {} from 'react';
import {Carousel} from 'react-bootstrap';
import slider1 from '../assets/images/banner-1.jpg'
import slider2 from '../assets/images/banner.jpg'

const Slider=()=>{
return (
<Carousel style={{height: '400px'}} interval={10000} indicators={false}>
  <Carousel.Item>
    <img
    style={{height: '400px'}}
      className="d-block w-100"
      alt="First slide"
      src={slider1}
    />
    <Carousel.Caption style={{color: 'black'}}>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{height: '400px'}}
      className="d-block w-100"
      alt="Second slide"
      src={slider1}
    />

    <Carousel.Caption style={{color: 'black'}}>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{height: '400px'}}
      className="d-block w-100"
      src={slider2}
    alt="Third slide"
    />

    <Carousel.Caption style={{color: 'black'}}>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)};
export default Slider;