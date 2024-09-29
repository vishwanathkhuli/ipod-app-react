import React from 'react';
import './Screen.css';

class Screen extends React.Component {
    render() {
        const { menuItems, selectedItem, isPlaying, nowPlaying, isMenuVisible } = this.props;
        console.log(isMenuVisible);
        return (
            <div className="ipod-screen">
                {/* If there is something playing, show the Now Playing screen */}
                {isMenuVisible ? <strong>Click Menu button to view the menu </strong> : isPlaying ? (
                    <div className="screen-content">
                        <div className="now-playing">Now Playing</div>
                        <div className="now-playing-title">{nowPlaying.title}</div>
                        <img
                            className="screen-image"
                            src={nowPlaying.image}
                            alt={nowPlaying.title}
                        />
                    </div>
                ) : (
                    <div className="screen-content">
                        {/* Menu Items */}
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className={`menu-item ${index === selectedItem ? 'menu-item-active' : ''
                                    }`}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default Screen;
