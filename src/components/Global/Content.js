import React,{Component} from 'react';
import genesis from './imagenes/genesis.jpg';
import chevrolet from './imagenes/chevrolet.jpg';
import chrysler from './imagenes/chrysler.jpg';
import Carousel from 'react-bootstrap/Carousel';
import './css/Content.css';

class Content extends Component {
  render(){
    return(
      <Carousel>
  <Carousel.Item>
    <img
      className="w-responsive text-center mx-auto p-3 mt-2 w-75 h-25 d-flex justify-content-center "
      src={genesis}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Genesis</h3>
    </Carousel.Caption>

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-responsive text-center mx-auto p-3 mt-2 w-75 h-25 d-flex justify-content-center "
      src={chevrolet}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Chevrolet</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-responsive text-center mx-auto p-3 mt-2 w-75 h-25 d-flex justify-content-center "
      src={chrysler}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Chrysler</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



    );
  }

}





export default Content;
