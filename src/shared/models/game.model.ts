import type { Player,IPlayer } from "./players.model";
import type { Questions } from "./questions.model";


export interface Game{
    phaseIndex:number;
    phases:string[];
    players:IPlayer[];
    quiz:Questions[] | null;
}