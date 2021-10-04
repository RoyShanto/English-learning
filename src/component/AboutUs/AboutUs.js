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
                <div><p>English is an important language for all kinds of professional and personal goals. Whether you’re just starting out in English, or you need some motivation to keep going, understanding the importance of the language will help you reach fluency and change your life.Throughout the centuries, the British Empire expanded and ruled over many different countries, including most of the ones just mentioned and many more. In many cases, the British forced the people they ruled over to speak English and some of these countries still speak English, even if it isn’t their main language.</p></div>
                <div><p>Nowadays, more and more people are dedicating time to studying English as a second language. Many countries include English in their school syllabus and children are starting to learn English at a younger and younger age. But what is the true value of learning English?Whether you are looking for a new job or planning to travel the world, studying English can help you progress in life both personally and professionally. You can compete in the global job market, increase your career skills and start to meet people around the world.Here are ten good reasons to take an English language course.</p></div>
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