import axios from "axios";

export const searchYouTube = async (query) => {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

  const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
    params: {
      part: "snippet",
      maxResults: 5,
      q: query,
      key: apiKey,
      type: "video",
      videoEmbeddable: "true",
      videoSyndicated: "true",
    },
  });

  const items = response.data.items;
  for (let item of items) {
    if (item.id && item.id.videoId) {
      return item.id.videoId;
    }
  }

  return null;
};