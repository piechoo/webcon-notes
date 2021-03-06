import React, {Component} from 'react';
import './Tag.css'

class Tags extends Component {


    constructor(props) {
        super(props);
        this.state ={
            tags : []
        }
        this.split = this.split.bind(this);
    }

    split() {
        let splited = this.props.tags.split(',');
        this.setState({
            tags: splited
        });
    }

    componentDidMount() {
        this.split();
    }
    render() {
        return (
            <div className='tagContainer'>
                {this.state.tags.map((tag) => (
                    <div key={tag} className='tag'>{tag}</div>
                ))}
            </div>
        );
    }
}

export default Tags;