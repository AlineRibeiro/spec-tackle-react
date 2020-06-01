import React from "react";
import { Menu } from 'semantic-ui-react'

export const  NavBar = (props) => {
    return (
      <Menu secondary>
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