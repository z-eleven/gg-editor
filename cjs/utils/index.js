"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "merge", {
  enumerable: true,
  get: function get() {
    return _merge["default"];
  }
});
Object.defineProperty(exports, "pick", {
  enumerable: true,
  get: function get() {
    return _pick["default"];
  }
});
Object.defineProperty(exports, "uniqueId", {
  enumerable: true,
  get: function get() {
    return _uniqueId["default"];
  }
});
Object.defineProperty(exports, "upperFirst", {
  enumerable: true,
  get: function get() {
    return _upperFirst["default"];
  }
});
exports.toQueryString = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _pick = _interopRequireDefault(require("lodash/pick"));

var _uniqueId = _interopRequireDefault(require("lodash/uniqueId"));

var _upperFirst = _interopRequireDefault(require("lodash/upperFirst"));

var toQueryString = function toQueryString(obj) {
  return Object.keys(obj).map(function (key) {
    return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(obj[key]));
  }).join('&');
};

exports.toQueryString = toQueryString;