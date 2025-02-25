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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js":
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var manifest_1 = tslib_1.__importDefault(__webpack_require__(/*! ./manifest */ "../../node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js"));
var createReadOnlyValue = function createReadOnlyValue(value) {
    return {
        value: value,
        writable: false,
        enumerable: false,
        configurable: true
    };
};
function createConsumerApi(manifests, exposureMap) {
    var api = {};
    Object.keys(exposureMap).forEach(function (key) {
        Object.defineProperty(api, key, createReadOnlyValue(exposureMap[key]));
    });
    Object.defineProperty(api, '@manifest', createReadOnlyValue(manifest_1["default"](manifests)));
    Object.defineProperty(window, '@Neos:HostPluginAPI', createReadOnlyValue(api));
}
exports["default"] = createConsumerApi;
//# sourceMappingURL=createConsumerApi.js.map

/***/ }),

/***/ "../../node_modules/@neos-project/neos-ui-extensibility/dist/index.js":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@neos-project/neos-ui-extensibility/dist/index.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var createConsumerApi_1 = tslib_1.__importDefault(__webpack_require__(/*! ./createConsumerApi */ "../../node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js"));
exports.createConsumerApi = createConsumerApi_1["default"];
var readFromConsumerApi_1 = tslib_1.__importDefault(__webpack_require__(/*! ./readFromConsumerApi */ "../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js"));
exports.readFromConsumerApi = readFromConsumerApi_1["default"];
var index_1 = __webpack_require__(/*! ./registry/index */ "../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js");
exports.SynchronousRegistry = index_1.SynchronousRegistry;
exports.SynchronousMetaRegistry = index_1.SynchronousMetaRegistry;
exports["default"] = readFromConsumerApi_1["default"]('manifest');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js":
/*!**********************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = function (manifests) {
    return function (identifier, options, bootstrap) {
        var _a;
        manifests.push((_a = {}, _a[identifier] = {
            options: options,
            bootstrap: bootstrap
        }, _a));
    };
};
//# sourceMappingURL=manifest.js.map

/***/ }),

/***/ "../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
function readFromConsumerApi(key) {
    return function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (window['@Neos:HostPluginAPI'] && window['@Neos:HostPluginAPI']["@" + key]) {
            return (_a = window['@Neos:HostPluginAPI'])["@" + key].apply(_a, tslib_1.__spread(args));
        }
        throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!");
    };
}
exports["default"] = readFromConsumerApi;
//# sourceMappingURL=readFromConsumerApi.js.map

/***/ }),

/***/ "../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js":
/*!***************************************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var AbstractRegistry = function () {
    function AbstractRegistry(description) {
        this.SERIAL_VERSION_UID = 'd8a5aa78-978e-11e6-ae22-56b6b6499611';
        this.description = description;
    }
    return AbstractRegistry;
}();
exports["default"] = AbstractRegistry;
//# sourceMappingURL=AbstractRegistry.js.map

/***/ }),

/***/ "../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var SynchronousRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./SynchronousRegistry */ "../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js"));
var SynchronousMetaRegistry = function (_super) {
    tslib_1.__extends(SynchronousMetaRegistry, _super);
    function SynchronousMetaRegistry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SynchronousMetaRegistry.prototype.set = function (key, value) {
        if (value.SERIAL_VERSION_UID !== 'd8a5aa78-978e-11e6-ae22-56b6b6499611') {
            throw new Error('You can only add registries to a meta registry');
        }
        return _super.prototype.set.call(this, key, value);
    };
    return SynchronousMetaRegistry;
}(SynchronousRegistry_1["default"]);
exports["default"] = SynchronousMetaRegistry;
//# sourceMappingURL=SynchronousMetaRegistry.js.map

/***/ }),

/***/ "../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js":
/*!******************************************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var AbstractRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./AbstractRegistry */ "../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js"));
var positional_array_sorter_1 = tslib_1.__importDefault(__webpack_require__(/*! @neos-project/positional-array-sorter */ "../../node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js"));
var SynchronousRegistry = function (_super) {
    tslib_1.__extends(SynchronousRegistry, _super);
    function SynchronousRegistry(description) {
        var _this = _super.call(this, description) || this;
        _this._registry = [];
        return _this;
    }
    SynchronousRegistry.prototype.set = function (key, value, position) {
        if (position === void 0) {
            position = 0;
        }
        if (typeof key !== 'string') {
            throw new Error('Key must be a string');
        }
        if (typeof position !== 'string' && typeof position !== 'number') {
            throw new Error('Position must be a string or a number');
        }
        var entry = { key: key, value: value };
        if (position) {
            entry.position = position;
        }
        var indexOfItemWithTheSameKey = this._registry.findIndex(function (item) {
            return item.key === key;
        });
        if (indexOfItemWithTheSameKey === -1) {
            this._registry.push(entry);
        } else {
            this._registry[indexOfItemWithTheSameKey] = entry;
        }
        return value;
    };
    SynchronousRegistry.prototype.get = function (key) {
        if (typeof key !== 'string') {
            console.error('Key must be a string');
            return null;
        }
        var result = this._registry.find(function (item) {
            return item.key === key;
        });
        return result ? result.value : null;
    };
    SynchronousRegistry.prototype._getChildrenWrapped = function (searchKey) {
        var unsortedChildren = this._registry.filter(function (item) {
            return item.key.indexOf(searchKey + '/') === 0;
        });
        return positional_array_sorter_1["default"](unsortedChildren);
    };
    SynchronousRegistry.prototype.getChildrenAsObject = function (searchKey) {
        var result = {};
        this._getChildrenWrapped(searchKey).forEach(function (item) {
            result[item.key] = item.value;
        });
        return result;
    };
    SynchronousRegistry.prototype.getChildren = function (searchKey) {
        return this._getChildrenWrapped(searchKey).map(function (item) {
            return item.value;
        });
    };
    SynchronousRegistry.prototype.has = function (key) {
        if (typeof key !== 'string') {
            console.error('Key must be a string');
            return false;
        }
        return Boolean(this._registry.find(function (item) {
            return item.key === key;
        }));
    };
    SynchronousRegistry.prototype._getAllWrapped = function () {
        return positional_array_sorter_1["default"](this._registry);
    };
    SynchronousRegistry.prototype.getAllAsObject = function () {
        var result = {};
        this._getAllWrapped().forEach(function (item) {
            result[item.key] = item.value;
        });
        return result;
    };
    SynchronousRegistry.prototype.getAllAsList = function () {
        return this._getAllWrapped().map(function (item) {
            return Object.assign({ id: item.key }, item.value);
        });
    };
    return SynchronousRegistry;
}(AbstractRegistry_1["default"]);
exports["default"] = SynchronousRegistry;
//# sourceMappingURL=SynchronousRegistry.js.map

/***/ }),

/***/ "../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var SynchronousRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./SynchronousRegistry */ "../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js"));
exports.SynchronousRegistry = SynchronousRegistry_1["default"];
var SynchronousMetaRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./SynchronousMetaRegistry */ "../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js"));
exports.SynchronousMetaRegistry = SynchronousMetaRegistry_1["default"];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-backend-connector/index.js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-backend-connector/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchWithErrorHandling = undefined;

var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiBackendConnectorDefault;
var fetchWithErrorHandling = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiBackendConnector.fetchWithErrorHandling;
exports.fetchWithErrorHandling = fetchWithErrorHandling;

/***/ }),

/***/ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().ReactUiComponents;

/***/ }),

/***/ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js":
/*!*************************************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().React;

/***/ }),

