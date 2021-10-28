import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const questionsSchema = new Schema({
    title: String,
    quizId: String,
    text: String,
    completed: Boolean,
    answers: [
        { text: String, correct: Boolean },
        { text: String, correct: Boolean },
        { text: String, correct: Boolean },
        { text: String, correct: Boolean }
    ]
});
export const QuestionsModel = mongoose.model('Questions', questionsSchema);
//# sourceMappingURL=questions.schemas.js.map