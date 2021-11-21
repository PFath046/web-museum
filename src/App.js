import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import Countries from './Countries';
import Canada from './Canada';
import Ottawa from './Ottawa';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/countries">
              <Countries />
            </Route>
            <Route path="/canada">
              <Canada />
            </Route>
            <Route path="/ottawa">
              <Ottawa />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;