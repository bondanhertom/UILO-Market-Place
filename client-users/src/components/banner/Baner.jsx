import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Banner({ image }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} interval={4000}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image.Image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>PILIHAN PRODUK TERBAIK</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <Link to={`/product`}>
                        <Button variant="light" size="lg" className="selengkapnya-btn">Selengkapnya</Button>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image.Image2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>STYLE ANAK MUDA 90S</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image.Image3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>JADIKAN STYLEMU MENJADI MENARIK</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Banner