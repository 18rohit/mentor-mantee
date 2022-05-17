import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from '../images/imgg1.jfif' ;
import img2 from '../images/imgg2.jpg';
import img3 from '../images/imgg3.png';

function Slides(props){
    const heightOfImages= ((window.innerHeight*2)/3).toString()+"px";
    return(
        <div style={{width:'100%' ,textAlign:'centre', marginTop:'10px'}}><Carousel style={{maxWidth:'100%', paddingLeft:'5%',paddingRight:'5%'}}>
            <Carousel.Item>
                <img
                    height={heightOfImages}
                    className="d-block w-100"
                    src={img1}
                    alt=""
                />
                <Carousel.Caption>
                    <p>img1</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    height={heightOfImages}
                    className="d-block w-100"
                    src={img2}
                    alt=""
                />
                <Carousel.Caption>
                    <p>img2</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    height={heightOfImages}
                    className="d-block w-100"
                    src={img3}
                    alt=""
                />
                <Carousel.Caption>
                    <p>img3</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default Slides;