/***/ "../../node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js":
/*!*************************************************************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var positionalArraySorter = function positionalArraySorter(subject, position, idKey) {
    var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _e, e_6, _f, e_7, _g;
    if (position === void 0) {
        position = 'position';
    }
    if (idKey === void 0) {
        idKey = 'key';
    }
    var positionAccessor = typeof position === 'string' ? function (value) {
        return value[position];
    } : position;
    var indexMapping = {};
    var middleKeys = {};
    var startKeys = {};
    var endKeys = {};
    var beforeKeys = {};
    var afterKeys = {};
    subject.forEach(function (item, index) {
        var key = item[idKey] ? item[idKey] : String(index);
        indexMapping[key] = index;
        var positionValue = positionAccessor(item);
        var position = String(positionValue ? positionValue : index);
        var invalid = false;
        if (position.startsWith('start')) {
            var weightMatch = position.match(/start\s+(\d+)/);
            var weight = weightMatch && weightMatch[1] ? Number(weightMatch[1]) : 0;
            if (!startKeys[weight]) {
                startKeys[weight] = [];
            }
            startKeys[weight].push(key);
        } else if (position.startsWith('end')) {
            var weightMatch = position.match(/end\s+(\d+)/);
            var weight = weightMatch && weightMatch[1] ? Number(weightMatch[1]) : 0;
            if (!endKeys[weight]) {
                endKeys[weight] = [];
            }
            endKeys[weight].push(key);
        } else if (position.startsWith('before')) {
            var match = position.match(/before\s+(\S+)(\s+(\d+))?/);
            if (!match) {
                invalid = true;
            } else {
                var reference = match[1];
                var weight = match[3] ? Number(match[3]) : 0;
                if (!beforeKeys[reference]) {
                    beforeKeys[reference] = {};
                }
                if (!beforeKeys[reference][weight]) {
                    beforeKeys[reference][weight] = [];
                }
                beforeKeys[reference][weight].push(key);
            }
        } else if (position.startsWith('after')) {
            var match = position.match(/after\s+(\S+)(\s+(\d+))?/);
            if (!match) {
                invalid = true;
            } else {
                var reference = match[1];
                var weight = match[3] ? Number(match[3]) : 0;
                if (!afterKeys[reference]) {
                    afterKeys[reference] = {};
                }
                if (!afterKeys[reference][weight]) {
                    afterKeys[reference][weight] = [];
                }
                afterKeys[reference][weight].push(key);
            }
        } else {
            invalid = true;
        }
        if (invalid) {
            var numberPosition = parseFloat(position);
            if (isNaN(numberPosition) || !isFinite(numberPosition)) {
                numberPosition = index;
            }
            if (!middleKeys[numberPosition]) {
                middleKeys[numberPosition] = [];
            }
            middleKeys[numberPosition].push(key);
        }
    });
    var resultStart = [];
    var resultMiddle = [];
    var resultEnd = [];
    var processedKeys = [];
    var sortedWeights = function sortedWeights(dict, asc) {
        var weights = Object.keys(dict).map(function (x) {
            return Number(x);
        }).sort(function (a, b) {
            return a - b;
        });
        return asc ? weights : weights.reverse();
    };
    var addToResults = function addToResults(keys, result) {
        keys.forEach(function (key) {
            var e_8, _a, e_9, _b;
            if (processedKeys.indexOf(key) >= 0) {
                return;
            }
            processedKeys.push(key);
            if (beforeKeys[key]) {
                var beforeWeights = sortedWeights(beforeKeys[key], true);
                try {
                    for (var beforeWeights_1 = tslib_1.__values(beforeWeights), beforeWeights_1_1 = beforeWeights_1.next(); !beforeWeights_1_1.done; beforeWeights_1_1 = beforeWeights_1.next()) {
                        var i = beforeWeights_1_1.value;
                        addToResults(beforeKeys[key][i], result);
                    }
                } catch (e_8_1) {
                    e_8 = { error: e_8_1 };
                } finally {
                    try {
                        if (beforeWeights_1_1 && !beforeWeights_1_1.done && (_a = beforeWeights_1["return"])) _a.call(beforeWeights_1);
                    } finally {
                        if (e_8) throw e_8.error;
                    }
                }
            }
            result.push(key);
            if (afterKeys[key]) {
                var afterWeights = sortedWeights(afterKeys[key], false);
                try {
                    for (var afterWeights_1 = tslib_1.__values(afterWeights), afterWeights_1_1 = afterWeights_1.next(); !afterWeights_1_1.done; afterWeights_1_1 = afterWeights_1.next()) {
                        var i = afterWeights_1_1.value;
                        addToResults(afterKeys[key][i], result);
                    }
                } catch (e_9_1) {
                    e_9 = { error: e_9_1 };
                } finally {
                    try {
                        if (afterWeights_1_1 && !afterWeights_1_1.done && (_b = afterWeights_1["return"])) _b.call(afterWeights_1);
                    } finally {
                        if (e_9) throw e_9.error;
                    }
                }
            }
        });
    };
    try {
        for (var _h = tslib_1.__values(sortedWeights(startKeys, false)), _j = _h.next(); !_j.done; _j = _h.next()) {
            var i = _j.value;
            addToResults(startKeys[i], resultStart);
        }
    } catch (e_1_1) {
        e_1 = { error: e_1_1 };
    } finally {
        try {
            if (_j && !_j.done && (_a = _h["return"])) _a.call(_h);
        } finally {
            if (e_1) throw e_1.error;
        }
    }
    try {
        for (var _k = tslib_1.__values(sortedWeights(middleKeys, true)), _l = _k.next(); !_l.done; _l = _k.next()) {
            var i = _l.value;
            addToResults(middleKeys[i], resultMiddle);
        }
    } catch (e_2_1) {
        e_2 = { error: e_2_1 };
    } finally {
        try {
            if (_l && !_l.done && (_b = _k["return"])) _b.call(_k);
        } finally {
            if (e_2) throw e_2.error;
        }
    }
    try {
        for (var _m = tslib_1.__values(sortedWeights(endKeys, true)), _o = _m.next(); !_o.done; _o = _m.next()) {
            var i = _o.value;
            addToResults(endKeys[i], resultEnd);
        }
    } catch (e_3_1) {
        e_3 = { error: e_3_1 };
    } finally {
        try {
            if (_o && !_o.done && (_c = _m["return"])) _c.call(_m);
        } finally {
            if (e_3) throw e_3.error;
        }
    }
    try {
        for (var _p = tslib_1.__values(Object.keys(beforeKeys)), _q = _p.next(); !_q.done; _q = _p.next()) {
            var key = _q.value;
            if (processedKeys.indexOf(key) >= 0) {
                continue;
            }
            try {
                for (var _r = (e_5 = void 0, tslib_1.__values(sortedWeights(beforeKeys[key], false))), _s = _r.next(); !_s.done; _s = _r.next()) {
                    var i = _s.value;
                    addToResults(beforeKeys[key][i], resultStart);
                }
            } catch (e_5_1) {
                e_5 = { error: e_5_1 };
            } finally {
                try {
                    if (_s && !_s.done && (_e = _r["return"])) _e.call(_r);
                } finally {
                    if (e_5) throw e_5.error;
                }
            }
        }
    } catch (e_4_1) {
        e_4 = { error: e_4_1 };
    } finally {
        try {
            if (_q && !_q.done && (_d = _p["return"])) _d.call(_p);
        } finally {
            if (e_4) throw e_4.error;
        }
    }
    try {
        for (var _t = tslib_1.__values(Object.keys(afterKeys)), _u = _t.next(); !_u.done; _u = _t.next()) {
            var key = _u.value;
            if (processedKeys.indexOf(key) >= 0) {
                continue;
            }
            try {
                for (var _v = (e_7 = void 0, tslib_1.__values(sortedWeights(afterKeys[key], false))), _w = _v.next(); !_w.done; _w = _v.next()) {
                    var i = _w.value;
                    addToResults(afterKeys[key][i], resultMiddle);
                }
            } catch (e_7_1) {
                e_7 = { error: e_7_1 };
            } finally {
                try {
                    if (_w && !_w.done && (_g = _v["return"])) _g.call(_v);
                } finally {
                    if (e_7) throw e_7.error;
                }
            }
        }
    } catch (e_6_1) {
        e_6 = { error: e_6_1 };
    } finally {
        try {
            if (_u && !_u.done && (_f = _t["return"])) _f.call(_t);
        } finally {
            if (e_6) throw e_6.error;
        }
    }
    var sortedKeys = tslib_1.__spread(resultStart, resultMiddle, resultEnd);
    return sortedKeys.map(function (key) {
        return indexMapping[key];
    }).map(function (i) {
        return subject[i];
    });
};
exports["default"] = positionalArraySorter;
//# sourceMappingURL=positionalArraySorter.js.map

/***/ }),

/***/ "../../node_modules/monet/dist/monet.js":
/*!*************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/monet/dist/monet.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Monet.js 0.9.3
 *
 * (c) 2012-2021 Chris Myers
 * @license Monet.js may be freely distributed under the MIT license.
 * For all details and documentation:
 * https://monet.github.io/monet.js/
 */
