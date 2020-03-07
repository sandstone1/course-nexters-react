
import React from 'react';
// import in our stylesheet
import './gallery.styles.scss';

// import in the 14 gallery images
import gallery1  from '../../assets/gal-1.jpeg';
import gallery2  from '../../assets/gal-2.jpeg';
import gallery3  from '../../assets/gal-3.jpeg';
import gallery4  from '../../assets/gal-4.jpeg';
import gallery5  from '../../assets/gal-5.jpeg';
import gallery6  from '../../assets/gal-6.jpeg';
import gallery7  from '../../assets/gal-7.jpeg';
import gallery8  from '../../assets/gal-8.jpeg';
import gallery9  from '../../assets/gal-9.jpeg';
import gallery10 from '../../assets/gal-10.jpeg';
import gallery11 from '../../assets/gal-11.jpeg';
import gallery12 from '../../assets/gal-12.jpeg';
import gallery13 from '../../assets/gal-13.jpeg';
import gallery14 from '../../assets/gal-14.jpeg';


const Gallery = () => (

    // add the container element for each image

    <div className="gallery">

        <figure className=" gallery--item gallery--item--1 ">
            <img src={ gallery1 } className="gallery--img" alt="Gallery 1" />
        </figure>

        <figure className=" gallery--item gallery--item--2 ">
            <img src={ gallery2 } className="gallery--img" alt="Gallery 2" />
        </figure>

        <figure className=" gallery--item gallery--item--3 ">
            <img src={ gallery3 } className="gallery--img" alt="Gallery 3" />
        </figure>

        <figure className=" gallery--item gallery--item--4 ">
            <img src={ gallery4 } className="gallery--img" alt="Gallery 4" />
        </figure>

        <figure className=" gallery--item gallery--item--5 ">
            <img src={ gallery5 } className="gallery--img" alt="Gallery 5" />
        </figure>

        <figure className=" gallery--item gallery--item--6 ">
            <img src={ gallery6 } className="gallery--img" alt="Gallery 6" />
        </figure>

        <figure className=" gallery--item gallery--item--7 ">
            <img src={ gallery7 } className="gallery--img" alt="Gallery 7" />
        </figure>

        <figure className=" gallery--item gallery--item--8 ">
            <img src={ gallery8 } className="gallery--img" alt="Gallery 8" />
        </figure>

        <figure className=" gallery--item gallery--item--9 ">
            <img src={ gallery9 } className="gallery--img" alt="Gallery 9" />
        </figure>

        <figure className=" gallery--item gallery--item--10 ">
            <img src={ gallery10 } className="gallery--img" alt="Gallery 10" />
        </figure>

        <figure className=" gallery--item gallery--item--11 ">
            <img src={ gallery11 } className="gallery--img" alt="Gallery 11" />
        </figure>

        <figure className=" gallery--item gallery--item--12 ">
            <img src={ gallery12 } className="gallery--img" alt="Gallery 12" />
        </figure>

        <figure className=" gallery--item gallery--item--13 ">
            <img src={ gallery13 } className="gallery--img" alt="Gallery 13" />
        </figure>

        <figure className=" gallery--item gallery--item--14 ">
            <img src={ gallery14 } className="gallery--img" alt="Gallery 14" />
        </figure>

    </div>

);

export default Gallery;