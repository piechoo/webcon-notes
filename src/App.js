import logo from './logo.svg';
import './App.css';
import React from 'react';
import {GetRequest} from './components/GetRequest'
import Note from "./components/Note";
import SearchBar from "./components/SearchBar";
import AddNoteButton from "./components/AddNoteButton";
import { Link, Route, Switch } from "react-router-dom";
import AddNote from "./components/AddNote";

function App() {
let simplenote = {
    id: 123,
    fav: false,
    title: 'tytul notki',
    tags: "tag1,tag2,tag67,tag6969",
    content: 'jestem wewnetrzna czescia notatki ktrora powinozwijac po kliknieciu w naglowek tejze notatki, mam nadzieje ze tak dziala'
}
let simplenote2 = {
    id: 122223,
    fav: true,
    title: 'tytul drugiej notki',
    tags: "tag1,tag2,tag67,tag6969,tag2212,tag63,tag8445,tag34,tagsw2",
    content: 'jblablablablaestem wewnetrzna czescia notatki ktrora powinna sie rozwijac po kliknieciu w naglowek tejze notatki, mam nadzieje ze tak dziala'
}

const Home =()=>(
    <div className="main">
        <SearchBar></SearchBar>
        <AddNoteButton></AddNoteButton>
        <GetRequest></GetRequest>
        <Note title ={simplenote.title} id={simplenote.id} fav={simplenote.fav} content={simplenote.content} tags={simplenote.tags}></Note>
        <Note title ={simplenote.title} id={simplenote.id} fav={simplenote.fav} content={simplenote.content} tags={simplenote.tags}></Note>
        <Note title ={simplenote.title} id={simplenote.id} fav={simplenote.fav} content={simplenote.content} tags={simplenote.tags}></Note>
        <Note title ={simplenote.title} id={simplenote.id} fav={simplenote.fav} content={simplenote.content} tags={simplenote.tags}></Note>
        <Note title ={simplenote.title} id={simplenote.id} fav={simplenote.fav} content={simplenote.content} tags={simplenote.tags}></Note>
        <Note title ={simplenote.title} id={simplenote.id} fav={simplenote.fav} content={simplenote.content} tags={simplenote.tags}></Note>
        <Note title ={simplenote.title} id={simplenote.id} fav={simplenote.fav} content={simplenote.content} tags={simplenote.tags}></Note>
        <Note title ={simplenote.title} id={simplenote.id} fav={simplenote.fav} content={simplenote.content} tags={simplenote.tags}></Note>
        <Note title ={simplenote.title} id={simplenote.id} fav={simplenote.fav} content={simplenote.content} tags={simplenote.tags}></Note>

        <Note title ={simplenote2.title} id={simplenote2.id} fav={simplenote2.fav} content={simplenote2.content} tags={simplenote2.tags}></Note>
        <Note title ={simplenote2.title} id={simplenote2.id} fav={simplenote2.fav} content={simplenote2.content} tags={simplenote2.tags}></Note>
        <Note title ={simplenote2.title} id={simplenote2.id} fav={simplenote2.fav} content={simplenote2.content} tags={simplenote2.tags}></Note>
        <Note title ={simplenote.title} id={simplenote.id} fav={simplenote.fav} content={simplenote.content} tags={simplenote.tags}></Note>
        <Note title ={simplenote.title} id={simplenote.id} fav={simplenote.fav} content={simplenote.content} tags={simplenote.tags}></Note>
        <Note title ={simplenote.title} id={simplenote.id} fav={simplenote.fav} content={simplenote.content} tags={simplenote.tags}></Note>
        <Note title ={simplenote.title} id={simplenote.id} fav={simplenote.fav} content={simplenote.content} tags={simplenote.tags}></Note>
        <Note title ={simplenote2.title} id={simplenote2.id} fav={simplenote2.fav} content={simplenote2.content} tags={simplenote2.tags}></Note>
        <Note title ={simplenote2.title} id={simplenote2.id} fav={simplenote2.fav} content={simplenote2.content} tags={simplenote2.tags}></Note>
        <Note title ={simplenote2.title} id={simplenote2.id} fav={simplenote2.fav} content={simplenote2.content} tags={simplenote2.tags}></Note>
        <Note title ={simplenote.title} id={simplenote.id} fav={simplenote.fav} content={simplenote.content} tags={simplenote.tags}></Note>
        <Note title ={simplenote.title} id={simplenote.id} fav={simplenote.fav} content={simplenote.content} tags={simplenote.tags}></Note>
        <Note title ={simplenote.title} id={simplenote.id} fav={simplenote.fav} content={simplenote.content} tags={simplenote.tags}></Note>
        <Note title ={simplenote.title} id={simplenote.id} fav={simplenote.fav} content={simplenote.content} tags={simplenote.tags}></Note>
        <Note title ={simplenote2.title} id={simplenote2.id} fav={simplenote2.fav} content={simplenote2.content} tags={simplenote2.tags}></Note>
        <Note title ={simplenote.title} id={simplenote.id} fav={simplenote.fav} content={simplenote.content} tags={simplenote.tags}></Note>
        <Note title ={simplenote.title} id={simplenote.id} fav={simplenote.fav} content={simplenote.content} tags={simplenote.tags}></Note>
        <Note title ={simplenote.title} id={simplenote.id} fav={simplenote.fav} content={simplenote.content} tags={simplenote.tags}></Note>
        <Note title ={simplenote.title} id={simplenote.id} fav={simplenote.fav} content={simplenote.content} tags={simplenote.tags}></Note>
    </div>
        );

    const Category = () => (
        <div>
            <h2>Category</h2>
        </div>
    );

  return (
      <div>
          <Switch>
              <Route exact path="/"><Home /></Route>
              <Route path="/createnote"><AddNote /></Route>
          </Switch>

      </div>
  );
}

export default App;
