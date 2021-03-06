import React, { Component } from 'react';
import Spotify from '../../util/Spotify';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: [],
            playListName: "New Playlist",
            playlistTracks: []
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
        Spotify.savePlaylist(this.state.playListName, trackURIs);
        this.setState({
            playListName: "New Playlist",
            playlistTracks: []
        });
    }

    search(searchTerm) {
        console.log(searchTerm);
        Spotify.search(searchTerm).then((tracks) => {
            this.setState({
                searchResults: tracks
            });
        });
    }

    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar
                        onSearch={this.search}
                    />
                    <div className="App-playlist">
                        <SearchResults
                            searchResults={this.state.searchResults}
                            onAdd={this.addTrack}

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
