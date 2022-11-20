import * as readline from 'readline';
import * as process from 'process';
import { getInput, iHoover } from './services';
var response: string = 'yes';
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var rl2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    read();
    

function read(): void {

    rl.question("Bonjour je me nomme Ihoove l'aspirateur du futur.\n j'attend vos instructions\n ",
     function (answer) {
            const {dimension, hoover, instruction} = getInput(answer)
            iHoover(dimension, hoover, instruction)
            rl.close();
       
        });
        
}


