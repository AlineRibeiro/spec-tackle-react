import React, { useState } from "react";
import { Project } from "../api/project";
import { Form, Container, Message } from "semantic-ui-react";

export const CreateProjectPage = (props) => {
  const [createProjectData, setCreateProjectData] = useState({});
  const [errorMessages, setErrorMessages] = useState([]);

  const onInputChange = (event) => {
    event.persist();
    setCreateProjectData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const onFormSubmit = () => {
    Project.create({ project: createProjectData }).then((response) => {
      if (!response.errors) {
        props.history.push("/projects");
      } else {
        setErrorMessages(response.errors);
      }
    });
  };
  return (
    <Container className="create-project">
      <Form onSubmit={onFormSubmit}>
        <h1>Create your project</h1>
        <div>
          {errorMessages.map((error, i) => (
            <Message negative key={i}>
              <p>{`${error}`}</p>
            </Message>
          ))}
        </div>
        <Form.Input
          label="Project Name"
          name="name"
          placeholder="Project Name"
          onChange={onInputChange}
        />
        <Form.Input
          label="Environment"
          name="environment"
          placeholder="Environment"
          onChange={onInputChange}
        />
        <Form.Input
          label="Link"
          name="link"
          placeholder="Link"
          onChange={onInputChange}
        />
        <Form.Input
          label="Comment"
          name="comment"
          placeholder="Comment"
          onChange={onInputChange}
        />
        <Form.Input
          label="Script"
          name="script"
          placeholder="Script"
          onChange={onInputChange}
        />
        <Form.Input
          label="Deadline"
          name="deadline"
          placeholder="Deadline"
          onChange={onInputChange}
        />
        <Form.Button type="submit">Submit</Form.Button>
      </Form>
    </Container>
  );
};
