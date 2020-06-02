import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

export const NavBar = (props) => {
  return (
      <Menu secondary size={"mini"} fixed="top">
        <Container >
        <a href="/">
          <img
            src="../../images/spec-tackle_logo.png"
            alt="logo"
            width="200px"
            height="auto"
          />
        </a>
        <Menu.Item id="navbar-item" name="howDoesItWork">
          HOW DOES IT WORK?
        </Menu.Item>

        <Menu.Item id="navbar-item" name="saveMoney">
          SAVE MONEY
        </Menu.Item>

        <Menu.Item id="navbar-item" name="team">
          TEAM
        </Menu.Item>
        <Menu.Menu position={"right"}>
          <Menu.Item id="navbar-item" name="logIn">
            LOGIN
          </Menu.Item>
          <Menu.Item name="start">
            <button className="start-button">START NOW</button>
          </Menu.Item>
        </Menu.Menu>
        </Container>
      </Menu>

  );
};