(function(root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(typeof self !== "undefined" ? self : this, function() {
    "use strict";
    function assignImp(target, source) {
        for (var key in source) {
            if (source.hasOwnProperty(key) && source[key] !== undefined) {
                target[key] = source[key];
            }
        }
        return target;
    }
    var assign = isFunction(Object.assign) ? Object.assign : assignImp;
    var Monet = {
        apply2: apply2,
        assign: assign,
        compose: compose,
        curry: curry(swap(curry), [])([]),
        idFunction: idFunction,
        isFunction: isFunction,
        noop: noop,
        swap: swap
    };
    var TYPE_KEY = "@@type";
    var LIB_NAME = "monet.js";
    var TYPES_NAMES = {
        Identity: "Identity",
        Maybe: "Maybe",
        Either: "Either",
        Validation: "Validation",
        List: "List",
        NEL: "NEL",
        IO: "IO",
        MonadT: "MonadT",
        Reader: "Reader",
        Free: "Free"
    };
    function setType(target, typeName) {
        target[TYPE_KEY] = LIB_NAME + "/" + typeName;
    }
    function isInstance(typeName) {
        return function(target) {
            return (target[TYPE_KEY] || target.constructor[TYPE_KEY]) === LIB_NAME + "/" + typeName;
        };
    }
    function isOfType(typeName) {
        return function(target) {
            var targetType = target[TYPE_KEY] || target.constructor && target.constructor[TYPE_KEY];
            return Boolean(targetType) && targetType.length >= typeName.length && targetType.indexOf(typeName) === targetType.length - typeName.length;
        };
    }
    function isNothing(value) {
        return value == null;
    }
    function isEmpty(value) {
        if (isNothing(value) || value === "") {
            return true;
        }
        if (Array.isArray(value) && value.length === 0) {
            return true;
        }
        if (typeof value === "object") {
            return Object.keys(value).length === 0;
        }
        return false;
    }
    function noop() {}
    function getArgs(args) {
        return Array.prototype.slice.call(args);
    }
    function curry(fn, args) {
        return function() {
            var args1 = args.concat(getArgs(arguments));
            return args1.length >= fn.length ? fn.apply(null, args1.slice(0, args1.length)) : curry(fn, args1);
        };
    }
    function compose(f, g) {
        return function(x) {
            return f(g(x));
        };
    }
    function isFunction(f) {
        return Boolean(f && f.constructor && f.call && f.apply);
    }
    function idFunction(value) {
        return value;
    }
    function trueFunction() {
        return true;
    }
    function areEqual(a, b) {
        if (a === b || a !== a && b !== b) {
            return true;
        }
        if (!a || !b) {
            return false;
        }
        if (isFunction(a.equals) && isFunction(b.equals)) {
            return a.equals(b);
        }
        return false;
    }
    function equals(a) {
        return function(b) {
            return areEqual(a, b);
        };
    }
    function falseFunction() {
        return false;
    }
    function swap(f) {
        return function(a, b) {
            return f(b, a);
        };
    }
    function apply2(a1, a2, f) {
        return a2.ap(a1.map(curry(f, [])));
    }
    function listEquals(list1, list2) {
        var a = list1;
        var b = list2;
        while (!a.isNil && !b.isNil) {
            if (!equals(a.head())(b.head())) {
                return false;
            }
            a = a.tail();
            b = b.tail();
        }
        return a.isNil && b.isNil;
    }
    function listMapC(fn, l) {
        return l.isNil ? Return(l) : Suspend(function() {
            return listMapC(fn, l.tail());
        }).map(curry(cons, [])(fn(l.head())));
    }
    function listMap(fn, l) {
        return listMapC(fn, l).run();
    }
    function listFilter(list, fn) {
        return list.foldRight(Nil)(function(a, acc) {
            return fn(a) ? cons(a, acc) : acc;
        });
    }
    function listFindC(l, fn) {
        if (l.isNil) {
            return Return(None());
        }
        var h = l.head();
        return fn(h) ? Return(Some(h)) : Suspend(function() {
            return listFindC(l.tail(), fn);
        });
    }
    function listFind(l, fn) {
        return listFindC(l, fn).run();
    }
    function listContainsC(l, val) {
        if (l.isNil) {
            return Return(false);
        }
        var h = l.head();
        return areEqual(h, val) ? Return(true) : Suspend(function() {
            return listContainsC(l.tail(), val);
        });
    }
    function listContains(l, val) {
        return listContainsC(l, val).run();
    }
    function cons(head, tail) {
        return tail.cons(head);
    }
    function List() {
        switch (arguments.length) {
          case 0:
            return new List.fn.init();

          case 1:
            return new List.fn.init(arguments[0]);

          default:
            return new List.fn.init(arguments[0], arguments[1]);
        }
    }
    Monet.List = List;
    var listForEach = function(effectFn, l) {
        if (!l.isNil) {
            effectFn(l.head());
            listForEach(effectFn, l.tail());
        }
    };
    var foldLeft = function(fn, acc, list) {
        function fL(innerAcc, innerList) {
            return innerList.isNil ? Return(innerAcc) : Suspend(function() {
                return fL(fn(innerAcc, innerList.head()), innerList.tail());
            });
        }
        return fL(acc, list).run();
    };
    var foldRight = function(fn, list, acc) {
        function fR(innerList, innerAcc) {
            return innerList.isNil ? Return(innerAcc) : Suspend(function() {
                return fR(innerList.tail(), innerAcc);
            }).map(function(accumulated) {
                return fn(innerList.head(), accumulated);
            });
        }
        return fR(list, acc).run();
    };
    var append = function(self, other) {
        function appendFree(listA, listB) {
            return listA.isNil ? Return(listB) : Suspend(function() {
                return appendFree(listA.tail(), listB).map(function(list) {
                    return list.cons(listA.head());
                });
            });
        }
        return appendFree(self, other).run();
    };
    var sequence = function(list, type) {
        return list.foldRight(type.of(Nil))(type.map2(cons));
    };
    var sequenceValidation = function(list) {
        return list.foldLeft(Success(Nil))(function(acc, a) {
            return acc.ap(a.map(function(v) {
                return function(t) {
                    return cons(v, t);
                };
            }));
        }).map(listReverse);
    };
    var listReverse = function(list) {
        return list.foldLeft(Nil)(swap(cons));
    };
    var listAp = function(list1, list2) {
        return list1.bind(function(x) {
            return list2.map(function(f) {
                return f(x);
            });
        });
    };
    var Nil;
    List.fn = List.prototype = {
        init: function() {
            var head = arguments[0];
            var tail = arguments[1];
            if (arguments.length === 0) {
                this.isNil = true;
                this.size_ = 0;
            } else {
                this.isNil = false;
                this.head_ = head;
                this.tail_ = tail || Nil;
                this.size_ = this.tail_.size() + 1;
            }
            setType(this, TYPES_NAMES.List);
        },
        of: function(value) {
            return new List(value);
        },
        size: function() {
            return this.size_;
        },
        equals: function(other) {
            return (List.isOfType(other) || NEL.isOfType(other)) && listEquals(this, other);
        },
        cons: function(head) {
            return List(head, this);
        },
        snoc: function(element) {
            return this.concat(List(element));
        },
        map: function(fn) {
            return listMap(fn, this);
        },
        toArray: function() {
            return foldLeft(function(acc, e) {
                acc.push(e);
                return acc;
            }, [], this);
        },
        toSet: function() {
            return new Set(this);
        },
        foldLeft: function(initialValue) {
            var self = this;
            return function(fn) {
                return foldLeft(fn, initialValue, self);
            };
        },
        foldRight: function(initialValue) {
            var self = this;
            return function(fn) {
                return foldRight(fn, self, initialValue);
            };
        },
        append: function(list2) {
            return append(this, list2);
        },
        filter: function(fn) {
            return listFilter(this, fn);
        },
        find: function(fn) {
            return listFind(this, fn);
        },
        flatten: function() {
            return foldRight(append, this, Nil);
        },
        flattenMaybe: function() {
            return this.flatMap(Maybe.toList);
        },
        reverse: function() {
            return listReverse(this);
        },
        bind: function(fn) {
            return this.map(fn).flatten();
        },
        forEach: function(effectFn) {
            listForEach(effectFn, this);
        },
        contains: function(val) {
            return listContains(this, val);
        },
        sequenceMaybe: function() {
            return sequence(this, Maybe);
        },
        sequenceValidation: function() {
            return sequenceValidation(this);
        },
        sequenceEither: function() {
            return sequence(this, Either);
        },
        sequenceIO: function() {
            return sequence(this, IO);
        },
        sequenceReader: function() {
            return sequence(this, Reader);
        },
        sequence: function(monadType) {
            return sequence(this, monadType);
        },
        head: function() {
            return this.head_;
        },
        headMaybe: function() {
            return this.isNil ? None() : Some(this.head_);
        },
        lookup: function(i) {
            return this.isNil || i >= this.size() ? None() : Maybe.fromNull(this.toArray()[i]);
        },
        nth: function(i) {
            return this.isNil || i >= this.size() ? undefined : this.toArray()[i];
        },
        tail: function() {
            return this.isNil ? Nil : this.tail_;
        },
        tails: function() {
            return this.isNil ? List(Nil, Nil) : this.tail().tails().cons(this);
        },
        ap: function(list) {
            return listAp(this, list);
        },
        apTo: function(listWithValues) {
            return listAp(listWithValues, this);
        },
        isNEL: falseFunction,
        toString: function() {
            return this.isNil ? "Nil" : "List(" + this.toArray().join(", ") + ")";
        },
        inspect: function() {
            return this.toString();
        }
    };
    List.fn.init.prototype = List.fn;
    setType(List, TYPES_NAMES.List);
    setType(List.fn.init, TYPES_NAMES.List);
    List.isInstance = isInstance(TYPES_NAMES.List);
    List.isOfType = isOfType(TYPES_NAMES.List);
    List.prototype.empty = function() {
        return Nil;
    };
    List.fromArray = function(array) {
        return array.reduceRight(function(acc, next) {
            return acc.cons(next);
        }, Nil);
    };
    List.from = function(iterable) {
        return List.fromArray(Array.from(iterable));
    };
    List.of = function(a) {
        return new List(a, Nil);
    };
    List.prototype.each = List.prototype.forEach;
    Nil = Monet.Nil = new List.fn.init();
    function emptyNELError(head) {
        return new Error("Cannot create an empty Non-Empty List. Passed head is " + head + ".");
    }
    function NEL(head, tail) {
        if (isNothing(head)) {
            throw emptyNELError(head);
        }
        return new NEL.fn.init(head, tail);
    }
    Monet.NEL = Monet.NonEmptyList = NEL;
    NEL.of = function(a) {
        return NEL(a, Nil);
    };
    NEL.fn = NEL.prototype = {
        init: function(head, tail) {
            if (isNothing(head)) {
                throw emptyNELError(head);
            } else {
                this.isNil = false;
                this.head_ = head;
                this.tail_ = isNothing(tail) ? Nil : tail;
                this.size_ = this.tail_.size() + 1;
            }
            setType(this, TYPES_NAMES.NEL);
        },
        equals: function(other) {
            return List.isOfType(other) || NEL.isOfType(other) && listEquals(this, other);
        },
        cons: function(head) {
            return NEL(head, this.toList());
        },
        snoc: function(element) {
            return this.concat(NEL(element));
        },
        map: function(fn) {
            return NEL(fn(this.head_), listMap(fn, this.tail_));
        },
        bind: function(fn) {
            var p = fn(this.head_);
            if (!p.isNEL()) {
                throw new Error("NEL.fn.bind: Passed function must return a NonEmptyList.");
            }
            var list = this.tail().foldLeft(Nil.snoc(p.head()).append(p.tail()))(function(acc, e) {
                var list2 = fn(e).toList();
                return acc.snoc(list2.head()).append(list2.tail());
            });
            return new NEL(list.head(), list.tail());
        },
        head: function() {
            return this.head_;
        },
        lookup: function(i) {
            return i >= this.size() ? None() : Maybe.fromNull(this.toArray()[i]);
        },
        nth: function(i) {
            return i >= this.size() ? undefined : this.toArray()[i];
        },
        tail: function() {
            return this.tail_;
        },
        tails: function() {
            var listsOfNels = this.toList().tails().map(NEL.fromList).flattenMaybe();
            return NEL(listsOfNels.head(), listsOfNels.tail());
        },
        toList: function() {
            return List(this.head_, this.tail_);
        },
        reverse: function() {
            if (this.tail().isNil) {
                return this;
            }
            var reversedTail = this.tail().reverse();
            return NEL(reversedTail.head(), reversedTail.tail().append(List(this.head())));
        },
        foldLeft: function(initialValue) {
            return this.toList().foldLeft(initialValue);
        },
        foldRight: function(initialValue) {
            return this.toList().foldRight(initialValue);
        },
        reduceLeft: function(fn) {
            return this.tail().foldLeft(this.head())(fn);
        },
        filter: function(fn) {
            return listFilter(this.toList(), fn);
        },
        find: function(fn) {
            return listFind(this.toList(), fn);
        },
        flatten: function() {
            return foldRight(append, this.toList().map(function(l) {
                return l.isNEL() ? l.toList() : l;
            }), Nil);
        },
        flattenMaybe: function() {
            return this.toList().flatMap(Maybe.toList);
        },
        contains: function(val) {
            return listContains(this.toList(), val);
        },
        append: function(list2) {
            return NEL.fromList(this.toList().append(list2.toList())).some();
        },
        cobind: function(fn) {
            return this.cojoin().map(fn);
        },
        size: function() {
            return this.size_;
        },
        forEach: function(fn) {
            return this.toList().forEach(fn);
        },
        isNEL: trueFunction,
        toString: function() {
            return "NEL(" + this.toArray().join(", ") + ")";
        },
        inspect: function() {
            return this.toString();
        }
    };
    NEL.fromList = function(list) {
        return list.isNil ? None() : Some(NEL(list.head(), list.tail()));
    };
    NEL.fromArray = function(array) {
        return NEL.fromList(List.fromArray(array));
    };
    NEL.from = function(iterable) {
        return NEL.fromList(List.from(iterable));
    };
    NEL.fn.init.prototype = NEL.fn;
    setType(NEL, TYPES_NAMES.NEL);
    setType(NEL.fn.init, TYPES_NAMES.NEL);
    NEL.isInstance = isInstance(TYPES_NAMES.NEL);
    NEL.isOfType = isOfType(TYPES_NAMES.NEL);
    NEL.prototype.toArray = List.prototype.toArray;
    NEL.prototype.toSet = List.prototype.toSet;
    NEL.prototype.extract = NEL.prototype.copure = NEL.prototype.head;
    NEL.prototype.cojoin = NEL.prototype.tails;
    NEL.prototype.coflatMap = NEL.prototype.mapTails = NEL.prototype.cobind;
    NEL.prototype.ap = List.prototype.ap;
    NEL.prototype.apTo = List.prototype.apTo;
    var Maybe = Monet.Maybe = {};
    Maybe.fromFalsy = function(val) {
        return !val ? Maybe.None() : Maybe.Some(val);
    };
    Maybe.fromNull = function(val) {
        return isNothing(val) ? Maybe.None() : Maybe.Some(val);
    };
    Maybe.fromUndefined = function(val) {
        return val === undefined ? Maybe.None() : Maybe.Some(val);
    };
    Maybe.fromEmpty = function(val) {
        return isEmpty(val) ? Maybe.None() : Maybe.Some(val);
    };
    Maybe.of = function(a) {
        return Some(a);
    };
    var Some = Maybe.Just = Maybe.Some = Maybe.some = Monet.Some = Monet.Just = function(val) {
        return new Maybe.fn.init(true, val);
    };
    var None = Maybe.Nothing = Maybe.None = Maybe.none = Monet.None = Monet.Nothing = function() {
        return new Maybe.fn.init(false, null);
    };
    Maybe.toList = function(maybe) {
        return maybe.toList();
    };
    Maybe.fn = Maybe.prototype = {
        init: function(isValue, val) {
            this.isValue = isValue;
            if (isValue && isNothing(val)) {
                throw new Error("Can not create Some with illegal value: " + val + ".");
            }
            this.val = val;
            setType(this, TYPES_NAMES.Maybe);
        },
        isSome: function() {
            return this.isValue;
        },
        isNone: function() {
            return !this.isSome();
        },
        bind: function(bindFn) {
            return this.isValue ? bindFn(this.val) : this;
        },
        some: function() {
            if (this.isValue) {
                return this.val;
            }
            throw new Error("Cannot call .some() on a None.");
        },
        orSome: function(otherValue) {
            return this.isValue ? this.val : otherValue;
        },
        orLazy: function(getOtherValue) {
            return this.cata(getOtherValue, idFunction);
        },
        orNull: function() {
            return this.orSome(null);
        },
        orUndefined: function() {
            return this.orSome(undefined);
        },
        orElse: function(maybe) {
            return this.catchMap(function() {
                return maybe;
            });
        },
        ap: function(maybeWithFunction) {
            var value = this.val;
            return this.isValue ? maybeWithFunction.map(function(fn) {
                return fn(value);
            }) : this;
        },
        apTo: function(maybeWithValue) {
            return maybeWithValue.ap(this);
        },
        equals: function(other) {
            return Maybe.isOfType(other) && this.cata(function() {
                return other.isNone();
            }, function(val) {
                return other.fold(false)(equals(val));
            });
        },
        toArray: function() {
            return this.map(function(val) {
                return [ val ];
            }).orLazy(function() {
                return [];
            });
        },
        toSet: function() {
            return new Set(this);
        },
        toList: function() {
            return this.map(List).orLazy(function() {
                return Nil;
            });
        },
        toEither: function(failVal) {
            return this.isSome() ? Right(this.val) : Left(failVal);
        },
        toValidation: function(failVal) {
            return this.isSome() ? Success(this.val) : Fail(failVal);
        },
        fold: function(defaultValue) {
            var self = this;
            return function(fn) {
                return self.isSome() ? fn(self.val) : defaultValue;
            };
        },
        foldLeft: function(initialValue) {
            return this.toList().foldLeft(initialValue);
        },
        foldRight: function(initialValue) {
            return this.toList().foldRight(initialValue);
        },
        cata: function(none, some) {
            return this.isSome() ? some(this.val) : none();
        },
        catchMap: function(fn) {
            return this.isSome() ? this : fn();
        },
        filter: function(fn) {
            var self = this;
            return self.flatMap(function(a) {
                return fn(a) ? self : None();
            });
        },
        orNoneIf: function(bool) {
            return bool ? None() : this;
        },
        contains: function(val) {
            return this.isSome() ? areEqual(this.val, val) : false;
        },
        forEach: function(fn) {
            this.cata(noop, fn);
        },
        orElseRun: function(fn) {
            this.cata(fn, noop);
        },
        toString: function() {
            return this.isSome() ? "Just(" + this.val + ")" : "Nothing";
        },
        inspect: function() {
            return this.toString();
        }
    };
    Maybe.prototype.orJust = Maybe.prototype.getOrElse = Maybe.prototype.orSome;
    Maybe.prototype.just = Maybe.prototype.some;
    Maybe.prototype.isJust = Maybe.prototype.isSome;
    Maybe.prototype.isNothing = Maybe.prototype.isNone;
    Maybe.prototype.orNothingIf = Maybe.prototype.orNoneIf;
    Maybe.fn.init.prototype = Maybe.fn;
    setType(Maybe, TYPES_NAMES.Maybe);
    setType(Maybe.fn.init, TYPES_NAMES.Maybe);
    Maybe.isInstance = isInstance(TYPES_NAMES.Maybe);
    Maybe.isOfType = isOfType(TYPES_NAMES.Maybe);
    var Validation = Monet.Validation = {};
    var Success = Validation.Success = Validation.success = Monet.Success = function(val) {
        return new Validation.fn.init(val, true);
    };
    var Fail = Validation.Fail = Validation.fail = Monet.Fail = function(error) {
        return new Validation.fn.init(error, false);
    };
    Validation.of = function(v) {
        return Success(v);
    };
    Validation.fn = Validation.prototype = {
        init: function(val, success) {
            this.val = val;
            this.isSuccessValue = success;
            setType(this, TYPES_NAMES.Validation);
        },
        success: function() {
            if (this.isSuccess()) {
                return this.val;
            }
            throw new Error("Cannot call success() on a Fail.");
        },
        isSuccess: function() {
            return this.isSuccessValue;
        },
        isFail: function() {
            return !this.isSuccessValue;
        },
        fail: function() {
            if (this.isSuccess()) {
                throw new Error("Cannot call fail() on a Success.");
            }
            return this.val;
        },
        bind: function(fn) {
            return this.isSuccess() ? fn(this.val) : this;
        },
        ap: function(validationWithFn) {
            var value = this.val;
            return this.isSuccess() ? validationWithFn.map(function(fn) {
                return fn(value);
            }) : validationWithFn.isFail() ? Validation.Fail(Semigroup.append(value, validationWithFn.fail())) : this;
        },
        apTo: function(validationWithValue) {
            return validationWithValue.ap(this);
        },
        acc: function() {
            var x = function() {
                return x;
            };
            return this.isSuccessValue ? Validation.success(x) : this;
        },
        foldLeft: function(initialValue) {
            return this.toMaybe().toList().foldLeft(initialValue);
        },
        foldRight: function(initialValue) {
            return this.toMaybe().toList().foldRight(initialValue);
        },
        cata: function(fail, success) {
            return this.isSuccessValue ? success(this.val) : fail(this.val);
        },
        catchMap: function(fn) {
            return this.isSuccess() ? this : fn(this.val);
        },
        swap: function() {
            return this.isSuccess() ? Fail(this.val) : Success(this.val);
        },
        failMap: function(fn) {
            return this.isFail() ? Fail(fn(this.val)) : this;
        },
        bimap: function(fail, success) {
            return this.isSuccessValue ? this.map(success) : this.failMap(fail);
        },
        forEach: function(fn) {
            this.cata(noop, fn);
        },
        forEachFail: function(fn) {
            this.cata(fn, noop);
        },
        equals: function(other) {
            return Validation.isOfType(other) && this.cata(function(fail) {
                return other.cata(equals(fail), falseFunction);
            }, function(success) {
                return other.cata(falseFunction, equals(success));
            });
        },
        toMaybe: function() {
            return this.isSuccess() ? Some(this.val) : None();
        },
        toEither: function() {
            return (this.isSuccess() ? Right : Left)(this.val);
        },
        toString: function() {
            return (this.isSuccess() ? "Success(" : "Fail(") + this.val + ")";
        },
        inspect: function() {
            return this.toString();
        }
    };
    Validation.prototype.fold = Validation.prototype.cata;
    Validation.fn.init.prototype = Validation.fn;
    setType(Validation, TYPES_NAMES.Validation);
    setType(Validation.fn.init, TYPES_NAMES.Validation);
    Validation.isInstance = isInstance(TYPES_NAMES.Validation);
    Validation.isOfType = isOfType(TYPES_NAMES.Validation);
    var Semigroup = Monet.Semigroup = {
        append: function(a, b) {
            if (isFunction(a.concat)) {
                return a.concat(b);
            }
            throw new Error("Couldn't find a semigroup appender in the environment, " + "please specify your own append function");
        }
    };
    var MonadT = Monet.monadTransformer = Monet.MonadT = Monet.monadT = function(monad) {
        return new MonadT.fn.init(monad);
    };
    MonadT.of = function(m) {
        return MonadT(m);
    };
    MonadT.fn = MonadT.prototype = {
        init: function(monad) {
            this.monad = monad;
            setType(Validation, TYPES_NAMES.MonadT);
        },
        map: function(fn) {
            return MonadT(this.monad.map(function(v) {
                return v.map(fn);
            }));
        },
        bind: function(fn) {
            return MonadT(this.monad.map(function(v) {
                return v.flatMap(fn);
            }));
        },
        ap: function(monadWithFn) {
            return MonadT(this.monad.flatMap(function(v) {
                return monadWithFn.perform().map(function(v2) {
                    return v.ap(v2);
                });
            }));
        },
        perform: function() {
            return this.monad;
        }
    };
    MonadT.fn.init.prototype = MonadT.fn;
    var IO = Monet.IO = Monet.io = function(effectFn) {
        return new IO.fn.init(effectFn);
    };
    IO.of = function(a) {
        return IO(function() {
            return a;
        });
    };
    IO.fn = IO.prototype = {
        init: function(effectFn) {
            if (!isFunction(effectFn)) {
                throw new Error("IO requires a function.");
            }
            this.effectFn = effectFn;
            setType(this, TYPES_NAMES.IO);
        },
        map: function(fn) {
            var self = this;
            return IO(function() {
                return fn(self.effectFn());
            });
        },
        bind: function(fn) {
            var self = this;
            return IO(function() {
                return fn(self.effectFn()).run();
            });
        },
        ap: function(ioWithFn) {
            var self = this;
            return ioWithFn.map(function(fn) {
                return fn(self.effectFn());
            });
        },
        apTo: function(ioWithValue) {
            return ioWithValue.ap(this);
        },
        run: function() {
            return this.effectFn();
        }
    };
    IO.fn.init.prototype = IO.fn;
    setType(IO, TYPES_NAMES.IO);
    setType(IO.fn.init, TYPES_NAMES.IO);
    IO.isInstance = isInstance(TYPES_NAMES.IO);
    IO.isOfType = isOfType(TYPES_NAMES.IO);
    IO.prototype.perform = IO.prototype.performUnsafeIO = IO.prototype.run;
    var Either = Monet.Either = {};
    Either.of = function(a) {
        return Right(a);
    };
    Either.fromTry = function(fn) {
        try {
            return Either.right(fn());
        } catch (e) {
            return Either.left(e);
        }
    };
    Either.fromPromise = function(promise) {
        return promise.then(Either.Right, Either.Left);
    };
    var Right = Either.Right = Either.right = Monet.Right = function(val) {
        return new Either.fn.init(val, true);
    };
    var Left = Either.Left = Either.left = Monet.Left = function(val) {
        return new Either.fn.init(val, false);
    };
    Either.fn = Either.prototype = {
        init: function(val, isRightValue) {
            this.isRightValue = isRightValue;
            this.value = val;
            setType(this, TYPES_NAMES.Either);
        },
        bind: function(fn) {
            return this.isRightValue ? fn(this.value) : this;
        },
        ap: function(eitherWithFn) {
            var self = this;
            return this.isRightValue ? eitherWithFn.map(function(fn) {
                return fn(self.value);
            }) : this;
        },
        apTo: function(eitherWithValue) {
            return eitherWithValue.ap(this);
        },
        leftMap: function(fn) {
            return this.isLeft() ? Left(fn(this.value)) : this;
        },
        isRight: function() {
            return this.isRightValue;
        },
        isLeft: function() {
            return !this.isRight();
        },
        right: function() {
            if (this.isRightValue) {
                return this.value;
            }
            throw new Error("Cannot call right() on a Left.");
        },
        left: function() {
            if (this.isRightValue) {
                throw new Error("Cannot call left() on a Right.");
            }
            return this.value;
        },
        foldLeft: function(initialValue) {
            return this.toMaybe().toList().foldLeft(initialValue);
        },
        foldRight: function(initialValue) {
            return this.toMaybe().toList().foldRight(initialValue);
        },
        cata: function(leftFn, rightFn) {
            return this.isRightValue ? rightFn(this.value) : leftFn(this.value);
        },
        catchMap: function(fn) {
            return this.isRight() ? this : fn(this.value);
        },
        swap: function() {
            return this.isRight() ? Left(this.value) : Right(this.value);
        },
        forEach: function(fn) {
            this.cata(noop, fn);
        },
        forEachLeft: function(fn) {
            this.cata(fn, noop);
        },
        equals: function(other) {
            return Either.isOfType(other) && this.cata(function(left) {
                return other.cata(equals(left), falseFunction);
            }, function(right) {
                return other.cata(falseFunction, equals(right));
            });
        },
        bimap: function(leftFn, rightFn) {
            return this.isRightValue ? this.map(rightFn) : this.leftMap(leftFn);
        },
        toMaybe: function() {
            return this.isRight() ? Some(this.value) : None();
        },
        toValidation: function() {
            return this.isRight() ? Success(this.value) : Fail(this.value);
        },
        toString: function() {
            return this.cata(function(left) {
                return "Left(" + left + ")";
            }, function(right) {
                return "Right(" + right + ")";
            });
        },
        toPromise: function() {
            return this.cata(function(left) {
                return Promise.reject(left);
            }, function(right) {
                return Promise.resolve(right);
            });
        },
        inspect: function() {
            return this.toString();
        }
    };
    Either.prototype.fold = Either.prototype.cata;
    Either.fn.init.prototype = Either.fn;
    setType(Either, TYPES_NAMES.Either);
    setType(Either.fn.init, TYPES_NAMES.Either);
    Either.isInstance = isInstance(TYPES_NAMES.Either);
    Either.isOfType = isOfType(TYPES_NAMES.Either);
    var Reader = Monet.Reader = function(fn) {
        return new Reader.fn.init(fn);
    };
    Reader.of = function(x) {
        return Reader(function(_) {
            return x;
        });
    };
    Reader.ask = function() {
        return Reader(idFunction);
    };
    Reader.fn = Reader.prototype = {
        init: function(fn) {
            this.f = fn;
            setType(this, TYPES_NAMES.Reader);
        },
        run: function(config) {
            return this.f(config);
        },
        bind: function(fn) {
            var self = this;
            return Reader(function(config) {
                return fn(self.run(config)).run(config);
            });
        },
        ap: function(readerWithFn) {
            var self = this;
            return readerWithFn.bind(function(fn) {
                return Reader(function(config) {
                    return fn(self.run(config));
                });
            });
        },
        apTo: function(readerWithValue) {
            return readerWithValue.ap(this);
        },
        map: function(fn) {
            var self = this;
            return Reader(function(config) {
                return fn(self.run(config));
            });
        },
        local: function(fn) {
            var self = this;
            return Reader(function(c) {
                return self.run(fn(c));
            });
        }
    };
    Reader.fn.init.prototype = Reader.fn;
    setType(Reader, TYPES_NAMES.Reader);
    setType(Reader.fn.init, TYPES_NAMES.Reader);
    Reader.isInstance = isInstance(TYPES_NAMES.Reader);
    Reader.isOfType = isOfType(TYPES_NAMES.Reader);
    var Free = Monet.Free = {};
    var Suspend = Free.Suspend = Monet.Suspend = function(functor) {
        return new Free.fn.init(functor, true);
    };
    var Return = Free.Return = Monet.Return = function(val) {
        return new Free.fn.init(val, false);
    };
    Free.of = function(a) {
        return Return(a);
    };
    Free.liftF = function(functor) {
        return isFunction(functor) ? Suspend(compose(Return, functor)) : Suspend(functor.map(Return));
    };
    Free.fn = Free.prototype = {
        init: function(val, isSuspend) {
            this.isSuspend = isSuspend;
            if (isSuspend) {
                this.functor = val;
            } else {
                this.val = val;
            }
            setType(this, TYPES_NAMES.Free);
        },
        run: function() {
            return this.go(function(f) {
                return f();
            });
        },
        bind: function(fn) {
            return this.isSuspend ? isFunction(this.functor) ? Suspend(compose(function(free) {
                return free.bind(fn);
            }, this.functor)) : Suspend(this.functor.map(function(free) {
                return free.bind(fn);
            })) : fn(this.val);
        },
        ap: function(ff) {
            return this.bind(function(x) {
                return ff.map(function(f) {
                    return f(x);
                });
            });
        },
        apTo: function(f) {
            return f.ap(this);
        },
        resume: function() {
            return this.isSuspend ? Left(this.functor) : Right(this.val);
        },
        go1: function(f) {
            function go2(t) {
                return t.resume().cata(function(functor) {
                    return go2(f(functor));
                }, idFunction);
            }
            return go2(this);
        },
        go: function(f) {
            var result = this.resume();
            while (result.isLeft()) {
                var next = f(result.left());
                result = next.resume();
            }
            return result.right();
        }
    };
    Free.fn.init.prototype = Free.fn;
    setType(Free, TYPES_NAMES.Free);
    setType(Free.fn.init, TYPES_NAMES.Free);
    Free.isInstance = isInstance(TYPES_NAMES.Free);
    Free.isOfType = isOfType(TYPES_NAMES.Free);
    function Identity(a) {
        return new Identity.fn.init(a);
    }
    Monet.Identity = Identity;
    Identity.of = function(a) {
        return new Identity(a);
    };
    Identity.fn = Identity.prototype = {
        init: function(val) {
            this.val = val;
            setType(this, TYPES_NAMES.Identity);
        },
        bind: function(fn) {
            return fn(this.val);
        },
        get: function() {
            return this.val;
        },
        forEach: function(fn) {
            fn(this.val);
        },
        equals: function(other) {
            return Identity.isOfType(other) && equals(this.get())(other.get());
        },
        contains: function(val) {
            return areEqual(this.val, val);
        },
        toString: function() {
            return "Identity(" + this.val + ")";
        },
        inspect: function() {
            return this.toString();
        },
        ap: function(applyWithFunction) {
            var value = this.val;
            return applyWithFunction.map(function(fn) {
                return fn(value);
            });
        },
        apTo: function(identityWithValue) {
            return identityWithValue.ap(this);
        },
        toArray: function() {
            return [ this.get() ];
        },
        toList: function() {
            return List(this.get(), Nil);
        },
        toSet: function() {
            return new Set(this);
        }
    };
    Identity.fn.init.prototype = Identity.fn;
    setType(Identity, TYPES_NAMES.Identity);
    setType(Identity.fn.init, TYPES_NAMES.Identity);
    Identity.isInstance = isInstance(TYPES_NAMES.Identity);
    Identity.isOfType = isOfType(TYPES_NAMES.Identity);
    function addFantasyLandAliases(type) {
        [ "equals", "map", "ap", "chain" ].filter(function(method) {
            return isFunction(type.prototype[method]);
        }).forEach(function(method) {
            type.prototype["fantasy-land/" + method] = type.prototype[method];
        });
    }
    function addAliases(type) {
        type.prototype.flatMap = type.prototype.chain = type.prototype.bind;
        type.pure = type.unit = type.of;
        type.prototype.of = type.of;
        if (isFunction(type.prototype.append)) {
            type.prototype.concat = type.prototype.append;
        }
        type.prototype.point = type.prototype.pure = type.prototype.unit = type.prototype.of;
    }
    function addFilterNot(type) {
        if (isFunction(type.prototype.filter)) {
            type.prototype.filterNot = function(fn) {
                return this.filter(function(a) {
                    return !fn(a);
                });
            };
        }
    }
    function addMonadOps(type) {
        type.prototype.join = function() {
            return this.flatMap(idFunction);
        };
        type.map2 = function(fn) {
            return function(ma, mb) {
                return ma.flatMap(function(a) {
                    return mb.map(function(b) {
                        return fn(a, b);
                    });
                });
            };
        };
    }
    function addFunctorOps(type) {
        if (!isFunction(type.prototype.map)) {
            type.prototype.map = function(fn) {
                return this.bind(compose(this.of, fn));
            };
        }
    }
    function addApplicativeOps(type) {
        type.prototype.takeLeft = function(m) {
            return apply2(this, m, function(a, b) {
                return a;
            });
        };
        type.prototype.takeRight = function(m) {
            return apply2(this, m, function(a, b) {
                return b;
            });
        };
    }
    function addCollectionPredicates(type) {
        if (isFunction(type.prototype.toArray)) {
            type.prototype.every = type.prototype.forall = function(fn) {
                return this.toArray().every(fn);
            };
            type.prototype.exists = function(fn) {
                return this.toArray().some(fn);
            };
        }
    }
    function makeIterable(type) {
        if (isFunction(type.prototype.toArray)) {
            type.prototype[Symbol.iterator] = function() {
                return this.toArray()[Symbol.iterator]();
            };
        }
    }
    function addToOperator(type) {
        if (isFunction(type.prototype.toArray)) {
            type.prototype.to = function(ctor) {
                return ctor(this);
            };
        }
    }
    function decorate(type) {
        addAliases(type);
        addFilterNot(type);
        addMonadOps(type);
        addFunctorOps(type);
        addApplicativeOps(type);
        addCollectionPredicates(type);
        addFantasyLandAliases(type);
        makeIterable(type);
        addToOperator(type);
    }
    decorate(MonadT);
    decorate(Either);
    decorate(Maybe);
    decorate(IO);
    decorate(NEL);
    decorate(List);
    decorate(Validation);
    decorate(Reader);
    decorate(Free);
    decorate(Identity);
    return Monet;
});

/***/ }),

