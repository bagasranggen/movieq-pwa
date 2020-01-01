import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Home from './container/Home';
import Front from './container/Front';
import Movie from './container/Movie';


function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <Front /> */}
      <Movie />
      <p className="text-center">MOVIEQ</p>
    </>
  );
}

export default App;
