import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';

export class NavBar extends Component {

  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu>
      <Container>
        <Menu.Item
          to='/'
          as={NavLink}
          name="Homepage"
          // active={activeItem === 'homepage'}
          // onClick={this.handleItemClick}
        >
          Home  
        </Menu.Item>
        <Menu.Item
          to='/projects'
          as={NavLink}
          name="Projects"
          // active={activeItem === 'projects'}
          // onClick={this.handleItemClick}
        >
          Projects  
        </Menu.Item>
        <Menu.Item
          to='/pets'
          as={NavLink}
          name="Pets"
          // active={activeItem === 'pets'}
          // onClick={this.handleItemClick}
        >
          Pets
        </Menu.Item>
        <Menu.Item
          to='/aboutme'
          as={NavLink}
          name="About"
          // active={activeItem === 'aboutme'}
          // onClick={this.handleItemClick}
        >
          About
        </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default withRouter(NavBar)
