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
import { Multiselect } from 'multiselect-react-dropdown';
import Home from "./components/Home";

function App() {



const Homes =()=>(
    <div >
        <Multiselect
            options={this.state.options} // Options to display in the dropdown
            selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
            onSelect={this.onSelect} // Function will trigger on select event
            onRemove={this.onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
        />
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
