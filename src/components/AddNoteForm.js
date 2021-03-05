import React, {Component} from "react";
import "./Form.css"
import "./Button.css"

class AddNoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            tags: '',
            content: ''
        };
    }

    handleSubmit = async (event) => {
        this.addnote()
    };

    addnote= () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                tags: this.state.tags,
                fav: false,
                title: this.state.title,
                content: this.state.content
            })
        };
        fetch('http://localhost:3000/notes', requestOptions)
            .then(async response => {
                const data = await response.json();

                if (!response.ok) {
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                alert("Dodano nową notatkę!")
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
}

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Wpisz tytuł notatki:<br/></label>
                <input
                    type="text"
                    onChange={event => this.setState({ title: event.target.value })}
                    placeholder="Tytuł "
                    required
                />
                <br/>
                <label>Tagi notatki (oddzielone przecinkiem):<br/></label>
                <input
                    type="text"
                    onChange={event => this.setState({ tags: event.target.value })}
                    placeholder="Tagi "

                />
                <br/>
                <label>Wpisz zawartość notatki:<br/></label>
                <textarea
                    onChange={event => this.setState({ content: event.target.value })}
                    placeholder="Zawartość "
                    required
                />
                <br/>
                <button className="buton big">Utwórz!</button>
            </form>
        );
    }
}

export default AddNoteForm
