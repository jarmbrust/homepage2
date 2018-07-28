import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export class NavBar extends Component {

  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu>
        <Menu.Item
          name='/'
          to='/homepage'
          as={NavLink}
          // active={activeItem === 'homepage'}
          // onClick={this.handleItemClick}
        >
          Home  
        </Menu.Item>
        <Menu.Item
          name='projects'
          to='/projects'
          as={NavLink}
          // active={activeItem === 'projects'}
          // onClick={this.handleItemClick}
        >
          Projects  
        </Menu.Item>
        <Menu.Item
          name='pets'
          to='/pets'
          as={NavLink}
          // active={activeItem === 'pets'}
          // onClick={this.handleItemClick}
        >
          Pets
        </Menu.Item>
        <Menu.Item
          name='aboutme'
          to='/aboutme'
          as={NavLink}
          // active={activeItem === 'aboutme'}
          // onClick={this.handleItemClick}
        >
          About
        </Menu.Item>
      </Menu>
    )
  }
}

export default NavBar
