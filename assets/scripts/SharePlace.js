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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/SharePlace.js");
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

/***/ "./src/SharePlace.js":
/*!***************************!*\
  !*** ./src/SharePlace.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/Modal */ \"./src/UI/Modal.js\");\n/* harmony import */ var _UI_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/Map */ \"./src/UI/Map.js\");\n/* harmony import */ var _Utility_Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utility/Location */ \"./src/Utility/Location.js\");\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../key */ \"./key.js\");\n\n\n\n\ndocument.querySelector('script').src = `https://maps.googleapis.com/maps/api/js?key=${_key__WEBPACK_IMPORTED_MODULE_3__[\"key\"]}&callback=Function.prototype`;\nclass PlaceFinder {\n  constructor() {\n    const addressForm = document.querySelector('form');\n    const locateUserBtn = document.getElementById('locate-btn');\n    this.shareBtn = document.getElementById('share-btn');\n    locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));\n    this.shareBtn.addEventListener('click', this.sharePlaceHandler);\n    addressForm.addEventListener('submit', this.findAddressHandler.bind(this));\n  }\n  sharePlaceHandler() {\n    const sharedLinkInputElement = document.getElementById('share-link');\n    if (!navigator.clipboard) {\n      sharedLinkInputElement.select();\n      return;\n    }\n    navigator.clipboard.writeText(sharedLinkInputElement.value).then(() => {\n      alert('Copied into clipboard!');\n    }).catch(err => {\n      console.log(err);\n      sharedLinkInputElement.select();\n    });\n  }\n  selectPlace(coordinates, address) {\n    if (this.map) {\n      this.map.render(coordinates);\n    } else {\n      this.map = new _UI_Map__WEBPACK_IMPORTED_MODULE_1__[\"Map\"](coordinates);\n    }\n    fetch('https://sofiane-abou-abderrahim.github.io/javascript-nodejs-introduction-frontend/add-location', {\n      method: 'POST',\n      body: JSON.stringify({\n        address: address,\n        lat: coordinates.lat,\n        lng: coordinates.lng\n      }),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    }).then(response => {\n      return response.json();\n    }).then(data => {\n      const locationId = data.locId;\n      this.shareBtn.disabled = false;\n      const sharedLinkInputElement = document.getElementById('share-link');\n      sharedLinkInputElement.value = `${location.origin}/my-place?location=${locationId}`;\n    });\n  }\n  locateUserHandler() {\n    if (!navigator.geolocation) {\n      alert('Location feature is not available in your browser - please use a more modern browser or manually enter an address.');\n      return;\n    }\n    const modal = new _UI_Modal__WEBPACK_IMPORTED_MODULE_0__[\"Modal\"]('loading-modal-content', 'Loading location - please wait!');\n    modal.show();\n    navigator.geolocation.getCurrentPosition(async successResult => {\n      const coordinates = {\n        lat: successResult.coords.latitude + Math.random() * 50,\n        lng: successResult.coords.longitude + Math.random() * 50\n      };\n      const address = await Object(_Utility_Location__WEBPACK_IMPORTED_MODULE_2__[\"getAddressFromCoords\"])(coordinates);\n      modal.hide();\n      this.selectPlace(coordinates, address);\n    }, error => {\n      modal.hide();\n      alert('Could not locate you unfortunately. Please enter an address manually!');\n    });\n  }\n  async findAddressHandler(event) {\n    event.preventDefault();\n    const address = event.target.querySelector('input').value;\n    if (!address || address.trim().length === 0) {\n      alert('Invalid address entered - please try again!');\n      return;\n    }\n    const modal = new _UI_Modal__WEBPACK_IMPORTED_MODULE_0__[\"Modal\"]('loading-modal-content', 'Loading location - please wait!');\n    modal.show();\n    try {\n      const coordinates = await Object(_Utility_Location__WEBPACK_IMPORTED_MODULE_2__[\"getCoordsFromAddress\"])(address);\n      this.selectPlace(coordinates, address);\n    } catch (err) {\n      alert(err.message);\n    }\n    modal.hide();\n  }\n}\nconst placeFinder = new PlaceFinder();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2hhcmVQbGFjZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9TaGFyZVBsYWNlLmpzP2Q1YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuL1VJL01vZGFsJztcclxuaW1wb3J0IHsgTWFwIH0gZnJvbSAnLi9VSS9NYXAnO1xyXG5pbXBvcnQgeyBnZXRDb29yZHNGcm9tQWRkcmVzcywgZ2V0QWRkcmVzc0Zyb21Db29yZHMgfSBmcm9tICcuL1V0aWxpdHkvTG9jYXRpb24nO1xyXG5pbXBvcnQgeyBrZXkgfSBmcm9tICcuLi9rZXknO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAnc2NyaXB0J1xyXG4pLnNyYyA9IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PSR7a2V5fSZjYWxsYmFjaz1GdW5jdGlvbi5wcm90b3R5cGVgO1xyXG5cclxuY2xhc3MgUGxhY2VGaW5kZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgY29uc3QgYWRkcmVzc0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgICBjb25zdCBsb2NhdGVVc2VyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0ZS1idG4nKTtcclxuICAgIHRoaXMuc2hhcmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hhcmUtYnRuJyk7XHJcblxyXG4gICAgbG9jYXRlVXNlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubG9jYXRlVXNlckhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLnNoYXJlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaGFyZVBsYWNlSGFuZGxlcik7XHJcbiAgICBhZGRyZXNzRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmZpbmRBZGRyZXNzSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIHNoYXJlUGxhY2VIYW5kbGVyKCkge1xyXG4gICAgY29uc3Qgc2hhcmVkTGlua0lucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGFyZS1saW5rJyk7XHJcbiAgICBpZiAoIW5hdmlnYXRvci5jbGlwYm9hcmQpIHtcclxuICAgICAgc2hhcmVkTGlua0lucHV0RWxlbWVudC5zZWxlY3QoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdmlnYXRvci5jbGlwYm9hcmRcclxuICAgICAgLndyaXRlVGV4dChzaGFyZWRMaW5rSW5wdXRFbGVtZW50LnZhbHVlKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoJ0NvcGllZCBpbnRvIGNsaXBib2FyZCEnKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBzaGFyZWRMaW5rSW5wdXRFbGVtZW50LnNlbGVjdCgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFBsYWNlKGNvb3JkaW5hdGVzLCBhZGRyZXNzKSB7XHJcbiAgICBpZiAodGhpcy5tYXApIHtcclxuICAgICAgdGhpcy5tYXAucmVuZGVyKGNvb3JkaW5hdGVzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubWFwID0gbmV3IE1hcChjb29yZGluYXRlcyk7XHJcbiAgICB9XHJcbiAgICBmZXRjaChcclxuICAgICAgJ2h0dHBzOi8vc29maWFuZS1hYm91LWFiZGVycmFoaW0uZ2l0aHViLmlvL2phdmFzY3JpcHQtbm9kZWpzLWludHJvZHVjdGlvbi1mcm9udGVuZC9hZGQtbG9jYXRpb24nLFxyXG4gICAgICB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcclxuICAgICAgICAgIGxhdDogY29vcmRpbmF0ZXMubGF0LFxyXG4gICAgICAgICAgbG5nOiBjb29yZGluYXRlcy5sbmdcclxuICAgICAgICB9KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBjb25zdCBsb2NhdGlvbklkID0gZGF0YS5sb2NJZDtcclxuICAgICAgICB0aGlzLnNoYXJlQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3Qgc2hhcmVkTGlua0lucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGFyZS1saW5rJyk7XHJcbiAgICAgICAgc2hhcmVkTGlua0lucHV0RWxlbWVudC52YWx1ZSA9IGAke2xvY2F0aW9uLm9yaWdpbn0vbXktcGxhY2U/bG9jYXRpb249JHtsb2NhdGlvbklkfWA7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9jYXRlVXNlckhhbmRsZXIoKSB7XHJcbiAgICBpZiAoIW5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xyXG4gICAgICBhbGVydChcclxuICAgICAgICAnTG9jYXRpb24gZmVhdHVyZSBpcyBub3QgYXZhaWxhYmxlIGluIHlvdXIgYnJvd3NlciAtIHBsZWFzZSB1c2UgYSBtb3JlIG1vZGVybiBicm93c2VyIG9yIG1hbnVhbGx5IGVudGVyIGFuIGFkZHJlc3MuJ1xyXG4gICAgICApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbChcclxuICAgICAgJ2xvYWRpbmctbW9kYWwtY29udGVudCcsXHJcbiAgICAgICdMb2FkaW5nIGxvY2F0aW9uIC0gcGxlYXNlIHdhaXQhJ1xyXG4gICAgKTtcclxuICAgIG1vZGFsLnNob3coKTtcclxuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXHJcbiAgICAgIGFzeW5jIHN1Y2Nlc3NSZXN1bHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0ge1xyXG4gICAgICAgICAgbGF0OiBzdWNjZXNzUmVzdWx0LmNvb3Jkcy5sYXRpdHVkZSArIE1hdGgucmFuZG9tKCkgKiA1MCxcclxuICAgICAgICAgIGxuZzogc3VjY2Vzc1Jlc3VsdC5jb29yZHMubG9uZ2l0dWRlICsgTWF0aC5yYW5kb20oKSAqIDUwXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgZ2V0QWRkcmVzc0Zyb21Db29yZHMoY29vcmRpbmF0ZXMpO1xyXG4gICAgICAgIG1vZGFsLmhpZGUoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBsYWNlKGNvb3JkaW5hdGVzLCBhZGRyZXNzKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIG1vZGFsLmhpZGUoKTtcclxuICAgICAgICBhbGVydChcclxuICAgICAgICAgICdDb3VsZCBub3QgbG9jYXRlIHlvdSB1bmZvcnR1bmF0ZWx5LiBQbGVhc2UgZW50ZXIgYW4gYWRkcmVzcyBtYW51YWxseSEnXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZpbmRBZGRyZXNzSGFuZGxlcihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGFkZHJlc3MgPSBldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZTtcclxuICAgIGlmICghYWRkcmVzcyB8fCBhZGRyZXNzLnRyaW0oKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgYWxlcnQoJ0ludmFsaWQgYWRkcmVzcyBlbnRlcmVkIC0gcGxlYXNlIHRyeSBhZ2FpbiEnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoXHJcbiAgICAgICdsb2FkaW5nLW1vZGFsLWNvbnRlbnQnLFxyXG4gICAgICAnTG9hZGluZyBsb2NhdGlvbiAtIHBsZWFzZSB3YWl0ISdcclxuICAgICk7XHJcbiAgICBtb2RhbC5zaG93KCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IGF3YWl0IGdldENvb3Jkc0Zyb21BZGRyZXNzKGFkZHJlc3MpO1xyXG4gICAgICB0aGlzLnNlbGVjdFBsYWNlKGNvb3JkaW5hdGVzLCBhZGRyZXNzKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBhbGVydChlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBtb2RhbC5oaWRlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBwbGFjZUZpbmRlciA9IG5ldyBQbGFjZUZpbmRlcigpO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/SharePlace.js\n");

