import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const playerSchema = new Schema({
    username: String,
    passCode: String,
});
export const PlayerModel = model('Player', playerSchema);
//# sourceMappingURL=players.schema.js.map