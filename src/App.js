import './app.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import Society from './pages/society/Society';
import History from './pages/history/History';
import All from './pages/all/All';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details">
          <Detail />
        </Route>
        <Route path="/society">
          <Society />
        </Route>
        <Route path="/history">
          <History />
        </Route>
        <Route path="/all">
          <All />
        </Route>
        {/* <Route path="/user/:userId">
          <User />
        </Route> */}
      </Switch>
  </Router>
  );
}

export default App;
