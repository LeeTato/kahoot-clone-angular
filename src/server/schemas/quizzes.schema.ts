import mongoose from 'mongoose';
import type { Quiz } from '../../shared/models/quizzes.model';
const {Schema, model} = mongoose

const quizzesSchema = new Schema<Quiz>({
    quizId: String,
    title:String,
    
})

export const QuizzModel = model<Quiz>('Quizzes', quizzesSchema)