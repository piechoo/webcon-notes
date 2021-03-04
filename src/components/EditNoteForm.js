import React, {Component} from "react";
import "./Form.css"
import "./Button.css"

class EditNoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            fav: '',
            title: '',
            tags: '',
            content: '',
            success: 'tag'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount () {
        // this route should only be avaleable from a popup
        const query = new URLSearchParams(window.location.search);
        console.log(query.get('content'))
        this.setState({
            id: query.get('id'),
            content: query.get('content'),
            title: query.get('title'),
            tags: query.get('tags'),
            fav: query.get('fav'),
        });

        if (!window.opener) {
            window.close();
        }
    }

    onChangeHandler () {
        const {value} = 'zmiana';

        this.setState({message: value});

        // we use the `opener` object that lives on a parent window
        // this object only exists if the current window has a child.
        window.opener.onSuccess(value)
    }


    handleSubmit = async (event) => {
        event.preventDefault();
        this.editnote()
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
        fetch(`http://localhost:3000/notes/${this.state.id}`, requestOptions)
            .then(async response => {
                this.setState({ success: true })
                window.opener.onSuccess(this.state.tags)
                window.close();
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
}

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>Wpisz tytuł notatki:<br/></label>
                <input
                    type="text"
                    onChange={event => this.setState({ title: event.target.value })}
                    value={this.state.title}
                    required
                />
                <br/>
                <label>Tagi notatki (oddzielone przecinkiem):<br/></label>
                <input
                    type="text"
                    onChange={event => this.setState({ tags: event.target.value })}
                    value={this.state.tags}
                    required
                />
                <br/>
                <label>Wpisz zawartość notatki:<br/></label>
                <textarea
                    onChange={event => this.setState({ content: event.target.value })}
                    value={this.state.content}
                    required
                />
                <br/>
                <button className="buton big giga">Edytuj</button>
            </form>
                <button className="buton big"  onClick={() =>{window.close()}} >Anuluj</button>


            </div>
        );
    }
}

export default EditNoteForm
