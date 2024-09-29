import React from 'react';
import './App.css';
import Screen from './Components/Screen';
import Controlls from './Components/Controlls';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menuItems: ['Music', 'Settings', 'Games', 'Now Playing'], // Menu options
      selectedItem: 0, // Tracks the selected item index
      isMenuVisible: true, // Whether to display the menu or not
      isPlaying: false, // Playing status for 'Now Playing'
      nowPlaying: {
        title: 'Nothing Playing',
        image: '' // You can use a URL for an image if needed
      },
    };
  }

  // Handle Menu button click (toggle menu visibility)
  handleMenuClick = () => {
    this.setState((prevState) => ({
      isMenuVisible: !prevState.isMenuVisible, // Toggle the menu visibility
    }));
  };

  // Handle Center button click (select the active menu item)
  handleCenterClick = () => {
    const { selectedItem, menuItems } = this.state;
    console.log(`Selected item: ${menuItems[selectedItem]}`);
    if (menuItems[selectedItem] === 'Now Playing') {
      this.setState({
        isPlaying: true,
        nowPlaying: { title: 'Your Song', image: 'your-song-image-url.jpg' }
      });
    }
  };

  // Handle Right button click (move to the next menu item)
  handleRightClick = () => {
    this.setState((prevState) => ({
      selectedItem: (prevState.selectedItem + 1) % prevState.menuItems.length, // Loop to the next item
    }));
  };

  // Handle Left button click (move to the previous menu item)
  handleLeftClick = () => {
    this.setState((prevState) => ({
      selectedItem:
        (prevState.selectedItem - 1 + prevState.menuItems.length) % prevState.menuItems.length, // Loop to the previous item
    }));
  };

  render() {
    const { menuItems, selectedItem, isPlaying, nowPlaying, isMenuVisible } = this.state;
    return (
      <div className="ipod-app">
        <Screen
          menuItems={menuItems}
          selectedItem={selectedItem}
          isPlaying={isPlaying}
          nowPlaying={nowPlaying}
          isMenuVisible={isMenuVisible}
        />
        <Controlls
          onMenuClick={this.handleMenuClick}
          onCenterClick={this.handleCenterClick}
          onRightClick={this.handleRightClick}
          onLeftClick={this.handleLeftClick}
        />
      </div>
    );
  }
}

export default App;
