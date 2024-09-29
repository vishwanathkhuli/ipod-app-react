import React from "react";
import "./Controlls.css";

class Controlls extends React.Component {
    // Function to handle Menu button click
    handleMenuClick = () => {
        console.log("Menu button clicked");
        if (this.props.onMenuClick) {
            this.props.onMenuClick(); // Call the passed down handler
        }
    };

    // Function to handle Center button click
    handleCenterClick = () => {
        console.log("Center button clicked");
        if (this.props.onCenterClick) {
            this.props.onCenterClick(); // Call the passed down handler
        }
    };

    // Function to handle Right button click
    handleRightClick = () => {
        console.log("Right button clicked");
        if (this.props.onRightClick) {
            this.props.onRightClick(); // Call the passed down handler
        }
    };

    // Function to handle Left button click
    handleLeftClick = () => {
        console.log("Left button clicked");
        if (this.props.onLeftClick) {
            this.props.onLeftClick(); // Call the passed down handler
        }
    };

    render() {
        return (
            <div className="ipod-controlls">
                <button className="menu-button" onClick={this.handleMenuClick}>
                    Menu
                </button>
                <button className="left-button" onClick={this.handleLeftClick}>
                    Left
                </button>
                <button
                    className="ipod-controlls-center-btn"
                    onClick={this.handleCenterClick}
                >OK</button>
                <button className="right-button" onClick={this.handleRightClick}>
                    Right
                </button>
            </div>
        );
    }
}

export default Controlls;
