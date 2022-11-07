import React from 'react';
import Homepage from './pages/Homepage';
import Booknow from './pages/Booknow';
import BookList from './pages/BookList';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/booknow">
            <Booknow />
          </Route>
          <Route path="/bookinglist">
            <BookList/>
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
