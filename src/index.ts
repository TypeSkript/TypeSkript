import 'yargs-parser';
import yargsParser from 'yargs-parser';

const argv = yargsParser(process.argv.slice(2));

if(argv.test){
    console.log("Hello World!");
}