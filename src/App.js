import logo from './logo.svg';
import './App.css';
import React from 'react';
import {GetRequest} from './components/GetRequest'
import Note from "./components/Note";
import SearchBar from "./components/SearchBar";
import AddNoteButton from "./components/AddNoteButton";
import { Link, Route, Switch } from "react-router-dom";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";
import EditNoteForm from "./components/EditNoteForm";

function App() {


const Home =()=>(
    <div >
        <SearchBar></SearchBar>
        <AddNoteButton></AddNoteButton>
        <NoteList></NoteList>
    </div>
        );

  return (
      <div className="main">
          <Link to="/" className='home-link' > <b>WEBCON Notes</b> </Link>
          <Switch>
              <Route exact path="/"><Home /></Route>
              <Route path="/createnote"><AddNote /></Route>
              <Route path="/editnote"><EditNoteForm /></Route>
          </Switch>
      </div>
  );
}

export default App;
