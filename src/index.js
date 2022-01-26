
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Table from './Table'
import About from './About'


const Routing = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Table" component={Table} />
        <Route path="/About" component={About} />
      </Switch>
    </Router>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);