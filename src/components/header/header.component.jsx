
import React from 'react';
// import in our stylesheet
import './header.styles.scss';
// import in the site logo and then do src={} below
import logo from '../../assets/logo.png';
// import in the social proof logos and then do src={} below
import logoBBC from '../../assets/logo-bbc.png';
import logoForbes from '../../assets/logo-forbes.png';
import logoTechCrunch from '../../assets/logo-techcrunch.png';
import logoBusinessInsider from '../../assets/logo-bi.png';


const Header = () => (

    <div className="header">

        <img 
            src={ logo }
            className="header--logo"
            alt="Nexter logo"
        />

        <h3 className="heading-3">Your own home</h3>

        <h1 className="heading-1">The ultimate personal freedom</h1>

        <button className="header--btn">View our properties</button>

        <div className="header--seenon-text">Seen on</div>

        <div className="header--seenon-logos">
            <img 
                src={ logoBBC }
                className="header--logo-bbc"
                alt="Seen on logo 1"
            />
            <img 
                src={ logoForbes }
                className="header--logo-forbes"
                alt="Seen on logo 3"
            />
            <img 
                src={ logoTechCrunch }
                className="header--logo-tech-crunch"
                alt="Seen on logo 4"
            />
           <img
                src={ logoBusinessInsider }
                className="header--logo-business-insider"
                alt="Seen on logo 2"
            />
        
        </div>

    </div>
);

export default Header;