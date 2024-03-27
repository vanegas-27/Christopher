"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();

/**
 * Configuraciones del proyecto
 * ----
 *
 * @return {
 *  apiKey,
 *  port
 * }
 */
var _default = exports["default"] = {
  apiKey: process.env.APIKEY,
  port: process.env.PORT
};