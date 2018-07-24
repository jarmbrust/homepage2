import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export class NavBar extends Component {

  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu>
        <Menu.Item
          name='homepage'
          active={activeItem === 'homepage'}
          onClick={this.handleItemClick}
        >
          Home  
        </Menu.Item>
        <Menu.Item
          name='projects'
          active={activeItem === 'projects'}
          onClick={this.handleItemClick}
        >
          Projects  
        </Menu.Item>
        <Menu.Item
          name='pets'
          active={activeItem === 'pets'}
          onClick={this.handleItemClick}
        >
          Pets
        </Menu.Item>
        <Menu.Item
          name='aboutme'
          active={activeItem === 'aboutme'}
          onClick={this.handleItemClick}
        >
          About
        </Menu.Item>
      </Menu>
    )
  }
}

export default NavBar
