import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    username: String,
    password: String,
    name: String,
    patronymic: String,
    surname: String,
    email: String,
    phone: String,
    date: Date,
    group: [String],
});

/*
locationSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
});
 */

export default mongoose.model('User', userSchema);
