"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.VERSION = exports.ROOT_FOLDER = void 0;
var path_1 = __importDefault(require("path"));
exports.ROOT_FOLDER = path_1["default"].join(__dirname, '..', '..');
exports.VERSION = require('../../package.json').version;
