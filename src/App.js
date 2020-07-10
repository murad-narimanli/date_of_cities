import React from 'react';
import Cities from './Components/Cities'
import { BrowserRouter as Router ,  Switch , Route   } from "react-router-dom";
import Clock from './Components/Clock'
function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path='/'  exact  component={Cities} ></Route>
            <Route path='/:qite/:yer'  exact  component={Clock} ></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
