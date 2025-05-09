import { spotifyUserApiRequest } from "./axiosUser";

export const getRelatedArtists = async(artistId) => {
    try {
      const data = await spotifyUserApiRequest(`/artists/${artistId}/related-artists`)
      return data.artists
    } catch (error) {
      console.error('Error getting related artists:', error);
      throw error;
    }
  }
  
  export const getUserTopItems = async(type) => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) return [];
  
    try{
      const data = await spotifyUserApiRequest(`/me/top/${type}`, {
        params: {
          limit: 10,
          time_range: "medium_term"
        }
      })
      return data.items;
    }catch(error) {
      console.log(error)
      return []
    }
  }

  export const getUserRecentlyPLayed = async () => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      console.error("Ошибка: Нет access_token");
      return [];
    }
  
    try {
      const data = await spotifyUserApiRequest("/me/player/recently-played", {
        params: {
          limit: 10
        },
      });
      return data.items || [];
    } catch (error) {
      console.error("Ошибка при получении недавно прослушанных треков:", error);
      return []; 
    }
  };


  export const getUserPlaylists = async () => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      console.error("Ошибка: Нет access_token");
      return [];
    }

    try{
      const data = await spotifyUserApiRequest('/me/playlists' , {
        params: {
          limit: 10
        }
      })
      return data.items
    } catch(error) {
      console.log(error)
    }
  }