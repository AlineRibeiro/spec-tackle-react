import React from "react";
import { Menu, Container, Button } from 'semantic-ui-react'

export const  NavBar = (props) => {
    return (
      <Container>
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
        <Menu.Menu position={"right"}>
        <Menu.Item
          name='logIn'
        >
          Login
        </Menu.Item>
        <Menu.Item
          name='start'
        >
          <button className="start">Start</button>
        </Menu.Item>
        </Menu.Menu>
      </Menu>
      </Container>
    )
  };