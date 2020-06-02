import React from "react";
import { Container, Grid } from "semantic-ui-react";

export const Home = (props) => {
  return (
    <Container className="home">
      <Grid columns="equal">
        <Grid.Column width={10}>
          <h1>Automated Software Testing with Cypress for your business</h1>
          <br />
          <p>
            We are a team of software development consultants that know
            everything about <br /> testing, so that you dont have to worry
            about it.
          </p>
          <br />
          <p>
            <span className="check-sign">&#10003;</span> Say goodbye to QA.
            Automate your tests!
          </p>
          <br />
          <p>
            <span className="check-sign">&#10003;</span> Savings: you will save
            68% during your app life.
          </p>
          <br />
          <br />
          <button className="start-button">I want to test my app now</button>
        </Grid.Column>
        <Grid.Column width={6}>2</Grid.Column>
      </Grid>
    </Container>
  );
};
