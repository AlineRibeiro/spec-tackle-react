import React from "react";
import { Menu, Container, Button } from 'semantic-ui-react'

export const  NavBar = (props) => {
    return (
      <Container>
      <Menu secondary size={"mini"}>
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
          HOW DOES IT WORK?
        </Menu.Item>

        <Menu.Item
          name='saveMoney'
        >
         SAVE MONEY
        </Menu.Item>

        <Menu.Item
          name='team'
        >
          TEAM
        </Menu.Item>
        <Menu.Menu position={"right"}>
        <Menu.Item
          name='logIn'
        >
          LOGIN
        </Menu.Item>
        <Menu.Item
          name='start'
        >
          <button className="start-button">START NOW</button>
        </Menu.Item>
        </Menu.Menu>
      </Menu>
      </Container>
    )
  };