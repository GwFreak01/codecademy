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
                    id: "2"

                },
                {
                    name: "Christ",
                    artist: "Drake",
                    album: "Scorpion",
                    id: "3"
                }
            ]
        };

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        this.search = this.search.bind(this);
    }

    addTrack(track) {
        if (this.state.playlistTracks.find(playlistTrack => playlistTrack.id === track.id)) {
            return;
        }
        else {
            this.setState({
                playlistTracks: [...this.state.playlistTracks, track]
            });
        }
    }

    removeTrack(track) {
        let updatedPlaylistTracks = this.state.playlistTracks.filter((playlistTrack) => playlistTrack.id !== track.id);
        this.setState({
            playlistTracks: updatedPlaylistTracks
        });
    }

    updatePlaylistName(name) {
        this.setState({
            playListName: name
        });
    }

    savePlaylist() {
        let trackURIs = this.state.playlistTracks.map((playlistTrack) => {
            return playlistTrack.uri;
        });
    }

    search(searchTerm) {
        console.log('searchTerm: ', searchTerm);
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
                            onAdd={this.addTrack}
                            onSearch={this.search}
                        />
                        <Playlist
                            playListName={this.state.playListName}
                            playlistTracks={this.state.playlistTracks}
                            onRemove={this.removeTrack}
                            onNameChange={this.updatePlaylistName}
                            onSave={this.savePlaylist}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
