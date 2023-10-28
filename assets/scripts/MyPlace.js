/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets/scripts/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/MyPlace.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/MyPlace.js":
/*!************************!*\
  !*** ./src/MyPlace.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/Map */ \"./src/UI/Map.js\");\n\n\n// Add this code to fetch the key from your backend\nfetch('https://nodejs-share-my-place-06b87a0b20ab.herokuapp.com//api/google-maps-api-key').then(response => response.json()).then(data => {\n  // Use the fetched Google Maps API key\n  const googleMapsApiKey = data.googleMapsApiKey;\n  document.querySelector('script').src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=Function.prototype`;\n}).catch(error => {\n  console.error('Failed to fetch Google Maps API key:', error);\n});\nclass LoadedPlace {\n  constructor(coordinates, address) {\n    new _UI_Map__WEBPACK_IMPORTED_MODULE_0__[\"Map\"](coordinates);\n    const headerTitleEl = document.querySelector('header h1');\n    headerTitleEl.textContent = address;\n  }\n}\nconst url = new URL(location.href);\nconst queryParams = url.searchParams;\n// const coords = {\n//   lat: parseFloat(queryParams.get('lat')),\n//   lng: +queryParams.get('lng')\n// };\n// const address = queryParams.get('address');\nconst locId = queryParams.get('location');\nfetch('https://nodejs-share-my-place-06b87a0b20ab.herokuapp.com/location/' + locId).then(response => {\n  if (response.status === 404) {\n    throw new Error('Could not find location!');\n  }\n  if (response.status === 500) {\n    throw new Error('Invalid id!');\n  }\n  return response.json();\n}).then(data => {\n  new LoadedPlace(data.coordinates, data.address);\n}).catch(err => {\n  alert(err.message);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTXlQbGFjZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9NeVBsYWNlLmpzPzVmM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwIH0gZnJvbSAnLi9VSS9NYXAnO1xyXG5cclxuLy8gQWRkIHRoaXMgY29kZSB0byBmZXRjaCB0aGUga2V5IGZyb20geW91ciBiYWNrZW5kXHJcbmZldGNoKFxyXG4gICdodHRwczovL25vZGVqcy1zaGFyZS1teS1wbGFjZS0wNmI4N2EwYjIwYWIuaGVyb2t1YXBwLmNvbS8vYXBpL2dvb2dsZS1tYXBzLWFwaS1rZXknXHJcbilcclxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAvLyBVc2UgdGhlIGZldGNoZWQgR29vZ2xlIE1hcHMgQVBJIGtleVxyXG4gICAgY29uc3QgZ29vZ2xlTWFwc0FwaUtleSA9IGRhdGEuZ29vZ2xlTWFwc0FwaUtleTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICdzY3JpcHQnXHJcbiAgICApLnNyYyA9IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PSR7Z29vZ2xlTWFwc0FwaUtleX0mY2FsbGJhY2s9RnVuY3Rpb24ucHJvdG90eXBlYDtcclxuICB9KVxyXG4gIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggR29vZ2xlIE1hcHMgQVBJIGtleTonLCBlcnJvcik7XHJcbiAgfSk7XHJcblxyXG5jbGFzcyBMb2FkZWRQbGFjZSB7XHJcbiAgY29uc3RydWN0b3IoY29vcmRpbmF0ZXMsIGFkZHJlc3MpIHtcclxuICAgIG5ldyBNYXAoY29vcmRpbmF0ZXMpO1xyXG4gICAgY29uc3QgaGVhZGVyVGl0bGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBoMScpO1xyXG4gICAgaGVhZGVyVGl0bGVFbC50ZXh0Q29udGVudCA9IGFkZHJlc3M7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCB1cmwgPSBuZXcgVVJMKGxvY2F0aW9uLmhyZWYpO1xyXG5jb25zdCBxdWVyeVBhcmFtcyA9IHVybC5zZWFyY2hQYXJhbXM7XHJcbi8vIGNvbnN0IGNvb3JkcyA9IHtcclxuLy8gICBsYXQ6IHBhcnNlRmxvYXQocXVlcnlQYXJhbXMuZ2V0KCdsYXQnKSksXHJcbi8vICAgbG5nOiArcXVlcnlQYXJhbXMuZ2V0KCdsbmcnKVxyXG4vLyB9O1xyXG4vLyBjb25zdCBhZGRyZXNzID0gcXVlcnlQYXJhbXMuZ2V0KCdhZGRyZXNzJyk7XHJcbmNvbnN0IGxvY0lkID0gcXVlcnlQYXJhbXMuZ2V0KCdsb2NhdGlvbicpO1xyXG5mZXRjaChcclxuICAnaHR0cHM6Ly9ub2RlanMtc2hhcmUtbXktcGxhY2UtMDZiODdhMGIyMGFiLmhlcm9rdWFwcC5jb20vbG9jYXRpb24vJyArIGxvY0lkXHJcbilcclxuICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBsb2NhdGlvbiEnKTtcclxuICAgIH1cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaWQhJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gIH0pXHJcbiAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICBuZXcgTG9hZGVkUGxhY2UoZGF0YS5jb29yZGluYXRlcywgZGF0YS5hZGRyZXNzKTtcclxuICB9KVxyXG4gIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG4gIH0pO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/MyPlace.js\n");

/***/ }),

/***/ "./src/UI/Map.js":
/*!***********************!*\
  !*** ./src/UI/Map.js ***!
  \***********************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Map\", function() { return Map; });\nclass Map {\n  constructor(coords) {\n    // this.coordinates = coords;\n    this.render(coords);\n  }\n  render(coordinates) {\n    if (!google) {\n      alert('Could not load maps library - please try again later!');\n      return;\n    }\n    const map = new google.maps.Map(document.getElementById('map'), {\n      center: coordinates,\n      zoom: 16\n    });\n    new google.maps.Marker({\n      position: coordinates,\n      map: map\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVUkvTWFwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL1VJL01hcC5qcz9iNTc5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNYXAge1xyXG4gIGNvbnN0cnVjdG9yKGNvb3Jkcykge1xyXG4gICAgLy8gdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkcztcclxuICAgIHRoaXMucmVuZGVyKGNvb3Jkcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY29vcmRpbmF0ZXMpIHtcclxuICAgIGlmICghZ29vZ2xlKSB7XHJcbiAgICAgIGFsZXJ0KCdDb3VsZCBub3QgbG9hZCBtYXBzIGxpYnJhcnkgLSBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyIScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgICAgY2VudGVyOmNvb3JkaW5hdGVzLFxyXG4gICAgICB6b29tOiAxNlxyXG4gICAgfSk7XHJcblxyXG4gICAgbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgIHBvc2l0aW9uOiBjb29yZGluYXRlcyxcclxuICAgICAgbWFwOiBtYXBcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/UI/Map.js\n");

/***/ })

/******/ });