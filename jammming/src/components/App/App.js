import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from '../../../public/jammming_favicon.ico';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: [
                {
                    name: "Grass",
                    artist: "Cow",
                    album: "Greener",
                    id: "0"

                },
                {
                    name: "God's Plan",
                    artist: "Drake",
                    album: "Scorpion",
                    id: "1"
                }
            ]
        };
    }
    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar/>
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults}/>
                        <Playlist/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
