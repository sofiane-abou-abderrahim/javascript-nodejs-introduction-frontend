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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/Map */ \"./src/UI/Map.js\");\n\n// import { key } from '../key';\n\n// document.querySelector(\n//   'script'\n// ).src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=Function.prototype`;\n\n// Fetch the API key from your backend\nfetch('https://nodejs-share-my-place-06b87a0b20ab.herokuapp.com/get-google-maps-api-key').then(response => response.json()).then(data => {\n  const apiKey = data.apiKey;\n\n  // Create the Google Maps API script element with the fetched apiKey\n  const script = document.createElement('script');\n  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=Function.prototype`;\n\n  // Replace the existing script element with the new one\n  const existingScript = document.querySelector('script');\n  existingScript.parentNode.replaceChild(script, existingScript);\n});\nclass LoadedPlace {\n  constructor(coordinates, address) {\n    new _UI_Map__WEBPACK_IMPORTED_MODULE_0__[\"Map\"](coordinates);\n    const headerTitleEl = document.querySelector('header h1');\n    headerTitleEl.textContent = address;\n  }\n}\nconst url = new URL(location.href);\nconst queryParams = url.searchParams;\n// const coords = {\n//   lat: parseFloat(queryParams.get('lat')),\n//   lng: +queryParams.get('lng')\n// };\n// const address = queryParams.get('address');\nconst locId = queryParams.get('location');\nfetch('https://nodejs-share-my-place-06b87a0b20ab.herokuapp.com/location/' + locId).then(response => {\n  if (response.status === 404) {\n    throw new Error('Could not find location!');\n  }\n  if (response.status === 500) {\n    throw new Error('Invalid id!');\n  }\n  return response.json();\n}).then(data => {\n  new LoadedPlace(data.coordinates, data.address);\n}).catch(err => {\n  alert(err.message);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTXlQbGFjZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9NeVBsYWNlLmpzPzVmM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwIH0gZnJvbSAnLi9VSS9NYXAnO1xyXG4vLyBpbXBvcnQgeyBrZXkgfSBmcm9tICcuLi9rZXknO1xyXG5cclxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuLy8gICAnc2NyaXB0J1xyXG4vLyApLnNyYyA9IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PSR7a2V5fSZjYWxsYmFjaz1GdW5jdGlvbi5wcm90b3R5cGVgO1xyXG5cclxuLy8gRmV0Y2ggdGhlIEFQSSBrZXkgZnJvbSB5b3VyIGJhY2tlbmRcclxuZmV0Y2goXHJcbiAgJ2h0dHBzOi8vbm9kZWpzLXNoYXJlLW15LXBsYWNlLTA2Yjg3YTBiMjBhYi5oZXJva3VhcHAuY29tL2dldC1nb29nbGUtbWFwcy1hcGkta2V5J1xyXG4pXHJcbiAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgY29uc3QgYXBpS2V5ID0gZGF0YS5hcGlLZXk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSBHb29nbGUgTWFwcyBBUEkgc2NyaXB0IGVsZW1lbnQgd2l0aCB0aGUgZmV0Y2hlZCBhcGlLZXlcclxuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgc2NyaXB0LnNyYyA9IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PSR7YXBpS2V5fSZjYWxsYmFjaz1GdW5jdGlvbi5wcm90b3R5cGVgO1xyXG5cclxuICAgIC8vIFJlcGxhY2UgdGhlIGV4aXN0aW5nIHNjcmlwdCBlbGVtZW50IHdpdGggdGhlIG5ldyBvbmVcclxuICAgIGNvbnN0IGV4aXN0aW5nU2NyaXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0Jyk7XHJcbiAgICBleGlzdGluZ1NjcmlwdC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChzY3JpcHQsIGV4aXN0aW5nU2NyaXB0KTtcclxuICB9KTtcclxuXHJcbmNsYXNzIExvYWRlZFBsYWNlIHtcclxuICBjb25zdHJ1Y3Rvcihjb29yZGluYXRlcywgYWRkcmVzcykge1xyXG4gICAgbmV3IE1hcChjb29yZGluYXRlcyk7XHJcbiAgICBjb25zdCBoZWFkZXJUaXRsZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIGgxJyk7XHJcbiAgICBoZWFkZXJUaXRsZUVsLnRleHRDb250ZW50ID0gYWRkcmVzcztcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHVybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XHJcbmNvbnN0IHF1ZXJ5UGFyYW1zID0gdXJsLnNlYXJjaFBhcmFtcztcclxuLy8gY29uc3QgY29vcmRzID0ge1xyXG4vLyAgIGxhdDogcGFyc2VGbG9hdChxdWVyeVBhcmFtcy5nZXQoJ2xhdCcpKSxcclxuLy8gICBsbmc6ICtxdWVyeVBhcmFtcy5nZXQoJ2xuZycpXHJcbi8vIH07XHJcbi8vIGNvbnN0IGFkZHJlc3MgPSBxdWVyeVBhcmFtcy5nZXQoJ2FkZHJlc3MnKTtcclxuY29uc3QgbG9jSWQgPSBxdWVyeVBhcmFtcy5nZXQoJ2xvY2F0aW9uJyk7XHJcbmZldGNoKFxyXG4gICdodHRwczovL25vZGVqcy1zaGFyZS1teS1wbGFjZS0wNmI4N2EwYjIwYWIuaGVyb2t1YXBwLmNvbS9sb2NhdGlvbi8nICsgbG9jSWRcclxuKVxyXG4gIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGxvY2F0aW9uIScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNTAwKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBpZCEnKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgfSlcclxuICAudGhlbihkYXRhID0+IHtcclxuICAgIG5ldyBMb2FkZWRQbGFjZShkYXRhLmNvb3JkaW5hdGVzLCBkYXRhLmFkZHJlc3MpO1xyXG4gIH0pXHJcbiAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICBhbGVydChlcnIubWVzc2FnZSk7XHJcbiAgfSk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/MyPlace.js\n");

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