import React, {Component} from "react";
import AddNoteForm from "./AddNoteForm";
import '../App.css'


class AddNote extends Component {
    render() {
        return (
            <div className='main'>
                <AddNoteForm></AddNoteForm>
            </div>
        );
    }
}

export default AddNoteForm
