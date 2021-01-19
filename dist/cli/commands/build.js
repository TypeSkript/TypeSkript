"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.handler = exports.builder = exports.desc = exports.command = void 0;
var fs_1 = __importDefault(require("fs"));
exports.command = 'build';
exports.desc = 'Build a TypeSkript project from the current directory';
exports.builder = {};
function handler(argv) {
    !fs_1["default"].existsSync('./dist/') && fs_1["default"].mkdirSync('./dist/', { recursive: true });
    var copyDirectory = function (dir) {
        fs_1["default"].readdirSync("./src" + dir + "/", { withFileTypes: true }).forEach(function (file) {
            if (file.isFile())
                fs_1["default"].writeFileSync(("./dist" + dir + "/" + file.name).replace('.ts', '.sk'), fs_1["default"].readFileSync("./src" + dir + "/" + file.name));
            if (file.isDirectory()) {
                !fs_1["default"].existsSync("./dist" + dir + "/" + file.name) && fs_1["default"].mkdirSync("./dist" + dir + "/" + file.name, { recursive: true });
                copyDirectory(dir + "/" + file.name);
            }
        });
    };
    copyDirectory('');
}
exports.handler = handler;
