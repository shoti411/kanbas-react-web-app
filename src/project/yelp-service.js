import axios from "axios";

const KEY = process.env.REACT_APP_YELP_API_KEY;
const YELP_API = "https://api.yelp.com/v3/";



//https://api.napster.com/v2.2
// const NAPSTER_IMAGE_URL = "https://api.napster.com/imageserver/v2";

// export const albumImageUrl = (album) =>
//   `${NAPSTER_IMAGE_URL}/albums/${album.id}
// /images/300x300.jpg`;

export const fullTextSearch = async (text) => {
  const response = await axios.get(
    `${YELP_API}/businesses/search/${text}?apikey=${KEY}`
  );
  return response.data;
};

export const fetchAlbumById = async (businessId) => {
  const response = await axios.get(
    `${YELP_API}/businesses/search/${businessId}?apikey=${KEY}`
  );
  return response.data;
};

export const fetchTracksByAlbumId = async (businessId) => {
  const response = await axios.get(
    `${YELP_API}/businesses/search/${businessId}?apikey=${KEY}`
  );
  return response.data;
};