#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var yargs_1 = __importDefault(require("yargs"));
var constants_1 = require("../shared/constants");
yargs_1["default"]
    // Help
    .usage('TypeSkript - A TypeScript-to-Skript transpiler')
    .help('help')
    .alias('h', 'help')
    .describe('help', 'show useful information')
    // Version
    .version(constants_1.VERSION)
    .alias('v', 'version')
    .describe('version', 'show version information')
    // Commands
    .commandDir(constants_1.ROOT_FOLDER + "/dist/cli/commands")
    // Options
    .recommendCommands()
    .strict()
    .wrap(yargs_1["default"].terminalWidth())
    // Execute
    .fail(function (str, e) {
    if (str !== undefined && str !== null)
        console.error(str);
    else
        console.error(e);
})
    .parse();
