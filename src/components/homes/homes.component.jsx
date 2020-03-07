
import React from 'react';
// import in our stylesheet
import './homes.styles.scss';

// import in the 6 house images
import house1 from '../../assets/house-1.jpeg';
import house2 from '../../assets/house-2.jpeg';
import house3 from '../../assets/house-3.jpeg';
import house4 from '../../assets/house-4.jpeg';
import house5 from '../../assets/house-5.jpeg';
import house6 from '../../assets/house-6.jpeg';

// import in the svg sprite
import sprite from '../../assets/sprite.svg';


const Homes = () => (

    // first, we need to create 6 home elements and then go to our scss file and now we
    // are back from our scss file

    <div className="homes">

        <div className="home">

            <img src={ house1 } className="home--img" alt="House 1" />

            <svg className="home--like">
                <use href={ sprite + "#icon-heart-full" }></use>
            </svg>

            <h5 className="home--name">Beutiful Family House</h5>

            <div className="home--location">
                <svg>
                    <use href={ sprite + "#icon-map-pin" }></use>
                </svg>
                <p>USA</p>
            </div>

            <div className="home--rooms">
                <svg>
                    <use href={ sprite + "#icon-profile-male" }></use>
                </svg>
                <p>5 rooms</p>
            </div>

            <div className="home--area">
                <svg>
                    <use href={ sprite + "#icon-expand" }></use>
                </svg>
                <p>3,500 SQ FT</p>
            </div>

            <div className="home--price">
                <svg>
                    <use href={ sprite + "#icon-key" }></use>
                </svg>
                <p>$1,200,000</p>
            </div>

            <button className="home--btn">Contact realtor</button>

        </div>

        <div className="home">

            <img src={ house2 } className="home--img" alt="House 2" />

            <svg className="home--like">
                <use href={ sprite + "#icon-heart-full" }></use>
            </svg>

            <h5 className="home--name">Modern Glass Villa</h5>

            <div className="home--location">
                <svg>
                    <use href={ sprite + "#icon-map-pin" }></use>
                </svg>
                <p>Canada</p>
            </div>

            <div className="home--rooms">
                <svg>
                    <use href={ sprite + "#icon-profile-male" }></use>
                </svg>
                <p>6 rooms</p>
            </div>

            <div className="home--area">
                <svg>
                    <use href={ sprite + "#icon-expand" }></use>
                </svg>
                <p>5,000 SQ FT</p>
            </div>

            <div className="home--price">
                <svg>
                    <use href={ sprite + "#icon-key" }></use>
                </svg>
                <p>$2,750,000</p>
            </div>

            <button className="home--btn">Contact realtor</button>

        </div>

        <div className="home">

            <img src={ house3 } className="home--img" alt="House 3" />

            <svg className="home--like">
                <use href={ sprite + "#icon-heart-full" }></use>
            </svg>

            <h5 className="home--name">Cozy Country House</h5>

            <div className="home--location">
                <svg>
                    <use href={ sprite + "#icon-map-pin" }></use>
                </svg>
                <p>UK</p>
            </div>

            <div className="home--rooms">
                <svg>
                    <use href={ sprite + "#icon-profile-male" }></use>
                </svg>
                <p>4 rooms</p>
            </div>

            <div className="home--area">
                <svg>
                    <use href={ sprite + "#icon-expand" }></use>
                </svg>
                <p>2,500 SQ FT</p>
            </div>

            <div className="home--price">
                <svg>
                    <use href={ sprite + "#icon-key" }></use>
                </svg>
                <p>$850,000</p>
            </div>

            <button className="home--btn">Contact realtor</button>

        </div>

        <div className="home">

            <img src={ house4 } className="home--img" alt="House 4" />

            <svg className="home--like">
                <use href={ sprite + "#icon-heart-full" }></use>
            </svg>

            <h5 className="home--name">Large Rustical Villa</h5>

            <div className="home--location">
                <svg>
                    <use href={ sprite + "#icon-map-pin" }></use>
                </svg>
                <p>Portugal</p>
            </div>

            <div className="home--rooms">
                <svg>
                    <use href={ sprite + "#icon-profile-male" }></use>
                </svg>
                <p>6 rooms</p>
            </div>

            <div className="home--area">
                <svg>
                    <use href={ sprite + "#icon-expand" }></use>
                </svg>
                <p>4,725 SQ FT</p>
            </div>

            <div className="home--price">
                <svg>
                    <use href={ sprite + "#icon-key" }></use>
                </svg>
                <p>$1,950,000</p>
            </div>

            <button className="home--btn">Contact realtor</button>

        </div>

        <div className="home">

            <img src={ house5 } className="home--img" alt="House 5" />

            <svg className="home--like">
                <use href={ sprite + "#icon-heart-full" }></use>
            </svg>

            <h5 className="home--name">Majestic Palace House</h5>

            <div className="home--location">
                <svg>
                    <use href={ sprite + "#icon-map-pin" }></use>
                </svg>
                <p>Germany</p>
            </div>

            <div className="home--rooms">
                <svg>
                    <use href={ sprite + "#icon-profile-male" }></use>
                </svg>
                <p>18 rooms</p>
            </div>

            <div className="home--area">
                <svg>
                    <use href={ sprite + "#icon-expand" }></use>
                </svg>
                <p>45,500 SQ FT</p>
            </div>

            <div className="home--price">
                <svg>
                    <use href={ sprite + "#icon-key" }></use>
                </svg>
                <p>$9,500,000</p>
            </div>

            <button className="home--btn">Contact realtor</button>

        </div>

        <div className="home">

            <img src={ house6 } className="home--img" alt="House 6" />

            <svg className="home--like">
                <use href={ sprite + "#icon-heart-full" }></use>
            </svg>

            <h5 className="home--name">Modern Family Apartment</h5>

            <div className="home--location">
                <svg>
                    <use href={ sprite + "#icon-map-pin" }></use>
                </svg>
                <p>Italy</p>
            </div>

            <div className="home--rooms">
                <svg>
                    <use href={ sprite + "#icon-profile-male" }></use>
                </svg>
                <p>3 rooms</p>
            </div>

            <div className="home--area">
                <svg>
                    <use href={ sprite + "#icon-expand" }></use>
                </svg>
                <p>1,937 SQ FT</p>
            </div>

            <div className="home--price">
                <svg>
                    <use href={ sprite + "#icon-key" }></use>
                </svg>
                <p>$600,000</p>
            </div>

            <button className="home--btn">Contact realtor</button>

        </div>

     </div>
);

export default Homes;