/***/ "../../node_modules/tslib/tslib.es6.js":
/*!************************************************************************************************************!*\
  !*** /Users/christian.pansch/Projects/Sitegeist.Kaleidoscope.ValueObjects/node_modules/tslib/tslib.es6.js ***!
  \************************************************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "../asset-with-metadata-editor/lib/components/selectBox_with_meta.js":
/*!***************************************************************************!*\
  !*** ../asset-with-metadata-editor/lib/components/selectBox_with_meta.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = undefined && undefined.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = undefined && undefined.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function get() {
                return m[k];
            } };
    }
    Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = undefined && undefined.__setModuleDefault || (Object.create ? function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function (o, v) {
    o["default"] = v;
});
var __importStar = undefined && undefined.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }__setModuleDefault(result, mod);
    return result;
};
var __read = undefined && undefined.__read || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
        }
    } catch (error) {
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectBox_With_Meta = void 0;
var react_ui_components_1 = __webpack_require__(/*! @neos-project/react-ui-components */ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js");
var react_1 = __importStar(__webpack_require__(/*! react */ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js"));
var editorContext_1 = __webpack_require__(/*! ../context/editorContext */ "../asset-with-metadata-editor/lib/context/editorContext.js");
var SelectBox_With_Meta = function SelectBox_With_Meta(props) {
    var _a = (0, editorContext_1.useEditorContext)(),
        setMeta = _a.setMeta,
        meta = _a.meta,
        extern = _a.extern;
    var _b = __read((0, react_1.useState)(''), 2),
        altValue = _b[0],
        setAltValue = _b[1];
    var _c = __read((0, react_1.useState)(''), 2),
        titleValue = _c[0],
        setTitleValue = _c[1];
    (0, react_1.useEffect)(function () {
        var _a, _b;
        var currentExtern = extern.find(function (e) {
            return e.asset.__identifier === props.option.identifier;
        });
        if (!currentExtern) return;
        setTitleValue((_a = currentExtern.title) !== null && _a !== void 0 ? _a : '');
        setAltValue((_b = currentExtern.alt) !== null && _b !== void 0 ? _b : '');
    }, [extern, props.option.identifier]);
    var currenAssetId = props.option.identifier;
    var currentMeta = meta.find(function (meta) {
        return meta.id === currenAssetId;
    });
    var onChangeTitle = function onChangeTitle() {
        if (currentMeta) {
            return setMeta(__assign(__assign({}, currentMeta), { title: titleValue }));
        }
        setMeta({ id: currenAssetId, title: titleValue });
    };
    var onChangeAlt = function onChangeAlt() {
        if (currentMeta) {
            return setMeta(__assign(__assign({}, currentMeta), { alt: altValue }));
        }
        setMeta({ id: currenAssetId, alt: altValue });
    };
    return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(react_ui_components_1.SelectBox_Option_MultiLineWithThumbnail, __assign({}, props, { imageUri: props.option.preview, label: props.option.label })), react_1.default.createElement("div", { style: { backgroundColor: '#141414' } }, react_1.default.createElement(react_ui_components_1.Label, { htmlFor: "title" }, "Title", react_1.default.createElement(react_ui_components_1.TextInput, { type: "text", id: "title", onChange: setTitleValue, onBlur: onChangeTitle, value: titleValue })), react_1.default.createElement(react_ui_components_1.Label, { htmlFor: "alt" }, "Alt", react_1.default.createElement(react_ui_components_1.TextInput, { type: "text", id: "alt", onChange: setAltValue, onBlur: onChangeAlt, value: altValue }))));
};
exports.SelectBox_With_Meta = SelectBox_With_Meta;
//# sourceMappingURL=selectBox_with_meta.js.map

/***/ }),

