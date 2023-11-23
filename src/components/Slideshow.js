import React from 'react';
import './Slideshow.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image1 from "../images/1.jpg"
import image2 from "../images/2.jpg"
import image3 from "../images/3.jpg"

{/*https://react-slideshow-image.netlify.app/?path=/story/introduction--page*/}

const Slideshow = () => {

    return (
        <Slide className="slide"
            autoplay={true}
            duration={5000}
            onChange={function noRefCheck(){}}
            onStartChange={function noRefCheck(){}}
            easing="ease"
        >
            <div className="each-slide-effect">
                <img className="slide-image" src={image2} alt='main_image' width={'70%'} height={'auto'}/>
            </div>
            <div className="each-slide-effect">
                <img className="slide-image" src={image3} alt='main_image' width={'70%'} height={'auto'}/>
            </div>
            <div className="each-slide-effect">
                <img className="slide-image" src={image1} alt='main_image' width={'70%'} height={'auto'}/>
            </div>
        </Slide>
    );
};

export default Slideshow;