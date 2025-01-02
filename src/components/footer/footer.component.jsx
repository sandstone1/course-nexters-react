
import React from 'react';
// will need to provide links so import in links from react router dom
import { Link } from 'react-router-dom';
// import in our stylesheet
import './footer.styles.scss';

// all the link will point to the home page or localhost:3001

const Footer = () => (

    <div className="footer">

        <ul className="nav">
            <li className="nav--item">
                <Link className="nav--link" to="/">
                    Find your dream home
                </Link>
            </li>
            <li className="nav--item">
                <Link className="nav--link" to="/">
                    Request proposal
                </Link>
            </li>
            <li className="nav--item">
                <Link className="nav--link" to="/">
                    Download home planner
                </Link>
            </li>
            <li className="nav--item">
                <Link className="nav--link" to="/">
                    Contact us
                </Link>
            </li>
            <li className="nav--item">
                <Link className="nav--link" to="/">
                    Submit your property
                </Link>
            </li>
            <li className="nav--item">
                <Link className="nav--link" to="/">
                    Come work with us!
                </Link>
            </li>
        </ul>

        <p className="copyright">
            &copy; Copyright 2025
        </p>

    </div>
);

export default Footer;