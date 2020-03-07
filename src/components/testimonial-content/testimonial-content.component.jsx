
import React from 'react';
// import in our stylesheet
import './testimonial-content.styles.scss';


const TestimonialContent = () => (

    // for testimonial content, we will have 2 headings, a paragragh and a button
    // and we will center this items vertically inside the container

    <div className="testimonial-content">

        <h3 className="heading-3">Happy Customers</h3>
        <h2 className="heading-2">&ldquo;The best decision of our lives&rdquo;</h2>
        <p className="testimonial-content--text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio
            necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!
        </p>
        <button className="btn">Find your own home</button>

    </div>
);

export default TestimonialContent;