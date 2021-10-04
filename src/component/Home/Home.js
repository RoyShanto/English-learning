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
            <div className="trust-container">
                <br />
                <h1>59.000+ Clients Trust Us</h1>
                <div className="trust-section">
                    <div>
                        <i className="fas fa-money-check-alt icon"></i><br /><br />
                        <p className="text">Money Back Guarantee</p>
                    </div>
                    <div>
                        <i className="fas fa-book icon"></i><br /><br />
                        <p className="text">Full Online Documentation</p>
                    </div>
                    <div>
                        <i className="fas fa-info-circle icon"></i><br /><br />
                        <p className="text">24 / 7 Highly Rated Support</p>
                    </div>
                    <div>
                        <i className="fas fa-edit icon"></i><br /><br />
                        <p className="text">Free Lifetime Updates</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;