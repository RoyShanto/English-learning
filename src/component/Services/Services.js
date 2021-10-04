import React from 'react';
import useSubject from '../Hook/useSubject';
import Subject from '../Subject/Subject';
import './Services.css'
const Services = () => {
    const [subjects] = useSubject();
    return (
        <div><br />
            <h1>All COURSES WE OFFER</h1>
            <div className="subject-container">
                {
                    subjects.map(d => <Subject key={d.id} subject={d} />)
                }
            </div>
        </div>
    );
};

export default Services;