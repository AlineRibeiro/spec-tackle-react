import React, { useState, useEffect } from "react";
import { Project } from "../api/project";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import { Container } from "semantic-ui-react";

//pensar no futuro em colocar um isLoading false
export const ProjectShowPage = (props) => {
  let [projectShow, setProjectShow] = useState({
    project: {},
  });

  const destroyProject = (id) => {
    Project.destroy(id).then(() => {
      props.history.push("/projects");
    });
  };

  useEffect(() => {
    Project.show(props.match.params.id).then((response) => {
      setProjectShow({ project: response.project });
    });
  }, [props.match.params.id]);
  return (
    <Container className="project-show">
      <div>
        <h1>This is the project show page</h1>
        <p>{projectShow.project.name}</p>
        <p>{projectShow.project.environment}</p>
        <p>{projectShow.project.link}</p>
        <p>{projectShow.project.comment}</p>
        <p>{projectShow.project.deadline}</p>
        <p>{projectShow.project.finished_at}</p>
        <Link to={`/projects`}>Back to projectIndex</Link>
        <Button
          floated="right"
          color="red"
          onClick={() => destroyProject(projectShow.project.id)}
        >
          <Button.Content visible>
            <Icon name="trash alternate" />
          </Button.Content>
        </Button>
      </div>
    </Container>
  );
};
