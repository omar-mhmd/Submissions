import React, { Component, useImperativeHandle } from 'react';

import './App.css';

import Logo from './Component/logo';
import Searchbar from './Component/searchbar'
import Icon from './Component/searchicon';
import Player from './Component/links';
import Description from './Component/description'
import Side from './Component/side'
import { async } from 'q';





class App extends Component {
    // key = "";
    constructor(props) {
        super(props)
        this.state = {
            videos: [],
            upcomingVideos: [],
            Text: []
        }
    }
    handleSubmit = key => async event => {

        event.preventDefault();
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${key}&type=video&key=AIzaSyCtx7eUJ8un7wGSXJYjP3k3L9iz9HAgQmA`);
        const result = await response.json();
        const a = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&relatedToVideoId=${result.items[0].id.videoId}&type=video&key=AIzaSyCtx7eUJ8un7wGSXJYjP3k3L9iz9HAgQmA`);
        const b = await a.json();
        console.log('b ', b)
        this.setState({
            videos: result.items,
            upcomingVideos: b.items
        })
        console.log('22',this.state.upcomingVideos)

        const Text = await fetch 
    }



    render() {
        console.log('app ', this.state.upcomingVideos)
        return (
            <div className="App">
                <Logo />
                <Searchbar x={this.handleSubmit} search={this.state.search} />
                <Icon />
                {(this.state.videos.length > 0) &&
                    <Player video={this.state.videos[0]} />}
                <Description />
                <Side y={this.handleSubmit} videos={this.state.upcomingVideos}  />
            </div>
        );
    }
}

export default App;
