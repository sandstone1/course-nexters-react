
import React from 'react';
// import in our stylesheet
import './testimonial-pictures.styles.scss';
// import in the two images and then do src={} below
import story1 from '../../assets/story-1.jpeg';
import story2 from '../../assets/story-2.jpeg';


const TestimonialPictures = () => (

    <div className="testimonial-pictures">

        <img 
            src={ story1 }
            className="testimonial-pictures--img-1"
            alt="Couple with new house"
        />
        <img 
            src={ story2 }
            className="testimonial-pictures--img-2"
            alt="New house"
        />

    </div>
);

export default TestimonialPictures;