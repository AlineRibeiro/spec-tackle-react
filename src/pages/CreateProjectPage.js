import React, { useState } from "react";
import { Project } from "../api/project";
import { Button, Container, Form } from "semantic-ui-react";

export const CreateProjectPage = (props) => {
  const [projectData, setProjectData] = useState({});

  return (
    <Container>
      <Form>
        <Form.Field>
          <label>Project Name</label>
          <input placeholder="Project Name" />
        </Form.Field>
        <Form.Field>
          <label>Environment</label>
          <input placeholder="Environment" />
        </Form.Field>
        <Form.Field>
          <label>Link</label>
          <input placeholder="Link" />
        </Form.Field>
        <Form.Field>
          <label>Comment</label>
          <input placeholder="Comment" />
        </Form.Field>
        <Form.Field>
          <label>Script</label>
          <input placeholder="Script" />
        </Form.Field>
        <Form.Field>
          <label>Deadline</label>
          <input placeholder="Deadline" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};
