import fs from 'fs';

export const command = 'build';
export const desc = 'Build a TypeSkript project from the current directory';
export const builder = {

}
export function handler(argv: any) {
    !fs.existsSync('./dist/') && fs.mkdirSync('./dist/', { recursive: true });
    const copyDirectory = (dir: string): void => {
        fs.readdirSync(`./src${dir}/`, {withFileTypes: true}).forEach(file => {
            if(file.isFile()) fs.writeFileSync(`./dist${dir}/${file.name}`.replace('.ts', '.sk'), fs.readFileSync(`./src${dir}/${file.name}`));
            if(file.isDirectory()) {
                !fs.existsSync(`./dist${dir}/${file.name}`) && fs.mkdirSync(`./dist${dir}/${file.name}`, { recursive: true });
                copyDirectory(`${dir}/${file.name}`);
            }
        });
    }
    copyDirectory('');
}