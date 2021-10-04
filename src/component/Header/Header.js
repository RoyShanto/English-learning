// import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Nav, Navbar, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src="./image/bg-picture.jpg" height="700px" alt="Card image" />
                <Card.ImgOverlay>
                    <Navbar bg="dark" variant="dark" className="justify-content-center nav" sticky="top">
                        <Nav className="me-auto">
                            <h1>English Learning</h1>
                        </Nav>
                        <Nav className="btn">
                            <Link to="/home" className="btn">Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to="/services" className="btn">Services</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to="/aboutus" className="btn">About Us</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to="/contactus" className="btn">Contact Us</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        </Nav>
                    </Navbar>
                    <div className="text-container">
                        <h1 className="welcome-message">Welcome To Our<br /> <span>English</span> Class</h1>
                        <small className="message">Our language center offers group and personal lessons in English and other modern languages for all ages and levels of knowledge.</small>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Header;