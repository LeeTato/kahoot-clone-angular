import mongoose from 'mongoose';
import type { Player } from '../../shared/models/players.model';
const {Schema, model} = mongoose

const playerSchema = new Schema<Player>({
    username: String,
    passCode:  String,
 
})
export const PlayerModel = model<Player>('Player',playerSchema)
