
import React from 'react';
import './homepage.styles.scss';

import Sidebar from '../../components/sidebar/sidebar.component';
import Header from '../../components/header/header.component';
import Realtors from '../../components/realtors/realtors.component';
import Features from '../../components/features/features.component';
import TestimonialPictures from '../../components/testimonial-pictures/testimonial-pictures.component';
import TestimonialContent from '../../components/testimonial-content/testimonial-content.component';
import Homes from '../../components/homes/homes.component';
import Gallery from '../../components/gallery/gallery.component';
import Footer from '../../components/footer/footer.component';


// the div with the class name of container will be our grid container and the following 8
// sections will be our grid items: (1) sidebar (2) header (3) realtors (4) features
// (5) testimonials (6) homes (7) gallery and (8) footer
const HomePage = () => (
   
    <div className="container">

        <Sidebar />
        <Header />
        <Realtors />
        <Features />
        <TestimonialPictures />
        <TestimonialContent />
        <Homes />
        <Gallery />
        <Footer />

    </div>

);


export default HomePage;



// the html structure for the HomePage component
/*

<div className="sidebar">
    Sidebar
</div>

<header className="header">
    Header
</header>

<div className="realtors">
    Realtors
</div>

<div className="features">
    Features
</div>

<div className="testimonials-pictures">
    Testimonials Pictures
</div>

<div className="testimonials-content">
    Testimonials Content
</div>

<div className="homes">
    Homes
</div>

<div className="gallery">
Gallery
</div>

<footer className="footer">
    Footer
</footer>

*/