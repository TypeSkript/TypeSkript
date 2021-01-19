import path from 'path';

export const ROOT_FOLDER = path.join(__dirname, '..', '..');

export const VERSION: string = require('../../package.json').version;