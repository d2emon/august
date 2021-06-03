import mongoose, { Schema } from 'mongoose';

const blogSchema = new Schema({
    title: String,
    text: String,
    date: Date,
    author: Schema.Types.ObjectId,
});

/*
locationSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
});
 */

export default mongoose.model('Blog', blogSchema);
