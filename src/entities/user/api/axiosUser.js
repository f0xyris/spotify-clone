import axios from "axios";

export const getUserAccessToken = async () => {
  const accessToken = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem("refresh_token");

  if (!accessToken && !refreshToken) {
    throw new Error("Нет токенов доступа");
  }

  try {
    await axios.get("https://api.spotify.com/v1/me", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return accessToken;
  } catch (err) {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
      {
        headers: {
          Authorization: `Basic ${btoa(
            `${import.meta.env.VITE_SPOTIFY_CLIENT_ID}:${import.meta.env.VITE_SPOTIFY_CLIENT_SECRET}`
          )}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const newAccessToken = response.data.access_token;
    localStorage.setItem("access_token", newAccessToken);
    return newAccessToken;
  }
};

export const spotifyUserApiRequest = async (endpoint, options = {}) => {
  try {
    const accessToken = await getUserAccessToken();
    if (!accessToken) {
      throw new Error("Нет действующего токена доступа");
    }

    const response = await axios({
      url: `https://api.spotify.com/v1${endpoint}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        ...options.headers,
      },
      ...options,
    });

    return response.data;
  } catch (error) {
    console.error(`Ошибка при запросе к Spotify API: ${endpoint}`, error.response?.data || error.message);
    throw error;
  }
};

export const getUserProfile = async () => {
    const accessToken = localStorage.getItem('access_token');
  
      if(!accessToken) {
        return
      }
  
    try {
      const response = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      return response.data;
    } catch(error) {
      console.error('Error getting user:', error);
      throw error;
    }
  }