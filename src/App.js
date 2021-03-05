import './App.css';
import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import AddNoteForm from "./components/AddNoteForm";

function App() {

  return (
      <div className="main">
          <Link to="/" className='home-link' > <b>WEBCON Notes</b> </Link>
          <Switch>
              <Route exact path="/"><Home /></Route>
              <Route path="/createnote"><AddNoteForm /></Route>
          </Switch>
      </div>
  );
}

export default App;
