import React from "react";
import { Container } from "semantic-ui-react";

export const Home = (props) => {
  return (
    <Container className="home">
      <h1>Automated Software Testing with Cypress for your business</h1>

      <p>
        <span className="check-sign">&#10003;</span> Say goodbye to QA! Automate
        your tests
      </p>

      <p>
        <span className="check-sign">&#10003;</span> Savings: you will save 68%
        during your app life{" "}
      </p>

      <button className="start-button">I want to test my app now</button>
    </Container>
  );
};
