import mongoose from 'mongoose';
import type { Questions } from '../../shared/models/questions.model';
const { Schema, model} = mongoose;

const questionsSchema = new Schema<Questions>({
    title:String,
     quizId:String,
     text:String,
          completed:Boolean,
            answers:[
                  {text:String, correct:Boolean},
                  {text:String, correct:Boolean},
                  {text:String, correct:Boolean},
                  {text:String, correct:Boolean}

            ]
        
} )

export const QuestionsModel = mongoose.model<Questions>('Questions',questionsSchema)