import type mongoose from 'mongoose';

export interface Quiz{
    _id?:{type: mongoose.Types.ObjectId}
    quizId:string,
    title:string,
  
   
}