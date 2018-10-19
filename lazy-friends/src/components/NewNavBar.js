import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export default class NewNavBar extends Component {
  state = { activeItem: 'gamepad' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu icon='labeled'>
        <Menu.Item name='gamepad' active={activeItem === 'gamepad'} onClick={this.handleItemClick}>
          <Icon name='gamepad' />
          Games
        </Menu.Item>

        <Menu.Item
          as={ Link } name='home' to='/'>
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          <Icon name='home' />
          Home
        </Menu.Item>

        <Menu.Item
          name='video play'
          active={activeItem === 'video play'}
          onClick={this.handleItemClick}
        >
          <Icon name='video play' />
          Videos
        </Menu.Item>
      </Menu>
    )
  }
}
