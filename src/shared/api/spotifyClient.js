import { spotifyApiRequest } from './axiosClient';

export const searchArtists = async (searchQuery) => {
  if (!searchQuery?.trim()) {
    return [];
  }

  try {
    const data = await spotifyApiRequest('/search', {
      params: {
        q: searchQuery,
        type: 'artist',
        limit: 20
      }
    });
    return data.artists.items;
  } catch (error) {
    console.error('Error searching artists:', error);
    throw error;
  }
};

export const getArtistTopTracks = async (artistId) => {
  try {
    const data = await spotifyApiRequest(`/artists/${artistId}/top-tracks`, {
      params: {
        market: 'US'
      }
    });
    return data.tracks;
  } catch (error) {
    console.error('Error getting artist top tracks:', error);
    throw error;
  }
}

export const getArtistAlbums = async(artistId) => {
  try {
    const data = await spotifyApiRequest(`/artists/${artistId}/albums`, {
      params: {
        market: 'US',
        limit: 10
      }
  })
    return data.items
  } catch (error) {
    console.error('Error getting artist albums:', error);
    throw error;
  }
}

export const getAllCategories = async () => {
  try{
    const data = await spotifyApiRequest(`/browse/categories` , {
      params: {
        limit: 50
      }
    })
    return data.categories.items
  } catch(error) {
    console.log(error)
  }
}