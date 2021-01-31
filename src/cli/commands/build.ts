import fs from 'fs';
import { Project } from '../../project/Project';
import * as babelParser from '@babel/parser';

export const command = 'build';
export const desc = 'Build a TypeSkript project from the current directory';
export const builder = {

}
export function handler(argv: any) {
    // Just testing... not going to be the final thing, obviously.
    
    // const convert = (ts: string): string => {
    //     let lines = ts.split('\n');
    //     let newLines: string[] = [];

    //     const console_log_regex = /\'([^']+)\'/;

    //     lines.forEach((line) => {
    //         line.split(';').slice(0, line.split(';').length - 1).forEach(subLine => {
    //             if((console_log_regex.exec(line) || [])[1] != undefined) newLines.push('log "' + (console_log_regex.exec(subLine) || [])[1] + '"');
    //         });
    //     });

    //     let result = newLines.join('\n');

    //     return result;
    // }

    

    const project = new Project(JSON.parse(fs.readFileSync('./tskconfig.json').toString()));

    console.log(project.config);
    console.log(project);

    const convert = (ts: string): string => {
        return JSON.stringify(babelParser.parse(ts));
    }

    !fs.existsSync('./dist/') && fs.mkdirSync('./dist/', { recursive: true });
    !fs.existsSync('./dist/') && fs.mkdirSync('./dist/', { recursive: true });
    const copyDirectory = (dir: string): void => {
        fs.readdirSync(`./src${dir}/`, {withFileTypes: true}).forEach(file => {
            if(file.isFile()) fs.writeFileSync(`./dist${dir}/${file.name}`.replace('.ts', '.sk'), convert(fs.readFileSync(`./src${dir}/${file.name}`).toString()));
            if(file.isDirectory()) {
                !fs.existsSync(`./dist${dir}/${file.name}`) && fs.mkdirSync(`./dist${dir}/${file.name}`, { recursive: true });
                copyDirectory(`${dir}/${file.name}`);
            }
        });
    }
    copyDirectory('');
}