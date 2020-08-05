import React, { Component } from 'react';
import { Carousel,Container } from 'react-bootstrap';
class Carouselset extends Component {
    render() {
        return (
            
                <div className="carouselclass">
                <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./photo-1542281286-9e0a16bb7366.jfif"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Add details</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./239575-nature-cloud-sunset-forest-landscape-fog-field-ultrahd-4k-wallpaper-1.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Add details</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./images.jfif"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Add details</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                </div>
            
        );
    }
}

export default Carouselset;