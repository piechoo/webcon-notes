import React, {Component} from 'react';

class GetRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: [],
            err: null,
            isLoading: false
        };

    }

    async getnotes(){
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
                    },() => {
                        console.log(this.state.note, 'dealersOverallTotal1');})

                },
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

    render() {

        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple GET Request</h5>
                <div className="card-body">
                    {this.state.note.map((note) => (
                        <li key={note.id}>{note.content}</li>
                    ))}
                </div>
            </div>
        );
    }
}

export { GetRequest };