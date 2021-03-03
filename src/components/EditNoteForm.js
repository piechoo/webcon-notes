import React, {Component} from "react";
import "./Form.css"
import "./Button.css"

class EditNoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
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

    editnote= () => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: this.state.id,
                tags: this.state.tags,
                fav: this.props.fav,
                title: this.state.title,
                content: this.state.content
            })
        };
        fetch(`http://localhost:3000/notes/${this.props.id}`, requestOptions)
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                this.setState({ success: true })
                alert("edytowano " + response.body)
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
                    name="title"
                    onChange={event => this.setState({ title: event.target.value })}
                    placeholder={this.props.title}
                    required
                />
                <br/>
                <label>Tagi notatki (oddzielone przecinkiem):<br/></label>
                <input
                    type="text"
                    onChange={event => this.setState({ tags: event.target.value })}
                    placeholder={this.props.tags}
                    required
                />
                <br/>
                <label>Wpisz zawartość notatki:<br/></label>
                <textarea
                    onChange={event => this.setState({ content: event.target.value })}
                    placeholder={this.props.content}
                    required
                />
                <br/>
                <button className="buton big">Edytuj!</button>
            </form>
        );
    }
}

export default EditNoteForm
