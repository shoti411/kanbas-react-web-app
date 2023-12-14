import axios from "axios";

export const KEY = process.env.REACT_APP_YELP_API_KEY;
export const YELP_API = "https://api.yelp.com/v3";

const request = axios.create({
  withCredentials: true,
});

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
    
  const response = await request.get(
    `${YELP_API}/businesses/search?term=${text}&sort_by=best_match&limit=20&apikey=${KEY}`,
    {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer l6l3Nhj4TCwAlHpW0Va2xiyu0PU-CH4_PaiTOLriAl1u_R-95Z_1xSJSlcQcxmYKcWEbGzZQnq5qm-osVL2YNwp1ov13tDJae39cqZfjg9oU8-1zPFwLtqQaI8dbZXYx`,
        },
    })
    .then((response) => {
      alert();
    })
    .catch(function(error) {
      console.log(error);
    });;
  return response.data;
};

// export const fetchAlbumById = async (businessId) => {
//   const response = await axios.get(
//     `${YELP_API}/businesses/search/${businessId}?apikey=${KEY}`
//   );
//   return response;
// };

// export const fetchTracksByAlbumId = async (businessId) => {
//   const response = await axios.get(
//     `${YELP_API}/businesses/search/${businessId}?apikey=${KEY}`
//   );
//   return response.data;
// };