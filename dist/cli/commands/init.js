"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.handler = exports.builder = exports.desc = exports.command = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
exports.command = 'init [dir]';
exports.desc = 'Initialize a TypeSkript project';
exports.builder = {
    dir: {
        "default": '.'
    }
};
function handler(argv) {
    var DIR = process.cwd() + "/" + argv.dir;
    console.log(DIR);
    !fs_1["default"].existsSync('./src/') && fs_1["default"].mkdirSync('./src/', { recursive: true });
    fs_1["default"].writeFileSync(path_1["default"].join(DIR, 'tskconfig.json'), JSON.stringify({}));
    fs_1["default"].writeFileSync(path_1["default"].join(DIR, 'src', 'index.ts'), 'console.log(\'Hello World!\');');
}
exports.handler = handler;