/***/ }),

/***/ "./src/UI/Map.js":
/*!***********************!*\
  !*** ./src/UI/Map.js ***!
  \***********************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Map\", function() { return Map; });\nclass Map {\n  constructor(coords) {\n    // this.coordinates = coords;\n    this.render(coords);\n  }\n  render(coordinates) {\n    if (!google) {\n      alert('Could not load maps library - please try again later!');\n      return;\n    }\n    const map = new google.maps.Map(document.getElementById('map'), {\n      center: coordinates,\n      zoom: 16\n    });\n    new google.maps.Marker({\n      position: coordinates,\n      map: map\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVUkvTWFwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL1VJL01hcC5qcz9iNTc5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNYXAge1xyXG4gIGNvbnN0cnVjdG9yKGNvb3Jkcykge1xyXG4gICAgLy8gdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkcztcclxuICAgIHRoaXMucmVuZGVyKGNvb3Jkcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY29vcmRpbmF0ZXMpIHtcclxuICAgIGlmICghZ29vZ2xlKSB7XHJcbiAgICAgIGFsZXJ0KCdDb3VsZCBub3QgbG9hZCBtYXBzIGxpYnJhcnkgLSBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyIScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgICAgY2VudGVyOmNvb3JkaW5hdGVzLFxyXG4gICAgICB6b29tOiAxNlxyXG4gICAgfSk7XHJcblxyXG4gICAgbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgIHBvc2l0aW9uOiBjb29yZGluYXRlcyxcclxuICAgICAgbWFwOiBtYXBcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/UI/Map.js\n");

/***/ }),

