import fs from 'fs';

export const command = 'build';
export const desc = 'Build a TypeSkript project from the current directory';
export const builder = {

}
export function handler(argv: any) {
    // Just testing... not going to be the final thing, obviously.

    // This is a test commit, please ignore
    
    const convert = (ts: string): string => {
        let lines = ts.split('\n');
        let newLines: string[] = [];

        const console_log_regex = /\'([^']+)\'/;

        lines.forEach((line) => {
            line.split(';').slice(0, line.split(';').length - 1).forEach(subLine => {
                if((console_log_regex.exec(line) || [])[1] != undefined) newLines.push('log "' + (console_log_regex.exec(subLine) || [])[1] + '"');
            });
        });

        let result = newLines.join('\n');

        return result;
    }

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