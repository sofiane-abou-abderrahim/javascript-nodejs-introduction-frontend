import { Map } from './UI/Map';

class LoadedPlace {
  constructor(coordinates, address) {
    new Map(coordinates);
    const headerTitleEl = document.querySelector('header h1');
    headerTitleEl.textContent = address;
  }
}

const url = new URL(location.href);
const queryParams = url.searchParams;
// const coords = {
//   lat: parseFloat(queryParams.get('lat')),
//   lng: +queryParams.get('lng')
// };
// const address = queryParams.get('address');
const locId = queryParams.get('location'); // "location" is the key name we used in SharePlace.js
fetch('http://localhost:3000/location/' + locId)
  .then(response => {
    // we might get a status code which is 404 if we have no place because we set this logic in the backend
    if (response.status === 404) {
      throw new Error('Could not find location!');
    }
    return response.json();
  })
  .then(data => {
    new LoadedPlace(data.coordinates, data.address); // "coordinates" and "address" because we send back these key names in the backend
  })
  .catch(err => {
    alert(err.message);
  });
