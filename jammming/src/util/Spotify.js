let accessToken;
const client_id = "ea7dd38635ec4aadae73b4e2fd2ffc49";
const redirect_uri = "http://localhost:3000/";

const Spotify = {
    getAccessToken() {
        const regExAccessToken = window.location.href.match(/access_token=([^&]*)/);
        const regExExpiration = window.location.href.match(/expires_in=([^&]*)/);

        if (accessToken) {
            return accessToken;
        }
        else if (!accessToken && regExAccessToken && regExExpiration) {
            accessToken = regExAccessToken;
            let expiresIn = regExExpiration;
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
    }
};

export default Spotify;