/***/ "../asset-with-metadata-editor/lib/context/editorContext.js":
/*!******************************************************************!*\
  !*** ../asset-with-metadata-editor/lib/context/editorContext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = undefined && undefined.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = undefined && undefined.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function get() {
                return m[k];
            } };
    }
    Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = undefined && undefined.__setModuleDefault || (Object.create ? function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function (o, v) {
    o["default"] = v;
});
var __importStar = undefined && undefined.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }__setModuleDefault(result, mod);
    return result;
};
var __read = undefined && undefined.__read || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
        }
    } catch (error) {
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = undefined && undefined.__spreadArray || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorContextProvider = exports.useEditorContext = void 0;
var React = __importStar(__webpack_require__(/*! react */ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js"));
var react_1 = __webpack_require__(/*! react */ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
var EditorContext = (0, react_1.createContext)(undefined);
var useEditorContext = function useEditorContext() {
    var context = (0, react_1.useContext)(EditorContext);
    if (!context) throw new Error('useEditorContext needs to be wrapt in the EditorContextProvider');
    return context;
};
exports.useEditorContext = useEditorContext;
var EditorContextProvider = function EditorContextProvider(_a) {
    var children = _a.children,
        extern = _a.extern,
        update = _a.update;
    var _b = __read((0, react_1.useState)([]), 2),
        meta = _b[0],
        setMeta = _b[1];
    (0, react_1.useEffect)(function () {
        if (!meta.length) return;
        update(extern.map(function (ve) {
            var metaExist = meta.find(function (m) {
                return m.id === ve.asset.__identifier;
            });
            if (!metaExist) return ve;
            return __assign(__assign({}, ve), { alt: metaExist.alt, title: metaExist.title });
        }));
    }, [meta]);
    var onChange = function onChange(metaToUpdate) {
        var metaExist = meta.findIndex(function (meta) {
            return meta.id === metaToUpdate.id;
        });
        if (metaExist === -1) {
            return setMeta(function (old) {
                return __spreadArray(__spreadArray([], __read(old), false), [metaToUpdate], false);
            });
        }
        setMeta(function (old) {
            return old.map(function (meta) {
                if (meta.id === metaToUpdate.id) {
                    return metaToUpdate;
                }
                return meta;
            });
        });
    };
    return React.createElement(EditorContext.Provider, { value: { meta: meta, extern: extern, setMeta: onChange, update: update } }, children);
};
exports.EditorContextProvider = EditorContextProvider;
//# sourceMappingURL=editorContext.js.map

/***/ }),

