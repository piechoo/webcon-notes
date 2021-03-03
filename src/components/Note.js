import React, {Component} from "react";
import './Note.css'
import Tags from "./Tags";
import "./Button.css"

class Note extends React.Component {
    constructor(props) {
        super(props);

        // Initial state
        this.state = {
            open: false,
            checked: props.fav
        };

    }

    toggle() {
        this.setState({
            open: !this.state.open
        });
    }
    toggleCheckboxChange = () => {
        this.setState(({ checked }) => (
            {
                checked: !checked,
            }
        ));

    }

    render() {
        return (
            <div className="note">
                <div className="btn btn-block" >
                    <table>
                        <tbody>
                            <tr>
                                <th onClick={this.toggle.bind(this)}>{this.props.id} </th>
                                <th onClick={this.toggle.bind(this)}>{this.props.title} </th>
                                <th>
                                    <input id="toggle-heart" type="checkbox" checked={this.state.checked ? 'checked' : ""} onChange={this.toggleCheckboxChange.bind(this)}/>
                                    <label id='serce' htmlFor="toggle-heart">❤</label>
                                </th>
                            </tr>
                            <tr>
                                <td colSpan="3" >
                            <div id="demo" className={"collapse" + (this.state.open ? ' in' : '')}>

                                <div className="content">
                                    {this.props.content}
                                    <Tags tags = {this.props.tags}></Tags>
                                </div>
                                <div className="buttons">
                                    <button className="buton small">Edytuj notatkę</button>
                                    <button className="buton small">Dodaj tag</button>
                                    <button className="buton small">Usuń notatkę</button>
                                </div>
                            </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

};

export default Note