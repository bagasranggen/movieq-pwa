import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Home from './container/Home';
import Front from './container/Front';
import Movie from './container/Movie';


function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Switch>
        <Route exact path="/" component={Front} />
        <Route path="/home" component={Home} />
        {/* <Route path="/movie" render={() => <Movie>Godzilla</Movie>} /> */}
        <Route path="/movie" component={Movie} />
      </Switch>
    </div>
  );
}

export default App;
