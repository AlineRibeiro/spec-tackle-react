import React, { useState, useEffect } from "react";
import { Project } from "../api/project";
import { Link } from "react-router-dom";

export const ProjectIndexPage = () => {
  let [projectIndex, setProjectIndex] = useState({
    projects: [],
  });

  useEffect(() => {
    Project.index().then((response) => {
      setProjectIndex({ projects: response.projects });
    });
  }, []);
  return (
    <div>
      <h1>My projects</h1>
      <ul>
        {projectIndex.projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