/***/ "../asset-with-metadata-editor/lib/editors/collectionEditor.js":
/*!*********************************************************************!*\
  !*** ../asset-with-metadata-editor/lib/editors/collectionEditor.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = undefined && undefined.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function get() {
                return m[k];
            } };
    }
    Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = undefined && undefined.__setModuleDefault || (Object.create ? function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function (o, v) {
    o["default"] = v;
});
var __importStar = undefined && undefined.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }__setModuleDefault(result, mod);
    return result;
};
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) {
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = undefined && undefined.__read || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
        }
    } catch (error) {
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = undefined && undefined.__spreadArray || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionEditor = void 0;
var react_ui_components_1 = __webpack_require__(/*! @neos-project/react-ui-components */ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js");
var react_1 = __importStar(__webpack_require__(/*! react */ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js"));
var selectBox_with_meta_1 = __webpack_require__(/*! ../components/selectBox_with_meta */ "../asset-with-metadata-editor/lib/components/selectBox_with_meta.js");
var editorContext_1 = __webpack_require__(/*! ../context/editorContext */ "../asset-with-metadata-editor/lib/context/editorContext.js");
var MEDIA_TYPE_IMAGE = 'Neos\\Media\\Domain\\Model\\Image';
var CollectionEditor = function CollectionEditor(_a) {
    var _b = _a.value,
        valueExtern = _b === void 0 ? [] : _b,
        globalRegistry = _a.neos.globalRegistry,
        renderSecondaryInspector = _a.renderSecondaryInspector,
        editorOptions = _a.options,
        commit = _a.commit;
    var _c = __read((0, react_1.useState)(false), 2),
        isLoading = _c[0],
        setIsLoading = _c[1];
    var _d = __read((0, react_1.useState)([]), 2),
        options = _d[0],
        setOptions = _d[1];
    var valueRef = (0, react_1.useRef)(valueExtern);
    var i18nRegistry = globalRegistry.get('i18n');
    var assetLookupDataLoader = globalRegistry.get('dataLoaders').get('AssetLookup');
    (0, react_1.useEffect)(function () {
        valueRef.current = valueExtern;
    }, [valueExtern]);
    var getIdentity = function getIdentity(value) {
        if (value && value.asset.__identifier) {
            return value.asset.__identifier;
        }
        return value;
    };
    var getValues = function getValues() {
        return Array.isArray(valueRef.current) && Boolean(valueRef.current.length) ? valueRef.current.map(getIdentity) : [];
    };
    (0, react_1.useEffect)(function () {
        var resolver = function resolver() {
            return __awaiter(void 0, void 0, void 0, function () {
                var values, options_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!valueExtern) return [3, 2];
                            setIsLoading(true);
                            values = getValues();
                            return [4, Promise.all(values.map(function (value) {
                                return assetLookupDataLoader.resolveValue({}, value);
                            }))];
                        case 1:
                            options_1 = _a.sent();
                            setIsLoading(false);
                            setOptions([].concat.apply([], __spreadArray([], __read(options_1), false)));
                            _a.label = 2;
                        case 2:
                            return [2];
                    }
                });
            });
        };
        resolver();
    }, [valueExtern]);
    var handleMediaSelection = function handleMediaSelection(assetIdentifier) {
        commit(__spreadArray(__spreadArray([], __read(valueRef.current), false), [{
            asset: { __identifier: assetIdentifier, __flow_object_type: MEDIA_TYPE_IMAGE },
            title: '',
            alt: ''
        }], false));
    };
    var handleChooseFromMedia = function handleChooseFromMedia() {
        var MediaSelectionScreen = globalRegistry.get('inspector').get('secondaryEditors').get('Neos.Neos/Inspector/Secondary/Editors/MediaSelectionScreen').component;
        renderSecondaryInspector('IMAGE_SELECT_MEDIA', function () {
            return react_1.default.createElement(MediaSelectionScreen, { constraints: {}, onComplete: handleMediaSelection });
        });
    };
    var handleDelete = function handleDelete(values) {
        var filteredValues = valueRef.current.filter(function (v) {
            return values.includes(v.asset.__identifier);
        });
        commit(filteredValues);
    };
    return react_1.default.createElement(editorContext_1.EditorContextProvider, { extern: valueExtern, update: commit }, react_1.default.createElement(react_ui_components_1.MultiSelectBox, { optionValueField: "identifier", loadingLabel: i18nRegistry.translate('Neos.Neos:Main:loading'), displaySearchBox: false, ListPreviewElement: selectBox_with_meta_1.SelectBox_With_Meta, placeholder: (editorOptions === null || editorOptions === void 0 ? void 0 : editorOptions.placeholder) ? i18nRegistry.translate(editorOptions.placeholder) : '', options: options, values: getValues(), onValuesChange: handleDelete, displayLoadingIndicator: isLoading, searchOptions: [], showDropDownToggle: false, onSearchTermChange: function onSearchTermChange() {}, noMatchesFoundLabel: i18nRegistry.translate('Neos.Neos:Main:noMatchesFound'), searchBoxLeftToTypeLabel: i18nRegistry.translate('Neos.Neos:Main:searchBoxLeftToType'), threshold: editorOptions === null || editorOptions === void 0 ? void 0 : editorOptions.threshold, disabled: editorOptions === null || editorOptions === void 0 ? void 0 : editorOptions.disabled }), react_1.default.createElement(react_ui_components_1.IconButton, { icon: "camera", size: "small", style: "lighter", onClick: handleChooseFromMedia, className: '', title: i18nRegistry.translate('Neos.Neos:Main:media'), disabled: editorOptions === null || editorOptions === void 0 ? void 0 : editorOptions.disabled }));
};
exports.CollectionEditor = CollectionEditor;
//# sourceMappingURL=collectionEditor.js.map

