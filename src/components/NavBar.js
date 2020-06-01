import React from "react";
import { Menu } from 'semantic-ui-react'

export const  NavBar = (props) => {
    return (
      <Menu secondary>
        <a href="/">
          <img
            src='../../images/spec-tackle_logo.png'
            alt='logo'
            width="200px"
            height="auto"
          />
        </a>
        <Menu.Item
          name='howDoesItWork'
        >
          How does it work?
        </Menu.Item>

        <Menu.Item
          name='saveMoney'
        >
          Save Money
        </Menu.Item>

        <Menu.Item
          name='team'
        >
          Team
        </Menu.Item>
      </Menu>
    )
  };