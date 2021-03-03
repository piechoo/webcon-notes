import React from "react";
import "./Button.css"
import { Link, Route, Switch } from "react-router-dom";

class AddNoteButton extends React.Component {


    create = () => {
        this.setState(({ checked }) => (
            {
                checked: !checked,
            }
        ));

    }

    render() {
        return (
            <div className="buton big">
                <Link to="/createnote" className='text-link' > <b>+</b> Dodaj nową notatkę</Link>
            </div>
        );
    }
}

export default AddNoteButton
