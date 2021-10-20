import type mongoose from 'mongoose';
export interface Player{
    _id?:{type: mongoose.Types.ObjectId}
    hostId?:string,
    username: string,
    passCode?: string,
    socketId:string,
    ready?:boolean,
   
}
export interface IPlayer{
    socketId: string;
    name?:string;
    host?:boolean;
    answers?:any;
    points?:any;
}