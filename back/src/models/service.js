import mongoose, { Schema } from 'mongoose';

const serviceSchema = new Schema({
    title: String,
    short: String,
    image: String,
    description: String,
});

/*
locationSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
});
 */

export default mongoose.model('Service', serviceSchema);