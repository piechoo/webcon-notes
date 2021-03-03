import React, {Component} from "react";


class AddNoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            tags: '',
            content: '',
            companyName: ''
        };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.content);
    }
    myChangeHandler = (event) => {
        let title = event.target.title;
        let tags = event.target.tags;
        let content = event.target.content;
        this.setState({
            title,
            tags,
            content
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.content);
    };

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
                <input
                    type="textarea"
                    onChange={event => this.setState({ content: event.target.value })}
                    placeholder="Zawartość "
                    required
                />
                <br/>
                <button>Utwórz!</button>
            </form>
        );
    }
}

export default AddNoteForm
