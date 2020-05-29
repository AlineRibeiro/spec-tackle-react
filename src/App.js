import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { CreateProjectPage } from "../src/pages/CreateProjectPage";
import { ProjectIndexPage } from "../src/pages/ProjectsIndexPage";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
       <Route exact path="/projects" component={ProjectIndexPage} />
        <Route exact path="/projects/new" component={CreateProjectPage} />
        <Route exact path="/projects/:id" component={ProjectShowPage} />
      </Switch>
    </BrowserRouter>
  )
};

export default App;
