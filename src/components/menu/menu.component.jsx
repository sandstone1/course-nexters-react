
import React from 'react';
// will need to provide links so import in links from react router dom
import { Link } from 'react-router-dom';
// import our stylesheet
import './menu.styles.scss';
// import font awesome
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 


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
                            <span>
                                <i className="fa fa-home"></i>
                            </span>
                            Home
                        </Link>
                    </li>
                    
                    <li className="header-nav--item">
                        <Link className="header-nav--link" to="/">
                            <span>
                                <i className="fa fa-user-circle"></i>
                            </span>
                            About
                        </Link>
                    </li>

                    <li className="header-nav--item">
                        <Link className="header-nav--link" to="/">
                            <span>
                                <i className="fa fa-address-card"></i>
                            </span>
                            Contact
                        </Link>
                    </li>

                    <li className="header-nav--item">
                        <Link className="header-nav--link header-nav--link--last" to="/">
                            <span>
                                <i className="fa fa-search"></i>
                            </span>
                            Search
                        </Link>
                    </li>

                </ul>

            </div>

        );
        
    }

}

export default Menu;