import React, { Component } from 'react';
import List from './List';
import callApi from "../utils/apiCaller";

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            FPT: []
        };
    }

    componentDidMount(){
        callApi("FPT", "GET", null).then(res => {
            this.setState({
              FPT: res.data
            });
        });
    };

    render() {
        var {FPT} = this.state;
        console.log(FPT);
        return (
            <div>
                <List F={FPT}/>
            </div>
        )
    }
}

export default Main;
