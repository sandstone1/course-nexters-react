
import React from 'react';
// import in our stylesheet
import './realtors.styles.scss';
// import in the first realtor image and then do src={} below
import realtor1 from '../../assets/realtor-1.jpeg';
// import in the second realtor image and then do src={} below
import realtor2 from '../../assets/realtor-2.jpeg';
// import in the third realtor image and then do src={} below
import realtor3 from '../../assets/realtor-3.jpeg';


const Realtors = () => (

    <div className="realtors">

        <h3 className="heading-h3">Top 3 Realtors</h3>

        <div className="realtors--list">

            <img 
                src={ realtor1 }
                className="realtors--img"
                alt="Realtor 1"
            />
            <div className="realtors--details">
                <h4 className="heading-4">Erik Feinman</h4>
                <p className="realtors--sold">245 houses sold</p>
            </div>

            <img 
                src={ realtor2 }
                className="realtors--img"
                alt="Realtor 2"
            />
            <div className="realtors--details">
                <h4 className="heading-4">Kim Brown</h4>
                <p className="realtors--sold">212 houses sold</p>
            </div>

            <img 
                src={ realtor3 }
                className="realtors--img"
                alt="Realtor 3"
            />
            <div className="realtors--details">
                <h4 className="heading-4">Toby Ramsey</h4>
                <p className="realtors--sold">198 houses sold</p>
            </div>

        </div>

    </div>
);

export default Realtors;