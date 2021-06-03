import mongoose, { Schema } from 'mongoose';

const wikiSchema = new Schema({
    title: String,
    text: String,
});

/*
locationSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
});
 */

export default mongoose.model('Wiki', wikiSchema);
