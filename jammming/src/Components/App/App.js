import React, { Component } from 'react';
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
            ],
            playListName: "Lit Time",
            playlistTracks: [
                {
                    name: "Jesus",
                    artist: "Cow",
                    album: "Greener",
                    id: "0"

                },
                {
                    name: "God's Plan",
                    artist: "Christ",
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
                        <SearchResults
                            searchResults={this.state.searchResults}
                        />
                        <Playlist
                            playListName={this.state.playListName}
                            playlistTracks={this.state.playlistTracks}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
