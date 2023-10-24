import { Map } from './UI/Map';
import { key } from '../key';

document.querySelector(
  'script'
).src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=Function.prototype`;

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
const locId = queryParams.get('location');
fetch('http://localhost:3000/location/' + locId)
  .then(response => {
    if (response.status === 404) {
      throw new Error('Could not find location!');
    }
    if (response.status === 500) {
      throw new Error('Invalid id!');
    }
    return response.json();
  })
  .then(data => {
    new LoadedPlace(data.coordinates, data.address);
  })
  .catch(err => {
    alert(err.message);
  });
