import React, { useEffect, useState } from 'react';
import Teachers from '../Teachers/Teachers';
import './About.css'
const AboutUs = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('./teachers.json')
            .then(req => req.json())
            .then(data => setTeachers(data))
    }, []);


    return (
        <div className="container">
            <h1>Welcome To The EduPress Learning Management System</h1><br />
            <div className="text-style">
                <div><p>A posuere donec senectus suspendisse bibendum magna ridiculus a justo orci parturient suspendisse ad rhoncus cursus ut parturient viverra elit aliquam ultrices est sem. Tellus nam ad fermentum ac enim est duis facilisis congue a lacus adipiscing consequat risus consectetur scelerisque integer suspendisse a mus integer elit massa ut.

                    Nam vehicula malesuada lectus, interdum fringilla nibh. Duis aliquam vitae metus a pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum augue..</p></div>
                <div><p>A posuere donec senectus suspendisse bibendum magna ridiculus a justo orci parturient suspendisse ad rhoncus cursus ut parturient viverra elit aliquam ultrices est sem. Tellus nam ad fermentum ac enim est duis facilisis congue a lacus adipiscing consequat risus consectetur scelerisque integer suspendisse a mus integer elit massa ut.

                    Nam vehicula malesuada lectus, interdum fringilla nibh. Duis aliquam vitae metus a pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum augue..</p></div>
            </div>
            <br />
            <h1>Our Expert Teachers</h1>
            <br />
            <div className="teachers-list">
                {
                    teachers.map(t => <Teachers key={t.id} teachers={t} />)
                }
            </div>
        </div>
    );
};

export default AboutUs;