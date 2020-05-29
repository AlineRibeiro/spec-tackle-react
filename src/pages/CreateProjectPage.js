import React, { useState} from "react";
import { Project } from "../api/project";
import { Button, Form, Container } from "semantic-ui-react";

export const CreateProjectPage = props => {
  const [createProjectData, setCreateProjectData] = useState({});

const onInputChange = event => {
  event.persist();
  setCreateProjectData(current => ({
    ...current,
      [event.target.name]: event.target.value
  }));
};

const onFormSubmit = () => {
  Project.create({ project: createProjectData }).then(response => {
    if (!response.errors)
      props.history.push("/projects");
  });
};
  return (
    <Container>
      <Form onSubmit={onFormSubmit}>
        <Form.Field>
          <label>Project Name</label>
          <input  name="name" placeholder="Project Name" onChange={onInputChange} />
        </Form.Field>
        <Form.Field>
          <label>Environment</label>
          <input name="environment" placeholder="Environment" onChange={onInputChange} />
        </Form.Field>
        <Form.Field>
          <label>Link</label>
          <input name="link" placeholder="Link" onChange={onInputChange} />
        </Form.Field>
        <Form.Field>
          <label>Comment</label>
          <input name="comment" placeholder="Comment" onChange={onInputChange} />
        </Form.Field>
        <Form.Field>
          <label>Script</label>
          <input name="script" placeholder="Script" onChange={onInputChange} />
        </Form.Field>
        <Form.Field>
          <label>Deadline</label>
          <input name="deadline" placeholder="Deadline" onChange={onInputChange} />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

