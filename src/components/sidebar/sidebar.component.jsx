
import React from 'react';
// import in our stylesheet
import './sidebar.styles.scss';
// import in the SidebarNav component
import SidebarNav from '../sidebar-nav/sidebar-nav.component';
// import in the Menu component
import Menu from '../menu/menu.component';


class Sidebar extends React.Component {

    state = {
        visible : false
    };

    handleMouseDown = ( e ) => {

        this.setState( { visible : !this.state.visible } );

        // from Kirupa's webpage: "We call the stopPropagation() method to prevent our
        // click event from traveling beyond our Sidebar component's borders. We do this to
        // safeguard other elements on the page that might also be listening to click events
        // from accidentally reacting to our menu click."

        e.stopPropagation();

    }

    render() {
        
        // had to add the div with the class name of "sidebar-nav" and give the div
        // the onMouseDown property or " onMouseDown={ this.handleMouseDown } " so that
        // the clickable area was larger than before or was larger than the clickable
        // area of button alone

        return (

            <div className="sidebar">

                <SidebarNav
                    handleMouseDown={ this.handleMouseDown }
                    menuVisibility={ this.state.visible }
                />
                <Menu
                    handleMouseDown={ this.handleMouseDown }
                    menuVisibility={ this.state.visible }
                />

            </div>

        );

    }

}

export default Sidebar;