import React from "react";
import "./Button.css"
import { Link } from "react-router-dom";

class AddNoteButton extends React.Component {

    render() {
        return (
            <div className="container">
                <Link to="/createnote" className='text-link buton big' > <b>+</b> Dodaj nową notatkę</Link>
            </div>
        );
    }
}

export default AddNoteButton
