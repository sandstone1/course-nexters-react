
import React from 'react';
// import in our stylesheet
import './sidebar-nav.styles.scss';


const SidebarNav = ( { handleMouseDown } ) => (

    <div className="sidebar-nav"
        onMouseDown={ handleMouseDown }
    >

        <button
            className="sidebar-nav--btn"
        >
            <span className="sidebar-nav--icon"></span>
        </button>

    </div>

);

export default SidebarNav;