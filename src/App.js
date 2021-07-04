import React, {   } from "react";
import { Switch, Route } from "react-router-dom";
import Header1 from './components/Header1.js';
import Header2 from './components/Header2.js';
import Header3 from './components/Header3.js';
import Home from './screens/Home'
function App() {
  return (
    <>
    <Header1 />
    <Header2 />
    <Header3 />
    <Switch >
      <Route exact path="/" component={Home}/>
    </Switch>
    </>
  );
}

export default App;
