import React from "react";
import { Container, Grid, Divider } from "semantic-ui-react";

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
          <p className="call-to-action">
            Automated tests with us: quick, simple, efficient and value for
            money <br />
            Less than 10 minutes to submit your project
          </p>
          <br />
          <div className="info-box">
            <Grid columns="equal">
              <Grid.Row>
                <div className="divider"> </div>
                <Grid.Column className="cl-1">
                  <h5>WHAT YOU HAVE TO DO</h5>
                  <p className="to-do">
                    <span className="check-sign">&#10003;</span>
                    &nbsp; Submit your codebase in development or your app in
                    production
                  </p>
                  <p className="to-do">
                    <span className="check-sign">&#10003;</span>
                    &nbsp; Submit a script with the tests you want
                  </p>
                  <img alt="computer" src="../../images/computer.png" />
                  <p>
                    Save up to <span className="save">80%</span> with automated
                    tests
                  </p>
                </Grid.Column>
                <Grid.Column className="cl-2">
                  <h5>WHAT WE HAVE TO DO</h5>
                  <p className="to-do">
                    <span className="check-sign">&#10003;</span>
                    &nbsp; Send you an estimate
                  </p>
                  <p className="to-do">
                    <span className="check-sign">&#10003;</span>
                    &nbsp; Write automated tests for your app
                  </p>
                  <p className="to-do">
                    <span className="check-sign">&#10003;</span>
                    &nbsp; Record the tests so you can reference it later
                  </p>
                  <p className="to-do">
                    <span className="check-sign">&#10003;</span>
                    &nbsp; Submit the test for your approval
                  </p>
                  <p className="to-do">
                    <span className="check-sign">&#10003;</span>
                    &nbsp; Make changes to the tests if necessary
                  </p>
                  <p className="to-do">
                    <span className="check-sign">&#10003;</span>
                    &nbsp; Push tests to your github
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <button className="start-button">I WANT TO TEST MY APP NOW</button>
        <br />
        <br />
        <br />
        <br />
        <br />
      </Grid.Row>
    </div>
  );
};
