import React, {Component} from "react";
import "./Form.css"
import "./Button.css"
import './Modal.css'
import Popup from "reactjs-popup";

class ModalEditNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            fav: '',
            title: '',
            tags: '',
            content: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount () {
        this.defaultValues()
    }

    defaultValues(){
        this.setState({
            id: this.props.id,
            content: this.props.content,
            title: this.props.title,
            tags: this.props.tags,
            fav: this.props.fav,
        });
    }
    handleSubmit = async (close) => {
        this.editnote(close)
    };

    editnote= (close) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: this.props.id,
                tags: this.state.tags,
                fav: this.props.fav,
                title: this.state.title,
                content: this.state.content
            })
        };
        fetch(`http://localhost:3000/notes/${this.state.id}`, requestOptions)
            .then(async response => {
                this.props.handler()
                close()
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }

    render() {
        return (
            <Popup
                trigger={<button className="buton small"> Edytuj notatkę </button>}
                modal
                nested
            >
                {close => (
                    <div className="modal">
                        <button className="close" onClick={()=>{close(); this.defaultValues()}}>
                            &times;
                        </button>
                        <div className="header"> Edytuj notatkę </div>
                        <div className="content">
                            <form onSubmit={()=>{this.handleSubmit(close())}}>
                                <label >Wpisz tytuł notatki:<br/></label>
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
                            <button className="buton big giga"  onClick={() =>{close(); this.defaultValues()}} >Anuluj</button>
                        </div>
                    </div>
                )}
            </Popup>
        );
    }
}

export default ModalEditNote