/***/ "./src/UI/Modal.js":
/*!*************************!*\
  !*** ./src/UI/Modal.js ***!
  \*************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Modal\", function() { return Modal; });\nclass Modal {\n  constructor(contentId, fallbackText) {\n    this.fallbackText = fallbackText;\n    this.contentTemplateEl = document.getElementById(contentId);\n    this.modalTemplateEl = document.getElementById('modal-template');\n  }\n  show() {\n    if ('content' in document.createElement('template')) {\n      const modalElements = document.importNode(this.modalTemplateEl.content, true);\n      this.modalElement = modalElements.querySelector('.modal');\n      this.backdropElement = modalElements.querySelector('.backdrop');\n      const contentElement = document.importNode(this.contentTemplateEl.content, true);\n      this.modalElement.appendChild(contentElement);\n      document.body.insertAdjacentElement('afterbegin', this.modalElement);\n      document.body.insertAdjacentElement('afterbegin', this.backdropElement);\n    } else {\n      // fallback code\n      alert(this.fallbackText);\n    }\n  }\n  hide() {\n    if (this.modalElement) {\n      document.body.removeChild(this.modalElement); // this.modalElement.remove()\n      document.body.removeChild(this.backdropElement);\n      this.modalElement = null;\n      this.backdropElement = null;\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVUkvTW9kYWwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvVUkvTW9kYWwuanM/MjcwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTW9kYWwge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRlbnRJZCwgZmFsbGJhY2tUZXh0KSB7XHJcbiAgICB0aGlzLmZhbGxiYWNrVGV4dCA9IGZhbGxiYWNrVGV4dDtcclxuICAgIHRoaXMuY29udGVudFRlbXBsYXRlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250ZW50SWQpO1xyXG4gICAgdGhpcy5tb2RhbFRlbXBsYXRlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtdGVtcGxhdGUnKTtcclxuICB9XHJcblxyXG4gIHNob3coKSB7XHJcbiAgICBpZiAoJ2NvbnRlbnQnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJykpIHtcclxuICAgICAgY29uc3QgbW9kYWxFbGVtZW50cyA9IGRvY3VtZW50LmltcG9ydE5vZGUoXHJcbiAgICAgICAgdGhpcy5tb2RhbFRlbXBsYXRlRWwuY29udGVudCxcclxuICAgICAgICB0cnVlXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMubW9kYWxFbGVtZW50ID0gbW9kYWxFbGVtZW50cy5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQgPSBtb2RhbEVsZW1lbnRzLnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZHJvcCcpO1xyXG4gICAgICBjb25zdCBjb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUoXHJcbiAgICAgICAgdGhpcy5jb250ZW50VGVtcGxhdGVFbC5jb250ZW50LFxyXG4gICAgICAgIHRydWVcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMubW9kYWxFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnRFbGVtZW50KTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgdGhpcy5tb2RhbEVsZW1lbnQpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIHRoaXMuYmFja2Ryb3BFbGVtZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGZhbGxiYWNrIGNvZGVcclxuICAgICAgYWxlcnQodGhpcy5mYWxsYmFja1RleHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlkZSgpIHtcclxuICAgIGlmICh0aGlzLm1vZGFsRWxlbWVudCkge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMubW9kYWxFbGVtZW50KTsgLy8gdGhpcy5tb2RhbEVsZW1lbnQucmVtb3ZlKClcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmJhY2tkcm9wRWxlbWVudCk7XHJcbiAgICAgIHRoaXMubW9kYWxFbGVtZW50ID0gbnVsbDtcclxuICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/UI/Modal.js\n");

/***/ }),

