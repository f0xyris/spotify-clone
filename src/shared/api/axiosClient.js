import axios from 'axios';

export const getAccessToken = async () => {
  const clientID = import.meta.env.VITE_SPOTIFY_CLIENT_ID
  const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET

  if (!clientID || !clientSecret) {
    throw new Error('Missing Spotify credentials. Please check your .env file');
  }

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', 
      new URLSearchParams({
        grant_type: 'client_credentials'
      }), {
      headers: {
        'Authorization': `Basic ${btoa(`${clientID}:${clientSecret}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching Access Token:', error.response?.data || error.message);
    throw error;
  }
};

export const getSpotifyAuthUrl = () => {
  const AUTH_ENDPOINT = import.meta.env.VITE_SPOTIFY_AUTH_ENDPOINT;
  const clientID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const REDIRECT_URI = encodeURIComponent(import.meta.env.VITE_SPOTIFY_REDIRECT_URL || 'http://127.0.0.1:5173/callback');
  const RESPONSE_TYPE = 'code';
  const SCOPES = [
    'user-read-private',
    'user-read-email',
    'user-top-read',
    'user-library-read',
    'playlist-modify-public',
    'playlist-modify-private',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-follow-read',
    'user-read-recently-played',
    'streaming',
    'app-remote-control',
    'ugc-image-upload',
    'user-read-currently-playing',
    'playlist-read-collaborative',
    'playlist-read-private'
  ].join(' ');

  const url = `${AUTH_ENDPOINT}?client_id=${clientID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=${encodeURIComponent(SCOPES)}`;
  return url;
};

export const spotifyApiRequest = async (endpoint, options = {}) => {
  try {
    const accessToken = await getAccessToken();
    const response = await axios({
      url: `https://api.spotify.com/v1${endpoint}`,
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        ...options.headers
      },
      ...options
    });
    return response.data;
  } catch (error) {
    console.error(`Error making Spotify API request to ${endpoint}:`, error.response?.data || error.message);
    throw error;
  }
};