import React, {Component} from "react";
import Note from "./Note";

class NoteList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            option: '',
            note: [],
            err: null,
            isLoading: false,
        };

    }

    handler =()=> {
        if(this.state.option==='')
            this.getnotes()
        else
            this.gettag(this.state.option)
    }
     getnotes(){
        this.setState({ isLoading: true })
        let api_url = 'http://localhost:3000/notes';
        fetch(api_url)
            .then(res => {
                if(res.status >= 400) {
                    throw new Error("Server responds with error!");
                }
                return res.json();
            })
            .then(note => {
                    let self = this;
                    self.setState({
                        note,
                        isLoading: false
                    })},
                err => {
                    this.setState({
                        err,
                        isLoading: false
                    })
                });
    }


    gettag(opt){
        this.setState({ isLoading: true })
        let api_url = '';
        if(opt!=="Polubione Notatki")
            api_url = `http://localhost:3000/notes/tags/${opt}`;
        else
            api_url = `http://localhost:3000/notes/favourites`;
        fetch(api_url)
            .then(res => {
                if(res.status >= 400) {
                    throw new Error("Server responds with error!");
                }
                return res.json();
            })
            .then(note => {
                    let self = this;
                    self.setState({
                        note,
                        isLoading: false
                    })},
                err => {
                    this.setState({
                        err,
                        isLoading: false
                    })
                });
    }

    componentDidMount() {
        this.getnotes()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.option!==this.props.options && (this.props.options!==''))
        {
            this.setState({
                option: this.props.options
            })
            this.gettag(this.props.options)
        }
        else if(this.props.options==='' && this.state.option!==this.props.options)
            this.getnotes()
    }

    Styling = {paddingBottom:"30px"};

    render() {
        return (
            <div style={this.Styling}>
                {this.state.note.map((note) => (
                <Note key={note.id} title ={note.title} id={note.id} fav={note.fav} content={note.content} tags={note.tags} handler={this.handler.bind(this)} ></Note>
                ))}
            </div>
        );
    }
}

export default NoteList
