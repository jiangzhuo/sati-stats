import * as mongoose from 'mongoose';

export const WanderAlbumSchema = new mongoose.Schema({
    favorite: { type: Number, default: 0 },
    buy: { type: Number, default: 0 },
    start: { type: Number, default: 0 },
    finish: { type: Number, default: 0 }
});