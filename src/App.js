import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { CreateProjectPage } from "../src/pages/CreateProjectPage";
import { ProjectIndexPage } from "../src/pages/ProjectsIndexPage";
import { ProjectShowPage } from "../src/pages/ProjectShowPage";
import { Home } from "../src/pages/Home";
import { NavBar } from "./components/NavBar";


const App = () => {
  return (
    <BrowserRouter>
      <header>
        <NavBar/>
      </header>
      <Switch>
       <Route exact path="/projects" component={ProjectIndexPage} />
        <Route exact path="/projects/new" component={CreateProjectPage} />
        <Route exact path="/projects/:id" component={ProjectShowPage} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
};

export default App;
