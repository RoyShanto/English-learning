import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="setisfied-student">
                    <h4>10000+ Satisfied Students</h4>
                    <hr />
                    <p>The staff here is really supportive, teachers are great, the school has a good structure. Thank you!</p>
                </div>
                <div>
                    <h4>POPULAR COURSES</h4>
                    <hr />
                    <div className="popular-course">
                        <div>
                            <p>English for Kids</p>
                            <p>Online Learning</p>
                            <p>German Club</p>
                            <p>Personal Lessons</p>
                            <p>Group Lessons</p>
                        </div>
                        <div>
                            <p>$35</p>
                            <p>$15</p>
                            <p>$36</p>
                            <p>$21</p>
                            <p>$35</p>
                        </div>
                    </div>
                    <hr />
                    <small>Copyright &copy 2021. Designed by Shanto Roy. All Rights Reserved.</small>
                </div>
                <div>
                    <h4>GET IN TOUCH</h4>
                    <hr />
                    <p>Send a Message</p>
                    <p>Contact</p>
                    <p>Request a Callback</p>
                    <i className="fab fa-facebook-square"></i> &nbsp;<i className="fab fa-youtube-square"></i> &nbsp;
                    <i className="fab fa-instagram-square"></i>
                </div>

            </div>
        </div>
    );
};

export default Footer;