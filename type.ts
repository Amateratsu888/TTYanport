/*
 * Declaration of enumérations
 */
 export enum EWay {
    NORTH = 'N',
    SOUTH = 'S',
    EAST = 'E',
    WEST = 'W',
}
export enum EInstruction {
    GAUCHE = 'G',
    DROITE = 'D',
    AVANCE = 'A',
}
/*
 * Declaration of interfaces
 */

 export interface IHoover {
    x: number;
    y: number;
    way: string;
}
export interface IGrillDimension {
    x: number;
    y: number;
}
export interface IWay {
    NORTH : string,
    SOUTH : string,
    EAST : string,
    WEST: string,
}