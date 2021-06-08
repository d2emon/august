import mongoose, { Schema } from 'mongoose';
import randomString from '../helpers/randomString';

const accessTokenSchema = new Schema({
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

export default mongoose.model('AccessToken', accessTokenSchema);
