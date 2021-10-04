import React from 'react';
import useSubject from '../Hook/useSubject';
import Subject from '../Subject/Subject';
import './Home.css'

const Home = () => {
    const [subjects] = useSubject();
    const data = subjects.filter(subject => subject.id < 5)
    return (
        <div><br />
            <h1>COURSES WE OFFER</h1>
            <div className="subjects-conatainer">
                <div>
                    <img src="./image/aaa.png" height="820px" width="700px" alt="" />
                </div>
                <div className="subjects">
                    {
                        data.map(d => <Subject key={d.id} subject={d} />)
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;