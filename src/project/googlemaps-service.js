import axios from "axios";

export const KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
export const GOOGLE_MAPS_API = "https://maps.googleapis.com/maps/api/place"

// const request = axios.create({
//   withCredentials: true,
// });

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
    `${GOOGLE_MAPS_API}/textsearch/json?query=${text}&key=${KEY}`);
    // .then((response) => {
    //   alert();
    // })
    // .catch(function(error) {
    //   console.log(error);
    // });
  return response.data;
};

export const findBusinessById = async (businessId) => {
  const response = await axios.get(
    `${GOOGLE_MAPS_API}/details/json?place_id=${businessId}&key=${KEY}`);
  return response.data.result;
};

export const findBusinessByLocation = async (phoneNumber) => {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/place/findplacefromtext/json
    ?input=%2B${phoneNumber}
    &inputtype=phonenumber
    &key=${KEY}`
  );
  return response.data.result;
}

// export const fetchTracksByAlbumId = async (businessId) => {
//   const response = await axios.get(
//     `${YELP_API}/businesses/search/${businessId}?apikey=${KEY}`
//   );
//   return response.data;
// };