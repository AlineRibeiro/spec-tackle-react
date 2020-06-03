import React from "react";
import { Container, Grid } from "semantic-ui-react";

export const Home = (props) => {
  return (
    <div>
      <Container className="home">
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column width={9}>
              <h1>
                Automated Software Testing with <br /> Cypress for your business
              </h1>
              <br />
              <p>
                We are a team of software development consultants that know
                <br /> everything about testing, so that you dont have to worry
                <br /> about it.
              </p>
              <br />
              <p>
                <span className="check-sign">&#10003;</span> Say goodbye to QA.
                Automate your tests!
              </p>
              <br />
              <p>
                <span className="check-sign">&#10003;</span> Savings: you will
                save 68% during your app life.
              </p>
              <br />
              <br />
              <button className="start-button">
                I WANT TO TEST MY APP NOW
              </button>
            </Grid.Column>
            <Grid.Column width={7}>
              <img
                className="side-design"
                src="../../images/sideDesign.png"
                alt="blue design"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <Grid.Row className="second-row">
        <Container>
          <h1>Check how we can help you automate tests and save money</h1>
          <p>
            Automated tests with us: quick, simple, efficient and value for
            money <br />
            Less than 10 minutes to submit your project
          </p>
        </Container>
      </Grid.Row>
    </div>
  );
};
