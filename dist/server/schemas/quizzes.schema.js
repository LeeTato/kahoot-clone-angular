import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const quizzesSchema = new Schema({
    quizId: String,
    title: String,
});
export const QuizzModel = model('Quizzes', quizzesSchema);
//# sourceMappingURL=quizzes.schema.js.map