/***/ "./src/Utility/Location.js":
/*!*********************************!*\
  !*** ./src/Utility/Location.js ***!
  \*********************************/
/*! exports provided: getAddressFromCoords, getCoordsFromAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAddressFromCoords\", function() { return getAddressFromCoords; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCoordsFromAddress\", function() { return getCoordsFromAddress; });\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../key */ \"./key.js\");\n\nasync function getAddressFromCoords(coords) {\n  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${_key__WEBPACK_IMPORTED_MODULE_0__[\"key\"]}`);\n  if (!response.ok) {\n    throw new Error('Failed to fetch address. Please try again!');\n  }\n  const data = await response.json();\n  if (data.error_message) {\n    throw new Error(data.error_message);\n  }\n  const address = data.results[0].formatted_address;\n  return address;\n}\nasync function getCoordsFromAddress(address) {\n  const urlAddress = encodeURI(address);\n  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${_key__WEBPACK_IMPORTED_MODULE_0__[\"key\"]}`);\n  if (!response.ok) {\n    throw new Error('Failed to fetch coordinates. Please try again!');\n  }\n  const data = await response.json();\n  if (data.error_message) {\n    throw new Error(data.error_message);\n  }\n  const coordinates = data.results[0].geometry.location;\n  return coordinates;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXRpbGl0eS9Mb2NhdGlvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9VdGlsaXR5L0xvY2F0aW9uLmpzPzQyZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsga2V5IH0gZnJvbSAnLi4vLi4va2V5JztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBZGRyZXNzRnJvbUNvb3Jkcyhjb29yZHMpIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/bGF0bG5nPSR7Y29vcmRzLmxhdH0sJHtjb29yZHMubG5nfSZrZXk9JHtrZXl9YFxyXG4gICk7XHJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggYWRkcmVzcy4gUGxlYXNlIHRyeSBhZ2FpbiEnKTtcclxuICB9XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBpZiAoZGF0YS5lcnJvcl9tZXNzYWdlKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5lcnJvcl9tZXNzYWdlKTtcclxuICB9XHJcbiAgY29uc3QgYWRkcmVzcyA9IGRhdGEucmVzdWx0c1swXS5mb3JtYXR0ZWRfYWRkcmVzcztcclxuICByZXR1cm4gYWRkcmVzcztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvb3Jkc0Zyb21BZGRyZXNzKGFkZHJlc3MpIHtcclxuICBjb25zdCB1cmxBZGRyZXNzID0gZW5jb2RlVVJJKGFkZHJlc3MpO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9hZGRyZXNzPSR7dXJsQWRkcmVzc30ma2V5PSR7a2V5fWBcclxuICApO1xyXG4gIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIGNvb3JkaW5hdGVzLiBQbGVhc2UgdHJ5IGFnYWluIScpO1xyXG4gIH1cclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIGlmIChkYXRhLmVycm9yX21lc3NhZ2UpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihkYXRhLmVycm9yX21lc3NhZ2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSBkYXRhLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb247XHJcbiAgcmV0dXJuIGNvb3JkaW5hdGVzO1xyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Utility/Location.js\n");

/***/ })

/******/ });