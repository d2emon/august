/**
 * Модель данных в коллекции "Токены обновления"
 */
import mongoose, { Schema } from 'mongoose';
import randomString from "../helpers/randomString";

const refreshTokenSchema = new Schema({
    token: {
        type: String,
        default: randomString,
    },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    created: {
        type: Date,
        default: Date.now
    },
});

export default mongoose.model('RefreshToken', refreshTokenSchema);
