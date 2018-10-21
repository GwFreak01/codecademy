let accessToken;
const client_id = "ea7dd38635ec4aadae73b4e2fd2ffc49";
const redirect_uri = "https://hirebinpham.surge.sh";
// const redirect_uri = "http://localhost:3000/";
const apiURL = "https://api.spotify.com/v1/";

const Spotify = {
    getAccessToken() {
        const regExAccessToken = window.location.href.match(/access_token=([^&]*)/);
        const regExExpiration = window.location.href.match(/expires_in=([^&]*)/);
        if (accessToken) {
            return accessToken;
        }
        else if (!accessToken && regExAccessToken) {
            accessToken = regExAccessToken[1];
            let expiresIn = regExExpiration[1];
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        }
        else {
            const url = "https://accounts.spotify.com/authorize?";
            const scope = "playlist-modify-public playlist-modify-private";
            const queryUrl = `client_id=${client_id}&response_type=token&scope=${scope}&redirect_uri=${redirect_uri}`;
            const endpoint = url + queryUrl;
            window.location = endpoint;
        }
    },

    search(searchTerm) {
        const accessToken = Spotify.getAccessToken();
        const queryUrl = `search?type=track&q=${searchTerm}`;
        const endpoint = apiURL + queryUrl;
        return fetch(endpoint, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then((response) => {
                return response.json();
        }).then((jsonResponse) => {
            if (jsonResponse.tracks) {
                return jsonResponse.tracks.items.map((track) => {
                    return {
                        id: track.id,
                        name: track.name,
                        artist: track.artists[0].name,
                        album: track.album.name,
                        uri: track.uri
                    };
                });
            }
            else {
                return [];
            }
        })
    },

    savePlaylist(playlistName, trackURIs) {
        const accessToken = Spotify.getAccessToken();
        let userId;
        let playlistId;
        if (!playlistName && !trackURIs) {
            return;
        }
        else {
            let queryUrl = "me";
            let endpoint = apiURL + queryUrl;
            return fetch(endpoint, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }).then((response) => {
                return response.json();
            }).then((jsonResponse) => {
                userId = jsonResponse.id;

                queryUrl = `users/${userId}/playlists`;
                endpoint = apiURL + queryUrl;
                return fetch(endpoint, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    },
                    body: JSON.stringify(
                        {
                            name: playlistName
                        }
                    )
                }).then((response) => {
                    return response.json();
                }).then((jsonResponse) => {
                    if (jsonResponse.id) {
                        playlistId = jsonResponse.id;
                        queryUrl = `users/${userId}/playlists/${playlistId}/tracks`;
                        endpoint = apiURL + queryUrl;
                        return fetch(endpoint, {
                            method: "POST",
                            headers: {
                                Authorization: `Bearer ${accessToken}`
                            },
                            body: JSON.stringify(
                                {
                                    uris: trackURIs
                                }
                            )
                        }).then((response) => {
                            if (response.status === 201) {
                                window.alert("Your playlist has been successfully created!");
                            }
                            else if (response.status === 202) {
                                window.alert("Your playlist has been accepted for processing!");
                            }
                            else {
                                window.alert("Your playlist was not saved!");
                            }
                            return response.json();
                        }).then((jsonResponse) => {
                            if (jsonResponse.snapshot_id) {
                                playlistId = jsonResponse.snapshot_id;
                            }
                        });
                    }
                });
            });
        }
    }
};

export default Spotify;