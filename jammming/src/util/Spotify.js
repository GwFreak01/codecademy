let accessToken;
const client_id = "ea7dd38635ec4aadae73b4e2fd2ffc49";
const redirect_uri = "http://localhost:3000/";
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
            const queryParams = `client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_uri}`;
            const endpoint = url + queryParams;
            window.location = endpoint;
        }
    },

    search(searchTerm) {
        const accessToken = Spotify.getAccessToken();
        const queryParams = `search?type=track&q=${searchTerm}`;
        const endpoint = apiURL + queryParams;
        return fetch(endpoint, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then((response) => {
                return response.json();
        }).then((jsonResponse) => {
            console.log(jsonResponse);
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

    }
};

export default Spotify;