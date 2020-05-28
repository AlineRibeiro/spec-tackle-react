import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { TestIndexPage } from "../src/pages/TestsIndexPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
       <Route exact path="/tests" component={TestIndexPage} />
      </Switch>
    </BrowserRouter>
  )
};

export default App;
