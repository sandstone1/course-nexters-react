
import React from 'react';
// import in our stylesheet
import './sidebar-nav.styles.scss';


class SidebarNav extends React.Component {

    render() {

        let visibility = "hide";

        if ( this.props.menuVisibility ) {

            visibility = "show";

        }
        
        // in the div below, we are showing 2 class names and the second class name is
        // dependent on the state of " visible " in the parent container or
        // sidebar.component.jsx
        return (

            <div                
                onMouseDown={ this.props.handleMouseDown }
                className={ `sidebar-nav ${ visibility }` }
            >

                <button
                    className="sidebar-nav--btn"
                >

                    <span
                        className="sidebar-nav--icon"
                    >
                    </span>

                </button>

            </div>

        );

    }

}


export default SidebarNav;