/***/ }),

/***/ "../asset-with-metadata-editor/lib/editors/editor.js":
/*!***********************************************************!*\
  !*** ../asset-with-metadata-editor/lib/editors/editor.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = undefined && undefined.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = undefined && undefined.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function get() {
                return m[k];
            } };
    }
    Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = undefined && undefined.__setModuleDefault || (Object.create ? function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function (o, v) {
    o["default"] = v;
});
var __importStar = undefined && undefined.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }__setModuleDefault(result, mod);
    return result;
};
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) {
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = undefined && undefined.__read || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
        }
    } catch (error) {
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = undefined && undefined.__spreadArray || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Editor = void 0;
var react_ui_components_1 = __webpack_require__(/*! @neos-project/react-ui-components */ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js");
var react_1 = __importStar(__webpack_require__(/*! react */ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js"));
var selectBox_with_meta_1 = __webpack_require__(/*! ../components/selectBox_with_meta */ "../asset-with-metadata-editor/lib/components/selectBox_with_meta.js");
var editorContext_1 = __webpack_require__(/*! ../context/editorContext */ "../asset-with-metadata-editor/lib/context/editorContext.js");
var useImageMetadata_1 = __webpack_require__(/*! ../hooks/useImageMetadata */ "../asset-with-metadata-editor/lib/hooks/useImageMetadata.js");
var image_1 = __webpack_require__(/*! ../utils/image */ "../asset-with-metadata-editor/lib/utils/image.js");
var MEDIA_TYPE_IMAGE = 'Neos\\Media\\Domain\\Model\\Image';
var Editor = function Editor(_a) {
    var valueExtern = _a.value,
        globalRegistry = _a.neos.globalRegistry,
        renderSecondaryInspector = _a.renderSecondaryInspector,
        editorOptions = _a.options,
        commit = _a.commit;
    var _b = __read((0, react_1.useState)(false), 2),
        isLoading = _b[0],
        setIsLoading = _b[1];
    var _c = __read((0, react_1.useState)([]), 2),
        options = _c[0],
        setOptions = _c[1];
    var imageMetadata = (0, useImageMetadata_1.useImageMetadata)(valueExtern === null || valueExtern === void 0 ? void 0 : valueExtern.asset.__identifier);
    var valueRef = (0, react_1.useRef)(valueExtern);
    var i18nRegistry = globalRegistry.get('i18n');
    var assetLookupDataLoader = globalRegistry.get('dataLoaders').get('AssetLookup');
    (0, react_1.useEffect)(function () {
        valueRef.current = valueExtern;
    }, [valueExtern]);
    var getIdentity = function getIdentity(value) {
        if (value && value.asset.__identifier) {
            return value.asset.__identifier;
        }
        return value;
    };
    var getValue = function getValue() {
        if (!valueRef.current) return;
        return getIdentity(valueRef.current);
    };
    (0, react_1.useEffect)(function () {
        var resolver = function resolver() {
            return __awaiter(void 0, void 0, void 0, function () {
                var value, options_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!valueExtern) return [3, 2];
                            setIsLoading(true);
                            value = getValue();
                            return [4, assetLookupDataLoader.resolveValue({}, value)];
                        case 1:
                            options_1 = _a.sent();
                            setIsLoading(false);
                            setOptions([].concat.apply([], __spreadArray([], __read(options_1), false)));
                            _a.label = 2;
                        case 2:
                            return [2];
                    }
                });
            });
        };
        resolver();
    }, [valueExtern]);
    var handleMediaSelection = function handleMediaSelection(assetIdentifier) {
        commit({
            asset: { __identifier: assetIdentifier, __flow_object_type: MEDIA_TYPE_IMAGE },
            title: '',
            alt: ''
        });
    };
    var handleChooseFromMedia = function handleChooseFromMedia() {
        var _a;
        var MediaSelectionScreen = globalRegistry.get('inspector').get('secondaryEditors').get('Neos.Neos/Inspector/Secondary/Editors/MediaSelectionScreen').component;
        var constraints = __assign(__assign({}, editorOptions === null || editorOptions === void 0 ? void 0 : editorOptions.constraints), { mediaTypes: ((_a = editorOptions === null || editorOptions === void 0 ? void 0 : editorOptions.constraints) === null || _a === void 0 ? void 0 : _a.mediaTypes) || ['image/*'] });
        renderSecondaryInspector('IMAGE_SELECT_MEDIA', function () {
            return react_1.default.createElement(MediaSelectionScreen, { type: "images", constraints: constraints, onComplete: handleMediaSelection });
        });
    };
    var handleOpenImageCropper = function handleOpenImageCropper() {
        var ImageCropper = globalRegistry.get('inspector').get('secondaryEditors').get('Neos.Neos/Inspector/Secondary/Editors/ImageCropper').component;
        if (!imageMetadata) return;
        renderSecondaryInspector('IMAGE_CROP', function () {
            return react_1.default.createElement(ImageCropper, { sourceImage: image_1.Image.fromImageData(imageMetadata), options: {
                    crop: {
                        aspectRatio: {
                            options: {},
                            forceCrop: true,
                            locked: {
                                width: 16,
                                height: 9
                            }
                        }
                    }
                }, onComplete: function onComplete(data) {
                    return console.log('ImageCropper', data);
                } });
        });
    };
    return react_1.default.createElement(editorContext_1.EditorContextProvider, { extern: valueExtern ? [valueExtern] : [], update: function update(value) {
            return commit(value[0]);
        } }, react_1.default.createElement(react_ui_components_1.SelectBox, { optionValueField: "identifier", loadingLabel: i18nRegistry.translate('Neos.Neos:Main:loading'), displaySearchBox: false, ListPreviewElement: selectBox_with_meta_1.SelectBox_With_Meta, placeholder: (editorOptions === null || editorOptions === void 0 ? void 0 : editorOptions.placeholder) ? i18nRegistry.translate(editorOptions.placeholder) : '', options: valueExtern ? options : undefined, value: getValue(), onHeaderClick: function onHeaderClick() {}, onValueChange: function onValueChange() {
            return commit(undefined);
        }, displayLoadingIndicator: isLoading, showDropDownToggle: false, allowEmpty: true, onSearchTermChange: function onSearchTermChange() {}, noMatchesFoundLabel: i18nRegistry.translate('Neos.Neos:Main:noMatchesFound'), searchBoxLeftToTypeLabel: i18nRegistry.translate('Neos.Neos:Main:searchBoxLeftToType'), threshold: editorOptions === null || editorOptions === void 0 ? void 0 : editorOptions.threshold, disabled: editorOptions === null || editorOptions === void 0 ? void 0 : editorOptions.disabled }), react_1.default.createElement(react_ui_components_1.IconButton, { icon: "camera", size: "small", style: "lighter", onClick: handleChooseFromMedia, className: '', title: i18nRegistry.translate('Neos.Neos:Main:media'), disabled: editorOptions === null || editorOptions === void 0 ? void 0 : editorOptions.disabled }), ' ', react_1.default.createElement(react_ui_components_1.IconButton, { icon: "crop", size: "small", style: "lighter", onClick: handleOpenImageCropper, className: '', title: i18nRegistry.translate('Neos.Neos:Main:media'), disabled: editorOptions === null || editorOptions === void 0 ? void 0 : editorOptions.disabled }));
};
exports.Editor = Editor;
//# sourceMappingURL=editor.js.map

