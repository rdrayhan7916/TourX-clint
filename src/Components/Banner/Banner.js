import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="container">
            <Carousel >
                <Carousel.Item>
                    <img
                        className="slider d-block w-100"
                        src="https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="text-warning">Amazing Tour In Madagascar</h1>
                        <button className="btn btn-danger">Book Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="slider d-block w-100"
                        src="https://images.unsplash.com/photo-1489664729864-ee8499a4ddd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-warning">Amazing Tour In Island</h1>
                        <button className="btn btn-danger">Book Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="slider d-block w-100"
                        src="https://images.unsplash.com/photo-1491571786955-fad5b6755f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-warning">Amazing Tour In Japan</h1>
                        <button className="btn btn-danger">Book Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;