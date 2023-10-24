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

/***/ "./key.js":
/*!****************!*\
  !*** ./key.js ***!
  \****************/
/*! exports provided: key */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"key\", function() { return key; });\nconst key = 'AIzaSyCooe2n56gbx6HSjGrupWn4eyKGfSvG15M';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9rZXkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9rZXkuanM/ZmJkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qga2V5ID0gJ0FJemFTeUNvb2UybjU2Z2J4NkhTakdydXBXbjRleUtHZlN2RzE1TSc7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./key.js\n");

/***/ }),

/***/ "./src/MyPlace.js":
/*!************************!*\
  !*** ./src/MyPlace.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/Map */ \"./src/UI/Map.js\");\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../key */ \"./key.js\");\n\n\ndocument.querySelector('script').src = `https://maps.googleapis.com/maps/api/js?key=${_key__WEBPACK_IMPORTED_MODULE_1__[\"key\"]}&callback=Function.prototype`;\nclass LoadedPlace {\n  constructor(coordinates, address) {\n    new _UI_Map__WEBPACK_IMPORTED_MODULE_0__[\"Map\"](coordinates);\n    const headerTitleEl = document.querySelector('header h1');\n    headerTitleEl.textContent = address;\n  }\n}\nconst url = new URL(location.href);\nconst queryParams = url.searchParams;\n// const coords = {\n//   lat: parseFloat(queryParams.get('lat')),\n//   lng: +queryParams.get('lng')\n// };\n// const address = queryParams.get('address');\nconst locId = queryParams.get('location');\nfetch('http://localhost:3000/location/' + locId).then(response => {\n  if (response.status === 404) {\n    throw new Error('Could not find location!');\n  }\n  if (response.status === 500) {\n    throw new Error('Invalid id!');\n  }\n  return response.json();\n}).then(data => {\n  new LoadedPlace(data.coordinates, data.address);\n}).catch(err => {\n  alert(err.message);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTXlQbGFjZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9NeVBsYWNlLmpzPzVmM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwIH0gZnJvbSAnLi9VSS9NYXAnO1xyXG5pbXBvcnQgeyBrZXkgfSBmcm9tICcuLi9rZXknO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAnc2NyaXB0J1xyXG4pLnNyYyA9IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PSR7a2V5fSZjYWxsYmFjaz1GdW5jdGlvbi5wcm90b3R5cGVgO1xyXG5cclxuY2xhc3MgTG9hZGVkUGxhY2Uge1xyXG4gIGNvbnN0cnVjdG9yKGNvb3JkaW5hdGVzLCBhZGRyZXNzKSB7XHJcbiAgICBuZXcgTWFwKGNvb3JkaW5hdGVzKTtcclxuICAgIGNvbnN0IGhlYWRlclRpdGxlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgaDEnKTtcclxuICAgIGhlYWRlclRpdGxlRWwudGV4dENvbnRlbnQgPSBhZGRyZXNzO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgdXJsID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKTtcclxuY29uc3QgcXVlcnlQYXJhbXMgPSB1cmwuc2VhcmNoUGFyYW1zO1xyXG4vLyBjb25zdCBjb29yZHMgPSB7XHJcbi8vICAgbGF0OiBwYXJzZUZsb2F0KHF1ZXJ5UGFyYW1zLmdldCgnbGF0JykpLFxyXG4vLyAgIGxuZzogK3F1ZXJ5UGFyYW1zLmdldCgnbG5nJylcclxuLy8gfTtcclxuLy8gY29uc3QgYWRkcmVzcyA9IHF1ZXJ5UGFyYW1zLmdldCgnYWRkcmVzcycpO1xyXG5jb25zdCBsb2NJZCA9IHF1ZXJ5UGFyYW1zLmdldCgnbG9jYXRpb24nKTtcclxuZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2NhdGlvbi8nICsgbG9jSWQpXHJcbiAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgbG9jYXRpb24hJyk7XHJcbiAgICB9XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA1MDApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGlkIScpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICB9KVxyXG4gIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgbmV3IExvYWRlZFBsYWNlKGRhdGEuY29vcmRpbmF0ZXMsIGRhdGEuYWRkcmVzcyk7XHJcbiAgfSlcclxuICAuY2F0Y2goZXJyID0+IHtcclxuICAgIGFsZXJ0KGVyci5tZXNzYWdlKTtcclxuICB9KTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/MyPlace.js\n");

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