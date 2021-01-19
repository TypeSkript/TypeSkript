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
    // Just testing... not going to be the final thing, obviously.
    var convert = function (ts) {
        var lines = ts.split('\n');
        var newLines = [];
        var console_log_regex = /\'([^']+)\'/;
        lines.forEach(function (line) {
            line.split(';').slice(0, line.split(';').length - 1).forEach(function (subLine) {
                if ((console_log_regex.exec(line) || [])[1] != undefined)
                    newLines.push('log "' + (console_log_regex.exec(subLine) || [])[1] + '"');
            });
        });
        var result = newLines.join('\n');
        return result;
    };
    !fs_1["default"].existsSync('./dist/') && fs_1["default"].mkdirSync('./dist/', { recursive: true });
    var copyDirectory = function (dir) {
        fs_1["default"].readdirSync("./src" + dir + "/", { withFileTypes: true }).forEach(function (file) {
            if (file.isFile())
                fs_1["default"].writeFileSync(("./dist" + dir + "/" + file.name).replace('.ts', '.sk'), convert(fs_1["default"].readFileSync("./src" + dir + "/" + file.name).toString()));
            if (file.isDirectory()) {
                !fs_1["default"].existsSync("./dist" + dir + "/" + file.name) && fs_1["default"].mkdirSync("./dist" + dir + "/" + file.name, { recursive: true });
                copyDirectory(dir + "/" + file.name);
            }
        });
    };
    copyDirectory('');
}
exports.handler = handler;
