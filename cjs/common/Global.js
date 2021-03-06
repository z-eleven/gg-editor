"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var global = {
  trackable: process.env.NODE_ENV === 'production',
  version: undefined
};
var _default = {
  get: function get(key) {
    return global[key];
  },
  set: function set(key, value) {
    global[key] = value;
  }
};
exports["default"] = _default;