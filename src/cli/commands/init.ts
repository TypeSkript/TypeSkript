import { dir } from "console";
import fs from 'fs';
import path from 'path';

export const command = 'init [dir]';
export const desc = 'Initialize a TypeSkript project';
export const builder = {
    dir: {
        default: '.'
    }
}
export function handler(argv: any) {
    const DIR = `${process.cwd()}/${argv.dir}`;
    console.log(DIR);
    !fs.existsSync('./src/') && fs.mkdirSync('./src/', { recursive: true });
    fs.writeFileSync(path.join(DIR, 'tskconfig.json'), JSON.stringify({}));
    fs.writeFileSync(path.join(DIR, 'src', 'index.ts'), 'console.log(\'Hello World!\');');
}