/***/ }),

/***/ "../asset-with-metadata-editor/lib/hooks/useImageMetadata.js":
/*!*******************************************************************!*\
  !*** ../asset-with-metadata-editor/lib/hooks/useImageMetadata.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) {
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = undefined && undefined.__read || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
        }
    } catch (error) {
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useImageMetadata = void 0;
var react_1 = __webpack_require__(/*! react */ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
var backend_1 = __webpack_require__(/*! ../neos-bridge/backend */ "../asset-with-metadata-editor/lib/neos-bridge/backend.js");
var useImageMetadata = function useImageMetadata(assetIdentifier) {
    var _a = __read((0, react_1.useState)(), 2),
        imageMetadata = _a[0],
        setImageMetadata = _a[1];
    (0, react_1.useEffect)(function () {
        if (!assetIdentifier) return;
        var loadImageMetadata = (0, backend_1.endpoints)().loadImageMetadata;
        var getImageMetadata = function getImageMetadata() {
            return __awaiter(void 0, void 0, void 0, function () {
                var image;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            return [4, loadImageMetadata(assetIdentifier)];
                        case 1:
                            image = _a.sent();
                            setImageMetadata(image);
                            return [2];
                    }
                });
            });
        };
        getImageMetadata();
    }, [assetIdentifier]);
    return imageMetadata;
};
exports.useImageMetadata = useImageMetadata;
//# sourceMappingURL=useImageMetadata.js.map

/***/ }),

/***/ "../asset-with-metadata-editor/lib/index.js":
/*!**************************************************!*\
  !*** ../asset-with-metadata-editor/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = undefined && undefined.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = undefined && undefined.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function get() {
                return m[k];
            } };
    }
    Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = undefined && undefined.__setModuleDefault || (Object.create ? function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function (o, v) {
    o["default"] = v;
});
var __importStar = undefined && undefined.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerAssetWithMetadataEditor = void 0;
var React = __importStar(__webpack_require__(/*! react */ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js"));
var collectionEditor_1 = __webpack_require__(/*! ./editors/collectionEditor */ "../asset-with-metadata-editor/lib/editors/collectionEditor.js");
var editor_1 = __webpack_require__(/*! ./editors/editor */ "../asset-with-metadata-editor/lib/editors/editor.js");
function registerAssetWithMetadataEditor(globalRegistry) {
    var inspectorRegistry = globalRegistry.get('inspector');
    if (!inspectorRegistry) {
        console.warn('[Sitegeist.Kaleidoscope.ValueObjects]: Could not find inspector registry.');
        console.warn('[Sitegeist.Kaleidoscope.ValueObjects]: Skipping registration of AssetWithMetadataEditor...');
        return;
    }
    var editorsRegistry = inspectorRegistry.get('editors');
    if (!editorsRegistry) {
        console.warn('[Sitegeist.Kaleidoscope.ValueObjects]: Could not find inspector editors registry.');
        console.warn('[Sitegeist.Kaleidoscope.ValueObjects]: Skipping registration of AssetWithMetadataEditor...');
        return;
    }
    editorsRegistry.set('Sitegeist.Kaleidoscope.ValueObjects/Inspector/Editors/AssetWithMetadataEditor', {
        component: function component(props) {
            console.log('Editor Props', props);
            return React.createElement(editor_1.Editor, __assign({}, props));
        }
    });
    editorsRegistry.set('Sitegeist.Kaleidoscope.ValueObjects/Inspector/Editors/AssetWithMetadataCollectionEditor', {
        component: function component(props) {
            console.log('Editor Props', props);
            return React.createElement(collectionEditor_1.CollectionEditor, __assign({}, props));
        }
    });
}
exports.registerAssetWithMetadataEditor = registerAssetWithMetadataEditor;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../asset-with-metadata-editor/lib/neos-bridge/backend.js":
/*!****************************************************************!*\
  !*** ../asset-with-metadata-editor/lib/neos-bridge/backend.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = undefined && undefined.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpoints = void 0;
var neos_ui_backend_connector_1 = __importDefault(__webpack_require__(/*! @neos-project/neos-ui-backend-connector */ "../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-backend-connector/index.js"));
var endpoints = function endpoints() {
    console.log('backend', neos_ui_backend_connector_1.default.get);
    return neos_ui_backend_connector_1.default.get().endpoints;
};
exports.endpoints = endpoints;
//# sourceMappingURL=backend.js.map

/***/ }),

/***/ "../asset-with-metadata-editor/lib/utils/image.js":
/*!********************************************************!*\
  !*** ../asset-with-metadata-editor/lib/utils/image.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __read = undefined && undefined.__read || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
        }
    } catch (error) {
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
var monet_1 = __webpack_require__(/*! monet */ "../../node_modules/monet/dist/monet.js");
var DEFAULT_OFFSET = { x: 0, y: 0 };
var extractOriginalDimensions = function extractOriginalDimensions(image) {
    var _a, _b;
    return {
        width: (_a = image === null || image === void 0 ? void 0 : image.originalDimensions) === null || _a === void 0 ? void 0 : _a.width,
        height: (_b = image === null || image === void 0 ? void 0 : image.originalDimensions) === null || _b === void 0 ? void 0 : _b.height
    };
};
var extractPreviewDimensions = function extractPreviewDimensions(image) {
    var _a, _b;
    return {
        width: (_a = image === null || image === void 0 ? void 0 : image.previewDimensions) === null || _a === void 0 ? void 0 : _a.width,
        height: (_b = image === null || image === void 0 ? void 0 : image.previewDimensions) === null || _b === void 0 ? void 0 : _b.height
    };
};
var Image = function () {
    function Image(image) {
        this.image = image;
    }
    Object.defineProperty(Image.prototype, "previewUri", {
        get: function get() {
            var image = this.image;
            return image === null || image === void 0 ? void 0 : image.previewImageResourceUri;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "previewScalingFactor", {
        get: function get() {
            var _a, _b;
            var image = this.image;
            return ((_a = image === null || image === void 0 ? void 0 : image.previewDimensions) === null || _a === void 0 ? void 0 : _a.width) / ((_b = image === null || image === void 0 ? void 0 : image.originalDimensions) === null || _b === void 0 ? void 0 : _b.width);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "dimensions", {
        get: function get() {
            var image = this.image;
            return extractOriginalDimensions(image);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "aspectRatio", {
        get: function get() {
            var _a = this.dimensions,
                width = _a.width,
                height = _a.height;
            return width / height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "previewDimensions", {
        get: function get() {
            var image = this.image;
            return extractPreviewDimensions(image);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "cropAdjustment", {
        get: function get() {
            var _a, _b, _c;
            var image = this.image;
            return monet_1.Maybe.fromNull((_c = (_b = (_a = image === null || image === void 0 ? void 0 : image.object) === null || _a === void 0 ? void 0 : _a.adjustments) === null || _b === void 0 ? void 0 : _b['Neos\\Media\\Domain\\Model\\Adjustment\\CropImageAdjustment']) !== null && _c !== void 0 ? _c : null);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "cropAspectRatio", {
        get: function get() {
            return this.cropAdjustment.map(function (c) {
                return c.width / c.height;
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "previewCropAdjustment", {
        get: function get() {
            var _a = this,
                cropAdjustment = _a.cropAdjustment,
                previewScalingFactor = _a.previewScalingFactor;
            return cropAdjustment.map(function (cropAdjustment) {
                return Object.fromEntries(Object.entries(cropAdjustment).map(function (_a) {
                    var _b = __read(_a, 2),
                        key = _b[0],
                        value = _b[1];
                    return [key, value * previewScalingFactor];
                }));
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "resizeAdjustment", {
        get: function get() {
            var _a, _b, _c;
            var image = this.image;
            return monet_1.Maybe.fromNull((_c = (_b = (_a = image === null || image === void 0 ? void 0 : image.object) === null || _a === void 0 ? void 0 : _a.adjustments) === null || _b === void 0 ? void 0 : _b['Neos\\Media\\Domain\\Model\\Adjustment\\ResizeImageAdjustment']) !== null && _c !== void 0 ? _c : null);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "previewResizeAdjustment", {
        get: function get() {
            var _a = this,
                resizeAdjustment = _a.resizeAdjustment,
                previewScalingFactor = _a.previewScalingFactor;
            return resizeAdjustment.map(function (resizeAdjustment) {
                return Object.fromEntries(Object.entries(resizeAdjustment).map(function (_a) {
                    var _b = __read(_a, 2),
                        key = _b[0],
                        value = _b[1];
                    return [key, value * previewScalingFactor];
                }));
            });
        },
        enumerable: false,
        configurable: true
    });
    Image.fromImageData = function (imageData) {
        return new Image(imageData);
    };
    return Image;
}();
exports.Image = Image;
//# sourceMappingURL=image.js.map

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./manifest */ "./src/manifest.js");

/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _neosUiExtensibility = __webpack_require__(/*! @neos-project/neos-ui-extensibility */ "../../node_modules/@neos-project/neos-ui-extensibility/dist/index.js");

var _neosUiExtensibility2 = _interopRequireDefault(_neosUiExtensibility);

var _kaleidoscopeValueobjectsAssetWithMetadataEditor = __webpack_require__(/*! @sitegeist/kaleidoscope-valueobjects-asset-with-metadata-editor */ "../asset-with-metadata-editor/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _neosUiExtensibility2.default)('@sitegeist/kaleidoscope-valueobjects-plugin', {}, function (globalRegistry) {
    (0, _kaleidoscopeValueobjectsAssetWithMetadataEditor.registerAssetWithMetadataEditor)(globalRegistry);
});

/***/ })

/******/ });
//# sourceMappingURL=Plugin.js.map