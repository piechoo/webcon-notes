import React, {Component} from "react";
import './Note.css'
import Tags from "./Tags";
import "./Button.css"
import ModalEditNote from "./ModalEditNote";


class Note extends React.Component {
    constructor(props) {
        super(props);

        // Initial state
        this.state = {
            open: false,
            checked: props.fav,
            showModal:false
        };
        this.sonResponse = this.sonResponse.bind(this);
        this.changeModal = this.changeModal.bind(this)

    }
    changeModal = () => {
        this.setState({ showModal: !this.state.showModal });
    };


    sonResponse (err, res) {
        this.props.handler()
        //console.log(this.props.tags)
        //console.log(res)
    }

    toggle() {
        this.setState({
            open: !this.state.open
        });
    }

    deletenote = () => {
        fetch(`http://localhost:3000/notes/${this.props.id}`, { method: 'DELETE' }).then(this.props.handler())

    }
    toggleCheckboxChange()  {

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: this.props.id,
                tags: this.props.tags,
                fav: !this.state.checked,
                title: this.props.title,
                content: this.props.content
            })
        };
        fetch(`http://localhost:3000/notes/${this.props.id}`, requestOptions)
            .then(async response => {
                this.setState({
                        checked: !this.state.checked,
                    }
                );
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });



    }

    render() {

        return (
            <div className="note">
                <div className="btn btn-block" >
                    <table>
                        <tbody>
                            <tr>

                                <th className='title' onClick={this.toggle.bind(this)}>{this.props.title} </th>
                                <th>
                                    <label className={this.state.checked ? 'checked serce' : 'serce'}>
                                        <input className="toggle-heart" type="checkbox" checked={this.state.checked ? 'checked' : ""} onChange={this.toggleCheckboxChange.bind(this)}/>
                                        ❤
                                    </label>
                                </th>
                            </tr>
                            <tr>
                                <td colSpan="2" >
                                    <div id="demo" className={"collapse" + (this.state.open ? ' in' : '')}>
                                        <div className="content">
                                            {this.props.content}
                                            <Tags key={this.props.tags} tags = {this.props.tags}></Tags>
                                        </div>
                                        <div className="buttons">
                                            <button className="buton small">Dodaj tag</button>
                                            <ModalEditNote id={this.props.id} title={this.props.title} tags={this.props.tags} content={this.props.content} fav={this.props.fav} handler={this.sonResponse.bind(this)}></ModalEditNote>
                                            <button className="buton small" onClick={this.deletenote}>Usuń notatkę</button>
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