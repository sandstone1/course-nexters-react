
import React from 'react';
// import in our stylesheet
import './features.styles.scss';

// import in the svg sprite for the features section
import sprite from '../../assets/sprite.svg';


// for our features component we have 6 features laid out in a 2 * 3 grid or two rows
// and 3 columns and let's place 6 features below and then go to the sass file to layout
// our grid

// I figured out how to import a svg sprite into a react component by reading the following
// article:
// " https://medium.com/@gineetmehta/how-to-use-svg-sprites-regular-html-vs-react-9f98948c03f0 "
const Features = () => (

    <div className="features">

        <div className="feature">
            <svg className="feature-icon">
                <use href={ sprite + "#icon-global" }></use>
            </svg>
            <h4 className="feature-heading-4">
                World's best luxury homes
            </h4>
            <p className="feature-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                distinctio necessitatibus pariatur voluptatibus.
            </p>
        </div>

        <div className="feature">
            <svg className="feature-icon">
                <use href={ sprite + "#icon-trophy" }></use>
            </svg>
            <h4 className="feature-heading-4">
                Only the best properties
            </h4>
            <p className="feature-text">
                Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
                rerum sed a eligendi aut quia.
            </p>
        </div>

        <div className="feature">
            <svg className="feature-icon">
                <use href={ sprite + "#icon-map-pin" }></use>
            </svg>
            <h4 className="feature-heading-4">
                All homes in top loctions
            </h4>
            <p className="feature-text">
                Tenetur distinctio necessitatibus pariatur voluptatibus quidem
                consequatur harum.
            </p>
        </div>

        <div className="feature">
            <svg className="feature-icon">
                <use href={ sprite + "#icon-key" }></use>
            </svg>
            <h4 className="feature-heading-4">
                New home in one week
            </h4>
            <p className="feature-text">
                Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit.
            </p>
        </div>

        <div className="feature">
            <svg className="feature-icon">
                <use href={ sprite + "#icon-presentation" }></use>
            </svg>
            <h4 className="feature-heading-4">
                Top 1% realtors
            </h4>
            <p className="feature-text">
                Quidem consequatur harum, voluptatum mollitia quae. Tenetur
                distinctio necessitatibus pariatur voluptatibus.
            </p>
        </div>

        <div className="feature">
            <svg className="feature-icon">
                <use href={ sprite + "#icon-lock" }></use>
            </svg>
            <h4 className="feature-heading-4">
                Secure payments on Nexter
            </h4>
            <p className="feature-text">
                Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
                quae.
            </p>
        </div>

    </div>
);

export default Features;