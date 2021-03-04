import React, {Component} from "react";
import {Multiselect} from "multiselect-react-dropdown";
import SearchBar from "./SearchBar";
import AddNoteButton from "./AddNoteButton";
import NoteList from "./NoteList";
import "./Home.css"

class Home extends Component {


    constructor(props) {
        super(props);

        this.state = {
            tags: [],
            selectedTag:'',
            err: null,
            isLoading: false,
        };

        this.onSelect=this.onSelect.bind(this)
        this.onRemove=this.onRemove.bind(this)
    }
    componentDidMount() {
        this.gettags()
    }

    async gettags(){
        this.setState({ isLoading: true })
        let api_url = 'http://localhost:3000/tags';
        fetch(api_url)
            .then(res => {
                if(res.status >= 400) {
                    throw new Error("Server responds with error!");
                }
                return res.json();
            })
            .then(tags => {
                    let tagi = tags;
                    tags.push("Polubione Notatki")
                    this.setState({
                        tags,
                        isLoading: false
                    })},
                err => {
                    this.setState({
                        err,
                        isLoading: false
                    })
                });
    }

    onSelect(selectedList, selectedItem) {
        this.setState({
            selectedTag: selectedItem
        })

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.selectedTag)
    }

    onRemove(selectedList, removedItem) {
        this.setState({
            selectedTag: ''
        })
    }

    render() {
        return (
            <div>
                <div >
                    <Multiselect
                        selectionLimit={1}
                        options={this.state.tags} // Options to display in the dropdown
                        onSelect={this.onSelect} // Function will trigger on select event
                        onRemove={this.onRemove} // Function will trigger on remove event
                        placeholder="Wpisz tag lub wybierz z listy:"
                        isObject={false}
                    />
                    <AddNoteButton></AddNoteButton>
                    <NoteList key= {this.state.selectedTag} options = {this.state.selectedTag}></NoteList>
                </div>
            </div>
        );
    }
}

export default Home;