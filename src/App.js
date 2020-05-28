import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { ProjectIndexPage } from "../src/pages/ProjectsIndexPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
       <Route exact path="/projects" component={ProjectIndexPage} />
      </Switch>
    </BrowserRouter>
  )
};

export default App;
