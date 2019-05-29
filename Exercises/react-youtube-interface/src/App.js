import React, {Component} from 'react';

import './App.css';
import Logo from './Component/logo';
import Searchbar from './Component/searchbar'
import Icon from './Component/searchicon';
import Player from './Component/links';
import Description from './Component/description'
import Side from './Component/side'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {}

    }

    render() {
        return (
            <div className="App">
                <Logo/>
                <Searchbar/>
                <Icon/>
                <Player/>
                <Description/>
                <Side/>
            </div>
        );
    }
}

export default App;
