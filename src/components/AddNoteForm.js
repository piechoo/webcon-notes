import React, {Component} from "react";
import "./Form.css"
import "./Button.css"

class AddNoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            tags: '',
            content: '',
            success: false
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();
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

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                this.setState({ success: true })
                alert("Dodano " + response.body)
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
}

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Wpisz tytuł notatki:</p>
                <input
                    type="text"
                    name="title"
                    onChange={event => this.setState({ title: event.target.value })}
                    placeholder="Tytuł "
                    required
                />
                <p>Tagi notatki (oddzielone przecinkiem)</p>
                <input
                    type="text"
                    onChange={event => this.setState({ tags: event.target.value })}
                    placeholder="Tagi "
                    required
                />
                <p>Wpisz zawartość notatki:</p>
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
