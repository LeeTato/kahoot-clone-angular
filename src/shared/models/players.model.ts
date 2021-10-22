

export interface Player{
    _id?:string
    username: string,
    passCode?: string,
    socketId:string,
   
}
export interface IPlayer{
    socketId: string;
    name?:string;
    host?:boolean;
    answer?:any;
    points?:any;
}