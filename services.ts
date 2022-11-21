import { EInstruction, EWay, IGrillDimension, IHoover } from "./type";


/*
 * Declaration of variable 
    *isBrock which turn to true when the hoover reach the limite of the room 
    *isPure which turn to true when the when we have a instruction different of A D G
    *isBrock which turn to true when the dimensions of hoover or grill cannot be determined
 */
var isBroke: boolean = false;
var isPure: boolean = false;
var isOverSize: boolean = false;


/*
 * Main function which get as params the size of the room, the initial position & way of the hoover & the instructions 
 */
 export function iHoover(dimesion: IGrillDimension, hoover: IHoover, instruction: Array<'A'| 'D' | 'G'>): void {
     /*
  * we return a error message if the the the initial hoover's position exceeds the dimension of grill
  */
     if(isOverSize) return console.log('le hoover depassent la taille de la chambre');
     /*
 * we return a error message if the the instructions includes a letter different of A D G 
 */
if(isPure) return console.log('les instructions  doivent comporter que les lettres tel que  A, D ou G ');
    /*
     * use a loop to process instruction by instruction
     */
    for (let i = 0; i <= instruction.length - 1; i++) {
        /*
         * if the instruction is A: we ckeck the way based on this we move on x or y axe 
         */
        if (instruction[i] === EInstruction.AVANCE) {
             checkLimitReached(hoover,dimesion);
             if(isBroke) break;
            switch (hoover.way) {
                case EWay.NORTH:
                    hoover.y += 1;
                    break;
                case EWay.SOUTH:
                    hoover.y -= 1;
                    break;
                case EWay.EAST:
                    hoover.x += 1;
                    break;
                case EWay.WEST:
                    hoover.x -= 1;
                    break;
                default:
                    console.log('error-swtich-move')
            }
            /*
         * if the instruction is G: we ckeck the way and we go to the right of this 
         */
        }else if(instruction[i] === EInstruction.DROITE ){
             switch (hoover.way) {
                case EWay.NORTH:
                    hoover.way = EWay.EAST
                    break;
                case EWay.SOUTH:
                    hoover.way = EWay.WEST
                    break;
                case EWay.EAST:
                    hoover.way = EWay.SOUTH
                    break;
                case EWay.WEST:
                    hoover.way = EWay.NORTH
                    break;
                default:
                    console.log('error-swtich-droite')
            }
        }else{
            /*
         * if the instruction is G: we ckeck the way and we go to the left of this 
         */
            switch (hoover.way) {
                case EWay.NORTH:
                    hoover.way = EWay.WEST
                    break;
                case EWay.SOUTH:
                    hoover.way = EWay.EAST
                    break;
                case EWay.EAST:
                    hoover.way = EWay.NORTH
                    break;
                case EWay.WEST:
                    hoover.way = EWay.SOUTH
                    break;
                default:
                    console.log('error-swtich-gauche')
            }
        }
    }

/*
 * we return a error message if the hit a wall 
 */
if(isBroke) return

/*
 * finally we log the last position of the hoover if he do not hit a wall
 */
return console.log('final position: ',hoover);
        
}



/*
 * secondary function check if the hoover will hit a wall or not 
 */
export function checkLimitReached(hoover: IHoover,dimension:IGrillDimension){
     switch (hoover.way) {
                case EWay.NORTH:
                    if(hoover.y >= dimension.y - 1 )
                   {
                    console.log('I will crash into the NORTH wall') ;
                    isBroke = true;
                    break;
                    }
                case EWay.SOUTH:
                     if(hoover.y <= 0 )
                   {
                    console.log('I will crash into the SOUTH wall') ;
                    isBroke = true;
                    break;
                    }
                case EWay.EAST:
                    if(hoover.x >= dimension.x - 1 )
                   {
                    console.log('I will crash into the EAST wall') ;
                    isBroke = true;
                    break;
                    }
                case EWay.WEST:
                      if(hoover.x < 0 )
                   {
                    console.log('I will crash into the WEST wall') ;
                    isBroke = true;
                    break;
                    }
                default:
            }
}


/*
 * get input from the user and  ckeck if its on good format  
*/
export function getInput(answer: string){
    let arrAnswer: string[] = answer.split(' ')
    let dimension:IGrillDimension = {
      x: +arrAnswer[0],
      y: +arrAnswer[1]
    }
    let hoover: IHoover = {
     x: +arrAnswer[2],
      y: +arrAnswer[3],
      way:arrAnswer[4]
    }
    if(hoover.x > dimension.x || hoover.y > dimension.y || hoover.x < 0|| hoover.y < 0 || dimension.x < 0 || dimension.y < 0) isOverSize = true;

    let instruction:Array<'A'| 'D' | 'G'>= arrAnswer[5].split('') as Array<'A'| 'D' | 'G'>
    checkInstruction(instruction);
    
    return {dimension,hoover,instruction}
    }
/*
 * check if the instruction contains a foreign character 
 */
    function checkInstruction(instruction: string[]){
        instruction.forEach((element: string) => {
            if( ['A','D','G'].includes(element)) isPure = false;
            else isPure = true;
        });
        return instruction;
    }

