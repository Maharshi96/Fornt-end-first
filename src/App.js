import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
// import {Router, Route} from "react-router"
import LoginMain from "./components/loginMain";
import Dashboard from "./components/dashboard";

class App extends React.Component{

  render() {

      return (
          <Router>

              {/*<Route exact path={"/dashboard"} component={Dashboard}/>*/}
              <div>
              <Switch>
                  <Route exact path={"/"} component={LoginMain}/>
                  <Route path={"/dashboard"} component={Dashboard}>
                  </Route>
              </Switch>
              </div>
          </Router>
      );
  }
}

export default App;