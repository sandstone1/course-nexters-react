
import React from 'react';
// will need to provide links so import in links from react router dom
import { Link } from 'react-router-dom';
// import in our stylesheet
import './menu.styles.scss';


class Menu extends React.Component {

    render() {

        let visibility = "hide";

        if ( this.props.menuVisibility ) {

            visibility = "show";

        }

        return (

            <div id="menu"

                onMouseDown={ this.props.handleMouseDown }
                className={ visibility }

            >

                <ul className="header-nav">

                    <li className="header-nav--item">
                        <Link className="header-nav--link" to="/">
                            Home
                        </Link>
                    </li>

                    <li className="header-nav--item">
                        <Link className="header-nav--link" to="/">
                            About
                        </Link>
                    </li>

                    <li className="header-nav--item">
                        <Link className="header-nav--link" to="/">
                            Contact
                        </Link>
                    </li>

                    <li className="header-nav--item">
                        <Link className="header-nav--link" to="/">
                            Search
                        </Link>
                    </li>

                </ul>

            </div>

        );
        
    }

}

export default Menu;