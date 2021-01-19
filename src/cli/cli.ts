#!/usr/bin/env node

import yargs from 'yargs';

import { VERSION, ROOT_FOLDER } from '../shared/constants';

yargs
    // Help
    .usage('TypeSkript - A TypeScript-to-Skript transpiler')
    .help('help')
    .alias('h', 'help')
    .describe('help', 'show useful information')

    // Version
    .version(VERSION)
    .alias('v', 'version')
    .describe('version', 'show version information')

    // Commands
    .commandDir(`${ROOT_FOLDER}/dist/cli/commands`)

    // Options
    .recommendCommands()
    .strict()
    .wrap(yargs.terminalWidth())

    // Execute
    .fail((str, e) => {
        if(str !== undefined && str !== null) console.error(str);
        else console.error(e);
    })
    .parse();