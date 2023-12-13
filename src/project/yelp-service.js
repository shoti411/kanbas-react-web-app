import axios from "axios";

const KEY = process.env.REACT_APP_YELP_API_KEY;
const YELP_API = "https://api.yelp.com/v3/";

// const yelp = require('yelp-fusion');
// const client = yelp.client(KEY);

//https://api.napster.com/v2.2
// const NAPSTER_IMAGE_URL = "https://api.napster.com/imageserver/v2";

// export const albumImageUrl = (album) =>
//   `${NAPSTER_IMAGE_URL}/albums/${album.id}
// /images/300x300.jpg`;

export const fullTextSearch = async (text) => {
  // client.search({
  //   term: 'Four Barrel Coffee',
  //   location: 'san francisco, ca',
  // }).then(response => {
  //   console.log(response.jsonBody.businesses[0].name);
  // }).catch(e => {
  //   console.log(e);
  // });
    
  const response = await axios.get(
    `${YELP_API}/businesses/search/${text}`,
    {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
        },
    });
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